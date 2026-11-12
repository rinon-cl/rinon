# 03 — Brief de contenido: fichas de camas y camarotes

Fuente de datos: `lib/legacy-commercial.ts` (`legacyCommercialLandings`) y el catálogo original de RINON.
Plantilla de página: `app/[legacy]/page.tsx`.

## Fichas afectadas (12) + 1 relacionada

| URL | Palabras hoy | Title hoy | Problema visible |
|---|---|---|---|
| /cama-alta | 398 | Cama alta metálica. \| RINON | Title corto |
| /cama-dos-plazas-con-cajon | 388 | — | Plantilla |
| /cama-institucional-metalica | 375 | — | Plantilla |
| /cama-loft-con-escritorio | 354 | Cama loft con escritorio. \| RINON | Title corto |
| /cama-loft-metalica | 379 | Cama loft metálica. \| RINON | "Página preservada…" en description |
| /camarote-1-5-plazas | 386 | — | Plantilla |
| /camarote-2-plazas | 399 | — | Plantilla |
| /camarote-desmontable | 389 | — | Plantilla |
| /camarote-doble | 407 | — | Plantilla |
| /camarote-nido | 406 | Camarote nido metálico. \| RINON | Title corto |
| /camarote-titanic | 388 | Camarote Titanic. \| RINON | "referencia histórica", "Página de continuidad" |
| /camarote-triple | 389 | — | Plantilla |
| /mobiliario-institucional | 380 | — | Plantilla |

## Estructura objetivo (≥700 palabras útiles)

1. **H1** con el nombre del producto (sin punto final).
2. **Bajada (40-60 palabras):** qué es, para quién y el diferencial. Debe responder "¿qué es un camarote nido?".
3. **Especificación** (tabla visible): medidas exteriores, medida de colchón, altura, perfil y espesor,
   material, terminación y colores, carga de uso si está documentada, armado. Solo datos del catálogo;
   lo no confirmado se marca "se confirma al cotizar".
4. **Usos y contextos** (H2): hogar, residencias, faenas, instituciones; 1 párrafo cada uno.
5. **Variantes y opciones** (H2): con o sin cajón, escalera, baranda, escritorio, etc.
6. **Cómo se cotiza** (H2): lista numerada de 3-4 pasos y CTA.
7. **Preguntas frecuentes** (H2, 3-5): ejemplos
   - ¿Qué medida de colchón usa?
   - ¿Viene armado o desarmado?
   - ¿Se puede pedir en otro color?
   - ¿Hacen despacho fuera de Santiago?
   - ¿Sirve para uso intensivo o institucional?
8. **Relacionados:** enlace a la pilar y a 2-3 fichas cercanas.

## Reglas de redacción

- Quitar todo texto interno: "página de continuidad", "Página preservada", "referencia histórica",
  "para evitar trasladar especificaciones antiguas".
- Si el modelo se descontinuó, decirlo en lenguaje de cliente y ofrecer el equivalente vigente,
  o evaluar redirect 301 a la ficha equivalente (decisión de Felipe).
- Español de Chile, segunda persona, frases cortas.
- Sin precios ni plazos garantizados.

## Titles y descriptions propuestos (revisar)

| URL | Title (40-65) | Description (120-160) |
|---|---|---|
| /cama-alta | Cama alta metálica a medida en Santiago \| RINON | Cama alta de estructura metálica que libera el espacio inferior. Medidas, terminación y cantidad según tu proyecto. Cotiza con RINON. |
| /cama-loft-con-escritorio | Cama loft con escritorio metálica \| RINON | Cama elevada con escritorio integrado para dormitorios y residencias. Fabricada en metal según medidas y terminación. Cotiza con RINON. |
| /cama-loft-metalica | Cama loft metálica para dormitorios y residencias \| RINON | Cama loft de estructura metálica con espacio inferior libre para guardar o estudiar. Medidas y terminación a pedido. Cotiza con RINON. |
| /camarote-nido | Camarote nido metálico con cama inferior \| RINON | Camarote metálico con cama nido deslizante para sumar una plaza sin ocupar más espacio. Medidas y terminación a pedido. Cotiza con RINON. |
| /camarote-titanic | Camarote Titanic metálico: modelo y equivalente vigente \| RINON | Modelo Titanic de camarote metálico. Revisa su configuración, el equivalente vigente y cómo cotizarlo según cantidad y destino. |

## Aceptación por ficha

- ≥700 palabras útiles, sin textos internos.
- Tabla de especificación visible.
- 3-5 FAQ visibles + FAQPage.
- Product + BreadcrumbList válidos (ver 02).
- Title y description en rango.
- Revisión de Felipe registrada en el PR.
