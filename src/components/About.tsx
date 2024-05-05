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
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Sobre{" "}
                </span>
              nosotros
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
              En Duotech, somos expertos en diseño web y desarrollo de soluciones digitales a medida para empresas de todos los tamaños. Con más de una década de experiencia en el mercado, nos hemos especializado en crear páginas web personalizadas que no solo impresionan visualmente, sino que también optimizan los procesos internos de tu empresa.

Sabemos que cada negocio es único, por eso nos enfocamos en comprender a fondo tus necesidades y objetivos para diseñar una estrategia digital que se adapte perfectamente a ti. 
<span>Ya sea que necesites una página web orientada a la venta, herramientas de automatización para simplificar tus operaciones o una plataforma de e-commerce eficiente, estamos aquí para hacerlo posible.

Nuestro equipo de profesionales altamente capacitados combina habilidades técnicas con un enfoque creativo para ofrecerte soluciones que marcan la diferencia. Nos comprometemos a trabajar de cerca contigo, desde la conceptualización hasta la implementación, para garantizar que tu presencia en línea sea efectiva y exitosa.
Trabajando juntos, podemos impulsar tu negocio hacia nuevas alturas en el mundo digital.
  </span>
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
