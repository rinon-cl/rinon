# PRD — Visibilidad en búsqueda tradicional, con IA y en respuestas directas

| Campo | Valor |
|---|---|
| Producto | rinon.cl (Next.js 16.4.5 en Vercel) |
| Dueño | Felipe Valverde |
| Sponsor | Enrique Kraiser |
| Fecha | 2026-11-12 |
| Estado | Borrador para aprobación |
| Fuente | Auditoría SEO/GEO/AEO del 2026-11-12 (SEO 8/10 · GEO 5/10 · AEO 7/10) |

## 1. Problema

rinon.cl tiene una base técnica sólida (59 URLs indexables, canonical y titles únicos,
58 redirects 301, schema de negocio local en todo el sitio, Lighthouse 91 móvil / 100 escritorio),
pero pierde visibilidad por tres causas:

1. **Bloqueo explícito a la IA.** `robots.txt` declara `Content-Signal: ai-train=no, search=yes, ai-input=no`
   (`app/robots.txt/route.ts:17`). `ai-input=no` pide que el contenido no se use para generar respuestas
   en buscadores con IA. Además Google no reconoce la línea y Lighthouse marca el archivo como inválido.
2. **Contenido delgado en fichas de producto.** 12 fichas de camas y camarotes tienen 354-407 palabras,
   la misma plantilla, sin schema Product, Breadcrumb ni FAQ, y textos internos visibles como
   "página de continuidad" o "Página preservada".
3. **Señales de entidad y frescura débiles.** Sin `sameAs` ni enlaces a redes, sin fechas en las 16 guías,
   sin autores, sin prueba social con datos, pocas cifras citables.

## 2. Objetivos

| # | Objetivo | Métrica | Línea base (12-nov) | Meta (90 días) |
|---|---|---|---|---|
| O1 | Ser citable por buscadores con IA | Decisión 01 aplicada; robots.txt válido en Lighthouse | ai-input=no; 1 error | Decisión registrada; 0 errores |
| O2 | Fichas de producto competitivas | Palabras útiles por ficha; páginas con Product schema | 354-407; 1 página (/colchones) | ≥700; 13+ páginas |
| O3 | Contenido citable y fresco | Guías con fecha y ≥1.000 palabras | 0 de 16 | 16 de 16 con fecha; 8 de 16 ampliadas |
| O4 | Entidad clara | `sameAs` en Organization; perfiles enlazados | 0 | ≥3 perfiles verificados |
| O5 | Respuestas directas | Páginas con FAQPage; guías con HowTo | 24; 0 | 30+; 6+ |
| O6 | Impacto de negocio | Clics orgánicos (GSC); contactos WhatsApp/teléfono atribuidos a orgánico (GA4) | Pendiente: medir con GA4 ya corregido | +25 % sobre la línea base del primer mes medido |

O6 depende de que GA4 reciba datos (rama `fix/ga4-gtag-arguments-csp` + etiqueta nativa en GTM-WRZ3ZD8J).
Sin eso no hay línea base y la meta no se puede evaluar.

## 3. Fuera de alcance

- Cambiar dominio, DNS, plan de Vercel o integración Git.
- Publicar precios, ofertas, reseñas o testimonios no verificados.
- Activar persistencia de leads (sigue el fallback a WhatsApp).
- Campañas pagadas y backlinks pagados.
- Prometer posiciones o un puntaje de Lighthouse como resultado de negocio.

## 4. Requisitos

### R1 — Señales de uso por IA (bloqueante, ver 01)
- R1.1 Registrar la decisión de negocio sobre `ai-input` y `ai-train`.
- R1.2 Si se permite `ai-input`, cambiar la línea o eliminarla. Mantener el gate de indexación fail-closed.
- R1.3 robots.txt sin errores en Lighthouse (o error aceptado y documentado si se mantiene la señal).
- R1.4 Test que fije el contenido de robots.txt en preview (`Disallow: /`) y en producción.

### R2 — Fichas de producto (ver 03)
- R2.1 Reescribir las 12 fichas con datos del catálogo original: medidas, perfiles, materiales,
  terminaciones, capacidad, usos, armado y entrega. Mínimo 700 palabras útiles.
- R2.2 Eliminar textos internos visibles ("página de continuidad", "Página preservada", "referencia histórica").
- R2.3 3-5 preguntas frecuentes por ficha, con FAQPage.
- R2.4 Fotos propias o imágenes identificadas como referencia; alt descriptivo.
- R2.5 Enlaces internos a la pilar (/camarotes o /camas-metalicas) y a 2-3 fichas relacionadas.

### R3 — Datos estructurados (ver 02)
- R3.1 Product + BreadcrumbList en las 12 fichas y en /mobiliario-institucional, sin `offers` ni `review`.
- R3.2 Article con `datePublished`, `dateModified`, `image`, `author` en las 16 guías.
- R3.3 HowTo en las guías de tipo "Cómo cotizar / cómo pedir".
- R3.4 Organization/LocalBusiness con `sameAs`, `openingHoursSpecification`, `geo`, `image`.
- R3.5 Validación automática de JSON-LD en CI.

