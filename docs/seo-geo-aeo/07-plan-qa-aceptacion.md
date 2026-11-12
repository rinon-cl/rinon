# 07 — QA, aceptación y medición

## 7.1 Automático (CI, en cada PR hacia produccion/rinon-v2)

| Check | Herramienta | Falla si |
|---|---|---|
| Lint, typecheck | `npm run lint`, `npm run typecheck` | errores |
| Build y estáticos | `npm run qa:static`, `npm run build`, `npm run qa:served` | errores |
| Navegador | `npm run qa:browser` | algún test falla |
| Analítica | `npm run qa:analytics` | contrato roto |
| JSON-LD | `scripts/check-jsonld.mjs` (nuevo, ver 02) | JSON inválido o reglas de 02 |
| Metadatos | `scripts/check-metadata.mjs` (nuevo) | title fuera de 40-65, description <120, falta canonical u og:image |
| robots.txt | test nuevo | línea Content-Signal distinta a la decisión 01; preview sin `Disallow: /` |
| Redirects | `tests/legacy-redirects.spec.mjs` (existente) | <58 redirects 301 |

## 7.2 Manual en Preview (antes del merge)

- Rich Results Test sobre: una ficha de camarote, una guía con HowTo, la home.
- Lectura de 2 fichas y 2 guías por Felipe: datos correctos, sin textos internos.
- Móvil 390 px y escritorio 1440 px: sin desbordes.

## 7.3 En vivo (después del deploy)

- `curl https://rinon.cl/robots.txt` coincide con la decisión 01.
- `curl https://rinon.cl/sitemap.xml`: todas las URLs 200, ninguna redirigida.
- JSON-LD presente en una ficha y una guía (ver código fuente).
- Lighthouse en la home y en /camarote-nido: SEO, accesibilidad.
- GA4 DebugView: 1 page_view por carga.
- Search Console: "Inspeccionar URL" y "Solicitar indexación" para fichas y guías modificadas.
- Rollback registrado con el deployment ID anterior.

## 7.4 Medición mensual

| Métrica | Fuente | Desglose |
|---|---|---|
| Clics e impresiones | Search Console | fichas, pilares, guías, home |
| Posición media de las 10 consultas objetivo (PRD §5) | Search Console | por consulta |
| Resultados enriquecidos válidos | Search Console → Mejoras | Product, FAQ, Breadcrumb, HowTo |
| Contactos orgánicos (contact_whatsapp, contact_phone, quote_submit_validated) | GA4 | canal Organic Search |
| Citas en IA | Prueba manual en ChatGPT Search, Perplexity y Google (AI Overviews) | 10 consultas objetivo: ¿aparece rinon.cl citado? |

Plantilla de registro de citas IA:

| Mes | Consulta | ChatGPT Search | Perplexity | AI Overviews | Notas |
|---|---|---|---|---|---|
| | | sí/no | sí/no | sí/no | |
