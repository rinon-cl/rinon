import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Mezzanines Metálicos | Ampliación de Bodega — Rinon.cl",
  description: "Diseñamos y fabricamos mezzanines metálicos a medida para ampliar tu bodega o taller. Cálculo de carga, montaje e instalación.",
  keywords: ["mezzanine metalico", "mezzanine bodega", "ampliacion bodega metalica"],
};

const WA = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function MezzaninesPage() {
  return (
    <main className="py-12 px-4 max-w-4xl mx-auto">
      <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-gray-600">Inicio</Link>
        <span>/</span>
        <Link href="/estructuras-metalicas" className="hover:text-gray-600">Estructuras metálicas</Link>
        <span>/</span>
        <span className="text-gray-700 font-medium">Mezzanines metálicos</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">Mezzanines Metálicos a Medida</h1>
      <p className="text-gray-600 mb-6 text-lg">Aumenta el espacio útil de tu bodega o taller con mezzanines metálicos diseñados según tu carga, uso y operación diaria.</p>

      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <a href={WA("Hola, quiero cotizar un mezzanine metálico para mi bodega. Necesito ampliar el espacio útil y me gustaría recibir una propuesta.")} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white font-bold px-6 py-3 rounded-full text-center">Cotizar por WhatsApp</a>
        <Link href="/contacto" className="border border-gray-300 px-6 py-3 rounded-full text-center font-medium">Enviar planos</Link>
      </div>

      <section className="space-y-5 text-gray-700">
        <h2 className="text-xl font-semibold text-gray-900">¿Para qué sirven?</h2>
        <ul className="list-disc ml-5 space-y-2">
          <li>Ampliar la capacidad de almacenamiento sin invertir en una nueva superficie.</li>
          <li>Optimizar bodegas, talleres, locales comerciales y logística.</li>
          <li>Crear segundo nivel para oficinas, stock o zonas operativas.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900">Qué fabricamos</h2>
        <ul className="list-disc ml-5 space-y-2">
          <li>Mezzanines para bodegas y depósitos.</li>
          <li>Plataformas metálicas para trabajo o almacenamiento.</li>
          <li>Mezzanines con barandas, escaleras y refuerzos a medida.</li>
        </ul>
      </section>
    </main>
  );
}
