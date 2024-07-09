import React, { useState, useEffect } from "react";
import AnimatedButton from "./ui/Buttons/AnimatedButton";
import Messenger from "./Messenger";
import { Cotiza } from "./Cotiza";
import { useTranslation } from "react-i18next";

export const Hero: React.FC = () => {
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

  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.style.setProperty(
        "--scroll-offset",
        `${window.scrollY}`,
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className="mb-14 flex justify-center overflow-hidden">
        <div className="mt-96 flex flex-col items-center justify-center">
          <main className="headings text-center font-medium">
            <h1 className="animated-subtitle lg:text-9x1 first-heading text-5xl md:text-8xl">
              <span className="inline bg-gradient-to-r from-[#73726C] to-[#879EAD] bg-clip-text text-transparent">
                {t("hero.title")}
              </span>
            </h1>
            <h1 className="animated-subtitle lg:text-9x1 second-heading text-5xl md:text-8xl">
              <span className="inline bg-gradient-to-r from-[#73726C] via-[#879EAD] to-[#73726C] bg-clip-text text-transparent">
                {t("hero.subtitle")}
              </span>
            </h1>
          </main>
          <span className="mt-8 flex justify-center text-base md:text-xl">
            {t("hero.content_1")}&nbsp;
            <Messenger text={t("hero.content_2")} />
            &nbsp;{t("hero.content_3")}&nbsp;
            <Messenger text={t("hero.content_4")} />
          </span>
          <span className="text-base md:text-xl">
            {t("hero.content_5")}&nbsp;
            <Messenger text={t("hero.content_6")} /> {t("hero.content_7")}{" "}
            <Messenger text={t("hero.content_8")} />
          </span>
          <div className="mt-8 justify-center space-y-4 md:space-x-4 md:space-y-0">
            <AnimatedButton
              title={t("hero.button")}
              onClick={handleOpenCotiza}
            />
          </div>
        </div>
        <div className="shadow"></div>
      </section>
      {showCotiza && (
        <div className="fixed left-0 top-0 z-[9999] w-full">
          <Cotiza onClose={handleCloseCotiza} />
        </div>
      )}
      <img src="/5.png" alt="Floating Object" className="flier-1" />
      <img src="/2.png" alt="Floating Object" className="flier-2" />
      <img src="/4.png" alt="Floating Object" className="flier-3" />
    </>
  );
};
