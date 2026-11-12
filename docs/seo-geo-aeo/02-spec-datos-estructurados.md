# 02 — Especificación de datos estructurados

Archivos de referencia: `lib/seo.ts` (`organizationJsonLd`, `solutionJsonLd`),
`lib/commercial-jsonld.ts`, `lib/legacy-commercial.ts`, `lib/resources.ts`, `app/recursos/[slug]/page.tsx`.

Regla general: **cada propiedad debe corresponder a contenido visible en la página.**
Nada de `offers`, `aggregateRating` ni `review` sin datos reales.

## 2.1 Organization / LocalBusiness (todas las páginas)

Agregar al objeto existente `@id: https://rinon.cl/#organization`:

```json
{
  "image": "https://rinon.cl/brand/logo-rinon-horizontal.png",
  "sameAs": [
    "https://www.instagram.com/<perfil>",
    "https://www.facebook.com/<perfil>",
    "https://www.linkedin.com/company/<perfil>",
    "https://g.page/<perfil-google-business>"
  ],
  "geo": { "@type": "GeoCoordinates", "latitude": "<lat>", "longitude": "<lng>" },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "<HH:MM>", "closes": "<HH:MM>"
  }]
}
```
Datos que debe entregar Enrique/Felipe: URLs reales de perfiles, coordenadas de Portezuelo 1506, horario.
Si un perfil no existe, no se incluye.

## 2.2 Product + BreadcrumbList (13 páginas)

Aplica a: /cama-alta, /cama-dos-plazas-con-cajon, /cama-institucional-metalica, /cama-loft-con-escritorio,
/cama-loft-metalica, /camarote-1-5-plazas, /camarote-2-plazas, /camarote-desmontable, /camarote-doble,
/camarote-nido, /camarote-titanic, /camarote-triple, /mobiliario-institucional.

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://rinon.cl/<slug>#product",
  "name": "<nombre visible del H1>",
  "description": "<resumen visible>",
  "image": ["https://rinon.cl/<imagen principal>"],
  "brand": { "@type": "Brand", "name": "RINON" },
  "manufacturer": { "@id": "https://rinon.cl/#organization" },
  "category": "Camas y camarotes metálicos",
  "material": "<material visible, p. ej. acero>",
  "additionalProperty": [
    { "@type": "PropertyValue", "name": "Medidas", "value": "<visible>" },
    { "@type": "PropertyValue", "name": "Terminación", "value": "<visible>" }
  ]
}
```
```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "RINON", "item": "https://rinon.cl" },
    { "@type": "ListItem", "position": 2, "name": "Camarotes", "item": "https://rinon.cl/camarotes" },
    { "@type": "ListItem", "position": 3, "name": "<nombre>", "item": "https://rinon.cl/<slug>" }
  ]
}
```
Notas:
- Sin `offers`: Google mostrará el aviso "falta offers" en Product snippets; es aceptable mientras no
  haya precios públicos. No inventar precios para silenciarlo.
- RINON sí fabrica camas y camarotes: `manufacturer` correcto. **En /colchones no se agrega manufacturer de RINON**
  (regla vigente del PRD de producto).
- Agregar FAQPage cuando la ficha tenga sus preguntas (ver 03).

## 2.3 Article (16 guías)

Completar el Article existente:
```json
{
  "datePublished": "<AAAA-MM-DD>",
  "dateModified": "<AAAA-MM-DD>",
  "image": "https://rinon.cl/<imagen de la guía o opengraph>",
  "author": { "@id": "https://rinon.cl/#organization" }
}
```
Agregar `publishedAt` y `updatedAt` a `ResourceArticle` en `lib/resources.ts` y mostrarlos en la página.
Si más adelante hay autor humano, usar `Person` con `name` y `jobTitle` reales.

## 2.4 HowTo (guías procedimentales)

Candidatas: como-cotizar-cierre-perimetral, como-cotizar-estructura-metalica, como-cotizar-rejas-metalicas,
como-pedir-fabricacion-metalica-especial, que-informacion-enviar-pintura-electrostatica,
del-croquis-a-la-pieza-metalica.

```json
{
  "@type": "HowTo",
  "name": "<título>",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "<paso visible>", "text": "<texto visible>" }
  ]
}
```
Los pasos deben existir como lista numerada visible en la guía.

## 2.5 Validación en CI

- Script `scripts/check-jsonld.mjs`: parsea todos los `application/ld+json` del build servido y falla si:
  JSON inválido; Product sin name/image; Article sin datePublished; HowTo sin step; `offers` o `review` presentes.
- Sumarlo a `qa:static` o `check:release`.
- Manual: Rich Results Test (search.google.com/test/rich-results) sobre una ficha, una guía y la home.
