import { test, expect } from "@playwright/test";

const expectedId = process.env.RINON_GA_TEST_ID;
const consentKey = "rinon_cookie_consent";

async function isolateMeasurement(page) {
  const requests = [];
  await page.route("**/*", async route => {
    const request = route.request();
    const url = new URL(request.url());
    if (/googletagmanager\.com|google-analytics\.com|clarity\.ms/.test(url.hostname)) {
      requests.push(request.url());
      // Verify loading/configuration without sending test traffic to Google.
      return route.fulfill({ contentType: "application/javascript", body: "" });
    }
    if (url.pathname === "/api/analytics") {
      requests.push(request.url());
      return route.fulfill({ status: 204 });
    }
    return route.continue();
  });
  return requests;
}

async function gaConfigurations(page) {
  return page.evaluate(() => (window.dataLayer || [])
    .filter(item => item[0] === "config")
    .map(item => ({ id: item[1], options: item[2] })));
}

test("GA4 stays unloaded before consent and after rejecting measurement", async ({ page }) => {
  const requests = await isolateMeasurement(page);
  await page.goto("/");
  await expect(page.locator('script[src*="googletagmanager.com"]')).toHaveCount(0);
  if (expectedId) {
    await page.getByRole("button", { name: "Solo necesarias", exact: true }).click();
    await page.reload();
    await expect(page.getByRole("button", { name: "Abrir preferencias de cookies" })).toBeVisible();
  }
  expect(requests).toEqual([]);
  expect(await gaConfigurations(page)).toEqual([]);
});

test("GA4 loads once after consent without enabling other providers or internal writes", async ({ page }) => {
  test.skip(!expectedId, "Requires a build with VERCEL_ENV=production and RINON_GA_TEST_ID.");
  const requests = await isolateMeasurement(page);
  await page.goto("/");
  await page.getByRole("button", { name: "Aceptar medición", exact: true }).click();
  await expect.poll(() => gaConfigurations(page)).toEqual([
    { id: expectedId, options: { page_path: "/", page_title: expect.any(String) } },
  ]);
  await expect.poll(() => requests).toEqual([`https://www.googletagmanager.com/gtag/js?id=${expectedId}`]);
  await page.locator('footer a[href="/contacto"]').click();
  await expect(page).toHaveURL(/\/contacto$/);
  await expect(page.locator("#google-analytics-loader")).toHaveCount(1);
  await expect.poll(() => gaConfigurations(page)).toEqual([
    { id: expectedId, options: { page_path: "/", page_title: expect.any(String) } },
    { id: expectedId, options: { page_path: "/contacto", page_title: expect.any(String) } },
  ]);
  expect(requests).toEqual([`https://www.googletagmanager.com/gtag/js?id=${expectedId}`]);
  expect(await page.evaluate(() => localStorage.getItem("rinon_analytics_visitor"))).toBeNull();
  expect(await page.evaluate(() => sessionStorage.getItem("rinon_attribution_v1"))).toBeNull();
});

test("revoking consent reloads without Google Analytics", async ({ page }) => {
  test.skip(!expectedId, "Requires a build with VERCEL_ENV=production and RINON_GA_TEST_ID.");
  const requests = await isolateMeasurement(page);
  await page.goto("/");
  await page.getByRole("button", { name: "Aceptar medición", exact: true }).click();
  await expect.poll(() => gaConfigurations(page)).toHaveLength(1);
  await expect.poll(() => requests.length).toBe(1);
  await page.getByRole("button", { name: "Abrir preferencias de cookies" }).click();
  const reloaded = page.waitForEvent("load");
  await page.getByRole("button", { name: "Solo necesarias", exact: true }).click();
  await reloaded;
  await expect.poll(() => gaConfigurations(page)).toEqual([]);
  await expect(page.locator('script[src*="googletagmanager.com"]')).toHaveCount(0);
  expect(requests).toHaveLength(1);
  expect(await page.evaluate(key => JSON.parse(localStorage.getItem(key)).value, consentKey)).toBe("necessary");
});

test("preview does not load GA4 even with previously accepted consent", async ({ page }) => {
  test.skip(Boolean(expectedId), "Runs against a preview build.");
  const requests = await isolateMeasurement(page);
  await page.addInitScript(key => localStorage.setItem(key, JSON.stringify({ value: "all" })), consentKey);
  await page.goto("/");
  await expect(page.locator('script[src*="googletagmanager.com"]')).toHaveCount(0);
  expect(await gaConfigurations(page)).toEqual([]);
  expect(requests).toEqual([]);
});
