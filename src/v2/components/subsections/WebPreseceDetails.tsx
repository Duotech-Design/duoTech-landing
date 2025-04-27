import React from "react";

export const WebPresenceDetails: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-center bg-[#e5dfd5] px-6 pb-20 font-sans text-[#21260D]">
      {/* Bullets */}
      <div className="mb-16 grid w-full max-w-5xl grid-cols-1 gap-8 text-sm md:grid-cols-2">
        <ul className="list-inside list-disc space-y-2">
          <li>SESIÓN DE ESTRATEGIA DE SITIO WEB</li>
          <li>SITIO WEB PERSONALIZADO DE 5 PÁGINAS</li>
          <li>DISEÑO ADAPTABLE A DISPOSITIVOS MÓVILES</li>
        </ul>
        <ul className="list-inside list-disc space-y-2">
          <li>CONFIGURACIÓN BÁSICA DE SEO</li>
          <li>INTEGRACIÓN DE FUENTES DE MARCA</li>
          <li>COLORES E IMÁGENES</li>
          <li>2 RONDAS DE REVISIONES</li>
        </ul>
      </div>

      {/* Imagen del celular */}
      <div className="flex w-full max-w-5xl">
        <div className="hidden w-40 sm:block md:w-96"></div>
        <div className="w-full md:w-96">
          <img
            src="/mobile_.png"
            alt="Mobile website preview"
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};
