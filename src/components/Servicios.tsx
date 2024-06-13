import GenericButton2 from "./ui/Buttons/GenericButton2";
import servicios from "/servicios.jpg";
import { useTranslation } from "react-i18next";

export const Servicios = () => {
  const { t } = useTranslation("global");
  return (
    <section id="servicios" className="container space-y-8 mt-8">
      <h1 className="text-3xl md:text-5xl">
        {t("services.title")}
      </h1>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col justify-start gap-8">
          <p className="roboto-Font text-base md:text-xl">
          {t("services.subtitle")}
          </p>
        </div>
      </div>

      <div className="md:flex md:flex-col">
        <div className="w-2/4">
          <a href="https://wa.me/528122043750?text=Quiero%20más%20información">
            <GenericButton2 title={t("services.button")} />
          </a>
        </div>
        <div className="w-full grid grid-cols-2 px-3 mt-3">
          <div>
            <span className="mt-4 md:mt-0">{t("services.subContent_1")}</span>
          </div>
          <div>
            <div className="flex flex-wrap w-3/4">
              <div>{t("services.subContent_2")}</div>
              <div>{t("services.subContent_3")}</div>
              <div>{t("services.subContent_4")}</div>
              <div>{t("services.subContent_5")}</div>
            </div>
          </div>
        </div>
        <div className="w-4/4 md:w-3/4 flex  justify-end">
          <img
            src={servicios}
            className="object-contain h-[400px] w-auto rounded-sm opacity-75"
            alt="Hero"
          />
        </div>
      </div>

      <div className="mt-4 md:mt-8">
        <h1 className="text-3xl md:text-5xl">
        {t("services.subContent_6")}
        </h1>
      </div>
    </section>
  );
};
