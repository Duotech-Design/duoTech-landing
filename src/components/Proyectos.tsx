
import proyectosImage from "/proyectosImage.png"

export const Proyectos = () => {
  return (
    <section className="container flex flex-col! py-24 sm:py-24">
      <div className="w-2/4">
        <h1> NOSOTROS </h1>
      </div>
    
      <div className="w-3/4">
        <img src={proyectosImage} className="object-cover h-[400px] w-auto  rounded-sm"></img>
      </div>
    </section>
  );
};
