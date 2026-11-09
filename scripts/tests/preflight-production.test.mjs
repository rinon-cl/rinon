import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = fileURLToPath(new URL("../../", import.meta.url));

function run(overrides = {}) {
  const env = { ...process.env };
  for (const key of Object.keys(env)) {
    if (key.startsWith("RINON_") || key === "VERCEL_ENV") delete env[key];
  }
  return spawnSync(process.execPath, ["scripts/preflight-production.mjs"], {
    cwd: root, env: { ...env, ...overrides }, encoding: "utf8",
  });
}

const production = {
  VERCEL_ENV: "production", RINON_INDEXABLE: "true", RINON_PRODUCTION_TRACKING_ENABLED: "true",
};

test("production rejects missing indexation and tracking", () => {
  const result = run({ VERCEL_ENV: "production" });
  assert.equal(result.status, 1);
  assert.match(result.stderr, /RINON_INDEXABLE=true is required/);
  assert.match(result.stderr, /RINON_PRODUCTION_TRACKING_ENABLED=true is required/);
});

test("production accepts both required flags without opening other gates", () => {
  const result = run(production);
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /PASSED · POST-CUTOVER PRODUCTION/);
});

for (const flag of ["RINON_INDEXABLE", "RINON_PRODUCTION_TRACKING_ENABLED"]) {
  for (const value of ["false", "TRUE", ""]) {
    test(`production rejects ${flag}=${JSON.stringify(value)}`, () => {
      const result = run({ ...production, [flag]: value });
      assert.equal(result.status, 1);
      assert.match(result.stderr, new RegExp(`${flag}=true is required`));
    });
  }
}

for (const flag of ["RINON_ENABLE_MIGRATION_REDIRECTS", "RINON_ENABLE_BLOG_REDIRECTS", "RINON_LEAD_WRITE_ENABLED", "RINON_URL_INVENTORY_COMPLETE"]) {
  test(`production still rejects unauthorized ${flag}`, () => {
    assert.equal(run({ ...production, [flag]: "true" }).status, 1);
  });
}

test("explicit cutover still requires its existing approvals", () => {
  assert.equal(run({ ...production, RINON_CUTOVER_AUTHORIZED: "true" }).status, 1);
});

for (const runtime of [undefined, "preview", "development"]) {
  test(`${runtime ?? "local"} builds pass without production flags`, () => {
    assert.equal(run(runtime ? { VERCEL_ENV: runtime } : {}).status, 0);
  });
  test(`${runtime ?? "local"} builds still reject production flags`, () => {
    assert.equal(run({ ...production, VERCEL_ENV: runtime ?? "" }).status, 1);
  });
}
