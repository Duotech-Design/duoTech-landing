export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8">
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-xs text-gray-400">STATUS</h3>
            <h3 className="font-medium mt-4">MONTERREY, MX ➔ 7:30:35 PM</h3>
            <h3 className="font-medium mt-4">
              CURRENTLY: <span className="text-red-500">●</span> OFF - DUTY
            </h3>
          </div>
          <div className="mt-8">
            <a href="/" className="font-bold text-4xl flex flex-col leading-none">
              LO
              <br />
              GO
            </a>
          </div>
        </div>

        <div className="md:ml-auto md:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            <div className="flex flex-col gap-2">
              <h3 className="text-xs text-gray-400">CONTACTO</h3>
              <div>
                <a href="mailto:design@duotech.com" className="opacity-60 hover:opacity-100">
                  DESIGN@DUOTECH.COM
                </a>
              </div>
              <div>
                <a href="tel:+51444" className="opacity-60 hover:opacity-100">
                  +51 444 ------
                </a>
              </div>
              <div>
                <a href="tel:+5244" className="opacity-60 hover:opacity-100">
                  44- --------
                </a>
              </div>
              <div>
                <a href="mailto:__@duptechdesign.com" className="opacity-60 hover:opacity-100">
                  __@duotechdesign.com
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-xs text-gray-400">LINKS</h3>
              <div>
                <a href="#" className="opacity-60 hover:opacity-100">
                  INSTAGRAM
                </a>
              </div>
              <div>
                <a href="#" className="opacity-60 hover:opacity-100">
                  PINTEREST
                </a>
              </div>
              <div>
                <a href="#" className="opacity-60 hover:opacity-100">
                  DUO-TECH SHOP
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
            href="duotechdesign.com"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            DuoTech Design
          </a>
        </h3>
      </section>
    </footer>
  );
};
