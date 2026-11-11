import type { Metadata } from "next";
import { SITE_CONFIG } from "./config";

interface SeoPageData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
}

export function buildMetadata(page: SeoPageData): Metadata {
  const url = page.canonical
    ? `${SITE_CONFIG.seo.baseUrl}${page.canonical}`
    : SITE_CONFIG.seo.baseUrl;

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: SITE_CONFIG.nombre,
      locale: "es_CL",
      type: "website",
      images: page.ogImage ? [{ url: page.ogImage, width: 1200, height: 630 }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

// ─── Metadata por página ───────────────────────────────────────────────────

export const seoPages = {
  home: buildMetadata({
    title: "Rinon.cl | Fábrica de Estructuras Metálicas en Chile — Camarotes, Rejas y Más",
    description: "Fabricamos camarotes metálicos, cierres perimetrales, rejas, portones y estructuras a medida. Servicio de pintura electrostática. Fabricante directo en Santiago, Chile.",
    keywords: [
      "fabrica estructuras metalicas chile",
      "camarotes metalicos santiago",
      "cierres perimetrales santiago",
      "rejas metalicas chile",
      "portones metalicos santiago",
      "pintura electrostatica santiago",
      "estructuras metalicas a medida",
      "fabricante metalico chile",
      "rinon.cl",
    ],
    canonical: "/",
  }),

  categoriaGeneral: buildMetadata({
    title: "Camarotes con Escritorio | Modelos y Precios — Rinon.cl",
    description: "Camarotes con escritorio integrado fabricados en Chile: modelo económico, estándar y full. Cama arriba, escritorio abajo. Despacho en toda la Región Metropolitana.",
    keywords: [
      "camarotes con escritorio",
      "camarote con escritorio chile",
      "cama alta con escritorio",
      "cama loft con escritorio",
      "camarote con escritorio precio",
      "camarote con escritorio santiago",
      "camarote escritorio economico",
      "camarote con escritorio full",
      "camarote con escritorio a medida",
    ],
    canonical: "/camarote-con-escritorio",
  }),

  metalico: buildMetadata({
    title: "Camarote con Escritorio Metálico | Resistente y Económico",
    description: "Camarote metálico con escritorio integrado. Fabricación chilena, estructura de acero resistente. Ideal para estudiantes y dormitorios juveniles. Consulta por WhatsApp.",
    keywords: [
      "camarote con escritorio metálico",
      "camarote metálico con escritorio",
      "camarote metálico estudiante",
      "camarote acero con escritorio",
      "camarote metálico juvenil",
    ],
    canonical: "/camarote-con-escritorio",
  }),

  camaAlta: buildMetadata({
    title: "Cama Alta con Escritorio | Cama Loft con Escritorio Abajo Chile",
    description: "Cama alta con escritorio integrado debajo. También llamada cama loft o cama elevada. Maximiza el espacio de tu pieza. Entrega en Santiago.",
    keywords: [
      "cama alta con escritorio",
      "cama loft con escritorio",
      "cama elevada con escritorio",
      "cama con escritorio abajo",
      "cama loft Chile",
      "cama alta universitaria",
    ],
    canonical: "/cama-alta",
  }),

  camaAlta2Plazas: buildMetadata({
    title: "Cama Alta 2 Plazas con Escritorio | Cama Doble Elevada Chile",
    description: "Cama alta de 2 plazas con escritorio integrado. Mayor confort con cama matrimonial elevada y espacio de trabajo completo debajo.",
    keywords: [
      "cama alta 2 plazas con escritorio",
      "cama loft 2 plazas",
      "cama doble elevada con escritorio",
      "cama alta matrimonial escritorio",
    ],
    canonical: "/camarote-dos-plazas-abajo",
  }),

  aMedida: buildMetadata({
    title: "Camarote con Escritorio a Medida | Diseño Personalizado Santiago",
    description: "Fabricamos tu camarote con escritorio a las medidas exactas de tu espacio. Ideal para departamentos, espacios pequeños y proyectos especiales.",
    keywords: [
      "camarote con escritorio a medida",
      "camarote a medida Santiago",
      "camarote personalizado escritorio",
      "cama alta a medida Chile",
      "camarote medidas especiales",
    ],
    canonical: "/camarote-con-escritorio",
  }),

  premium: buildMetadata({
    title: "Camarote con Escritorio Premium | Máxima Calidad y Diseño",
    description: "Camarote premium con escritorio amplio, cajón y estantes. Acabados superiores para dormitorios modernos, gamer y home office.",
    keywords: [
      "camarote con escritorio premium",
      "camarote premium escritorio",
      "camarote gamer con escritorio",
      "camarote home office",
      "camarote moderno escritorio",
    ],
    canonical: "/camarote-con-escritorio-full",
  }),

  mezzanines: buildMetadata({
    title: "Mezzanines Metálicos | Ampliación de Bodega — Rinon.cl",
    description: "Diseñamos y fabricamos mezzanines metálicos a medida para ampliar tu bodega o taller. Cálculo de carga, montaje e instalación.",
    keywords: ["mezzanine metalico", "mezzanine bodega", "mezzanine industrial"],
    canonical: "/mezzanines-metalicos",
  }),

  escaleras: buildMetadata({
    title: "Escaleras Metálicas a Medida | Rinon.cl",
    description: "Escaleras metálicas para acceso interno y externo: rectas, caracol y soluciones industriales. Fabricación e instalación.",
    keywords: ["escaleras metalicas", "escalera metalica a medida", "escalera industrial"],
    canonical: "/escaleras-metalicas",
  }),

  pergolas: buildMetadata({
    title: "Pérgolas Metálicas a Medida | Rinon.cl",
    description: "Pérgolas y estructuras exteriores en acero para terrazas, patios y locales comerciales. Diseño y fabricación a medida.",
    keywords: ["pergolas metalicas", "pergola metalica", "pergolas terraza"],
    canonical: "/pergolas-metalicas",
  }),

  racks: buildMetadata({
    title: "Racks y Estanterías Metálicas | Rinon.cl",
    description: "Racks metálicos y soluciones de almacenamiento a medida para bodegas, depósitos y logística. Cálculo de cargas y diseño funcional.",
    keywords: ["racks metalicos", "estanterias metalicas", "rack industrial"],
    canonical: "/racks-metalicos",
  }),

  estructuraBodega: buildMetadata({
    title: "Estructuras Metálicas para Bodegas | Rinon.cl",
    description: "Estructuras de acero para bodegas y naves industriales: vigas, marcos, soportes y plataformas diseñadas para tu operación.",
    keywords: ["estructura metalica bodega", "estructura metalica industrial", "estructura para deposito"],
    canonical: "/estructura-metalica-bodega",
  }),

  soportes: buildMetadata({
    title: "Soportes Metálicos y Bases | Rinon.cl",
    description: "Soportes y bases metálicas para maquinaria, equipos y estructuras. Fabricación precisa y soluciones de montaje.",
    keywords: ["soportes metalicos", "bases metalicas", "soporte maquinaria"],
    canonical: "/soportes-metalicos",
  }),

  plataformas: buildMetadata({
    title: "Plataformas Metálicas a Medida | Rinon.cl",
    description: "Plataformas metálicas para trabajo, acceso e instalación industrial. Diseño según carga y normativa.",
    keywords: ["plataformas metalicas", "plataforma metalica a medida", "plataforma industrial"],
    canonical: "/plataformas-metalicas",
  }),

  marquesinas: buildMetadata({
    title: "Marquesinas Metálicas | Coberturas y Accesos — Rinon.cl",
    description: "Marquesinas y coberturas metálicas para entradas, estacionamientos y fachadas. Fabricación y montaje a medida.",
    keywords: ["marquesina metalica", "cobertura metalica", "marquesina a medida"],
    canonical: "/marquesinas-metalicas",
  }),

  cotizar: buildMetadata({
    title: "Cotizar Camarotes y Estructuras Metálicas | Rinon.cl",
    description: "Solicita una cotización de camarotes, estructuras metálicas, portones, rejas, cierres o pintura electrostática. Atención directa por WhatsApp.",
    keywords: ["cotizar estructuras metálicas", "cotizar camarotes", "cotizar portones", "cotizar pintura electrostática"],
    canonical: "/cotizar",
  }),
} as const;
