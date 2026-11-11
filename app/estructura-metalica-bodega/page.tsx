import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Estructura Metálica para Bodega | Fabricación a Medida — Rinon.cl",
  description: "Fabricamos estructuras metálicas para bodegas, depósitos y almacenes. Diseño a medida para carga, flujo y almacenamiento.",
  keywords: ["estructura metalica para bodega", "estructura metalica industrial", "fabricacion estructura metalica"],
};

const WA = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function EstructuraBodegaPage() {
  return (
    <main className="py-12 px-4 max-w-4xl mx-auto">
      <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-gray-600">Inicio</Link>
        <span>/</span>
        <Link href="/estructuras-metalicas" className="hover:text-gray-600">Estructuras metálicas</Link>
        <span>/</span>
        <span className="text-gray-700 font-medium">Estructura para bodega</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">Estructuras Metálicas para Bodegas y Depósitos</h1>
      <p className="text-gray-600 mb-6 text-lg">Fabricamos estructuras para optimizar almacenamiento, flujo de carga y organización interna de bodegas y locales industriales.</p>

      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <a href={WA("Hola, necesito una estructura metálica para bodega o depósito. Quiero cotizar un proyecto a medida.")} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white font-bold px-6 py-3 rounded-full text-center">Cotizar por WhatsApp</a>
        <Link href="/contacto" className="border border-gray-300 px-6 py-3 rounded-full text-center font-medium">Hablar con el equipo</Link>
      </div>
    </main>
  );
}
