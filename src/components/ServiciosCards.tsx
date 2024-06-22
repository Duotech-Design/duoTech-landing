import imageCard2 from "/imageCard2.jpg";
import imageCard from "/imageCard.png";
import GenericButton2 from "./ui/Buttons/GenericButton2";

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
      "Una página web con efecto parallax que presenta toda la información esencial de tu negocio en una sola página. Ideal para proyectos y promociones puntuales, ofrece una navegación directa y concisa.",
    image: imageCard,
  },
  {
    title: "LANDING PAGE",
    description:
      "Proporcionamos a tu negocio un lenguaje gráfico unificado y auténtico que conecta con tu audiencia en todos los puntos de contacto.",
    image: imageCard2,
  },
];

// Interface de propiedades de cotización
interface CotizacionProps {
  title: string;
  popular: number;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: CotizacionProps[] = [
  {
    title: "ONE PAGE WEBSITE",
    popular: 0,
    price: 0,
    description:
      "Una página web con efecto parallax que presenta toda la información esencial de tu negocio en una sola página. Ideal para proyectos y promociones puntuales, ofrece una navegación directa y concisa.",
    buttonText: "Get Started",
    benefitList: [
      "Propuesta de diseño",
      "Diseño responsivo (Desktop, tablet y móvil)",
      "Hasta 4 páginas",
      "Formulario de contacto personalizado",
      "Secciones personalizadas",
      "Links a redes sociales",
      "Links de WhatsApp",
      "Código QR de tu página",
    ],
  },
  {
    title: "LANDING PAGE",
    popular: 1,
    price: 5,
    description:
      "Diseño web enfocado en captar la atención y convertir visitantes en clientes potenciales, optimizando la experiencia del usuario y destacando la propuesta de valor de tu negocio en una sola página.",
    buttonText: "Start Free Trial",
    benefitList: [
      "Página con 10 secciones",
      "Propuesta de diseño",
      "Diseño responsivo (Desktop, tablet y móvil)",
      "Formulario de contacto personalizado",
      "Secciones personalizadas",
      "Links a redes sociales",
      "Links de WhatsApp",
      "Código QR de tu página",
    ],
  },
];

export const ServiciosCards = () => {
  return (
    <section id="servicios" className="container py-8 space-y-8">
      <p className="text-xl text-muted-foreground mx-auto lg:mx-0 text-center roboto-Font mb-8">
        Escoge la mejor opción para tu negocio.
      </p>
      <div className="flex flex-wrap justify-center space-x-8 space-y-8 lg:space-y-0 lg:flex-nowrap">
        {features.map((feature, index) => {
          const pricing = pricingList.find(
            (item) => item.title.toUpperCase() === feature.title
          );
          return (
            <div
              key={index}
              className="flip-card w-full lg:w-1/3"
            >
              <div className="flip-card-inner">
                <div className="flip-card-front bg-white">
                  <img
                    className="contrast-50 w-full h-48 lg:h-96 object-cover rounded-t-lg"
                    src={feature.image}
                    alt={feature.title}
                  />
                  <div className="px-6 py-4 text-left mb-5">
                    <div className="font-bold text-xl mb-2">
                      {feature.title}
                    </div>
                    <div className="lg:hidden space-y-2"> {/* Visible solo en mobile */}
                      <GenericButton2 title="Más info" />
                      <GenericButton2 title="Contáctanos" />
                    </div>
                    <p className="hidden lg:block text-gray-700 roboto-Font text-base"> {/* Visible solo en desktop y tablet */}
                      {feature.description}
                    </p>
                  </div>
                </div>
                <div className="flip-card-back p-6 flex flex-col justify-center items-center bg-gray-800 text-white rounded-lg">
                  <h1 className="text-xl font-bold mb-4">{pricing?.title}</h1>
                  <p className="text-xl mb-4">{pricing?.description}</p>
                  <ul className="list-none mb-4">
                    {pricing?.benefitList.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-xl">
                        <img
                          src="/checkmark.svg"
                          alt="checkmark"
                          className="w-4 h-4 mr-2 mt-1"
                        />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="https://wa.me/528122043750?text=Quiero%20más%20información">
                    <GenericButton2 title="Contáctanos" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
