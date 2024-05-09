import { Badge } from "./ui/badge";
import {
  Card2,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card2";
import image from "../assets/growth.png";
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
    title: "Landing Page",
    description:
      "Nos diferenciamos por nuestro enfoque personalizado y orientado a resultados en la creación de landing pages. Cada página que diseñamos es única y totalmente adaptada a las necesidades y metas específicas de nuestros clientes. Desde el diseño hasta el contenido y las llamadas a la acción, nos aseguramos de que cada elemento refleje la identidad y la propuesta de valor de tu negocio de manera efectiva.",
    image: image4,
  },
  {
    title: "Páginas Web Administrables",
    description:
      "Páginas web administrables ideales para aquellos que desean ofrecer servicios de venta en línea. Creamos o editamos páginas en plataformas como WordPress, Squarespace y Shopify, asegurando que cada aspecto sea completamente personalizable. Nuestro enfoque se centra en alinear la página web lo más posible con la identidad de la empresa, con el objetivo de atraer más clientes y potenciar las ventas.",
    image: image3,
  },
  {
    title: "Páginas Web Empresariales",
    description:
      "Ofrecemos servicios de páginas web empresariales diseñadas para optimizar procesos según las necesidades de cada negocio. Nuestro enfoque es crear páginas que ayuden a eficientizar operaciones internas y mejorar la productividad de la empresa, todo de manera personalizada para adaptarse a cada requerimiento específico.",
    image: image,
  },
  {
    title: "Envio de correos??",
    description:
      "???.",
    image: image,
  },
];

const serviciosList: string[] = [
  "Responsivos",
  "Personalizados",
  "Eficaces",
  "Pricing",
  "Contact form",
  "Our team",
  "Responsive design",
  "Newsletter",
  "Minimalist",
];

export const Servicios = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
       CONOCE NUESTROS {" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          SERVICIOS
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {serviciosList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
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
          <GenericButton2/>
         {/*} <Button className="w-full md:w-1/3">Get Started</Button>
*/}
          {/*<a
            href="https://github.com/leoMirandaa/shadcn-landing-page.git"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
          </a>*/ }
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
