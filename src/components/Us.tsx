import Messenger from "./Messenger";
import imageUs from "/imageUs.png"



export const Us = () => {
  return (
    <section className="container flex flex-col! py-24 sm:py-24">
      <div className="w-2/4">
        <h1> NOSOTROS </h1>
      </div>
      <div className="w-full ">
        <div className="px-3">
          <p className=" roboto-Font">
            {" "}
            Nos especializamos en diseño web y desarrollo de soluciones
            digitales a medida, enfocándonos exclusivamente en la creación de
            páginas web. Además, construimos todo el ecosistema de tu marca para
            mejorar la percepción y experiencia de tu audiencia, diferenciándote
            de la competencia, aumentando la satisfacción del usuario,
            fomentando la lealtad del cliente y fortaleciendo el valor de tu
            marca.
          </p>
        </div>
        <div className="w-full grid grid-cols-2 py-8 px-3">
          <div>
            {" "}
            <span>DIGITAL </span>
          </div>
          <div className="flex flex-wrap w-2/4 flex-col ">
            <div><Messenger text="WEB DESIGN" /></div>
            <div>IDENTITY</div>
            <div>PROTOTYPING</div>
            <div><Messenger text="DEVELOPMENT" /></div>
            <div>STRATEGY</div>
          </div>
        </div>
      </div>
      <div className="w-3/4">
        <img src={imageUs} className="object-cover h-[400px] w-auto  rounded-sm"></img>
      </div>
    </section>
  );
};
