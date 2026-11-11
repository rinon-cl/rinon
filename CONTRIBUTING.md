# Contribuir al proyecto Rinón

Gracias por querer colaborar. Sigue estas pautas para que tu contribución sea rápida y fácil de revisar.

1) Flujo de trabajo (Git)
- Crea una rama desde `main` con nombre claro: `feat/descripcion`, `fix/descripcion`, `chore/descripcion`.
- Haz commits pequeños y con mensajes descriptivos en inglés o español: `feat: agregar hero responsive`.
- Push a tu rama y abre un Pull Request (PR) hacia `main`.

2) Nombre de ramas
- Features: `feat/<breve-descripción>`
- Fixes: `fix/<breve-descripción>`
- Docs/Chores: `chore/<breve-descripción>`

3) Cómo abrir un PR
- En la rama: `git push origin feat/mi-cambio`
- Crear PR (UI o CLI):
  ```bash
  gh pr create --fill --base main --head feat/mi-cambio
  ```
- Describe el cambio, qué problema resuelve y cómo probarlo.

4) Revisiones y merges
- Pedimos al menos 1 revisor para cambios funcionales.
- No mezclar cambios grandes sin discusión previa (abrir issue primero).
- Al aprobarse, el PR se puede mergear. Si hay reglas de protección, respétalas.

5) Ejecutar y probar localmente
- Instala dependencias:
  ```bash
  npm install
  ```
- Ejecuta en modo desarrollo:
  ```bash
  npm run dev
  ```
- Build y check rápido:
  ```bash
  npm run build
  ```

6) Previews y deploys (Vercel)
- Al abrir un PR Vercel crea una Preview Deployment automáticamente (si está configurado).
- El merge a `main` lanza el deploy de producción.

7) Código sensible y secretos
- Nunca subas claves o `.env` al repo. Usa los Secrets/Environment variables en Vercel para variables privadas.

8) Código de conducta
- Mantén un trato respetuoso en comentarios y PRs.

Gracias — si necesitas ayuda, abre un issue o házmelo saber en Slack/WhatsApp.
