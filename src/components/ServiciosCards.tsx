import imageCard2 from "/imageCard2.jpg";
import imageCard from "/imageCard.png";
import GenericButton2 from "./ui/Buttons/GenericButton2";
import { useTranslation } from "react-i18next";
// Interface de propiedades de servicios
interface ServiciosProps {
  title: string;
  description: string;
  image: string;
}

// Definición de servicios


// Interface de propiedades de cotización
interface CotizacionProps {
  title: string;
  popular: number;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

export const ServiciosCards = () => {
  const { t } = useTranslation("global");
  const pricingList: CotizacionProps[] = [
    {
      title: "ONE PAGE WEBSITE",
      popular: 0,
      price: 0,
      description: t("services_cards.card_1.description"),
      buttonText: "Get Started",
      benefitList: [
        t("services_cards.card_1.benefistList.benefit_1"),
        t("services_cards.card_1.benefistList.benefit_2"),
        t("services_cards.card_1.benefistList.benefit_3"),
        t("services_cards.card_1.benefistList.benefit_4"),
        t("services_cards.card_1.benefistList.benefit_5"),
        t("services_cards.card_1.benefistList.benefit_6"),
        t("services_cards.card_1.benefistList.benefit_7"),
        t("services_cards.card_1.benefistList.benefit_8"),
      ],
    },
    {
      title: "LANDING PAGE",
      popular: 1,
      price: 5,
      description: t("services_cards.card_2.description"),
      buttonText: "Get Started",
      //buttonText: "Start Free Trial",
      benefitList: [
        t("services_cards.card_2.benefistList.benefit_1"),
        t("services_cards.card_2.benefistList.benefit_2"),
        t("services_cards.card_2.benefistList.benefit_3"),
        t("services_cards.card_2.benefistList.benefit_4"),
        t("services_cards.card_2.benefistList.benefit_5"),
        t("services_cards.card_2.benefistList.benefit_6"),
        t("services_cards.card_2.benefistList.benefit_7"),
        t("services_cards.card_2.benefistList.benefit_8"),
      ],
    },
  ];
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
  return (
    <section id="servicios" className="container py-8 space-y-8 h-[1000px]">
      <p className="text-lg md:text-xl text-muted-foreground mx-auto lg:mx-0 text-center roboto-Font mb-8">
      {t("services_cards.title")}
      </p>
      <div className="flex flex-col md:flex-row md:justify-center md:space-x-8 space-y-4 md:space-y-0">
        {features.map((feature, index) => {
          const pricing = pricingList.find(
            (item) => item.title.toUpperCase() === feature.title
          );
          return (
            <div key={index} className="flip-card w-full h-[450px] md:h-[600px] md:w-1/2">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-white">
                  <img
                    className="contrast-50 w-full h-48 md:h-[450px] object-cover rounded-t-lg"
                    src={feature.image}
                    alt={feature.title}
                  />
                   <div className="px-6 py-4 text-left mb-5">
                    <div className="font-bold text-xl mb-2">
                      {feature.title}
                    </div>
                    <p className=" text-gray-700 roboto-Font text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <div className="flip-card-back p-6 flex flex-col justify-center items-center bg-gray-800 text-white rounded-lg">
                  <h1 className="text-lg md:text-xl font-bold mb-4">
                    {pricing?.title}
                  </h1>
                  <p className="text-sm md:text-base mb-4">
                    {pricing?.description}
                  </p>
                  <ul className="list-none mb-4">
                    {pricing?.benefitList.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm md:text-base">
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
                    <GenericButton2 title={t("services_cards.button")} />
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