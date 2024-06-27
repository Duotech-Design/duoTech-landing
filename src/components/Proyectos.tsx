import GenericButton from "./ui/Buttons/GenericButton";
import proyectosImage from "/proyectosImage.png";
import { useTranslation } from "react-i18next";

export const Proyectos = () => {
  const { t } = useTranslation("global");

  return (
    <section id="proyectos" className="container md:flex md:flex-col! py-24 sm:py-24 md:justify-between">
      <div className="w-1/4 text-xl mb-3 md:mb-0">
        <h1>{t("projects.title")}</h1>
      </div>
      <div className="relative">
        <img
          src={proyectosImage}
          className="object-cover h-[600px] w-[850px] opacity-75 rounded-sm"
          alt="Proyectos"
        />
        <div className="md:flex md:items-center mt-6">
          <div className="flex-grow mb-4 md:mb-0">
            <p className="text-lg">{t("projects.subContent_1")}</p>
            <p className="text-lg mt-4">{t("projects.subContent_2")}</p>
          </div>
          <div className="flex justify-end">
          <GenericButton title={t("projects.button")} widthButton={true} />
          </div>
        </div>
      </div>
    </section>
  );
};