import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Marquesinas Metálicas | Coberturas a Medida — Rinon.cl",
  description: "Fabricamos marquesinas metálicas para entradas, estacionamientos, patios y fachadas. Estructuras durables y funcionales.",
  keywords: ["marquesina metalica", "cobertura metalica", "marquesina estructura metalica"],
};

const WA = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function MarquesinasMetalicasPage() {
  return (
    <main className="py-12 px-4 max-w-4xl mx-auto">
      <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-gray-600">Inicio</Link>
        <span>/</span>
        <Link href="/estructuras-metalicas" className="hover:text-gray-600">Estructuras metálicas</Link>
        <span>/</span>
        <span className="text-gray-700 font-medium">Marquesinas metálicas</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">Marquesinas Metálicas a Medida</h1>
      <p className="text-gray-600 mb-6 text-lg">Fabricamos marquesinas metálicas para entradas, accesos, patios y fachadas que requieren protección solar y funcionalidad.</p>

      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <a href={WA("Hola, necesito una marquesina metálica para mi local o acceso. Quiero cotizar un diseño a medida.")} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white font-bold px-6 py-3 rounded-full text-center">Cotizar por WhatsApp</a>
        <Link href="/contacto" className="border border-gray-300 px-6 py-3 rounded-full text-center font-medium">Solicitar presupuesto</Link>
      </div>
    </main>
  );
}
