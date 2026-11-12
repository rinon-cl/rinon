# Mejoras SEO / GEO / AEO — rinon.cl

Paquete de documentos para ejecutar las mejoras de la auditoría del 12-nov-2026
(`seo-audit-rinon-cl-2026-11-12.pdf`). Base de código: `rinon-cl/rinon`, rama
`produccion/rinon-v2` @ `aa20046`.

Ubicación sugerida en el repo: `docs/seo-geo-aeo/`.

| # | Documento | Para qué sirve | Responsable |
|---|---|---|---|
| 00 | [PRD-seo-geo-aeo.md](PRD-seo-geo-aeo.md) | Objetivos, alcance, requisitos, métricas, fases | Felipe (dueño de producto) |
| 01 | [01-decision-content-signals.md](01-decision-content-signals.md) | Decisión sobre `ai-input` en robots.txt (bloqueante) | Enrique + Felipe |
| 02 | [02-spec-datos-estructurados.md](02-spec-datos-estructurados.md) | Schema Product, Breadcrumb, Article, HowTo, Organization | Desarrollo |
| 03 | [03-spec-fichas-producto.md](03-spec-fichas-producto.md) | Brief de contenido de las 12 fichas delgadas | Contenido + Felipe |
| 04 | [04-spec-guias-recursos.md](04-spec-guias-recursos.md) | Ampliación de las 16 guías de /recursos | Contenido |
| 05 | [05-spec-entidad-eeat.md](05-spec-entidad-eeat.md) | Nosotros, prueba social, sameAs, Google Business Profile | Felipe + Enrique |
| 06 | [06-spec-on-page-quick-wins.md](06-spec-on-page-quick-wins.md) | Titles, descriptions, OG, alt, accesibilidad | Desarrollo |
| 07 | [07-plan-qa-aceptacion.md](07-plan-qa-aceptacion.md) | Pruebas automáticas, verificación en vivo, medición | Desarrollo + Felipe |
| 08 | [08-backlog.md](08-backlog.md) | Tickets ordenados, con dependencias y estimación | Todos |

## Reglas que aplican a todo el paquete

- Cada cambio va en una rama `seo/*` desde `produccion/rinon-v2`, con PR, CI verde y Preview de Vercel.
  No se toca `main`, DNS ni las flags `RINON_*` salvo que el documento lo diga.
- No se inventan datos: medidas, materiales, plazos, clientes o testimonios deben salir del
  catálogo original o ser aprobados por Felipe/Enrique. Si falta el dato, se deja fuera.
- No se publican precios, ofertas (`offers`) ni reseñas (`Review`/`AggregateRating`) sin fuente real.
- Las imágenes conceptuales siguen identificadas como tales.
