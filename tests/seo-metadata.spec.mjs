import { test, expect } from "@playwright/test";

// Contrato SEO de metadatos y datos estructurados (docs/seo-geo-aeo/06 y 02).
// Recorre el sitemap del build servido.

const PRODUCT_FICHAS = [
  "/camarote-nido","/camarote-triple","/camarote-doble","/cama-alta","/camarote-titanic","/camarote-1-5-plazas",
  "/camarote-desmontable","/cama-dos-plazas-con-cajon","/camarote-2-plazas","/cama-institucional-metalica",
  "/cama-loft-metalica","/cama-loft-con-escritorio","/mobiliario-institucional",
];
const INTERNAL_COPY = /p[aá]gina de continuidad|p[aá]gina preservada|referencia hist[oó]rica|conserva una intenci[oó]n comercial|Conservamos esta p[aá]gina/i;

async function sitemapPaths(request) {
  const xml = await (await request.get("/sitemap.xml")).text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
}

function types(node, acc = []) {
  if (Array.isArray(node)) node.forEach((n) => types(n, acc));
  else if (node && typeof node === "object") {
    const t = node["@type"]; if (t) acc.push(...[].concat(t));
    Object.values(node).forEach((v) => types(v, acc));
  }
  return acc;
}

test("cada URL del sitemap tiene title 40-65, description 120-160, canonical y JSON-LD válido", async ({ request }) => {
  const paths = await sitemapPaths(request);
  expect(paths.length).toBeGreaterThan(40);
  const problems = [];
  for (const path of paths) {
    const html = await (await request.get(path)).text();
    const title = (html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "").replace(/&amp;/g, "&");
    const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "";
    const decoded = desc.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;/g, "'");
    if (title.length < 40 || title.length > 65) problems.push(`${path}: title ${title.length} "${title}"`);
    if (decoded.length < 120 || decoded.length > 160) problems.push(`${path}: description ${decoded.length}`);
    if (!/<link rel="canonical" href="https:\/\/rinon\.cl/.test(html)) problems.push(`${path}: sin canonical`);
    for (const block of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      let data; try { data = JSON.parse(block[1]); } catch { problems.push(`${path}: JSON-LD inválido`); continue; }
      const all = types(data);
      if (all.includes("Offer") || all.includes("Review") || all.includes("AggregateRating")) problems.push(`${path}: offers/review sin fuente`);
    }
  }
  expect(problems, problems.join("\n")).toEqual([]);
});

test("las fichas de producto declaran Product, BreadcrumbList y FAQPage, sin copy interno", async ({ request }) => {
  for (const path of PRODUCT_FICHAS) {
    const html = await (await request.get(path)).text();
    const all = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].flatMap((b) => types(JSON.parse(b[1])));
    for (const t of ["Product", "BreadcrumbList", "FAQPage"]) expect(all, `${path} debe declarar ${t}`).toContain(t);
    const text = html.replace(/<script[\s\S]*?<\/script>/g, "").replace(/<[^>]+>/g, " ");
    expect(text, `${path} no debe mostrar copy interno`).not.toMatch(INTERNAL_COPY);
  }
});

test("robots.txt declara Content-Signal con ai-input=yes y ai-train=no", async ({ request }) => {
  const txt = await (await request.get("/robots.txt")).text();
  expect(txt.split("\n")[0]).toBe("Content-Signal: ai-train=no, search=yes, ai-input=yes");
});
