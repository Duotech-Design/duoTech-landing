import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            href="/"
            className="font-bold text-xl flex"
          >
            <LogoIcon />
            ShadcnUI/React
          </a>
        </div>
{/*}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Follow US</h3>
          <div>
            <a
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Github
            </a>
          </div>

          <div>
            <a
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Twitter
            </a>
          </div>

          <div>
            <a
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Dribbble
            </a>
          </div>
        </div>
  */}
  {/*}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Platforms</h3>
          <div>
            <a
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Web
            </a>
          </div>

          <div>
            <a
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Mobile
            </a>
          </div>

          <div>
            <a
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Desktop
            </a>
          </div>
        </div>
  */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Contacto</h3>
          <div>
            <a
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              4444-
            </a>
          </div>

          <div>
            <a
              href="#"
              className="opacity-60 hover:opacity-100"
            >
             4444-
            </a>
          </div>

          <div>
            <a
              href="#"
              className="opacity-60 hover:opacity-100"
            >
             ---@duotechdesign.com
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Follow us </h3>
          <div>
            <a
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Instagram 
            </a>
          </div>

          <div>
            <a
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Github
            </a>
          </div>

          <div>
          
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2024 Landing page made by{" "}
          <a
            target="_blank"
            href="https://github.com/leoMirandaa"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            DuoTech Design
          </a>
        </h3>
      </section>
    </footer>
  );
};
