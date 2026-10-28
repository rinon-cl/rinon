export type MattressSizeId = "single" | "single-and-half" | "double" | "king" | "super-king";

export type MattressModel = {
  id: string;
  sourceModel: string;
  name: string;
  family: "Espuma" | "Resortes Bonell" | "Resortes Pocket";
  heightCm: number | null;
  summary: string;
  technology: string;
  construction: readonly string[];
  comfort: "Medio" | "Alto" | "Máximo" | "A definir";
  firmness: "Media" | "Alta" | "Máxima" | "A definir";
  reversible: boolean | null;
  sizes: readonly MattressSizeId[];
  image: string;
  imageAlt: string;
};

export const mattressSizes: ReadonlyArray<{
  id: MattressSizeId;
  name: string;
  dimensions: string;
}> = [
  {id: "single", name: "1 plaza", dimensions: "90 x 190 cm"},
  {id: "single-and-half", name: "1,5 plazas", dimensions: "105 x 190 cm"},
  {id: "double", name: "2 plazas", dimensions: "150 x 190 cm"},
  {id: "king", name: "King", dimensions: "180 x 200 cm"},
  {id: "super-king", name: "Super King", dimensions: "200 x 200 cm"},
] as const;

/**
 * Public names are RINON descriptors. sourceModel keeps the supplier mapping
 * auditable without publishing the supplier's branding or commercial terms.
 */
