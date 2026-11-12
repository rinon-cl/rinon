# 08 — Backlog

Estimación: S ≤ medio día · M 1-2 días · L 3-5 días. Rama sugerida entre paréntesis.

| ID | Tarea | Doc | Depende de | Tamaño | Rama |
|---|---|---|---|---|---|
| SEO-00 | GA4 recibiendo datos: merge de `fix/ga4-gtag-arguments-csp` tras etiqueta nativa en GTM | 07 | — | S | ya existe |
| SEO-01 | Decisión Content Signals y cambio en robots.txt + test | 01 | Decisión | S | seo/robots-content-signal |
| SEO-02 | Script `check-metadata.mjs` en CI | 07 | — | S | seo/fase-1 |
| SEO-03 | Script `check-jsonld.mjs` en CI | 02, 07 | — | M | seo/fase-1 |
| SEO-04 | Titles cortos y largos (18) | 06 | SEO-02 | S | seo/fase-1 |
| SEO-05 | Descriptions cortas (7) | 06 | SEO-02 | S | seo/fase-1 |
| SEO-06 | Alt faltantes, contraste, objetivos táctiles | 06 | — | S | seo/fase-1 |
| SEO-07 | Organization: sameAs, geo, horario, image | 02, 05 | Datos de 05 | S | seo/fase-1 |
| SEO-08 | Product + BreadcrumbList en 13 páginas | 02 | SEO-03 | M | seo/fase-1 |
| SEO-09 | Fechas en ResourceArticle + Article completo (16) | 02, 04 | SEO-03 | M | seo/fase-1 |
| SEO-10 | Reescritura de 12 fichas + FAQ (lotes de 4) | 03 | Datos del catálogo | L ×3 | seo/fichas-lote-N |
| SEO-11 | Decisión sobre /camarote-titanic (reescribir o 301 al equivalente) | 03 | Felipe | S | seo/fichas-lote-1 |
| SEO-12 | og:image por pilar y ficha | 06 | — | M | seo/og-images |
| SEO-13 | Respuestas directas 40-60 palabras en las 16 guías | 04 | — | M | seo/recursos-respuestas |
| SEO-14 | HowTo en 6 guías procedimentales | 02, 04 | SEO-03 | M | seo/recursos-howto |
| SEO-15 | Ampliar 8 guías a 1.000-1.500 palabras (lotes de 2) | 04 | — | L ×4 | seo/recursos-lote-N |
| SEO-16 | /nosotros ampliado | 05 | Datos de 05 | M | seo/entidad |
| SEO-17 | /proyectos con datos y fotos autorizadas | 05 | Autorizaciones | M | seo/entidad |
| SEO-18 | Enlaces a redes en footer | 05 | URLs de perfiles | S | seo/entidad |
| SEO-19 | Google Business Profile verificado | 05 | Cuenta rinonspa | S | (fuera del repo) |
| SEO-20 | Primer informe mensual (GSC + GA4 + citas IA) | 07 | SEO-00 | S | (fuera del repo) |

## Orden recomendado

1. SEO-00 y SEO-01 (fase 0).
2. SEO-02 a SEO-09 en un solo PR `seo/fase-1`.
3. SEO-11 y SEO-10 por lotes.
4. SEO-13, SEO-14, SEO-15.
5. SEO-16 a SEO-19 cuando lleguen los datos.
6. SEO-20 al cumplirse 30 días de GA4 con datos.
