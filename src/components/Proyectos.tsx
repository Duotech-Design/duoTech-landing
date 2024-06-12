import GenericButton from "./ui/Buttons/GenericButton";
import proyectosImage from "/proyectosImage.png";

export const Proyectos = () => {
  return (
    <section id="proyectos" className="container flex flex-col py-24 sm:py-24">
      <div className="w-1/4 text-xl">
        <h1> PROYECTOS </h1>
      </div>

      <div className="relative w-full md:w-3/4 mt-6 md:mt-0">
        <img
          src={proyectosImage}
          className="object-cover h-[400px] w-full rounded-sm"
          alt="Nuestros Proyectos"
        />
        <div className="flex items-center mt-6">
          <div className="flex-grow">
            <p className="text-sm md:text-lg">PAG. WEB EMPRESARIAL / 2024</p>
            <p className="text-sm md:text-lg mt-2 md:mt-4">WE ONE</p>
          </div>
          <GenericButton title="Ver proyecto" />
        </div>
      </div>
    </section>
  );
};
