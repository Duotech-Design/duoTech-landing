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
export const ServiciosCards = () => {
  return (
    <section id="servicios" className="container py-6 space-y-8">
      <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
        Escoge la mejor opcion para tu negocio.
      </p>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src="/imageCard.png"
          alt="Sunset in the mountains"
        />

        <div className="px-6 py-4">
         
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
          <div className="font-bold text-xl mb-2">ONE PAGE WEBSITE</div>
        </div>
       
      </div>
    </section>
  );
};
