import {
  Card2,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card2";
//import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";
import GenericButton2 from "./ui/Buttons/GenericButton2";
import heroImage from "/heroImage.png";

//import { buttonVariants } from "./ui/button";

interface ServiciosProps {
  title: string;
  description: string;

  image: string;
}

const features: ServiciosProps[] = [
  {
    title: "One page website",
    description:
      "Una pag. con efecto parallax. Propuesta de diseño. Diseño responsivo (Desktop, tablet y celular). Formulario de contacto personalizado. Secciones personalizadas (links a redes sociales, contenido de la empresa, imagenes, servicios, info. de contacto, codigo QR de tu pag, etc.). Links de Whatsapp.  ",
    image: image4,
  },
  {
    title: "Páginas Web Administrables",
    description:
      "Pag. con 10 secciones. Propuesta de diseño. Diseño responsivo (Desktop, tablet y celular). Formulario de contacto personalizado. Secciones personalizadas (links a redes sociales, contenido de la empresa, imagenes, servicios, info. de contacto, codigo QR de tu pag, etc.). Links de Whatsapp. ",
    image: image3,
  },
  /*{
    title: "Páginas Web Empresariales",
    description:
      "Ofrecemos servicios de páginas web empresariales diseñadas para optimizar procesos según las necesidades de cada negocio. Nuestro enfoque es crear páginas que ayuden a eficientizar operaciones internas y mejorar la productividad de la empresa, todo de manera personalizada para adaptarse a cada requerimiento específico.",
    image: image,
  },*/
];
{
  /* 
const serviciosList: string[] = [
  "Responsivos",
  "Personalizados",
  "Eficaces",
  /*"E-commerce",
  "Optimización SEO",
  "Dinamico",

  "Minimalist",
];
*/
}
export const Servicios = () => {
  return (
    <section id="servicios" className="container py-24 sm:py-32 space-y-8">
      <div className="flex flex-col! justify-between">
        <div className="flex flex-col  justify-start gap-3">
          <h1 className="text-5xl">
            {" "}
            Construyes negocios, juntos los transformamos.{" "}
          </h1>
          <h2 className="text-3xl">
            {" "}
            No sabes por donde empezar, te ayudamos.{" "}
          </h2>
          <div>
            <GenericButton2 />
          </div>
        </div>
        <div>
          <img src={heroImage} className="object-cover h-[200px] w-auto "></img>
        </div>
      </div>

      <div className="flex flex-col ">
        <div className="w-2/4 "></div>
        <div className=" grid grid-cols-2 py-8 px-3">
          <div>
            {" "}
            <span>DIGITAL </span>
          </div>
          <div className="flex flex-wrap w-1/4">
            <div>WEB DESIGN</div>
            <div>IDENTITY</div>
            <div>PROTOTYPING</div>
            <div>DEVELOPMENT</div>
            <div>STRATEGY</div>
          </div>
        </div>
      </div>

      <div>
        <h1>Te ayudamos a destacar para que no te veas como los demás.</h1>
      </div>
    </section>
  );
};
