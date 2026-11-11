@AGENTS.md

# INSTRUCCIONES — RINON.CL

## ⚠️ AISLAMIENTO — LEER PRIMERO
Este es el repositorio exclusivo de **RINON** (`rinon.cl`).
Solo se trabaja código de RINON aquí. Nunca modificar archivos de KySApp, RAPIRENT, BuenosPalCatre, Dumar u otro proyecto.

## ARQUITECTURA
- Next.js App Router + TypeScript + Tailwind CSS
- GitHub → `enrique636/rinon` → Vercel (`prj_7nW12HuitL5rFuVc3MRV7yGbU2xM`)
- Dominio: rinon.cl (configurado en Vercel, pendiente DNS)
- Sin backend — datos en `/lib/products.ts`
- Región Vercel: gru1
- Carpeta local: `/Users/enriquekraiser/rinon.cl`

## ✅ LO QUE YA ESTÁ CONSTRUIDO (no duplicar)
- Sitio base con páginas de producto (camarotes con escritorio, metálico, cama alta, etc.)
- +200 páginas SEO estáticas — cercos RM completo, rejas por comuna, portones, pintura RM
- Expansión de verticales SEO
- Componentes: Header, Footer, WhatsApp flotante, Hero, ProductGrid, Features, FAQ
- Blog SEO, cotizar, contacto

## OBJETIVO
Posicionarse #1 en Google Chile para "camarote con escritorio" y verticales de cercos/rejas.
Generar consultas por WhatsApp — sin precios en pantalla.

## PRINCIPIOS DE DISEÑO
- Simple, rápido, visual — mobile-first
- WhatsApp es el CTA principal — SIEMPRE visible
- Sin contenido corporativo, sin precios
- Cada página = una intención de búsqueda específica

## ESTRUCTURA
- `app/` — páginas (App Router)
- `components/` — layout, sections, ui
- `lib/config.ts` — WhatsApp, teléfono, nombre empresa
- `lib/products.ts` — datos de productos con medidas reales
- `lib/seo.ts` — metadata SEO por página
- `_planning/` — docs de planificación (NO se publican)

## LO QUE CLAUDE NUNCA DEBE HACER
- Crear diseños corporativos fríos
- Agregar formularios con más de 4 campos
- Poner precios en pantalla
- Inventar medidas — solo usar las de `/lib/products.ts`
- Mezclar código de otros proyectos

## CONTINUIDAD MULTIAGENTE

Lee siempre `AI/AGENTS.md`, `AI/WORKFLOW.md`, `AI/TASKS.md`, `AI/DECISIONS.md` y `AI/HANDOFF.md`. Si la persona indica que Codex agotó sus tokens, retoma desde `AI/HANDOFF.md` sin repetir trabajo terminado. Mantén el rol de arquitecto/diseño, entrega implementación repetitiva a Gemini o al Constructor y actualiza el traspaso al finalizar.