export const mattressModels: readonly MattressModel[] = [
  {
    id: "colchon-espuma-d28-15",
    sourceModel: "Eco Air",
    name: "Colchón Espuma D28 15 cm",
    family: "Espuma",
    heightCm: 15,
    summary: "Perfil liviano y transportable para camas, camarotes y equipamiento donde se busca una alternativa firme de espuma.",
    technology: "Núcleo de espuma densidad 28",
    construction: ["Espuma densidad 28", "Diseño reversible", "Formato comprimible para transporte"],
    comfort: "Alto",
    firmness: "Alta",
    reversible: true,
    sizes: ["single", "single-and-half", "double"],
    image: "/visuals/product-theatre/colchon-espuma-d28-15-conceptual.webp",
    imageAlt: "Visualización conceptual de colchón de espuma D28 de 15 centímetros",
  },
  {
    id: "colchon-resortes-bonell-21",
    sourceModel: "Eco I",
    name: "Colchón Resortes Bonell 21 cm",
    family: "Resortes Bonell",
    heightCm: 21,
    summary: "Configuración reversible de altura media con núcleo Bonell y terminación acolchada en microfibra.",
    technology: "Resortes Bonell de 15 cm",
    construction: ["Microfibra acolchada por ambas caras", "Espuma D18 de 2 cm por lado", "Borde de espuma aglomerada D60"],
    comfort: "Medio",
    firmness: "Media",
    reversible: true,
    sizes: ["single", "single-and-half", "double"],
    image: "/visuals/product-theatre/colchon-bonell-21-conceptual.webp",
    imageAlt: "Visualización conceptual de colchón con resortes Bonell de 21 centímetros",
  },
  {
    id: "colchon-resortes-bonell-jacquard-22",
    sourceModel: "Eco II / Eco II Plus",
    name: "Colchón Resortes Bonell Jacquard 22 cm",
    family: "Resortes Bonell",
    heightCm: 22,
    summary: "Alternativa reversible con cubierta Jacquard, núcleo Bonell y capas de espuma D21.",
    technology: "Resortes Bonell de 15 cm",
    construction: ["Jacquard acolchado por ambas caras", "Espuma densidad 21 por lado", "Borde de espuma aglomerada D60"],
    comfort: "Alto",
    firmness: "Media",
    reversible: true,
    sizes: ["single", "single-and-half", "double", "king"],
    image: "/visuals/product-theatre/colchon-bonell-jacquard-22-conceptual.webp",
    imageAlt: "Visualización conceptual de colchón Bonell con cubierta Jacquard de 22 centímetros",
  },
  {
    id: "colchon-espuma-invierno-verano-22",
    sourceModel: "Invierno Verano",
    name: "Colchón Espuma Invierno Verano 22 cm",
    family: "Espuma",
    heightCm: 22,
    summary: "Modelo reversible con una superficie de microfibra y otra de Jacquard para elegir la cara de uso.",
    technology: "Núcleo de espuma densidad 21",
    construction: ["Microfibra acolchada en una cara", "Jacquard acolchado en la otra", "Espuma densidad 21"],
    comfort: "Máximo",
    firmness: "Máxima",
    reversible: true,
    sizes: ["single", "single-and-half", "double"],
    image: "/visuals/product-theatre/colchon-invierno-verano-22-conceptual.webp",
    imageAlt: "Visualización conceptual de colchón de espuma reversible invierno verano de 22 centímetros",
  },
  {
    id: "colchon-resortes-bonell-d21-25",
    sourceModel: "Eco 2.0",
    name: "Colchón Resortes Bonell D21 25 cm",
    family: "Resortes Bonell",
    heightCm: 25,
    summary: "Configuración de mayor altura con cubierta Jacquard y cuatro centímetros de espuma D21 por cada cara.",
    technology: "Resortes Bonell de 15 cm",
    construction: ["Jacquard acolchado por ambas caras", "Espuma D21 de 4 cm por lado", "Borde de espuma aglomerada D60"],
    comfort: "Alto",
    firmness: "Alta",
    reversible: true,
    sizes: ["single", "single-and-half", "double", "king", "super-king"],
    image: "/visuals/product-theatre/colchon-bonell-d21-25-conceptual.webp",
    imageAlt: "Visualización conceptual de colchón Bonell con espuma D21 de 25 centímetros",
  },
  {
    id: "colchon-espuma-premium-31",
    sourceModel: "Ecobear Soft",
    name: "Colchón Espuma Premium 31 cm",
    family: "Espuma",
    heightCm: 31,
    summary: "Colchón reversible de perfil alto que combina un núcleo D21 con capas exteriores de espuma D24.",
    technology: "Construcción multicapa de espuma",
    construction: ["Jacquard acolchado por ambas caras", "Espuma D24 de 7,5 cm por lado", "Núcleo de espuma D21 de 14 cm"],
    comfort: "Máximo",
    firmness: "Máxima",
    reversible: true,
    sizes: ["single", "single-and-half", "double", "king", "super-king"],
    image: "/visuals/product-theatre/colchon-espuma-premium-31-conceptual.webp",
    imageAlt: "Visualización conceptual de colchón premium de espuma multicapa de 31 centímetros",
  },
  {
    id: "colchon-resortes-pocket-31",
    sourceModel: "Eco 3",
    name: "Colchón Resortes Pocket 31 cm",
    family: "Resortes Pocket",
    heightCm: 31,
    summary: "Modelo de perfil alto con resortes Pocket para una respuesta más independiente por zona de apoyo.",
    technology: "Resortes Pocket de 20 cm",
    construction: ["Jacquard acolchado por ambas caras", "Espuma D24 de 5 cm por lado", "Borde de espuma aglomerada D60"],
    comfort: "Máximo",
    firmness: "Máxima",
    reversible: true,
    sizes: ["double", "king", "super-king"],
    image: "/visuals/product-theatre/colchon-pocket-31-conceptual.webp",
    imageAlt: "Visualización conceptual de colchón con resortes Pocket de 31 centímetros",
  },
  {
    id: "colchon-resortes-bonell-premium-31",
    sourceModel: "Ecobear Resortes",
    name: "Colchón Resortes Bonell Premium 31 cm",
    family: "Resortes Bonell",
    heightCm: 31,
    summary: "Alternativa reversible de perfil alto con núcleo Bonell y siete centímetros de espuma D24 por cada cara.",
    technology: "Resortes Bonell de 15 cm",
    construction: ["Jacquard acolchado por ambas caras", "Espuma D24 de 7 cm por lado", "Borde de espuma aglomerada D60"],
    comfort: "Máximo",
    firmness: "Máxima",
    reversible: true,
    sizes: ["single", "single-and-half", "double", "king", "super-king"],
    image: "/visuals/product-theatre/colchon-bonell-premium-31-conceptual.webp",
    imageAlt: "Visualización conceptual de colchón Bonell premium de 31 centímetros",
  },
  {
    id: "colchon-espuma-economico-configurable",
    sourceModel: "Colchones de espuma económicos",
    name: "Colchón Espuma Económico Configurable",
    family: "Espuma",
    heightCm: null,
    summary: "Línea práctica para dormitorios, arriendos, residencias estudiantiles y proyectos de equipamiento.",
    technology: "Espuma según configuración disponible",
    construction: ["Densidad a definir", "Altura a definir", "Terminación a confirmar en la cotización"],
    comfort: "A definir",
    firmness: "A definir",
    reversible: null,
    sizes: ["single", "single-and-half", "double"],
    image: "/visuals/product-theatre/colchon-espuma-economico-conceptual.webp",
    imageAlt: "Visualización conceptual de colchón económico de espuma de perfil bajo",
  },
] as const;

export function getMattressSize(sizeId: MattressSizeId) {
  return mattressSizes.find((size) => size.id === sizeId);
}
