
import GenericButton from "./ui/Buttons/GenericButton";
import proyectosImage from "/proyectosImage.png";
import { useTranslation } from "react-i18next";

export const Proyectos = () => {
  const { t } = useTranslation("global");

  return (
    <section
      id="proyectos"
      className="container flex flex-col! py-24 sm:py-24"
    >
      <div className="w-1/4 text-xl">
        <h1>{t("projects.title")}</h1>
      </div>

      <div className="relative ">
        <img
          src={proyectosImage}
          className="object-cover h-[600px] w-auto  rounded-sm"
          alt="Nuestros Proyectos"
        />
        <div className="flex items-center mt-6">
          <div className="flex-grow">
            <p className="text-lg">{t("projects.subContent_1")}</p>
            <p className="text-lg mt-4">{t("projects.subContent_2")}</p>
          </div>
          <GenericButton title={t("projects.button")} />
        </div>
      </div>
    </section>
  );
};