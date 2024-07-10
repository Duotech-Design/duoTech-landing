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
        `${window.scrollY}`
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
            <div className="animated-subtitle lg:text-9xl first-heading text-5xl md:text-8xl">
              <img src="/dt.png" alt="Duotech Black" className="inline w-3/4 md:w-2/3 lg:w-1/2" />
            </div>
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
      <img src="/2.svg" alt="Floating Object" className="flier-2" />
      <img src="/4.png" alt="Floating Object" className="flier-3" />
      <img src="/1.png" alt="Floating Object" className="flier-4" />
      {/* <img src="/3.png" alt="Floating Object" className="flier-5" /> */}
      <img src="/6.png" alt="Floating Object" className="flier-6 random-float" />
    </>
  );
};
