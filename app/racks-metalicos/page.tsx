import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Racks Metálicos | Estanterías Industriales — Rinon.cl",
  description: "Fabricamos racks metálicos y estanterías industriales a medida para bodegas, tiendas y talleres. Diseño resistente y funcional.",
  keywords: ["racks metalicos", "estanterias metalicas", "rack industrial"],
};

const WA = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RacksMetalicosPage() {
  return (
    <main className="py-12 px-4 max-w-4xl mx-auto">
      <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-gray-600">Inicio</Link>
        <span>/</span>
        <Link href="/estructuras-metalicas" className="hover:text-gray-600">Estructuras metálicas</Link>
        <span>/</span>
        <span className="text-gray-700 font-medium">Racks metálicos</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">Racks Metálicos e Estructuras de Almacenamiento</h1>
      <p className="text-gray-600 mb-6 text-lg">Diseñamos racks metálicos y estanterías para optimizar el espacio, la carga y la operación de tu bodega o taller.</p>

      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <a href={WA("Hola, quiero cotizar racks metálicos para mi bodega. Necesito un diseño a medida según el espacio y la carga.")} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white font-bold px-6 py-3 rounded-full text-center">Cotizar por WhatsApp</a>
        <Link href="/contacto" className="border border-gray-300 px-6 py-3 rounded-full text-center font-medium">Solicitar plano</Link>
      </div>
    </main>
  );
}
