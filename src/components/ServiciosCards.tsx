import imageCard2 from "/imageCard2.png";
import imageCard from "/imageCard.png";

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

export const ServiciosCards = () => {
  return (
    <section id="servicios" className="container py-6 space-y-8">
      <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0 text-center roboto-Font">
        Escoge la mejor opción para tu negocio.
      </p>
      <div className="flex justify-center space-x-8">
        {features.map((feature, index) => (
          <div key={index} className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front bg-white">
                <img className="w-full h-64 object-cover rounded-t-lg" src={feature.image} alt={feature.title} />
                <div className="px-6 py-4 text-left">
                  <div className="font-bold text-xl mb-2">{feature.title}</div>
                  <p className="text-gray-700 roboto-Font">{feature.description}</p>
                </div>
              </div>
              <div className="flip-card-back p-6 flex justify-center items-center">
                <h1 className="text-xl font-bold text-white">{feature.title}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
