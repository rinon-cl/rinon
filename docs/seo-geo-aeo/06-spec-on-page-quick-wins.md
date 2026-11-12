# 06 — Quick wins on-page

## 6.1 Titles fuera de rango (meta 40-65 caracteres, sin punto antes de "| RINON")

### Cortos (8)
| URL | Hoy | Propuesta |
|---|---|---|
| /cama-alta | Cama alta metálica. \| RINON (27) | Cama alta metálica a medida en Santiago \| RINON |
| /cama-loft-con-escritorio | Cama loft con escritorio. \| RINON (33) | Cama loft con escritorio metálica \| RINON |
| /cama-loft-metalica | Cama loft metálica. \| RINON (27) | Cama loft metálica para dormitorios y residencias \| RINON |
| /camarote-nido | Camarote nido metálico. \| RINON (31) | Camarote nido metálico con cama inferior \| RINON |
| /camarote-titanic | Camarote Titanic. \| RINON (25) | Camarote Titanic metálico: modelo y equivalente vigente \| RINON |
| /contacto | Contacto y cotizaciones \| RINON (31) | Contacto y cotizaciones de fabricación metálica \| RINON |
| /preguntas-frecuentes | Preguntas frecuentes \| RINON (28) | Preguntas frecuentes sobre fabricación metálica \| RINON |
| /rejas-metalicas | Rejas metálicas a medida \| RINON (32) | Rejas metálicas a medida en Santiago \| RINON |

### Largos (10, guías)
| URL | Hoy (car.) | Propuesta |
|---|---|---|
| /recursos/camarotes-faena-compra-por-volumen | 84 | Camarotes para faena: qué revisar al comprar por volumen |
| /recursos/como-elegir-proveedor-fabricacion-metalica | 89 | Cómo evaluar un proveedor de fabricación metálica |
| /recursos/como-especificar-camarotes-compra-institucional | 78 | Cómo especificar camarotes para compra institucional |
| /recursos/como-pedir-fabricacion-metalica-especial | 80 | Cómo pedir una fabricación metálica especial |
| /recursos/del-croquis-a-la-pieza-metalica | 84 | Del croquis a la pieza metálica: menos iteraciones |
| /recursos/fabricacion-por-lote-que-definir | 75 | Fabricación por lote: qué definir antes de cotizar |
| /recursos/mezzanine-metalico-bodega-guia | 78 | Mezzanine metálico en bodega: guía de evaluación |
| /recursos/porton-corredizo-vs-batiente | 66 | Portón corredizo vs. batiente: cuál elegir |
| /recursos/que-informacion-enviar-pintura-electrostatica | 66 | Qué enviar para cotizar pintura electrostática |
| /recursos/reja-o-cierre-perimetral-como-definir | 82 | Reja, malla o cierre perimetral: cómo definirlo |

Todas las propuestas llevan "| RINON" al final; verificar que el total quede ≤65.

## 6.2 Descriptions cortas (meta 120-160)

| URL | Hoy (car.) | Propuesta |
|---|---|---|
| /cierres-perimetrales | 76 | Cierres perimetrales para obras, bodegas, industria, condominios y terrenos en Santiago. Mallas, rejas y portones a medida. Cotiza con RINON. |
| /portones-metalicos | 78 | Portones metálicos corredizos y batientes fabricados según vano, uso y terminación. Opciones para casas, condominios e industria. Cotiza con RINON. |
| /rejas-metalicas | 84 | Rejas metálicas a medida para frontis, perímetros y accesos en Santiago. Diseño, medidas y terminación según tu proyecto. Cotiza con RINON. |
| /equipamiento-metalico | 96 | Racks, estanterías, lockers, gabinetes y soportes metálicos fabricados según uso, medidas y cantidad. Equipamiento para empresas. Cotiza con RINON. |
| /escritorios-metalicos | 99 | Escritorios con estructura metálica para hogar, oficina e instituciones. Medidas, cubierta y terminación a pedido, también por volumen. Cotiza con RINON. |
| /camarotes | 99 | Camas y camarotes metálicos para hogares, instituciones, faenas y residencias. Modelos y configuraciones a medida, también por volumen. Cotiza con RINON. |
| /mesas-metalicas | 104 | Mesas con bases y estructuras metálicas según medidas, uso, cantidad y terminación. Para hogar, comercio e instituciones. Cotiza con RINON. |

## 6.3 Open Graph

- Hoy las 59 páginas usan la misma `/opengraph-image`.
- Agregar `opengraph-image` por ruta (o `openGraph.images` en `routeMetadata`) para las pilares
  (/camarotes, /cierres-perimetrales, /estructuras-metalicas, /pintura-electrostatica, /colchones) y las fichas,
  usando foto propia o imagen identificada de la página. 1200×630.

## 6.4 Accesibilidad (Lighthouse 92)

- Alt en la imagen sin alt de /camarotes y la de /cierres-perimetrales.
- Contraste insuficiente: 1 elemento en la home (revisar el reporte Lighthouse para el selector exacto).
- 15 objetivos táctiles bajo 24×24 px o sin espacio suficiente: aumentar padding de enlaces del footer/menú.

## Aceptación

- 0 titles fuera de 40-65; 0 descriptions bajo 120 (script de chequeo en CI).
- og:image distinta en pilares y fichas.
- Lighthouse accesibilidad ≥95.
