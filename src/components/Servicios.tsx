import GenericButton2 from "./ui/Buttons/GenericButton2";
import servicios from "/servicios.jpg";

export const Servicios = () => {
  return (
    <section id="servicios" className="container space-y-8 mt-8 ">
      <h1 className="text-5xl">
        Construyes negocios, juntos los transformamos.
      </h1>
      <div className="flex flex-col! justify-between  ">
        <div className="flex flex-col justify-start gap-8 ">
          <p className="roboto-Font text-xl">
            No sabes por donde empezar, te ayudamos.
          </p>
        </div>
      </div>

      <div className="flex flex-col!">
        <div className="w-2/4">
          {" "}
          <a href="https://wa.me/528122043750?text=Quiero%20más%20información">
            <GenericButton2 title="PONTE EN CONTACTO" />
          </a>
        </div>
        <div className="w-full grid grid-cols-2  px-3 mt-3">
          <div>
            <span>TE AYUDAMOS A </span>
          </div>
          <div>
            <div className="flex flex-wrap w-3/4">
              <div>GENERAR CONFIANZA</div>
              <div>CREAR MEMORABILIDAD</div>
              <div>DISRUPTIR CATEGORÍAS</div>
              <div>AUMENTAR VISIBILIDAD</div>
            </div>
          </div>
        </div>
        <div className="w-3/4 flex  justify-end">
          {" "}
          <img
            src={servicios}
            className="object-contain h-[400px] w-auto  rounded-sm "
            alt="Hero "
          />
        </div>
      </div>

      <div>
        <h1 className="text-5xl">
          Te ayudamos a destacar para que no te veas como los demás.
        </h1>
      </div>
    </section>
  );
};
