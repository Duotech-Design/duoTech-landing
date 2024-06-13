import React from "react";
import GenericButton from "./ui/Buttons/GenericButton";
import Messenger from "./Messenger";
import { useTranslation } from "react-i18next";

export const Hero: React.FC = () => {
  const { t } = useTranslation("global");
  return (
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
        <div className="space-y-4 md:space-y-0 md:space-x-4 justify-center mt-8 ">
          <a href="/#cotiza">
            <GenericButton title={t("hero.button")} />
          </a>
        </div>
      </div>
      <div className="shadow"></div>
    </section>
  );
};