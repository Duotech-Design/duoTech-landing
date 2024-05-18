import heroImage from "/heroImage.png";

export const Us = () => {
  return (
    <section className="w-full grid grid-cols-3 py-24 sm:py-8 gap-4">
      <div className="px-8  col-span-1 ">
        <h1> NOSOTROS </h1>
      </div>
      <div className="col-span-1  ">
        <div>
          <p>
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
        <div className="w-full grid grid-cols-2 ">
          <div>
            {" "}
            <span>DIGITAL </span>
          </div>
          <div>
            <span>WEB DESIGN</span>
          </div>
        </div>
      </div>
      <div className=" col-span-1  ">
        <img src={heroImage} className="object-cover h-[300px] w-auto "></img>
      </div>
    </section>
  );
};
