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
        <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
      STATUS 
      </h3>
        
          <div>
            <a
              href="#"
              className="opacity-60 hover:opacity-100"
            >
             MONTERREY, MX.     7:30:45 PM 
            </a>
          </div>

          <div>
            <a
              href="#"
              className="opacity-60 hover:opacity-100"
            >
            CURRENTLY : OFF - DUTY 
            </a>
          </div>

         
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">CONTACTO  </h3>
          <div>
            <a
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              DESIGN@DUOTECH.COM 
            </a>
          </div>

          <div>
            <a
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              + 51 444 ------ 
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
