type VisualBase = {
  src: string;
  alt: string;
  kind: "photo" | "conceptual" | "render";
  label: string;
  note?: string;
  sourceWidth?: number;
  sourceHeight?: number;
  /** Human-auditable origin for the asset. Never use a vague label such as "internal". */
  sourceRef: string;
};

type VerifiedRinonVisual = VisualBase & {
  provenance: "verified-rinon";
  /** Required before an image can be presented as verified RINON evidence. */
  verificationRef: string;
};

type OwnerPhotoVisual = VisualBase & {
  provenance: "owner-photo";
  /** Owner confirmation tying the image to a RINON-made product. */
  verificationRef: string;
};

type ReferenceVisual = VisualBase & {
  provenance: "current-site-approved" | "user-drive-reference" | "sister-brand-product" | "conceptual";
  verificationRef?: never;
};

export type VisualAsset = VerifiedRinonVisual | OwnerPhotoVisual | ReferenceVisual;

/**
 * Production cutover is blocked while these release-level visual requirements remain.
 * Remove an ID only after the replacement asset is integrated, provenance-registered,
 * dimension-gated and visually accepted on desktop/tablet/mobile.
 */
export const VISUAL_CUTOVER_BLOCKERS=[
  "home-hero-final-master",
  "structures-residential-final-master",
] as const;

const referenceBase = "/visuals/reference-current";

/**
 * Visual provenance is intentionally conservative:
 * - verified-rinon: only when RINON ownership/project attribution is independently verified;
 *   TypeScript requires an explicit verificationRef before that provenance can be used.
 * - owner-photo: product photography made by the owner and confirmed as a RINON product;
 *   it does not identify a client, project or installation site.
 * - sister-brand-product: catalogue photography of the same physical product, published by
 *   Buenos Pal Catre (buenospalcatre.cl), the owner's sister brand and the same company.
 *   It documents the product, never a client, project or installation site. Only unbranded
 *   frames are used: the 2020-2021 studio series carries a buenospalcatre.cl watermark and
 *   is therefore not usable here.
 * - user-drive-reference: product or architectural reference imagery found in the user's archive;
 *   never attributed to a client/project without further evidence.
 * - current-site-approved: reference imagery inherited from the current public site.
 * - conceptual: art-direction imagery, always labelled as conceptual.
 *
 * sourceRef is required for every asset so provenance can be audited without relying on memory.
 */
const archiveReferenceAssets: Record<string, VisualAsset[]> = {
  "/camarotes": [
    {
      src: "/visuals/archive/camarote-product-reference.webp",
      alt: "Camarote metálico negro de una plaza en referencia de producto",
      kind: "photo",
      provenance: "user-drive-reference",
      label: "Referencia de producto · archivo",
      note: "Fotografía de producto proveniente del archivo del usuario. No se atribuye a un cliente o proyecto específico.",
      sourceRef: "Google Drive archive · promoted under RINON-VIS-P1-BUNK-ARCHIVE",
      sourceWidth: 1200,
      sourceHeight: 900,
    },
  ],
  "/camas-balinesas": [
    {
      src: "/visuals/archive/cama-balinesa-product-reference.webp",
      alt: "Cama balinesa con estructura metálica negra, cortinas claras y respaldo inclinado en exterior",
      kind: "photo",
      provenance: "owner-photo",
      label: "Cama balinesa metálica para exterior",
      note: "Medidas, terminación, cubierta y textiles se definen según el espacio.",
      sourceRef: "User-supplied attachment · IMG_5388.HEIC · RINON-VIS-P1-BALINESE-BED-ARCHIVE",
      verificationRef: "Owner confirmation · 2026-09-21 · own iPhone photo of RINON-made product",
      sourceWidth: 2200,
      sourceHeight: 1650,
    },
    {
      src: "/visuals/archive/cama-balinesa-angle-reference.webp",
      alt: "Vista lateral de cama balinesa con estructura metálica negra y cortinas claras en jardín",
      kind: "photo",
      provenance: "owner-photo",
      label: "Vista de estructura y sombra",
      sourceRef: "User-supplied attachment · IMG_5387.HEIC · RINON-VIS-P1-BALINESE-BED-ANGLE",
      verificationRef: "Owner confirmation · 2026-09-21 · own iPhone photo of RINON-made product",
      sourceWidth: 2200,
      sourceHeight: 1650,
    },
    {
      src: "/visuals/archive/cama-balinesa-front-reference.webp",
      alt: "Vista frontal de cama balinesa metálica negra con textiles claros en exterior",
      kind: "photo",
      provenance: "owner-photo",
      label: "Proporción completa en exterior",
      sourceRef: "User-supplied attachment · IMG_5384.HEIC · RINON-VIS-P1-BALINESE-BED-FRONT",
      verificationRef: "Owner confirmation · 2026-09-21 · own iPhone photo of RINON-made product",
      sourceWidth: 1800,
      sourceHeight: 2400,
    },
  ],
  // /estructuras-metalicas no tiene referencia de archivo utilizable.
  // structures-residential-reference.webp (COBERTIZO SALA.jpg) es un render de
  // interiorismo: mesa de comedor, sillas y muro vegetal. No contiene ninguna
  // estructura metálica, así que contradecía el enunciado del bloque
  // ("cobertizos, pérgolas, escaleras, plataformas"). Ningún encuadre lo salva.
  // Hasta que exista un visual que muestre la estructura, la ruta cae al visual
  // conceptual, que sí muestra estructura metálica y queda etiquetado como tal.
};

