import  { useState, useRef } from "react";
import imageCard2 from "/imageCard2.jpg";
import imageCard from "/imageCard.png";
import GenericButton2 from "./ui/Buttons/GenericButton2";
import { useTranslation } from "react-i18next";
import { Cotiza } from "./Cotiza";
import { motion, useScroll } from "framer-motion";

// Interface de propiedades de servicios
interface ServiciosProps {
  title: string;
  description: string;
  image: string;
}

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
  const ref = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: ref });
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
    }, {
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
  ];

  const features: ServiciosProps[] = [
    {
      title: "ONE PAGE WEBSITE",
      description: t("services_cards.card_1.description_front_card"),
      image: imageCard,
    },
    {
      title: "LANDING PAGE",
      description:
      t("services_cards.card_2.description_front_card"),
      image: imageCard2,
    },
    {
      title: "ONE PAGE WEBSITE",
      description: t("services_cards.card_1.description_front_card"),
      image: imageCard,
    },
    {
      title: "LANDING PAGE",
      description:
      t("services_cards.card_2.description_front_card"),
      image: imageCard2,
    },
  ];

  return (
    <>
      <section id="servicios" className="container py-8 space-y-8 h-[1130px] md:h-[830px]">
        <div className="mt-4 md:mt-8">
          <h1 className="text-3xl md:text-5xl text-justify tracking-tight">
            {t("services.subContent_6")}
          </h1>
        </div>
        <p className="text-lg md:text-xl text-muted-foreground mx-auto lg:mx-0 text-center roboto-Font mb-8">
          {t("services_cards.title")}
        </p>
        <div ref={ref} className="lista flex flex-col md:flex-row md:justify-center md:space-x-8 space-y-4 md:space-y-0">
          {features.map((feature, index) => {
            const pricing = pricingList.find(
              (item) => item.title.toUpperCase() === feature.title
            );
            return (
              <div key={index} className="listaHijo flip-card w-full h-[450px] md:h-[600px] md:w-1/2">
                <div className="flip-card-inner group">
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
                      <p className=" text-gray-700 roboto-Font text-base text-justify ">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  <div className="flip-card-back p-6 flex flex-col justify-center items-center bg-gray-800 text-white rounded-lg">
                    <h1 className="text-lg md:text-xl font-bold mb-4 group-hover:md:text-3xl">
                      {pricing?.title}
                    </h1>
                    <p className="text-sm md:text-base mb-4 group-hover:md:text-xl">
                      {pricing?.description}
                    </p>
                    <ul className="list-none mb-4">
                      {pricing?.benefitList.map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-sm md:text-base group-hover:md:text-xl">
                          <img
                            src="/checkmark.svg"
                            alt="checkmark"
                            className="w-4 h-4 mr-2 mt-1"
                          />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <GenericButton2
                      title={t("services_cards.button")}
                      onClick={handleOpenCotiza}
                      className="group-hover:md:py-3 group-hover:md:px-5 group-hover:md:text-xl"
                    />
                  </div>
                </div>
              </div>
            );
          })}
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
