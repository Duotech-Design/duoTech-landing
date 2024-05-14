import { Badge } from "./ui/badge";
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
import GenericButton from "./ui/Buttons/GenericButton";
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

const serviciosList: string[] = [
  "Responsivos",
  "Personalizados",
  "Eficaces",
  /*"E-commerce",*/
  "Optimización SEO",
  "Dinamico",

  "Minimalist",
];

export const Servicios = () => {
  return (
    <section id="servicios" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        CONOCE NUESTROS{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          SERVICIOS
        </span>
      </h2>
      <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
      Escoge la mejor opcion para tu negocio.
        </p>
        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
        No sabes por donde empezar, contactanos.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <GenericButton/>
         {/*} <Button className="w-full md:w-1/3">Get Started</Button>
*/}
          
        </div>
      <div className="flex flex-wrap md:justify-center gap-4">
        {serviciosList.map((feature: string) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm">
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: ServiciosProps) => (
          <Card2 key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>
            <div className="flex justify-center">
              <GenericButton2 />
              {/*} <Button className="w-full md:w-1/3">Get Started</Button>
               */}
              {/*<a
            href="https://github.com/leoMirandaa/shadcn-landing-page.git"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
          </a>*/}
            </div>
            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card2>
        ))}
      </div>
    </section>
  );
};
