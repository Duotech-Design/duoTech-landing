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
      "La primera impresión es crucial. Nuestro servicio de one page web garantiza una presentación impactante y efectiva desde el primer vistazo.",
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
      "Una pag. con efecto parallax. Solución web eficiente que condensa toda la información esencial de tu negocio en una única página, ideal para proyectos y promociones puntuales, ofreciendo una experiencia de navegación directa y concisa para tus visitantes.",
    buttonText: "Get Started",
    benefitList: [
      "Propuesta de diseño.",
      "Diseño responsivo (Desktop, tablet y mobile).",
      "Hasta 4 paginas",
      "Formulario de contacto personalizado.",
      "Secciones personalizadas.",
      "Links a redes sociales",
      "Links de Whatsapp.",
      "Codigo QR de tu pag,",
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
      "Pag. con 10 secciones.",
      "Propuesta de diseño.",
      "Diseño responsivo (Desktop, tablet y mobile).",
      "Formulario de contacto personalizado.",
      "Secciones personalizadas",
      "Links a redes sociales",
      "Links de Whatsapp.",
      "Codigo QR de tu pag,",
    ],
  },
];

export const ServiciosCards = () => {
  return (
    <section id="servicios" className="container py-8 space-y-8">
      <p className="text-xl text-muted-foreground mx-auto lg:mx-0 text-center roboto-Font mb-8">
        Escoge la mejor opción para tu negocio.
      </p>
      <div className="flex justify-center space-x-8 flex-wrap">
        {features.map((feature, index) => {
          const pricing = pricingList.find(
            (item) => item.title.toUpperCase() === feature.title
          );
          return (
            <div key={index} className="card-container max-w-md mb-8">
              <div className="card">
                <div className="card-content">
                  <img
                    className="w-full h-64 object-cover rounded-t-lg"
                    src={feature.image}
                    alt={feature.title}
                  />
                  <div className="px-4 py-4 text-left">
                    <div className="font-bold text-2xl mb-2">
                      {feature.title}
                    </div>
                    <p className="text-gray-700 roboto-Font text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <div className="card-hover-content p-6 bg-gray-800 text-white rounded-lg">
                  <h1 className="text-2xl font-bold mb-4">{pricing?.title}</h1>
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
