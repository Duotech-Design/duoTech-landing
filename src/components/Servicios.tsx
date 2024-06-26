import GenericButton2 from "./ui/Buttons/GenericButton2";
import servicios2 from "/servicios2.png";
import { useTranslation } from "react-i18next";

export const Servicios = () => {
  const { t } = useTranslation("global");
  return (
    <section id="servicios" className="container space-y-8 mt-8">
      <h1 className="text-3xl md:text-5xl">
        {t("services.title")}
      </h1>
      <div className="flex flex-col md:flex-row items-start justify-between">
        <div className="pb-3 md:pb-0">
          <div className="flex flex-col justify-between">
            <div className="flex flex-col justify-start gap-8">
              <p className="roboto-Font text-base md:text-xl">
                {t("services.subtitle")}
              </p>
            </div>
          </div>
          <div className="md:flex md:flex-col! md:justify-between mt-8">
            <div className="w-2/4">
              <a href="https://wa.me/528122043750?text=Quiero%20más%20información">
                <GenericButton2 title={t("services.button")} />
              </a>
            </div>
            <div className="w-full grid grid-cols-2 px-3 mt-8 md:mt-3">
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
          </div>
        </div>
        <div className="flex justify-end">
          <img
            src={servicios2}
            className=" w-auto rounded-sm opacity-75"
            alt="Hero"
          />
        </div>
      </div>
    </section>
  );
};
