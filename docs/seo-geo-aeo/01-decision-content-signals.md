# 01 — Decisión: Content Signals en robots.txt

**Estado:** implementada opción A en la rama `seo/fase-1` (pendiente de aprobación en el PR).
**Archivo:** `app/robots.txt/route.ts:17`

## Situación actual

```
Content-Signal: ai-train=no, search=yes, ai-input=no
```

- `search=yes`: buscadores pueden indexar y enlazar.
- `ai-train=no`: no se autoriza entrenar modelos.
- `ai-input=no`: no se autoriza usar el contenido como entrada de respuestas de IA
  (AI Overviews, ChatGPT Search, Perplexity, etc.).

Efectos observados el 12-nov-2026:
1. Lighthouse marca robots.txt como inválido: "Unknown directive" en la línea 1 (SEO 92 en vez de 100).
2. La preferencia `ai-input=no` va en contra del objetivo GEO de ser citado por buscadores con IA.
3. Content Signals es una convención de contentsignals.org; cada proveedor decide si la respeta.
   No es parte del estándar robots.txt (RFC 9309).

## Opciones

| Opción | Línea | Efecto GEO | Lighthouse |
|---|---|---|---|
| A. Permitir respuestas de IA, no entrenamiento | `Content-Signal: ai-train=no, search=yes, ai-input=yes` | Favorable | Sigue marcando la línea como desconocida |
| B. Quitar la línea | (sin línea) | Favorable; sin preferencia declarada | Sin errores |
| C. Mantener como está | sin cambio | Desfavorable | Error se mantiene |

## Recomendación

**Opción A** si el negocio quiere proteger el contenido de entrenamiento pero aparecer citado en respuestas.
**Opción B** si la prioridad es un robots.txt limpio. En ambos casos queda documentado aquí.

## Implementación (opción A)

```ts
const contentSignal = "Content-Signal: ai-train=no, search=yes, ai-input=yes";
```
Actualizar el comentario del archivo y el test que verifique la línea exacta.

## Implementación (opción B)

Eliminar `contentSignal` y su línea vacía de `lines`. Mantener intacto el bloque fail-closed
(`Disallow: /` cuando `isIndexableSite()` es falso).

## Aceptación

- `curl https://rinon.cl/robots.txt` muestra la línea acordada (o ninguna).
- Preview sigue con `Disallow: /`.
- Lighthouse: robots-txt sin error (opción B) o error documentado (opción A).

## Registro de decisión

| Fecha | Decisión | Aprobado por |
|---|---|---|
| 2026-11-12 | Opción A implementada en `seo/fase-1` por encargo de Enrique ("haz las mejoras"); revertir antes del merge si se prefiere B o C | Pendiente de confirmar en PR |