const catalogProductAssets: Record<string, VisualAsset[]> = {
  "/camarote-con-escritorio": [
    {
      src: "/visuals/catalog/camarote-escritorio-ambiente.webp",
      alt: "Camarote metálico negro con escritorio y estantes instalado en un dormitorio",
      kind: "photo",
      provenance: "sister-brand-product",
      label: "Producto de catálogo · marca hermana",
      note: "Fotografía de catálogo del mismo producto, publicada por Buenos Pal Catre. Documenta el producto y su escala en un dormitorio; no identifica cliente, obra ni instalación contratada.",
      sourceRef: "buenospalcatre.cl · Camarote Con Escritorio y Estante · RINON-VIS-P1-DESK-BUNK-CATALOG",
      sourceWidth: 1200,
      sourceHeight: 1600,
    },
  ],
  "/cama-loft-con-escritorio": [
    {
      src: "/visuals/catalog/cama-loft-escritorio-ambiente.webp",
      alt: "Cama loft metálica con escritorio bajo la estructura en un dormitorio",
      kind: "photo",
      provenance: "sister-brand-product",
      label: "Producto de catálogo · marca hermana",
      note: "Fotografía de catálogo del mismo producto, publicada por Buenos Pal Catre. Documenta la configuración loft con escritorio; no identifica cliente ni proyecto.",
      sourceRef: "buenospalcatre.cl · Cama Loft Con Escritorio · RINON-VIS-P1-LOFT-DESK-CATALOG",
      sourceWidth: 1200,
      sourceHeight: 1600,
    },
  ],
  "/camas-metalicas": [
    {
      src: "/visuals/catalog/cama-industrial-ambiente.webp",
      alt: "Cama metálica industrial de dos plazas con base flotante en un dormitorio",
      kind: "photo",
      provenance: "sister-brand-product",
      label: "Producto de catálogo · marca hermana",
      note: "Fotografía de catálogo del mismo producto, publicada por Buenos Pal Catre. Documenta terminación y proporción; no identifica cliente ni obra.",
      sourceRef: "buenospalcatre.cl · Cama Matrimonial dos plazas FLOTANTE · RINON-VIS-P1-INDUSTRIAL-BED-CATALOG",
      sourceWidth: 1280,
      sourceHeight: 1600,
    },
  ],
};

