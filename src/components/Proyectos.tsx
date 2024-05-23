import proyectosImage from "/proyectosImage.png";

export const Proyectos = () => {
  return (
    <section className="container flex flex-col! py-24 sm:py-24">
      <div className="w-1/4">
        <h1> PROYECTOS </h1>
      </div>

      <div className="relative w-3/4">
        <img
          src={proyectosImage}
          className="object-cover h-[600px] w-auto  rounded-sm"
          alt="Nuestros Proyectos"
        ></img>
        <div className="absolute bottom-0 left-0 mb-4 ml-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded-sm">
          <p className="text-sm">PAG. WEB EMPRESARIAL / 2024</p>
        </div>
      </div>
    </section>
  );
};
