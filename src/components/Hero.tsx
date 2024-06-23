import React, { useState, useEffect, useRef } from "react";
import AnimatedButton from "./ui/Buttons/AnimatedButton";
import Messenger from "./Messenger";
import { Cotiza } from "./Cotiza";
import { useTranslation } from "react-i18next";

export const Hero: React.FC = () => {
  const { t } = useTranslation("global");
  const [showCotiza, setShowCotiza] = useState(false);
  const [titleText, setTitleText] = useState("DUO");
  const [subtitleText, setSubtitleText] = useState("TECH");
  const containerRef = useRef<HTMLDivElement>(null);

  const handleOpenCotiza = () => {
    setShowCotiza(true);
    document.body.classList.add("modal-open");

  };

  const handleCloseCotiza = () => {
    setShowCotiza(false);
    document.body.classList.remove("modal-open");
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 80) { // Cambia este valor según sea necesario para ajustar el comportamiento del scroll
        setTitleText(t("hero.title"));
        setSubtitleText(t("hero.subtitle"));
      } else {
        setTitleText("DUO");
        setSubtitleText("TECH");
      }

      const container = containerRef.current;
      if (container) {
        container.style.transform = `translateX(${-scrollTop}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [t]);

  return (
    <>
      <section className="flex justify-center h-[700px] mb-14">
        <div className="flex flex-col justify-center items-center">
          <main className="mt-96 text-center  font-medium ">
            <h1 className="text-6xl md:text-8xl lg:text-9x1">
              <span className=" inline bg-gradient-to-r from-[#73726C] to-[#879EAD] text-transparent bg-clip-text">
                {t("hero.title")}
              </span>
            </h1>
            <h1 className="text-6xl md:text-8xl lg:text-9x1">
              <span className="  inline bg-gradient-to-r from-[#73726C] via-[#879EAD] to-[#73726C] text-transparent bg-clip-text">
                {t("hero.subtitle")}
              </span>
            </h1>
          </main>
          <span className="mt-8 text-base flex justify-center md:text-xl">
            {t("hero.content_1")}&nbsp;<Messenger text={t("hero.content_2")} />&nbsp;{t("hero.content_3")}&nbsp;
            <Messenger text={t("hero.content_4")} />
          </span>
          <span className="md:text-xl text-base">
            {t("hero.content_5")}&nbsp;<Messenger text={t("hero.content_6")} /> {t("hero.content_7")}{" "}
            <Messenger text={t("hero.content_8")} />
          </span>
          <div className="space-y-4 md:space-y-0 md:space-x-4 justify-center mt-8">
            <AnimatedButton title={t("hero.button")} onClick={handleOpenCotiza} />
          </div>
        </div>
        <div className="shadow"></div>
        {showCotiza && <div className="fixed top-0 left-0 w-full z-50">
          <Cotiza onClose={handleCloseCotiza} />
        </div>}
      </section>
    </>
  );
};
