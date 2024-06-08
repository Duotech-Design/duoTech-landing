import GenericButton2 from "./ui/Buttons/GenericButton2";
import servicios from "/servicios.png"

export const Servicios = () => {
  return (
    <section id="servicios" className="container space-y-8">
      <div className="flex flex-col! justify-between">
        <div className="flex flex-col justify-start gap-3">
          <h1 className="text-5xl">
            Construyes negocios, juntos los transformamos.
          </h1>
          <p className="roboto-Font">
            No sabes por donde empezar, te ayudamos.
          </p>
          <div>
            <GenericButton2 title="PONTE EN CONTACTO" />
          </div>
        </div>
        <div>
          <img
            src={servicios}
            className="object-cover h-[350px] w-auto rounded-sm"
            alt="Hero"
          />
        </div>
      </div>

      <div className="flex flex-col!">
        <div className="w-2/4"></div>
        <div className="w-full grid grid-cols-2 py-8 px-3">
          <div>
            <span>TE AYUDAMOS A </span>
          </div>
          <div className="flex flex-wrap w-3/4">
            <div>GENERAR CONFIANZA</div>
            <div>CREAR MEMORABILIDAD</div>
            <div>DISRUPTIR CATEGORÍAS</div>
            <div>AUMENTAR VISIBILIDAD</div>
          </div>
        </div>
        <div className="w-3/4"></div>
      </div>

      <div>
        <h1 className="text-5xl">
          Te ayudamos a destacar para que no te veas como los demás.
        </h1>
      </div>
    </section>
  );
};
