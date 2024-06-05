import React from "react";
import GenericButton from "./ui/Buttons/GenericButton";
import Messenger from "./Messenger";

export const Hero: React.FC = () => {
  return (
    <section className="flex justify-center h-[700px]">
      <div className="flex flex-col justify-center items-center">
        <main className="mt-96 text-center space-y-6">
          <h1 className="text-5xl md:text-9xl ">
            <span className="inline bg-gradient-to-r from-[#73726C] to-[#879EAD] text-transparent bg-clip-text">
              TECNOLOGÍA
            </span>
          </h1>
          <h1 className="text-5xl md:text-9xl ">
            <span className="inline bg-gradient-to-r from-[#73726C] via-[#879EAD] to-[#73726C] text-transparent bg-clip-text">
              & DISEÑO
            </span>
          </h1>
        </main>
        <span className="mt-3">
          Transformando <Messenger text="ideas" /> en experiencias{" "}
          <Messenger text="digitales." />
        </span>
        <span>
          Donde el <Messenger text="diseño" /> encuentra la{" "}
          <Messenger text="tecnología." />
        </span>
        <div className="space-y-4 md:space-y-0 md:space-x-4 justify-center mt-3 mb-16">
          <GenericButton  title="Cotiza tu proyecto" />
        </div>
      </div>
      <div className="shadow"></div>
    </section>
  );
};
