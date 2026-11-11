import Link from "next/link";

const services = [
  { href: "/cierres-perimetrales", title: "Cierres perimetrales", description: "Fabricación e instalación para terrenos, obras, empresas y condominios." },
  { href: "/pintura-electrostatica", title: "Pintura electrostática", description: "Pintura en polvo al horno para piezas, rejas, portones y estructuras." },
  { href: "/estructuras-metalicas", title: "Estructuras metálicas", description: "Diseño y fabricación a medida para proyectos residenciales e industriales." },
  { href: "/mezzanines-metalicos", title: "Mezzanines metálicos", description: "Ampliación de espacio para bodegas, talleres y locales con estructuras funcionales." },
  { href: "/escaleras-metalicas", title: "Escaleras metálicas", description: "Acceso seguro y diseño a medida para interiores, exteriores y proyectos industriales." },
  { href: "/pergolas-metalicas", title: "Pérgolas metálicas", description: "Coberturas y estructuras exteriores para terrazas, patios y fachadas." },
  { href: "/racks-metalicos", title: "Racks metálicos", description: "Estanterías y almacenamiento para bodegas, depósitos y talleres." },
  { href: "/estructura-metalica-bodega", title: "Estructura para bodega", description: "Soluciones estructurales para almacenamiento, flujo y operación interna." },
  { href: "/soportes-metalicos", title: "Soportes metálicos", description: "Bases de apoyo, refuerzos y estructuras para maquinaria y equipos." },
  { href: "/plataformas-metalicas", title: "Plataformas metálicas", description: "Platforms para trabajo, acceso y almacenamiento en espacios comerciales o industriales." },
  { href: "/marquesinas-metalicas", title: "Marquesinas metálicas", description: "Coberturas y fachadas para entradas, patios y facilidades de acceso." },
  { href: "/soldadura-metalica-santiago", title: "Soldadura y fabricación", description: "Corte, armado y soldadura de piezas y estructuras metálicas a pedido." },
  { href: "/portones-metalicos", title: "Portones metálicos", description: "Portones corredizos, batientes y de doble hoja fabricados a medida." },
];

export function MetalServicesLinks({ current }: { current: string }) {
  return (
    <section className="mb-12" aria-labelledby="servicios-metalicos-relacionados">
      <h2 id="servicios-metalicos-relacionados" className="text-xl font-bold text-gray-900 mb-2">
        Servicios metálicos relacionados
      </h2>
      <p className="text-sm text-gray-500 mb-5">
        Podemos integrar fabricación, terminación e instalación dentro de una misma cotización.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {services.filter((service) => service.href !== current).map((service) => (
          <Link key={service.href} href={service.href} className="border border-gray-200 rounded-xl p-4 hover:border-gray-500 hover:shadow-sm transition-all">
            <h3 className="font-semibold text-gray-900 text-sm mb-1">{service.title}</h3>
            <p className="text-gray-500 text-xs leading-relaxed">{service.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