const conceptualAssets: Record<string, VisualAsset[]> = {
  "/cama-flotante": [
    {
      src: "/visuals/product-theatre/cama-flotante-terminada-conceptual.webp",
      alt: "Visualización conceptual de cama flotante metálica negra con respaldo tapizado gris",
      kind: "conceptual",
      provenance: "conceptual",
      label: "Producto terminado · visualización conceptual",
      note: "Recreación conceptual basada en el bastidor aportado por el propietario. No corresponde a un proyecto ejecutado por RINON. Respaldo, colchón, textiles e iluminación son referencias de ambiente y no se presumen incluidos.",
      sourceRef: "OpenAI image edit · user-supplied floating-bed frame and bedroom references · RINON-VIS-P1-FLOATING-BED-FINISHED-CONCEPTUAL",
      sourceWidth: 1536,
      sourceHeight: 1152,
    },
    {
      src: "/visuals/product-theatre/cama-flotante-bastidor-conceptual.webp",
      alt: "Recreación conceptual del bastidor metálico de una cama flotante en taller",
      kind: "conceptual",
      provenance: "conceptual",
      label: "Bastidor en taller · recreación conceptual",
      note: "Imagen mejorada mediante generación a partir de una fotografía aportada por el propietario. No corresponde a un proyecto ejecutado por RINON y no reemplaza un plano ni una fotografía documental del bastidor real.",
      sourceRef: "OpenAI image edit · user-supplied workshop screenshot · RINON-VIS-P1-FLOATING-BED-FRAME-CONCEPTUAL",
      sourceWidth: 1536,
      sourceHeight: 1152,
    },
  ],
  "/colchones": [
    {
      src: "/visuals/product-theatre/colchon-resortes-conceptual.webp",
      alt: "Colchón de resortes con cubierta blanca acolchada y costados grises en vista de catálogo",
      kind: "conceptual",
      provenance: "conceptual",
      label: "Colchón de resortes · referencia conceptual",
      note: "Imagen conceptual para mostrar el tipo de producto. No corresponde a una fotografía de inventario ni a un proyecto ejecutado por RINON.",
      sourceRef: "OpenAI image generation · RINON-VIS-P1-SPRING-MATTRESS-CONCEPTUAL · visual direction informed by supplier catalogue, not copied",
      sourceWidth: 1536,
      sourceHeight: 1152,
    },
    {
      src: "/visuals/product-theatre/colchon-espuma-conceptual.webp",
      alt: "Colchón de espuma de perfil bajo con cubierta blanca y costados grises en vista de catálogo",
      kind: "conceptual",
      provenance: "conceptual",
      label: "Colchón de espuma · referencia conceptual",
      note: "Imagen conceptual para diferenciar la línea de espuma. No corresponde a una fotografía de inventario ni a un proyecto ejecutado por RINON.",
      sourceRef: "OpenAI image generation · RINON-VIS-P1-FOAM-MATTRESS-CONCEPTUAL · visual direction informed by supplier catalogue, not copied",
      sourceWidth: 1536,
      sourceHeight: 1152,
    },
  ],
  "/camarotes": [
    {
      src: "/visuals/product-theatre/camarote-conceptual.webp",
      alt: "Visual conceptual de camarote metálico",
      kind: "conceptual",
      provenance: "conceptual",
      label: "Visual conceptual de producto",
      note: "Dirección de producto para explicar configuración y proporción. No corresponde a un proyecto ejecutado por RINON.",
      sourceRef: "RINON conceptual art direction · RINON-VIS-P1-BUNK",
      sourceWidth: 900,
      sourceHeight: 534,
    },
  ],
  "/cierres-perimetrales": [
    {
      src: "/visuals/product-theatre/cierre-conceptual.webp",
      alt: "Visual conceptual de cierre metálico modular",
      kind: "conceptual",
      provenance: "conceptual",
      label: "Visual conceptual de sistema",
      note: "Dirección de producto para explicar modulación y proporción. No corresponde a un proyecto ejecutado por RINON.",
      sourceRef: "RINON conceptual art direction · RINON-VIS-P1-FENCE",
      sourceWidth: 900,
      sourceHeight: 537,
    },
  ],
  "/estructuras-metalicas": [
    {
      src: "/visuals/product-theatre/estructura-conceptual.webp",
      alt: "Visual conceptual de estructura metálica modular",
      kind: "conceptual",
      provenance: "conceptual",
      label: "Visual conceptual de estructura",
      note: "Referencia de dirección visual; no corresponde a una obra ejecutada por RINON. Geometría y solución final se definen según el requerimiento real.",
      sourceRef: "RINON conceptual art direction · RINON-VIS-P0-HOME-STRUCTURE-TEMP · replacement brief docs/STRUCTURES_VISUAL_BRIEF.md",
      sourceWidth: 900,
      sourceHeight: 500,
    },
  ],
};

