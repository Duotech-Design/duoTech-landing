import { motion } from "framer-motion";

import imageCard2 from "/imageCard2.png";
import imageCard from "/imageCard.png";
//import GenericButton2 from "./ui/Buttons/GenericButton2";

// Interface de propiedades de servicios
interface ServiciosProps {
  title: string;
  description: string;
  image: string;
}

// Definición de servicios
const features: ServiciosProps[] = [
  {
    title: "ONE PAGE WEBSITE",
    description:
      " La primera impresión es crucial.  Nuestro servicio de one page web garantiza una presentación impactante y efectiva desde el primer vistazo.",
    image: imageCard,
  },
  {
    title: "LANDING PAGE",
    description:
      "Proporcionamos a tu negocio un lenguaje gráfico unificado y auténtico que conecta con tu audiencia en todos los puntos de contacto.",
    image: imageCard2,
  },
];

export const ServiciosCards = () => {
  return (
    <section id="servicios" className="container py-6 space-y-8">
      <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0 text-center roboto-Font">
        Escoge la mejor opción para tu negocio.
      </p>
      <div className="flex justify-center space-x-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="max-w-sm rounded overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <img className="w-full" src={feature.image} alt={feature.title} />
            {feature.title === "LANDING PAGE" && (
              <div className="absolute top-0 left-0 bg-black bg-opacity-50 text-white px-2 py-1 m-2 rounded-sm">
                Popular
              </div>
            )}
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{feature.title}</div>
              <p className="text-gray-700 roboto-Font">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// Código del componente principal


