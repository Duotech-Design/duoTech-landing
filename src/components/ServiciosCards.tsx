// ServiciosCards.tsx
import { useState } from "react";
import imageCard2 from "/imageCard2.jpg";
import imageCard from "/imageCard.png";
import GenericButton2 from "./ui/Buttons/GenericButton2";
import GenericButton1 from "./ui/Buttons/GenericButton";
import { useTranslation } from "react-i18next";
import { Cotiza } from "./Cotiza";

interface ServiciosProps {
  title: string;
  description: string;
  image: string;
}

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
  const [showCotiza, setShowCotiza] = useState(false);

  const handleOpenCotiza = () => {
    setShowCotiza(true);
    document.body.classList.add("modal-open");
  };

  const handleCloseCotiza = () => {
    setShowCotiza(false);
    document.body.classList.remove("modal-open");
  };

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
    {
      title: "DIGITAL INVITE",
      popular: 1,
      price: 5,
      description: t("services_cards.card_3.description"),
      buttonText: "Get Started",
      benefitList: [
        t("services_cards.card_3.benefistList.benefit_1"),
        t("services_cards.card_3.benefistList.benefit_2"),
        t("services_cards.card_3.benefistList.benefit_3"),
        t("services_cards.card_3.benefistList.benefit_4"),
        t("services_cards.card_3.benefistList.benefit_5"),
        t("services_cards.card_3.benefistList.benefit_6"),
        t("services_cards.card_3.benefistList.benefit_7"),
        t("services_cards.card_3.benefistList.benefit_8"),
      ],
    },
    {
      title: "WEB EMPRESARIAL",
      popular: 1,
      price: 5,
      description: t("services_cards.card_4.description"),
      buttonText: "Get Started",
      benefitList: [
        t("services_cards.card_4.benefistList.benefit_1"),
        t("services_cards.card_4.benefistList.benefit_2"),
        t("services_cards.card_4.benefistList.benefit_3"),
        t("services_cards.card_4.benefistList.benefit_4"),
        t("services_cards.card_4.benefistList.benefit_5"),
        t("services_cards.card_4.benefistList.benefit_6"),
        t("services_cards.card_4.benefistList.benefit_7"),
        t("services_cards.card_4.benefistList.benefit_8"),
      ],
    },
  ];

  const features: ServiciosProps[] = [
    {
      title: "LANDING PAGE",
      description: t("services_cards.card_1.description_front_card"),
      image: imageCard,
    },
    {
      title: "ECOMMERCE",
      description: t("services_cards.card_2.description_front_card"),
      image: imageCard2,
    },
    {
      title: "DIGITAL INVITE",
      description: t("services_cards.card_3.description_front_card"),
      image: imageCard2,
    },
    {
      title: "WEB EMPRESARIAL",
      description: t("services_cards.card_4.description_front_card"),
      image: imageCard2,
    },
  ];

  return (
    <>
      <section id="servicios" className="container py-8 space-y-8 min-h-[100vh] md:min-h-[830px]">
        <div className="mt-4 md:mt-8">
          <h1 className="text-3xl md:text-5xl text-justify tracking-tight">
            {t("services.subContent_6")}
          </h1>
        </div>
        <p className="text-lg md:text-xl text-muted-foreground mx-auto lg:mx-0 text-center roboto-Font mb-8">
          {t("services_cards.title")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card-container w-full h-[450px] md:h-[600px] relative">
              <img
                className="contrast-50 w-full h-full object-cover rounded-lg"
                src={feature.image}
                alt={feature.title}
              />
              <div className="card-content absolute bottom-4 left-4 text-white">
                <h2 className="text-2xl font-bold">{feature.title}</h2>
                <p className="hidden">{feature.description}</p>
                <div className="hidden buttons mt-4 space-x-2">
                  <GenericButton1 title={t("services_cards.button2")} />
                  <GenericButton2 title={t("services.button")} onClick={handleOpenCotiza} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {showCotiza && (
        <div className="fixed top-0 left-0 w-full z-[9999]">
          <Cotiza onClose={handleCloseCotiza} />
        </div>
      )}
    </>
  );
};
