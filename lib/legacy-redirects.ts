/**
 * Redirects 301 para las URLs heredadas de rinon.cl (sitio anterior).
 *
 * Fuente de verdad: docs/url-mapping-gsc-pending.md.
 * Este archivo implementa SOLO las decisiones con bloqueo "ninguno" o
 * clasificadas como "equivalente" (listas B y decisiones documentadas).
 *
 * Desde el 10-nov-2026 incluye también, como consolidación PROVISIONAL,
 * las 12 URLs antes bloqueadas:
 *  - dato_gsc (9): camarotes-faenas, -salmoneras, -mineria, -para-internados,
 *    -para-hospitales, -militares, rejas-decorativas, rejas-para-terraza,
 *    rejas-para-balcon.
 *  - decision_cobertura (2): cercos-perimetrales-concepcion, -antofagasta.
 *  - decision_dueño (1): camarotes-san-bernardo.
 * Total: 58 redirects 301. LEGACY_PENDING queda vacío.
 */

export type LegacyRedirect = { source: string; destination: string };

export const LEGACY_REDIRECTS: readonly LegacyRedirect[] = [
  // ── Lista B: equivalente claro (15) ───────────────────────────────────
  { source: "/literas", destination: "/camarotes" },
  { source: "/litera-metalica", destination: "/camarotes" },
  { source: "/camarotes-adultos", destination: "/camarotes" },
  { source: "/camarotes-metalicos", destination: "/camarotes" },
  { source: "/fabricante-camarotes-chile", destination: "/camarotes" },
  { source: "/camarotes-al-por-mayor", destination: "/camarotes" },
  { source: "/camarote-con-escritorio-full", destination: "/camarote-con-escritorio" },
  { source: "/reja-metalica-santiago", destination: "/rejas-metalicas" },
  { source: "/rejas-metalicas-para-casas", destination: "/rejas-metalicas" },
  { source: "/rejas-para-exteriores", destination: "/rejas-metalicas" },
  { source: "/portones-industriales", destination: "/portones-metalicos" },
  { source: "/cercos-para-empresas", destination: "/cierres-perimetrales" },
  { source: "/cercos-para-parcelas", destination: "/cierres-perimetrales" },
  { source: "/mallas-separadoras-industriales", destination: "/mallas-separadoras" },
  { source: "/soldadura-metalica-santiago", destination: "/soldadura-mig" },

  // ── Camarotes por comuna: CONSOLIDAR (13) ─────────────────────────────
  { source: "/camarotes-providencia", destination: "/camarotes" },
  { source: "/camarotes-las-condes", destination: "/camarotes" },
  { source: "/camarotes-maipu", destination: "/camarotes" },
  { source: "/camarotes-nunoa", destination: "/camarotes" },
  { source: "/camarotes-la-florida", destination: "/camarotes" },
  { source: "/camarotes-pudahuel", destination: "/camarotes" },
  { source: "/camarotes-santiago-centro", destination: "/camarotes" },
  { source: "/camarotes-penalolen", destination: "/camarotes" },
  { source: "/camarotes-quilicura", destination: "/camarotes" },
  { source: "/camarotes-puente-alto", destination: "/camarotes" },
  { source: "/camarotes-renca", destination: "/camarotes" },
  { source: "/camarotes-estacion-central", destination: "/camarotes" },
  { source: "/camarotes-lo-barnechea", destination: "/camarotes" },

  // ── Camarotes precio / variantes: CONSOLIDAR (4) ──────────────────────
  { source: "/camarotes-baratos", destination: "/camarotes" },
  { source: "/camarotes-precio", destination: "/camarotes" },
  { source: "/camarote-con-escritorio-economico", destination: "/camarote-con-escritorio" },
  { source: "/camarote-con-escritorio-full-2-plazas", destination: "/camarote-con-escritorio" },

  // ── Rejas por comuna / precio: CONSOLIDAR (5) ─────────────────────────
  { source: "/rejas-metalicas-pudahuel", destination: "/rejas-metalicas" },
  { source: "/rejas-metalicas-maipu", destination: "/rejas-metalicas" },
  { source: "/rejas-metalicas-cerrillos", destination: "/rejas-metalicas" },
  { source: "/rejas-metalicas-puente-alto", destination: "/rejas-metalicas" },
  { source: "/rejas-metalicas-precio", destination: "/rejas-metalicas" },

  // ── Pintura electrostática por comuna: CONSOLIDAR (9) ─────────────────
  { source: "/pintura-electrostatica-colina", destination: "/pintura-electrostatica" },
  { source: "/pintura-electrostatica-las-condes", destination: "/pintura-electrostatica" },
  { source: "/pintura-electrostatica-providencia", destination: "/pintura-electrostatica" },
  { source: "/pintura-electrostatica-santiago-centro", destination: "/pintura-electrostatica" },
  { source: "/pintura-electrostatica-maipu", destination: "/pintura-electrostatica" },
  { source: "/pintura-electrostatica-talagante", destination: "/pintura-electrostatica" },
  { source: "/pintura-electrostatica-la-pintana", destination: "/pintura-electrostatica" },
  { source: "/pintura-electrostatica-la-cisterna", destination: "/pintura-electrostatica" },
  { source: "/pintura-electrostatica-zona-sur-santiago", destination: "/pintura-electrostatica" },
  // ── Consolidaciones PROVISIONALES (12) ────────────────────────────────
  // Autorizadas por Felipe el 10-nov-2026 (encargo de release). Antes
  // bloqueadas por dato GSC / cobertura / decisión del dueño. Revisar con
  // datos de Search Console; ver docs/url-mapping-gsc-pending.md.
  { source: "/cercos-perimetrales-concepcion", destination: "/cierres-perimetrales" },
  { source: "/cercos-perimetrales-antofagasta", destination: "/cierres-perimetrales" },
  { source: "/camarotes-san-bernardo", destination: "/camarotes" },
  { source: "/camarotes-faenas", destination: "/camarotes" },
  { source: "/camarotes-salmoneras", destination: "/camarotes" },
  { source: "/camarotes-mineria", destination: "/camarotes" },
  { source: "/camarotes-para-internados", destination: "/camarotes" },
  { source: "/camarotes-para-hospitales", destination: "/camarotes" },
  { source: "/camarotes-militares", destination: "/camarotes" },
  { source: "/rejas-decorativas", destination: "/rejas-metalicas" },
  { source: "/rejas-para-terraza", destination: "/rejas-metalicas" },
  { source: "/rejas-para-balcon", destination: "/rejas-metalicas" },
];

/** URLs heredadas que siguen bloqueadas. Documentadas aquí para que el test
 *  garantice que NO se redirigen por accidente. */
export const LEGACY_PENDING: readonly string[] = [];
