import { publicWhatsAppNumber } from "@/lib/contact";

const categoryPrompts: Record<string, string> = {
  fabricacion: "Hola, quiero cotizar una fabricación metálica. Puedo enviar plano, foto o medidas.",
  estructuras: "Hola, quiero cotizar una estructura metálica. Tengo antecedentes del proyecto para enviar.",
  cierres: "Hola, quiero cotizar un cierre, reja o portón. Puedo indicar medidas y ubicación.",
  camarotes: "Hola, quiero cotizar camas o camarotes metálicos. Puedo indicar modelo, cantidad y destino.",
  colchones: "Hola, quiero cotizar colchones. Puedo indicar modelo o tecnología, medida de la cama y cantidad.",
  equipamiento: "Hola, quiero cotizar equipamiento metálico. Puedo indicar medidas, uso y cantidad.",
  especiales: "Hola, necesito una fabricación metálica especial. Puedo enviar una foto, croquis o muestra de referencia.",
  pintura: "Hola, quiero consultar por pintura electrostática. Puedo enviar fotos, cantidad y medidas de las piezas.",
};

export function whatsappUrl(category?: string) {
  const number = publicWhatsAppNumber();
  if (!number) return null;
  const message = category && categoryPrompts[category]
    ? categoryPrompts[category]
    : "Hola, quiero cotizar un proyecto con RINON. ¿Me pueden orientar?";
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/**
 * Mensaje de WhatsApp prellenado con lo que el cliente ya escribió en /cotizar.
 * Se usa cuando la persistencia de leads no está disponible: el cliente no
 * pierde lo que escribió y RINON recibe la solicitud por el canal que sí
 * funciona. Sin datos sensibles: solo lo que el cliente decidió compartir.
 */
export function whatsappUrlFromQuote(fields: Record<string, string>, pagePath = "") {
  const number = publicWhatsAppNumber();
  if (!number) return null;
  const label: Record<string, string> = {
    nombre: "Nombre", empresa: "Empresa", telefono: "Teléfono", categoria: "Categoría",
    tipo_solicitud: "Tipo", modelo_referencia: "Modelo", cantidad: "Cantidad",
    medidas: "Medidas", ubicacion: "Comuna", fecha_objetivo: "Fecha objetivo", mensaje: "Detalle",
  };
  const lines = ["Hola, quiero cotizar con RINON. Envié el formulario del sitio:"];
  for (const key of Object.keys(label)) {
    const value = (fields[key] || "").trim();
    if (value) lines.push(`${label[key]}: ${value.slice(0, 300)}`);
  }
  if (pagePath) lines.push(`Página: rinon.cl${pagePath}`);
  return `https://wa.me/${number}?text=${encodeURIComponent(lines.join("\n"))}`;
}
