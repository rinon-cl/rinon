import {test,expect} from "@playwright/test";
import {gotoReady,route} from "./fixtures/routes.mjs";

const variants=[
 "Colchón Espuma D28 15 cm",
 "Colchón Resortes Bonell 21 cm",
 "Colchón Resortes Bonell Jacquard 22 cm",
 "Colchón Espuma Invierno Verano 22 cm",
 "Colchón Resortes Bonell D21 25 cm",
 "Colchón Espuma Premium 31 cm",
 "Colchón Resortes Pocket 31 cm",
 "Colchón Resortes Bonell Premium 31 cm",
 "Colchón Espuma Económico Configurable",
];

test("colchones publishes all nine configurations without supplier prices or branding",async({page})=>{
 await gotoReady(page,route("/colchones"));
 await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href","https://rinon.cl/colchones");
 await expect(page).toHaveTitle(/Colchones de espuma y resortes/i);
 const main=page.locator("main");
 for(const variant of variants)await expect(main).toContainText(variant);
 await expect(main).not.toContainText("$");
 await expect(main).not.toContainText("Yolé");
 await expect(main).not.toContainText("precio neto",{ignoreCase:true});
 await expect(main).not.toContainText("insomnio",{ignoreCase:true});
 await expect(main).not.toContainText("dolor de espalda",{ignoreCase:true});
 const schema=(await main.locator('script[type="application/ld+json"]').allTextContents()).join("\n");
 expect(schema).toContain('"@type":"CollectionPage"');
 expect(schema).toContain('"@type":"ItemList"');
 expect(schema).toContain('"numberOfItems":9');
 for(const variant of variants)expect(schema).toContain(variant);
});

test("colchones uses two explicit conceptual product visuals",async({page})=>{
 await gotoReady(page,route("/colchones"));
 const gallery=page.locator(".product-visual-gallery");
 await expect(gallery).toBeVisible();
 const figures=gallery.locator('[data-visual-provenance="conceptual"]');
 await expect(figures).toHaveCount(2);
 for(const figure of await figures.all()){
  const image=figure.locator("img");
  await expect(image).toHaveJSProperty("complete",true);
  await expect(image).not.toHaveJSProperty("naturalWidth",0);
 }
 await expect(gallery).toContainText("referencia conceptual");
 await expect(gallery).toContainText("No corresponde");
});

test("each mattress model has a conceptual image, technical fields and supported sizes",async({page})=>{
 await gotoReady(page,route("/colchones"));
 const cards=page.locator(".rinon-mattress-model");
 await expect(cards).toHaveCount(9);
 const images=cards.locator('figure[data-visual-provenance="conceptual"] img');
 await expect(images).toHaveCount(9);
 for(const image of await images.all()){
  await image.scrollIntoViewIfNeeded();
  await expect(image).toHaveJSProperty("complete",true);
  await expect(image).not.toHaveJSProperty("naturalWidth",0);
 }
 await expect(cards.nth(0)).toContainText("Espuma densidad 28");
 await expect(cards.nth(5)).toContainText("Espuma D24 de 7,5 cm por lado");
 await expect(cards.nth(6)).toContainText("Resortes Pocket de 20 cm");
 await expect(cards.nth(8)).toContainText("Altura a definir");
 const sizeTable=page.locator(".rinon-mattress-size-table");
 for(const text of ["90 x 190 cm","105 x 190 cm","150 x 190 cm","180 x 200 cm","200 x 200 cm"]){await expect(sizeTable).toContainText(text)}
});

test("quote flow preserves the selected mattress and supports all catalog sizes",async({page})=>{
 await page.goto("/cotizar?category=colchones&detail=colchon-resortes-pocket-31",{waitUntil:"domcontentloaded"});
 await expect(page.locator('select[name="categoria"]')).toHaveValue("colchones");
 await expect(page.locator('select[name="modelo_referencia"]')).toHaveValue("Colchón Resortes Pocket 31 cm");
 await expect(page.locator('select[name="tipo_colchon"]')).toBeVisible();
 await expect(page.locator('select[name="tipo_colchon"]')).toHaveValue("Resortes Pocket");
 const sizes=await page.locator('select[name="formato_colchon"] option').allTextContents();
 expect(sizes).toEqual(expect.arrayContaining(["1 plaza","1,5 plazas","2 plazas","King","Super King"]));
});
