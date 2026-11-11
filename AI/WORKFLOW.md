# Flujo de trabajo

## Estados permitidos

`IDEA` → `DESCUBRIMIENTO` → `INVESTIGACIÓN` → `SEO` → `DISEÑO_VISUAL` → `ARQUITECTURA` → `LISTA` → `EN_PROGRESO` → `EN_REVISIÓN` → `HECHA`

Estados auxiliares: `BLOQUEADA` y `CANCELADA`.

Solo puede existir un responsable activo por tarea. Un cambio de estado exige actualizar `TASKS.md`.

## Flujo normal

## Modo obligatorio de ahorro de tokens

Cuando la persona solicite usar el workflow, el trabajo no puede concentrarse silenciosamente en una sola IA:

1. **GPT/Codex Director:** define alcance, prioridad y prompt breve para Claude. No programa.
2. **Claude Arquitecto/Diseño:** toma decisiones complejas, prepara tareas y actualiza el traspaso.
3. **Constructor gratuito:** Gemini CLI por defecto; DeepSeek u otro equivalente cuando esté disponible. Implementa.
4. **Codex Revisor:** revisa únicamente el resultado y las pruebas.

Cada traspaso usa archivos, no conversaciones completas. Se comparte solo el contexto necesario para la siguiente etapa.

### Continuidad cuando Codex no esté disponible

1. El último estado válido debe estar en `AI/HANDOFF.md`.
2. La persona abre Claude en la misma carpeta y escribe: `Lee AI/HANDOFF.md y continúa como agente activo según AI/WORKFLOW.md`.
3. Claude verifica el estado real del repositorio antes de actuar.
4. Claude puede dirigir al Constructor o implementar una corrección urgente si la persona lo autoriza.
5. Al terminar, Claude actualiza `AI/HANDOFF.md` y deja la revisión de Codex como pendiente si no pudo ejecutarse.

### 1. Dirección — GPT + persona responsable

- Definen objetivo, prioridad, límites y restricciones.
- GPT prepara el encargo para Claude.
- Resultado: tarea en `DESCUBRIMIENTO` con contexto suficiente.

Si el proyecto es una página web, GPT debe preguntar al inicio, como mínimo:

1. Negocio, oferta y conversión principal esperada.
2. Público objetivo y problemas que necesita resolver.
3. País, regiones, ciudades o comunas prioritarias.
4. Servicios o categorías que deben posicionarse.
5. Diferenciadores, pruebas de confianza y restricciones de marca.
6. Sitios competidores o referentes conocidos.

No repitas preguntas cuya respuesta ya esté en el repositorio. Registra las respuestas en `WEB/BRIEF.md`.

### 2. Investigación competitiva y SEO — GPT

- Analiza resultados de búsqueda y competidores relevantes por servicio y territorio.
- Distingue intención informativa, comercial, transaccional y local.
- Propone grupos de palabras clave, entidades, preguntas, contenidos de apoyo y enlaces internos.
- Diseña una matriz servicio × territorio solo cuando cada página pueda aportar contenido local útil y comprobable.
- Considera SEO técnico, SEO local, contenido, autoridad, conversión y medición.
- Resume evidencia y oportunidades en `WEB/RESEARCH.md` y la estrategia aprobada en `WEB/SEO.md`.
- Resultado: etapas `INVESTIGACIÓN` y `SEO` aprobadas antes del diseño y de la generación masiva.

### 3. Diseño visual — Claude + persona responsable

- Lee `WEB/BRIEF.md`, `WEB/RESEARCH.md`, `WEB/SEO.md` y `WEB/DESIGN.md`.
- Propone una dirección visual clara: personalidad, tipografía, color, composición, fotografía/ilustración, movimiento y componentes.
- Usa el plugin `frontend-design` cuando esté disponible.
- Diseña primero páginas representativas: inicio, servicio, ubicación y conversión.
- La persona responsable aprueba la dirección antes de replicarla.
- Resultado: `WEB/DESIGN.md` actualizado y etapa `DISEÑO_VISUAL` aprobada.

### 4. Arquitectura — Claude

- Lee las fuentes de verdad y el código relevante.
- Diseña la solución mínima adecuada.
- Registra decisiones que deban sobrevivir al chat.
- Completa criterios de aceptación y verificación.
- Resultado: tarea en `LISTA` para el Constructor.

### 5. Implementación — Constructor

- Reclama la tarea y la mueve a `EN_PROGRESO`.
- Implementa solo el alcance acordado.
- Ejecuta pruebas, lint y build aplicables.
- Deja resumen y evidencia en la tarea.
- Resultado: tarea en `EN_REVISIÓN` para Codex.
- En generación SEO masiva, cada página debe usar datos estructurados y contenido específico del servicio/territorio; se prohíbe cambiar solo el nombre de la ciudad.

### 6. Revisión — Codex

- Contrasta código, criterios de aceptación y decisiones.
- Ejecuta o inspecciona verificaciones y registra hallazgos.
- Si aprueba, mueve la tarea a `HECHA`.
- Si encuentra fallas, devuelve a `LISTA` o `EN_PROGRESO` con acciones concretas.
- Si detecta un conflicto de diseño, marca `BLOQUEADA` y escala a Claude/persona responsable.
- En webs valida indexación, canonical, metadatos, sitemap, robots, schema, enlaces internos, rendimiento, accesibilidad y diferenciación entre páginas territoriales.

### 7. Cierre — persona responsable

- Confirma la entrega cuando corresponda.
- Autoriza publicación, despliegue o cambios de alto impacto por separado.

## Criterio general de finalización

Una tarea está `HECHA` solo si:

- [ ] Cumple todos los criterios de aceptación.
- [ ] No contiene cambios ajenos al alcance sin justificar.
- [ ] Las verificaciones requeridas pasaron, o las no ejecutadas están explicadas.
- [ ] No quedan hallazgos críticos o altos abiertos.
- [ ] La documentación afectada está actualizada.
- [ ] Las decisiones duraderas están en `DECISIONS.md`.
- [ ] El traspaso final indica cambios, pruebas y riesgos restantes.

## Bloqueos y escalamiento

Bloquea y consulta cuando falte información que cambie materialmente la solución, haya conflicto entre fuentes, riesgo de pérdida de datos, credenciales ausentes, costo externo, cambio irreversible o decisión de producto.

No bloquees por detalles menores: usa una suposición conservadora, documéntala y continúa si es fácil de revertir.

## Control de cambios

- Una tarea debe producir un conjunto coherente de cambios.
- No borres ni reemplaces trabajo ajeno sin entenderlo.
- Los commits, pushes, PR y despliegues requieren petición o autorización de la persona responsable.
- Los secretos se gestionan fuera del repositorio y nunca se copian a estos documentos.

## Preparación para automatización futura

Este flujo está diseñado para automatizarse más adelante (por ejemplo, con n8n). La automatización debe leer estados y campos de `TASKS.md`; no debe inferir aprobaciones. Los puntos de aprobación humana, publicación y acciones irreversibles se mantienen explícitos.

## Puertas de aprobación para n8n

n8n puede preparar y mover información automáticamente, pero debe esperar aprobación humana en:

1. Confirmación del brief y territorios.
2. Aprobación de la estrategia SEO y mapa de páginas.
3. Aprobación de la dirección visual.
4. Aprobación previa a publicación o despliegue.

La automatización registra cada aprobación con fecha y responsable; una ausencia de respuesta nunca cuenta como aprobación.
