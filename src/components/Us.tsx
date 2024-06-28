import Messenger from "./Messenger";
import imageUs from "/imageUs.jpg"
import { useTranslation } from "react-i18next";

export const Us = () => {
  const { t } = useTranslation("global");
  return (
    <section className="container  md:flex md:flex-col!  mt-8 ">
      <div className="w-2/4 text-xl">
        <h1>{t("us.title")}</h1>
      </div>
      <div className="w-full ">
        <div className="px-3  md:mt-0 mt-3">
          <p className=" roboto-Font  text-xs md:text-sm lg:text-base text-justify mr-8">
            {" "}
            {t("us.content")}
          </p>
        </div>
        <div className="w-full grid grid-cols-2 py-8 px-3 ">
          <div >
            {" "}
            <span>{t("us.subtitle")}</span>
          </div>
          <div className="flex flex-wrap w-2/4 flex-col ">
            <div><Messenger text={t("us.subContent_1")} /></div>
            <div>{t("us.subContent_2")}</div>
            <div>{t("us.subContent_3")}</div>
            <div><Messenger text={t("us.subContent_4")} /></div>
            <div>{t("us.subContent_5")}</div>
          </div>
        </div>
      </div>
      <div className="w-4/4 md:w-3/4">
        <img src={imageUs} className="object-cover h-[350px] w-auto opacity-75 rounded-sm"></img>
      </div>
    </section>
  );
};
