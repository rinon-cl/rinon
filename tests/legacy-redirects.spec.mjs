import { test, expect } from "@playwright/test";

// Fuente de verdad: lib/legacy-redirects.ts (compilado por tsx/ts-node no
// disponible en specs .mjs, así que se lee el archivo y se extraen los pares).
import { readFileSync } from "node:fs";
const src = readFileSync(new URL("../lib/legacy-redirects.ts", import.meta.url), "utf8");
const REDIRECTS = [...src.matchAll(/source:\s*"([^"]+)",\s*destination:\s*"([^"]+)"/g)].map(m => ({ source: m[1], destination: m[2] }));
const PENDING = [...src.slice(src.indexOf("export const LEGACY_PENDING")).matchAll(/"(\/[a-z0-9-]+)"/g)].map(m => m[1]);

test("mapping cuadra: 46 redirects + 12 pendientes = 58 URLs GSC", () => {
  expect(REDIRECTS.length).toBe(46);
  expect(PENDING.length).toBe(12);
  const all = [...REDIRECTS.map(r => r.source), ...PENDING];
  expect(new Set(all).size).toBe(58);
});

test("ningún redirect encadena ni cierra loop", () => {
  const sources = new Set(REDIRECTS.map(r => r.source));
  for (const { source, destination } of REDIRECTS) {
    expect(destination, `${source} apunta a otro origen (cadena)`).not.toBe(source);
    expect(sources.has(destination), `${source} -> ${destination} es cadena`).toBe(false);
  }
});

// Next.js emite 308 con permanent:true. 301 y 308 son ambos permanentes para
// Google y transfieren la señal; se aceptan los dos.
test("cada origen responde redirect permanente al destino documentado, y el destino responde 200", async ({ request }) => {
  for (const { source, destination } of REDIRECTS) {
    const r = await request.get(source, { maxRedirects: 0 });
    expect([301, 308], `${source} debe ser redirect permanente`).toContain(r.status());
    const loc = r.headers()["location"] ?? "";
    expect(loc.replace(/^https?:\/\/[^/]+/, ""), `${source} debe ir a ${destination}`).toBe(destination);
    const d = await request.get(destination, { maxRedirects: 0 });
    expect(d.status(), `${destination} debe existir`).toBe(200);
  }
});

test("las 12 URLs bloqueadas NO se redirigen (siguen 404 hasta decisión)", async ({ request }) => {
  for (const pending of PENDING) {
    const r = await request.get(pending, { maxRedirects: 0 });
    expect([301, 308], `${pending} no debe redirigir sin decisión`).not.toContain(r.status());
  }
});

test("ningún origen redirigido aparece en el sitemap", async ({ request }) => {
  const xml = await (await request.get("/sitemap.xml")).text();
  for (const { source } of REDIRECTS) {
    expect(xml, `${source} no debe estar en sitemap`).not.toContain(`${source}<`);
  }
});
