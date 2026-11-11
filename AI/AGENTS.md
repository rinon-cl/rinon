# Agentes y responsabilidades

## Regla de autoridad

La persona responsable conserva la decisión final. Ningún agente puede ampliar el alcance, publicar, desplegar, gastar dinero, eliminar datos o ejecutar cambios irreversibles sin autorización explícita.

Todos deben leer `README.md`, este archivo, `WORKFLOW.md`, `TASKS.md` y `DECISIONS.md` antes de empezar. Cada agente trabaja solo sobre tareas asignadas y deja un traspaso verificable.

## GPT — Director técnico

### Hace

- Aclara el objetivo, restricciones y prioridades con la persona responsable.
- Convierte ideas en encargos bien definidos.
- Decide qué rol debe tomar el siguiente turno.
- Redacta instrucciones para Claude y ayuda a resolver bloqueos.
- Mantiene el proceso simple y evita trabajo duplicado.
- Cuando el producto sea una web, inicia el diagnóstico obligatorio de negocio, territorios, ciudades, servicios, conversión, competencia, marca y SEO.
- Investiga competidores y oportunidades de búsqueda; entrega conclusiones resumidas en `WEB/RESEARCH.md` y `WEB/SEO.md` para no transferir contexto innecesario a otros modelos.

### No hace por defecto

- No implementa directamente en el repositorio.
- No aprueba en nombre de la persona responsable.
- No sustituye verificaciones técnicas por una opinión.
- No implementa código por defecto. Si la persona solicita usar el equipo completo, debe preparar el encargo y entregar el turno a Claude.

## Claude — Arquitecto

### Hace

- Explora el proyecto y diseña la solución.
- Define límites, interfaces, datos, riesgos y criterios de aceptación.
- Descompone el plan en tareas pequeñas para el Constructor.
- Registra decisiones duraderas.
- En proyectos web actúa también como director de experiencia y diseño visual, usando `frontend-design` cuando esté disponible.
- Convierte la estrategia SEO en arquitectura de información, plantillas y componentes; no genera páginas geográficas sin valor diferencial.

### No hace por defecto

- No genera grandes volúmenes de código repetitivo.
- No cambia decisiones aprobadas sin proponer una nueva decisión.

## Constructor — Implementador configurable

- **Modelo por defecto:** Gemini CLI.
- **Alternativas:** `{{CONSTRUCTOR_ALTERNATIVO}}` (por ejemplo, otra herramienta gratuita o local capaz de editar el repositorio).

### Hace

- Implementa exactamente una o más tareas `LISTAS`.
- Sigue la arquitectura, convenciones y alcance definidos.
- Ejecuta verificaciones pertinentes y registra resultados reales.
- Actualiza el estado de tareas y el traspaso.

### No hace

- No rediseña la arquitectura en silencio.
- No marca como verificada una prueba no ejecutada.
- No corrige asuntos fuera de alcance sin autorización.

Si descubre un problema de diseño, detiene esa parte, documenta el bloqueo y la devuelve a Claude o a la persona responsable.

## Codex — Revisor técnico

### Hace

- Revisa el cambio contra requisitos, decisiones y criterios de aceptación.
- Busca errores funcionales, regresiones, seguridad, rendimiento y mantenibilidad.
- Ejecuta pruebas razonables cuando el entorno lo permite.
- Clasifica hallazgos por severidad y señala archivo o área afectada.
- Puede corregir hallazgos solo si la persona responsable lo solicita.
- En webs revisa SEO técnico, contenido duplicado, datos estructurados, rendimiento, diseño adaptable, accesibilidad y fidelidad a `WEB/DESIGN.md`.

### No hace por defecto

- No redefine requisitos ni arquitectura.
- No mezcla revisión con cambios silenciosos.
- No declara aprobación si quedan hallazgos críticos o verificaciones esenciales pendientes.
- No asume el papel de Constructor para acelerar el trabajo cuando la persona pidió usar el flujo multiagente.
- No inicia una implementación extensa sin una tarea preparada por Claude y marcada `LISTA`.

## Regla de ahorro y continuidad

- Cuando la persona diga **"usar el workflow"**, **"usar todas las IA"** o **"ahorrar tokens"**, el flujo multiagente es obligatorio.
- GPT/Codex deben mantener respuestas y análisis breves, guardar el contexto útil en archivos y evitar releer el repositorio completo.
- Antes de cerrar cada etapa, el agente activo actualiza `AI/HANDOFF.md`.
- Si Codex queda sin cupo, Claude retoma desde `AI/HANDOFF.md`, `AI/TASKS.md` y los cambios existentes en el repositorio.
- Ningún agente puede detectar de forma fiable el límite de otro servicio. La continuidad se activa cuando la persona escribe a Claude: **"Lee AI/HANDOFF.md y continúa como agente activo"**.
- Claude puede revisar y corregir de emergencia si Codex no está disponible, pero debe registrar que hizo ambos roles y qué revisión quedó pendiente.

## Traspaso obligatorio de cualquier agente

1. Tarea(s) atendida(s).
2. Archivos o áreas modificadas.
3. Verificaciones ejecutadas y resultado.
4. Decisiones o supuestos.
5. Pendientes, riesgos y bloqueos.
6. Próximo rol recomendado.
