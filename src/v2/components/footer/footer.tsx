import React from "react";
import { AsteriskIcon } from "../common/AsteriskIcon";
import { FacebookIcon } from "../common/FacebookIcon";
import { InstagramIcon } from "../common/InstagramIcon";
import { PinterestIcon } from "../common/PinterestIcon";
import SmilleIcon from "../common/SmileIcon";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#6E6842] px-6 py-6 font-ace text-xs text-white md:text-base">
      <div className="mx-auto max-w-7xl space-y-10">
        {/* 1. Encabezado: GET IN alineado izquierda */}
        <div>
          <h2 className="text-left uppercase tracking-wide md:text-2xl">
            GET IN
          </h2>
        </div>

        {/* 2. Contenido central: centrado */}
        <div className="space-y-1 text-center text-sm md:text-base">
          <p className="leading-none">
            WE’RE ALL ABOUT TEAMING UP WITH AWESOME PEOPLE AND IDEAS.
          </p>
          <p className="leading-none">
            IF YOU’RE UP TO SOMETHING COOL, WE’RE ALL EARS. LET’S CONNECT!
          </p>
          <div className="py-1"></div>
          <p className="text-center text-sm leading-8 tracking-wide md:text-base">
            duotechdesign@gmail.com
          </p>
        </div>
        <div className="flex justify-center">
          <SmilleIcon />
        </div>
        {/* 3. Parte inferior: social + touch */}
        <div className="flex w-full flex-wrap items-center justify-between gap-y-4 sm:gap-y-0">
          {/* Social icons */}
          <div className="flex gap-4">
            <a
              href="https://pinterest.com"
              aria-label="Pinterest"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PinterestIcon />
            </a>
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </a>
          </div>

          {/* TOuCH */}
          <div className="flex items-center gap-2 font-ace text-white">
            <AsteriskIcon />
            <span className="text-lg uppercase leading-none tracking-wide">
              ToUCH
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
