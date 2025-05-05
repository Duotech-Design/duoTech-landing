import React from "react";

export const AboutDuoTech: React.FC = () => {
  return (
    <section className="flex w-full justify-center bg-[#e5dfd5] px-6 py-16 text-[#21260D]">
      <div className="w-full max-w-5xl font-ace text-sm tracking-wide">
        {/* Título alineado a la izquierda */}
        <h3 className="mb-8 text-base font-light uppercase">
          ABOUT{"  "}
          <span className="font-other text-2xl font-semibold">DUO TECH </span>
        </h3>

        {/* Contenido centrado con ancho limitado */}
        <div className="mx-auto max-w-xl space-y-6 text-justify leading-relaxed">
          <p>
            WE ARE A CREATIVE STUDIO THAT TRANSFORMS IDEAS INTO REALITY THROUGH
            THOUGHTFUL DESIGN AND PRECISE CODE. WITH EXTENSIVE EXPERIENCE, WE
            WORK HAND IN HAND WITH OUR CLIENTS TO CAPTURE THEIR VISION AND BRING
            IT TO LIFE, CRAFTING CUSTOM WEBSITES AND APPLICATIONS THAT ARE AS
            UNIQUE AS THE PEOPLE AND BUSINESSES THEY REPRESENT.
          </p>
          <p>
            WE FOCUS ON BLENDING CREATIVE DESIGN WITH SMART DEVELOPMENT TO BUILD
            DIGITAL SOLUTIONS THAT INSPIRE AND PERFORM.
          </p>
          <p>
            WE DESIGN AND BUILD WEBSITES AND PLATFORMS THAT COMBINE SMART
            STRUCTURE WITH BEAUTIFUL DESIGN, ALWAYS ALIGNED WITH OUR CLIENTS’
            GOALS. BY UNDERSTANDING THEIR WORKFLOW, WE CREATE CUSTOM DIGITAL
            SOLUTIONS THAT SIMPLIFY OPERATIONS, ENHANCE EFFICIENCY, AND DELIVER
            REAL IMPACT.
          </p>
        </div>
      </div>
    </section>
  );
};
