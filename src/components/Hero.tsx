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
  };

  const handleCloseCotiza = () => {
    setShowCotiza(false);
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
      {!showCotiza ? (
        <section className="flex justify-center h-[700px] mb-14">
          <div className="flex flex-col justify-center items-center w-full">
            <main className="mt-96 text-center font-medium w-full px-4 md:px-0">
              <div id="scroll-container" ref={containerRef} className="w-full">
                <div className="scroll-text w-full">
                  <h2 className="i-05 text-4xl md:text-6xl lg:text-8xl">
                    <span className="inline bg-gradient-to-r from-[#73726C] to-[#879EAD] text-transparent bg-clip-text">
                      {titleText}
                    </span>
                  </h2>
                  <h2 className="i-05 text-4xl md:text-6xl lg:text-8xl" style={{ marginTop: '2px' }}>
                    <span className="inline bg-gradient-to-r from-[#73726C] via-[#879EAD] to-[#73726C] text-transparent bg-clip-text">
                      {subtitleText}
                    </span>
                  </h2>
                </div>
              </div>
            </main>
            <span className="mt-8 text-base flex justify-center md:text-xl text-center w-full">
              {t("hero.content_1")}&nbsp;<Messenger text={t("hero.content_2")} />&nbsp;{t("hero.content_3")}&nbsp;
              <Messenger text={t("hero.content_4")} />
            </span>
            <span className="md:text-xl text-base text-center w-full">
              {t("hero.content_5")}&nbsp;<Messenger text={t("hero.content_6")} /> {t("hero.content_7")}{" "}
              <Messenger text={t("hero.content_8")} />
            </span>
            <div className="space-y-4 md:space-y-0 md:space-x-4 justify-center mt-8">
              <AnimatedButton title={t("hero.button")} onClick={handleOpenCotiza} />
            </div>
          </div>
          <div className="shadow"></div>
        </section>
      ) : (
        <Cotiza onClose={handleCloseCotiza} />
      )}
    </>
  );
};
