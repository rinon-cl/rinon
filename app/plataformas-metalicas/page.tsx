import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Plataformas Metálicas | Fabricación a Medida — Rinon.cl",
  description: "Fabricamos plataformas metálicas para trabajo, almacenamiento y acceso, con diseño según carga, medidas y uso del proyecto.",
  keywords: ["plataformas metalicas", "plataforma metalica a medida", "plataforma para trabajo"],
};

const WA = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function PlataformasMetalicasPage() {
  return (
    <main className="py-12 px-4 max-w-4xl mx-auto">
      <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-gray-600">Inicio</Link>
        <span>/</span>
        <Link href="/estructuras-metalicas" className="hover:text-gray-600">Estructuras metálicas</Link>
        <span>/</span>
        <span className="text-gray-700 font-medium">Plataformas metálicas</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">Plataformas Metálicas a Medida</h1>
      <p className="text-gray-600 mb-6 text-lg">Diseñamos y fabricamos plataformas de acero para trabajo, accesos, almacenamiento y operación en bodegas, talleres y locales.</p>

      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <a href={WA("Hola, necesito una plataforma metálica a medida para mi proyecto. Quiero cotizarla y definir materiales y dimensiones.")} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white font-bold px-6 py-3 rounded-full text-center">Cotizar por WhatsApp</a>
        <Link href="/contacto" className="border border-gray-300 px-6 py-3 rounded-full text-center font-medium">Hacer consulta</Link>
      </div>
    </main>
  );
}