export const mattressModelVisuals: readonly VisualAsset[] = [
  {
    src: "/visuals/product-theatre/colchon-espuma-d28-15-conceptual.webp",
    alt: "Visualización conceptual de colchón de espuma D28 de 15 centímetros",
    kind: "conceptual",
    provenance: "conceptual",
    label: "Espuma D28 15 cm · visualización conceptual",
    note: "Imagen original de catálogo para explicar el tipo de producto. No corresponde a una fotografía de inventario ni a un producto ejecutado por RINON.",
    sourceRef: "OpenAI image generation · RINON-VIS-P1-MATTRESS-FOAM-D28-15 · art direction informed by supplier specifications, not copied",
    sourceWidth: 1448,
    sourceHeight: 1086,
  },
  {
    src: "/visuals/product-theatre/colchon-bonell-21-conceptual.webp",
    alt: "Visualización conceptual de colchón con resortes Bonell de 21 centímetros",
    kind: "conceptual",
    provenance: "conceptual",
    label: "Bonell 21 cm · visualización conceptual",
    note: "Imagen original de catálogo para explicar el tipo de producto. No corresponde a una fotografía de inventario ni a un producto ejecutado por RINON.",
    sourceRef: "OpenAI image generation · RINON-VIS-P1-MATTRESS-BONELL-21 · art direction informed by supplier specifications, not copied",
    sourceWidth: 1448,
    sourceHeight: 1086,
  },
  {
    src: "/visuals/product-theatre/colchon-bonell-jacquard-22-conceptual.webp",
    alt: "Visualización conceptual de colchón Bonell con cubierta Jacquard de 22 centímetros",
    kind: "conceptual",
    provenance: "conceptual",
    label: "Bonell Jacquard 22 cm · visualización conceptual",
    note: "Imagen original de catálogo para explicar el tipo de producto. No corresponde a una fotografía de inventario ni a un producto ejecutado por RINON.",
    sourceRef: "OpenAI image generation · RINON-VIS-P1-MATTRESS-BONELL-JACQUARD-22 · art direction informed by supplier specifications, not copied",
    sourceWidth: 1448,
    sourceHeight: 1086,
  },
  {
    src: "/visuals/product-theatre/colchon-invierno-verano-22-conceptual.webp",
    alt: "Visualización conceptual de colchón de espuma reversible invierno verano de 22 centímetros",
    kind: "conceptual",
    provenance: "conceptual",
    label: "Invierno Verano 22 cm · visualización conceptual",
    note: "Imagen original de catálogo para explicar las dos superficies. No corresponde a una fotografía de inventario ni a un producto ejecutado por RINON.",
    sourceRef: "OpenAI image generation · RINON-VIS-P1-MATTRESS-WINTER-SUMMER-22 · art direction informed by supplier specifications, not copied",
    sourceWidth: 1448,
    sourceHeight: 1086,
  },
  {
    src: "/visuals/product-theatre/colchon-bonell-d21-25-conceptual.webp",
    alt: "Visualización conceptual de colchón Bonell con espuma D21 de 25 centímetros",
    kind: "conceptual",
    provenance: "conceptual",
    label: "Bonell D21 25 cm · visualización conceptual",
    note: "Imagen original de catálogo para explicar el tipo de producto. No corresponde a una fotografía de inventario ni a un producto ejecutado por RINON.",
    sourceRef: "OpenAI image generation · RINON-VIS-P1-MATTRESS-BONELL-D21-25 · art direction informed by supplier specifications, not copied",
    sourceWidth: 1448,
    sourceHeight: 1086,
  },
  {
    src: "/visuals/product-theatre/colchon-espuma-premium-31-conceptual.webp",
    alt: "Visualización conceptual de colchón premium de espuma multicapa de 31 centímetros",
    kind: "conceptual",
    provenance: "conceptual",
    label: "Espuma Premium 31 cm · visualización conceptual",
    note: "Imagen original de catálogo para explicar el tipo de producto. No corresponde a una fotografía de inventario ni a un producto ejecutado por RINON.",
    sourceRef: "OpenAI image generation · RINON-VIS-P1-MATTRESS-FOAM-PREMIUM-31 · art direction informed by supplier specifications, not copied",
    sourceWidth: 1448,
    sourceHeight: 1086,
  },
  {
    src: "/visuals/product-theatre/colchon-pocket-31-conceptual.webp",
    alt: "Visualización conceptual de colchón con resortes Pocket de 31 centímetros",
    kind: "conceptual",
    provenance: "conceptual",
    label: "Pocket 31 cm · visualización conceptual",
    note: "Imagen original de catálogo para explicar el tipo de producto. No corresponde a una fotografía de inventario ni a un producto ejecutado por RINON.",
    sourceRef: "OpenAI image generation · RINON-VIS-P1-MATTRESS-POCKET-31 · art direction informed by supplier specifications, not copied",
    sourceWidth: 1448,
    sourceHeight: 1086,
  },
  {
    src: "/visuals/product-theatre/colchon-bonell-premium-31-conceptual.webp",
    alt: "Visualización conceptual de colchón Bonell premium de 31 centímetros",
    kind: "conceptual",
    provenance: "conceptual",
    label: "Bonell Premium 31 cm · visualización conceptual",
    note: "Imagen original de catálogo para explicar el tipo de producto. No corresponde a una fotografía de inventario ni a un producto ejecutado por RINON.",
    sourceRef: "OpenAI image generation · RINON-VIS-P1-MATTRESS-BONELL-PREMIUM-31 · art direction informed by supplier specifications, not copied",
    sourceWidth: 1448,
    sourceHeight: 1086,
  },
  {
    src: "/visuals/product-theatre/colchon-espuma-economico-conceptual.webp",
    alt: "Visualización conceptual de colchón económico de espuma de perfil bajo",
    kind: "conceptual",
    provenance: "conceptual",
    label: "Espuma Económico · visualización conceptual",
    note: "Imagen original de catálogo para explicar el tipo de producto. No corresponde a una fotografía de inventario ni a un producto ejecutado por RINON.",
    sourceRef: "OpenAI image generation · RINON-VIS-P1-MATTRESS-FOAM-ECONOMY · art direction informed by supplier specifications, not copied",
    sourceWidth: 1448,
    sourceHeight: 1086,
  },
] as const;

