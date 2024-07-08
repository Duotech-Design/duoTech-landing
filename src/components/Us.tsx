import Messenger from "./Messenger";
import imageUs from "/imageUs.jpg";
import { useTranslation } from "react-i18next";

export const Us = () => {
  const { t } = useTranslation("global");
  return (
    <section className="md:flex-col! container mt-8 md:flex">
      <div className="w-2/4 text-xl">
        <h1>{t("us.title")}</h1>
      </div>
      <div className="w-full">
        <div className="mt-3 px-3 md:mt-0">
          <p className="roboto-Font mr-8 text-justify text-xs md:text-sm lg:text-base">
            {" "}
            {t("us.content")}
          </p>
        </div>
        <div className="grid w-full grid-cols-2 px-3 py-8">
          <div>
            {" "}
            <span>{t("us.subtitle")}</span>
          </div>
          <div className="flex w-3/4 flex-col flex-wrap">
            <div>
              <Messenger text={t("us.subContent_1")} loop={true} />
            </div>
            <div>{t("us.subContent_2")}</div>
            <div>{t("us.subContent_3")}</div>
            <div>
              <Messenger text={t("us.subContent_4")} loop={true} />
            </div>
            <div>{t("us.subContent_5")}</div>
          </div>
        </div>
      </div>
      <div className="w-4/4 md:w-3/4">
        <img
          src={imageUs}
          className="h-[350px] w-auto rounded-sm object-cover opacity-75"
        ></img>
      </div>
    </section>
  );
};
