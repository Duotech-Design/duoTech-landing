import React from "react";
import GenericButton from "./ui/Buttons/GenericButton";
import Messenger from "./Messenger";
import { useInView } from 'react-intersection-observer';

export const Hero: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="flex justify-center items-center h-[700px] mb-14 relative">
      <div className="flex flex-col justify-center items-center">
        <main className="mt-96 text-center font-medium">
          <div className="content">
            <svg width="0" height="0">
              <clipPath id="clip-2">
                <text x="0ch" y="50%" dominant-baseline="middle" text-anchor="middle" className="font-2 size-3">D</text>
                <text x="1ch" y="50%" dominant-baseline="middle" text-anchor="middle" className="font-2 size-3">U</text>
                <text x="2ch" y="50%" dominant-baseline="middle" text-anchor="middle" className="font-2 size-3">O</text>
                <text x="3ch" y="50%" dominant-baseline="middle" text-anchor="middle" className="font-2 size-3">T</text>
                <text x="4ch" y="50%" dominant-baseline="middle" text-anchor="middle" className="font-2 size-3">E</text>
                <text x="5ch" y="50%" dominant-baseline="middle" text-anchor="middle" className="font-2 size-3">C</text>
                <text x="6ch" y="50%" dominant-baseline="middle" text-anchor="middle" className="font-2 size-3">H</text>
              </clipPath>
            </svg>
            <div
              ref={ref}
              className={`poster ${inView ? "visible" : ""}`}
              style={{ clipPath: "url(#clip-2)" }}
            >
              <div
                className="poster__inner"
                style={{ backgroundImage: "url('/fondo1.svg')" }}
              ></div>
            </div>
          </div>
        </main>
        <span className="mt-8 text-base flex justify-center md:text-xl">
          Transformando <Messenger text="ideas" /> en experiencias{" "}
          <Messenger text="digitales." />
        </span>
        <span className="md:text-xl text-base">
          Donde el <Messenger text="diseño" /> encuentra la{" "}
          <Messenger text="tecnología." />
        </span>
        <div className="space-y-4 md:space-y-0 md:space-x-4 justify-center mt-8">
          <a href="/#cotiza">
            <GenericButton title="Cotiza tu proyecto" />
          </a>
        </div>
      </div>
      <div className="shadow"></div>
    </section>
  );
};