### R4 — Guías de /recursos (ver 04)
- R4.1 Fecha de publicación y actualización visibles en las 16.
- R4.2 Ampliar a 1.000-1.500 palabras las 8 guías de mayor intención comercial.
- R4.3 Párrafo de respuesta directa (40-60 palabras) bajo cada H2 en forma de pregunta.
- R4.4 Al menos una tabla comparativa o checklist por guía ampliada.
- R4.5 Datos concretos y, cuando aplique, fuentes externas (normas, fichas técnicas de materiales).

### R5 — Entidad y E-E-A-T (ver 05)
- R5.1 Ampliar /nosotros: quiénes son, años de operación, taller, capacidades, equipo (con permiso de las personas).
- R5.2 Prueba social real en /proyectos: proyecto, cantidad, plazo, comuna, foto. Solo con autorización del cliente.
- R5.3 Enlaces a redes en el footer y `sameAs` en el schema.
- R5.4 Google Business Profile verificado y enlazado.

### R6 — On-page (ver 06)
- R6.1 Titles de 40-65 caracteres en las 18 páginas fuera de rango.
- R6.2 Descriptions de 120-160 caracteres en las 7 páginas cortas.
- R6.3 og:image propia en páginas pilar y fichas.
- R6.4 Alt en las 2 imágenes sin alt; contraste y tamaño de objetivos táctiles (Lighthouse).

### R7 — Medición (ver 07)
- R7.1 GA4 recibiendo datos (prerrequisito, trabajo ya en curso).
- R7.2 Informe mensual: clics/impresiones GSC por grupo de páginas, contactos orgánicos GA4.
- R7.3 Seguimiento manual mensual de citas en ChatGPT Search, Perplexity y AI Overviews para 10 consultas objetivo.

## 5. Consultas objetivo (para medir GEO/AEO)

1. camarotes metálicos santiago
2. camarotes para faena
3. camarote con escritorio
4. cierres perimetrales santiago
5. portón corredizo o batiente
6. pintura electrostática santiago
7. fabricación metálica a medida santiago
8. mezzanine metálico bodega
9. cómo cotizar una reja metálica
10. proveedor de camarotes para empresas

## 6. Fases

| Fase | Contenido | Duración estimada | Salida |
|---|---|---|---|
| 0 | Decisión 01 + GA4 operativo | 1 semana | robots.txt definido; GA4 con datos |
| 1 | Quick wins on-page + schema Product/Article/Organization | 1-2 semanas | PR `seo/fase-1` desplegado |
| 2 | Reescritura de 12 fichas | 2-3 semanas | PR `seo/fichas` desplegado |
| 3 | Ampliación de guías + HowTo + respuestas directas | 3-4 semanas | PR `seo/recursos` por lotes |
| 4 | Entidad: /nosotros, /proyectos, redes, GBP | En paralelo, depende de material | PR `seo/entidad` |
| 5 | Medición y ajuste | Mensual | Informe mensual |

## 7. Riesgos

| Riesgo | Mitigación |
|---|---|
| Inventar especificaciones al ampliar fichas | Solo datos del catálogo original; lo no confirmado queda "a confirmar al cotizar" |
| Schema que no refleja el contenido visible | Cada propiedad del JSON-LD debe tener su texto visible equivalente |
| Cambiar robots.txt sin decisión de negocio | La fase 0 es bloqueante |
| Romper URLs o redirects | Tests existentes de 58 redirects + sitemap en CI |
| Doble conteo o pérdida de datos en GA4 | Verificar en DebugView tras cada deploy |

## 8. Criterios de aceptación globales

- CI verde (lint, typecheck, qa:static, qa:analytics, qa:browser).
- Lighthouse SEO 100 o 92 con el único error documentado en 01.
- 0 errores en el Rich Results Test de Google para una ficha, una guía y la home.
- Ninguna URL nueva sin canonical, title y description en rango.
- Verificación en vivo en rinon.cl tras cada deploy (ver 07).

## 9. Correcciones a la auditoría

- La auditoría dijo "15 guías" y "una description repetida". El recuento correcto es **16 guías** con Article
  y **ninguna description duplicada** (el duplicado era la home contada dos veces).

- Las "2 imágenes sin alt" (/camarotes y /cierres-perimetrales) son decorativas: tienen `alt=""` y `aria-hidden="true"`, que es lo correcto. No requieren cambio.

## 10. Estado de ejecución

- **Fase 1 parcial en `seo/fase-1`:** decisión 01 (opción A), 35 overrides de title/description (todas las URLs del sitemap en 40-65 / 120-160), Product + BreadcrumbList + FAQPage en las 13 fichas, retiro de copy interno visible, test `tests/seo-metadata.spec.mjs` en CI.
- **Pendiente por falta de datos:** SEO-07 (sameAs, geo, horario), SEO-09 (fechas reales de las guías), fases 2-4.
