import React from "react";
import GenericButton from "./ui/Buttons/GenericButton";
import Messenger from "./Messenger";

export const Hero: React.FC = () => {
  return (
    <section className="flex justify-center h-[700px]">
      <div className="flex flex-col justify-center items-center">
        <main className="mt-96 text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="inline bg-gradient-to-r from-[#d4d3d4] to-[#879EAD] text-transparent bg-clip-text">
              TECNOLOGÍA
            </span>
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="inline bg-gradient-to-r from-[#d4d3d4] via-[#879EAD] to-[#879EAD] text-transparent bg-clip-text">
              & DISEÑO
            </span>
          </h1>
        </main>
        <span>Transformando <Messenger text="ideas"/> en experiencias <Messenger text="digitales."/> </span>
        <span>Donde el  <Messenger text="diseño"/>  encuentra la  <Messenger text="tecnología."/> </span>
        {/* <Messenger text={"Transformando ideas en experiencias digitales. "} />
        <Messenger text={"Donde el diseño encuentra la tecnología. "} />
        <Messenger text={" Innovación y creatividad en cada proyecto "} /> */}

        <div className="space-y-4 md:space-y-0 md:space-x-4 justify-center">
          <GenericButton title="Cotiza tu proyecto" />
        </div>
      </div>
      <div className="shadow"></div>
    </section>
  );
};
