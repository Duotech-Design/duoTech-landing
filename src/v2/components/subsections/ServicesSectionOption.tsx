import React from "react";
import ArrowRightIcon from "../common/ArrowRightIcon";

export const ServicesSectionOption: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-center bg-[#e5dfd5] px-6 py-16 font-sans text-[#21260D]">
      {/* Intro */}
      <div className="mb-12 w-full max-w-5xl font-ace text-base font-light leading-relaxed tracking-wide">
        <p>CREANDO SITIOS WEB, APPS Y EXPERIENCIAS DIGITALES A LA</p>
        <p>MEDIDA PARA MARCAS CON VISIÓN EN TODO EL MUNDO.</p>
      </div>

      {/* Services + Industries */}
      <div className="grid w-full max-w-5xl grid-cols-1 gap-16 text-sm md:grid-cols-2 md:text-base">
        {/* Services */}
        <div>
          <h3 className="mb-2 border-b border-black pb-1 text-sm uppercase">
            Services
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center justify-between">
              <span>WEB DEVELOPMENT</span>
              <span>
                <ArrowRightIcon />
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span>MOBILE APPS</span>
              <span>
                <ArrowRightIcon />
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span>DESIGN</span>
              <span>
                <ArrowRightIcon />
              </span>
            </li>
          </ul>
        </div>

        {/* Industries */}
        <div>
          <h3 className="mb-2 border-b border-black pb-1 text-sm uppercase">
            Industries
          </h3>
          <ul className="list-inside list-disc space-y-1">
            <li>FINTECH</li>
            <li>STARTUPS</li>
            <li>SPORTS AND FITNESS</li>
            <li>HEALTHCARE</li>
            <li>EDUCATION</li>
            <li>LOGISTICS AND TRANSPORTATION</li>
            <li>FOOD AND RESTAURANTS</li>
            <li>REAL STATE</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
