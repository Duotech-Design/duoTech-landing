import "./App.css";
import SocialIcons from "./components/SocialIcons";
import Countdown from "./components/Countdown";


export default function ComingSoon() {
  return (
    <div className="relative min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/fondo.png')" }}>
      
      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 py-4 md:py-6 md:px-10">
        <img src="/DTsmall.png" alt="Logo" className="h-10 w-auto" />
        {/* Menú solo en desktop */}
        <div className="hidden md:flex space-x-6 text-white font-medium">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* Contenido principal */}
      <div className="flex flex-1 items-center justify-center px-4 pt-4 md:pt-0">
        {/* Fondo blanco translúcido solo en desktop */}
        <div className="space-y-6 text-center w-full max-w-lg md:bg-white/40 md:rounded-2xl md:p-10 md:shadow-lg">
          <div className="space-y-2">
            <h1 className="text-base md:text-4xl font-semibold uppercase tracking-wide text-gray-800">
              WE'RE STILL BUILDING
            </h1>
            <h2 className="text-base md:text-4xl font-semibold uppercase tracking-wide text-gray-800">
              SOMETHING <span className="italic text-black">AWESOME</span>.
            </h2>
          </div>
          <div className="mt-[-24px] md:mt-0">
            <Countdown />
          </div>
        </div>
      </div>

      {/* Sección inferior: Formulario */}
      <div className="absolute bottom-40 md:bottom-8 flex w-full flex-col items-center gap-4 px-4">
        <p
          className="text-center text-base md:text-2xl font-medium uppercase tracking-wide"
          style={{ color: "#21260D" }}
        >
          BE THE FIRST TO KNOW WHEN WE LAUNCH.
        </p>

        <form className="w-full max-w-sm">
          <div className="flex items-center overflow-hidden rounded-full border-2 border-[#70731F] shadow-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/90 px-6 py-3 text-gray-800 focus:outline-none"
            />
            <button
              type="submit"
              className="whitespace-nowrap bg-[#70731F] px-6 md:px-8 py-3 font-semibold uppercase tracking-wide text-[#21260D] transition-colors hover:bg-[#5a5f19]"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>

      {/* Redes sociales - fondo inferior */}
      <div className="absolute bottom-4 left-0 w-full flex justify-center gap-4 md:gap-6">
        <img src="/Fb.png" alt="Facebook" className="h-8 w-8" />
        <img src="/Wa.png" alt="WhatsApp" className="h-8 w-8" />
        <img src="/Ig.png" alt="Instagram" className="h-8 w-8" />
        <img src="/Gmail.png" alt="Gmail" className="h-8 w-8" />
      </div>
    </div>
  );
}

