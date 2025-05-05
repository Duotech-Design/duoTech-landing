import React from "react";

export const MobilePresenceDetails: React.FC = () => {
  return (
    <section className="mb-3 flex w-full flex-col items-center bg-[#e5dfd5] px-6 font-sans text-[#21260D]">
      {/* Bullets */}
      <div className="mb-16 grid w-full max-w-5xl grid-cols-1 gap-8 text-sm md:grid-cols-2">
        <ul className="list-inside list-disc space-y-2">
          <li>FINTECH</li>
          <li>STARTUPS</li>
          <li>DEPORTE Y FITNESS</li>
        </ul>
        <ul className="list-inside list-disc space-y-2">
          <li>EDTECH</li>
          <li>TRANSPORTE</li>
          <li>RESTAURANTES Y ALIMENTOS</li>
          <li>INMOBILIARIO</li>
        </ul>
      </div>

      <div className="grid w-full max-w-5xl grid-cols-1 gap-8 bg-[#e5dfd5] px-6 md:grid-cols-2 md:items-center">
        {/* Imagen alineada a la izquierda */}
        <div className="flex justify-start"></div>

        <div className="flex justify-center md:justify-start">
          <button className="border border-[#21260D] px-6 py-1 text-xs tracking-wider text-[#21260D] transition hover:bg-[#21260D] hover:text-white md:text-base">
            ENQUIRE NOW
          </button>
        </div>
      </div>
    </section>
  );
};