const legacyReferenceAssets: Record<string, VisualAsset[]> = {
  "/camarotes": [
    {
      src: `${referenceBase}/cama-institucional-gris-individual-y-camarote.jpg`,
      alt: "Cama metálica individual y camarote en configuración institucional",
      kind: "photo",
      provenance: "current-site-approved",
      label: "Producto / referencia actual",
      note: "Imagen del sitio RINON actual. No se atribuye a un cliente o proyecto específico.",
      sourceRef: "Current public rinon.cl reference library",
    },
    {
      src: `${referenceBase}/camarote-desmontable-dormitorio-compartido.jpg`,
      alt: "Camarote metálico desmontable en dormitorio compartido",
      kind: "photo",
      provenance: "current-site-approved",
      label: "Producto / referencia actual",
      sourceRef: "Current public rinon.cl reference library",
    },
  ],
  "/camarote-con-escritorio": [],
};

export function allowLegacyReferenceImages() {
  return process.env.RINON_ALLOW_LEGACY_REFERENCE_IMAGES === "true";
}

export function getArchiveReferenceVisuals(slug: string): VisualAsset[] {
  return archiveReferenceAssets[slug] ?? [];
}

function getCatalogProductVisuals(slug: string): VisualAsset[] {
  return catalogProductAssets[slug] ?? [];
}

export function getConceptualVisuals(slug: string): VisualAsset[] {
  return conceptualAssets[slug] ?? [];
}

export function getLegacyReferenceVisuals(slug: string): VisualAsset[] {
  if (!allowLegacyReferenceImages()) return [];
  return legacyReferenceAssets[slug] ?? [];
}

export function getVisuals(slug: string): VisualAsset[] {
  return [...getArchiveReferenceVisuals(slug), ...getCatalogProductVisuals(slug), ...getLegacyReferenceVisuals(slug), ...getConceptualVisuals(slug)];
}

/**
 * La fotografía manda. Una categoría tiene evidencia fotográfica cuando existe
 * una foto verificada, una referencia de archivo utilizable o una fotografía de
 * catálogo de la marca hermana. Sin eso, la página declara qué fabrica RINON
 * (lib/fabrication-spec.ts) en vez de rellenar el hueco con un conceptual.
 */
export function hasPhotographicEvidence(slug: string): boolean {
  return getVisuals(slug).some(
    (asset) =>
      asset.provenance === "verified-rinon" ||
      asset.provenance === "owner-photo" ||
      asset.provenance === "user-drive-reference" ||
      asset.provenance === "sister-brand-product",
  );
}

export function getReferencePhotos(slug: string): VisualAsset[] {
  return [...getArchiveReferenceVisuals(slug), ...getLegacyReferenceVisuals(slug)].filter((asset) => asset.kind === "photo");
}
