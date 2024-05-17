import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
               
              Nosotros
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
              Nos especializamos en diseño web y desarrollo de soluciones digitales a medida, enfocándonos exclusivamente en la creación de páginas web. Además, construimos todo el ecosistema de tu marca para mejorar la percepción y experiencia de tu audiencia, diferenciándote de la competencia, aumentando la satisfacción del usuario, fomentando la lealtad del cliente y fortaleciendo el valor de tu marca.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
