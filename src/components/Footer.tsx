import { useState, useEffect } from "react";
import MessengerHover from "./MessengerHover";
import { useTranslation } from "react-i18next";
import RosslerSVG from "./rossler/RosslerSVG";
import whatsappIcon from "/whatsapp.png"; // Importa la imagen

export const Footer = () => {
  const { t } = useTranslation("global");
  const [time, setTime] = useState(new Date());
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: number | Date | undefined) => {
    const options: Intl.DateTimeFormatOptions = {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
      timeZone: "America/Monterrey",
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  const isOnDuty = (date: number | Date | undefined) => {
    const options: Intl.DateTimeFormatOptions = {
      hour: "numeric",
      minute: "numeric",
      hour12: false,
      timeZone: "America/Monterrey",
    };
    const timeString = new Intl.DateTimeFormat("en-US", options).format(date);
    const [hour, minute] = timeString.split(":").map(Number);

    const currentMinutes = hour * 60 + minute;
    const startMinutes = 9 * 60; // 9:00 AM in minutes
    const endMinutes = 18 * 60 + 30; // 6:30 PM in minutes

    return currentMinutes >= startMinutes && currentMinutes < endMinutes;
  };

  return (
    <footer id="footer">
      <hr className="mx-auto w-11/12" />
      <section className="container grid grid-cols-1 gap-x-12 gap-y-8 py-20 md:grid-cols-3">
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-md text-gray-400">{t("footer.status")}</h3>
            <h3 className="mt-4 font-medium">
              MONTERREY, MX ➔ {formatTime(time)}
            </h3>
            <h3 className="mt-4 font-medium">
              {t("footer.currently")}:{" "}
              <span
                className={`text-${isOnDuty(time) ? "green" : "red"}-500 blink`}
              >
                ●
              </span>{" "}
              {isOnDuty(time) ? t("footer.on_duty") : t("footer.off_duty")}
            </h3>
          </div>
          <div className="flex justify-center md:justify-start">
            <RosslerSVG />
          </div>
        </div>
        <div className="md:col-span-2 md:ml-auto">
          <div className="grid grid-cols-1 gap-x-12 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <h3 className="text-md text-gray-400">{t("footer.contact")}</h3>
              <div className="w-full">
                <a
                  href="mailto:info@duotechdesign.com"
                  className="animated-link flex items-center gap-2 opacity-60 hover:opacity-100"
                  onMouseEnter={() => setHoveredItem("DESIGN@DUOTECH.COM")}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <MessengerHover
                    text="info@duotechdesign.com"
                    isHovered={hoveredItem === "DESIGN@DUOTECH.COM"}
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://wa.me/524445443817?text=Quiero%20más%20información%20sobre..."
                  className="flex items-center gap-2 opacity-60 hover:opacity-100"
                  onMouseEnter={() => setHoveredItem("+52 8123842401")}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <img src={whatsappIcon} alt="WhatsApp" className="h-6 w-6" />
                  <div className="animated-link">
                    <MessengerHover
                      text="+52 8123842401"
                      isHovered={hoveredItem === "+52 8123842401"}
                    />
                  </div>
                </a>
              </div>
              <div>
                <a
                  href="https://wa.me/524445443817?text=Quiero%20más%20información"
                  className="flex items-center gap-2 opacity-60 hover:opacity-100"
                  onMouseEnter={() => setHoveredItem("+52 4445443817")}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <img src={whatsappIcon} alt="WhatsApp" className="h-6 w-6" />
                  <div className="animated-link">
                    <MessengerHover
                      text="+52 4445443817"
                      isHovered={hoveredItem === "+52 4445443817"}
                    />
                  </div>
                </a>
              </div>
              <div>
                <a
                  href="mailto:duotechdesign@gmail.com"
                  className="animated-link opacity-60 hover:opacity-100"
                  onMouseEnter={() => setHoveredItem("__@duotechdesign.com")}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <MessengerHover
                    text="duotechdesign@gmail.com"
                    isHovered={hoveredItem === "duotechdesign@gmail.com"}
                  />
                </a>
              </div>
            </div>
            <div className="mt-3 flex flex-col gap-2 md:mt-0">
              <h3 className="text-md text-gray-400">LINKS</h3>
              <div>
                <a
                  href="https://www.instagram.com/duotechdesign/"
                  className="animated-link opacity-60 hover:opacity-100"
                  onMouseEnter={() => setHoveredItem("INSTAGRAM")}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <MessengerHover
                    text="INSTAGRAM"
                    isHovered={hoveredItem === "INSTAGRAM"}
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://www.pinterest.com.mx/DuoTechDesignWeb/"
                  className="animated-link opacity-60 hover:opacity-100"
                  onMouseEnter={() => setHoveredItem("PINTEREST")}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <MessengerHover
                    text="PINTEREST"
                    isHovered={hoveredItem === "PINTEREST"}
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://www.duotechdesign.com/"
                  className="animated-link opacity-60 hover:opacity-100"
                  onMouseEnter={() => setHoveredItem("DUO-TECH SHOP")}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <MessengerHover
                    text="DUO-TECH SHOP"
                    isHovered={hoveredItem === "DUO-TECH SHOP"}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container pb-14 text-center">
        <h3>
          &copy; 2024 Landing page made by{" "}
          <a
            target="_blank"
            href="https://www.duotechdesign.com/"
            className="border-primary text-primary transition-all hover:border-b-2"
          >
            DuoTech Design
          </a>
        </h3>
      </section>
    </footer>
  );
};
