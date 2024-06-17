import { useState, useEffect } from "react";
import MessengerHover from "./MessengerHover";

export const Footer = () => {
  const [time, setTime] = useState(new Date());
  const [hoveredItem, setHoveredItem] = useState<string | null>(null); // Define hoveredItem

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
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
    const startMinutesWeekdays = 9 * 60; // 9:00 AM in minutes for weekdays
    const endMinutesWeekdays = 18 * 60 + 30; // 6:30 PM in minutes for weekdays
    const endMinutesSaturday = 16 * 60; // 4:00 PM in minutes for Saturday

    const day = date.getDay(); // Get the day of the week (0 for Sunday, 6 for Saturday)

    if (day === 0) {
      return false; // Sunday, off-duty all day
    } else if (day === 6) {
      return currentMinutes >= startMinutesWeekdays && currentMinutes < endMinutesSaturday; // Saturday, on-duty 9:00 AM - 4:00 PM
    } else {
      return currentMinutes >= startMinutesWeekdays && currentMinutes < endMinutesWeekdays; // Weekdays, on-duty 9:00 AM - 6:30 PM
    }
  };

  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8">
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-md text-gray-400">STATUS</h3>
            <h3 className="font-medium mt-4">
              MONTERREY, MX ➔ {formatTime(time)}
            </h3>
            <h3 className="font-medium mt-4">
              CURRENTLY:{" "}
              <span
                className={`text-${isOnDuty(time) ? "green" : "red"}-500 blink`}
              >
                ●
              </span>{" "}
              {isOnDuty(time) ? "ON-DUTY" : "OFF-DUTY"}
            </h3>
          </div>
          <div className="mt-8">
            <a
              href="/"
              className="font-bold text-4xl flex flex-col leading-none"
            >
              LO
              <br />
              GO
            </a>
          </div>
        </div>

        <div className="md:ml-auto md:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            <div className="flex flex-col gap-2">
              <h3 className="text-md text-gray-400">CONTÁCTO</h3>
              <div>
                <a
                  href="mailto:design@duotech.com"
                  className="opacity-60 hover:opacity-100"
                  onMouseEnter={() => setHoveredItem("DESIGN@DUOTECH.COM")}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <MessengerHover
                    text="DESIGN@DUOTECH.COM"
                    isHovered={hoveredItem === "DESIGN@DUOTECH.COM"}
                  />
                </a>
              </div>
              <div>
                <a
                  href="tel:+51444"
                  className="opacity-60 hover:opacity-100"
                  onMouseEnter={() => setHoveredItem("+51 444 4-----")}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <MessengerHover
                    text="+51 444 4-----"
                    isHovered={hoveredItem === "+51 444 4-----"}
                  />
                </a>
              </div>
              <div>
                <a
                  href="tel:+5244"
                  className="opacity-60 hover:opacity-100"
                  onMouseEnter={() => setHoveredItem("+51 444 ------")}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <MessengerHover
                    text="+51 444 ------"
                    isHovered={hoveredItem === "+51 444 ------"}
                  />
                </a>
              </div>
              <div>
                <a
                  href="mailto:__@duptechdesign.com"
                  className="opacity-60 hover:opacity-100"
                  onMouseEnter={() => setHoveredItem("__@duotechdesign.com")}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <MessengerHover
                    text="__@duotechdesign.com"
                    isHovered={hoveredItem === "__@duotechdesign.com"}
                  />
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-md text-gray-400">LINKS</h3>
              <div>
                <a
                  href="https://www.instagram.com/duotechdesign/"
                  className="opacity-60 hover:opacity-100"
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
                  href="#"
                  className="opacity-60 hover:opacity-100"
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
                <a href="https://www.duotechdesign.com/" className="opacity-60 hover:opacity-100"  onMouseEnter={() => setHoveredItem("DUO-TECH SHOP")}
                  onMouseLeave={() => setHoveredItem(null)}>
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
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            DuoTech Design
          </a>
        </h3>
      </section>
    </footer>
  );
};
