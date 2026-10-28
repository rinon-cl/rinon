import {test,expect} from "@playwright/test";
import {gotoReady,route} from "./fixtures/routes.mjs";

test("floating bed owns its commercial intent without unverified inclusions",async({page})=>{
 await gotoReady(page,route("/cama-flotante"));
 await expect(page).toHaveTitle(/Cama flotante metálica a medida/i);
 await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href","https://rinon.cl/cama-flotante");
 const main=page.locator("main");
 await expect(main).toContainText("apoyos retraídos");
 await expect(main).toContainText(/no se asumen incluidos/i);
 await expect(main).not.toContainText("$");
});

test("floating bed visuals remain explicitly conceptual",async({page})=>{
 await gotoReady(page,route("/cama-flotante"));
 const gallery=page.locator(".product-visual-gallery");
 await expect(gallery.locator('[data-visual-provenance="conceptual"]')).toHaveCount(2);
 await expect(gallery).toContainText("visualización conceptual");
 await expect(gallery).toContainText("recreación conceptual");
});
