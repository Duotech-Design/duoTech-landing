import React from "react";
import { AsteriskIcon } from "../common/AsteriskIcon";

export const ServicesSection: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-center bg-[#8b8460] px-4 py-16 font-ace text-white">
      {/* Títulos principales */}
      <div className="mb-8 flex items-center space-x-8 text-center text-lg font-light md:text-2xl">
        <span>WebSiTE DESIGN</span>

        <AsteriskIcon />

        <span>APp DEVELOPMENT</span>
      </div>

      {/* Descripción */}
      <p className="mb-8 max-w-2xl text-center text-justify text-xs leading-relaxed tracking-wide md:text-base">
        ESTUDIO CREATIVO INDEPENDIENTE QUE IMPULSA EL CRECIMIENTO DE MARCAS A
        TRAVÉS DE BRANDING ESTRATÉGICO Y DESARROLLO WEB. FUSIONAMOS DISEÑO Y
        TECNOLOGÍA PARA CREAR EXPERIENCIAS DIGITALES SIGNIFICATIVAS QUE CONECTAN
        CON EMPRENDEDORES Y EMPRESAS VISIONARIAS.
      </p>

      {/* Botón */}
      <button className="border border-white px-8 py-2 text-sm text-white transition hover:bg-white hover:text-[#8b8460]">
        SERVICIOS
      </button>
    </section>
  );
};
