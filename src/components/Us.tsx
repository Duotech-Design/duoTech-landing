import heroImage from "/heroImage.png";

export const Us = () => {
  return (
    <section  className="w-full flex flex-col  py-24 sm:py-8">
      <div className=" flex-1 ">
        <h1> NOSOTROS </h1>
      </div>
      <div className=" flex-1 ">
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
        <div>
          {" "}
          <span>DIGITAL </span>
        </div>
        <div>
          <span>WEB DESIGN</span>
        </div>
      </div>
      <div className=" flex-1 ">
        <img src={heroImage} className="object-cover h-[600px] w-auto "></img>
      </div>
    </section>
  );
};
