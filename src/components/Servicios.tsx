import GenericButton2 from "./ui/Buttons/GenericButton2";
import servicios from "/servicios.jpg";

export const Servicios = () => {
  return (
    <section id="servicios" className="container space-y-8 mt-8">
      <h1 className="text-3xl md:text-5xl text-center md:text-left">
        Construyes negocios, juntos los transformamos.
      </h1>
      <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
        <div className="flex flex-col justify-start gap-8 w-full md:w-1/2">
          <p className="roboto-Font text-base md:text-xl">
            No sabes por donde empezar, te ayudamos.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center mt-8 space-y-8 md:space-y-0 md:flex-row md:items-start">
        <div className="w-full md:w-1/4 py-2 px-4 text-sm md:text-base">
          <a href="https://wa.me/528122043750?text=Quiero%20más%20información">
            <GenericButton2 title="PONTE EN CONTACTO" />
          </a>
        </div>
        <div className="w-full grid grid-cols-2 gap-4 px-3 mt-3 md:w-1/2">
          <div>
            <span className="block md:inline">TE AYUDAMOS A</span>
          </div>
          <div className="flex flex-wrap w-full md:w-3/4">
            <div className="w-full">GENERAR CONFIANZA</div>
            <div className="w-full">CREAR MEMORABILIDAD</div>
            <div className="w-full">DISRUPTIR CATEGORÍAS</div>
            <div className="w-full">AUMENTAR VISIBILIDAD</div>
          </div>
        </div>
        <div className="object-cover h-[400px] w-auto  rounded-sm">
          <img
            src={servicios}
            className="object-contain h-[300px] md:h-[400px] w-auto rounded-sm opacity-75"
            alt="Hero"
          />
        </div>
      </div>

      <div className="mt-8 md:mt-8">
        <h1 className="text-3xl md:text-5xl text-center md:text-left">
          Te ayudamos a destacar para que no te veas como los demás.
        </h1>
      </div>
    </section>
  );
};
