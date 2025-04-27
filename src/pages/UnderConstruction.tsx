import Countdown from "../components/Countdown";

export default function ComingSoon() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/background.webp')" }}
    >
      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 py-4 md:px-10 md:py-6">
        <img src="/DTsmall.png" alt="Logo" className="h-10 w-auto" />
        <div className="hidden space-x-6 font-medium text-white md:flex">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* Contenido principal */}
      <div className="flex flex-1 items-center justify-center px-4 pt-16 md:pt-20">
        <div className="w-full max-w-lg space-y-6 text-center md:mt-12 md:rounded-2xl md:bg-white/60 md:p-10 md:shadow-lg md:backdrop-blur-sm">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold uppercase tracking-wide text-gray-900 md:text-4xl">
              WE'RE STILL BUILDING
            </h1>
            <h2 className="text-2xl font-semibold uppercase tracking-wide text-gray-900 md:text-4xl">
              SOMETHING <span className="italic text-gray-900">AWESOME</span>.
            </h2>
          </div>
          <div className="mt-[-24px] md:mt-0">
            <Countdown />
          </div>
        </div>
      </div>

      {/* Sección inferior: Formulario y Redes */}
      <div className="absolute bottom-8 w-full">
        <div className="mb-8 flex w-full flex-col items-center gap-4 px-4">
          <p
            className="text-center text-base font-medium uppercase tracking-wide md:text-2xl"
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
                className="whitespace-nowrap bg-[#70731F] px-6 py-3 font-semibold uppercase tracking-wide text-[#21260D] transition-colors hover:bg-[#5a5f19] md:px-8"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        {/* Redes sociales */}
        <div className="mt-4 flex justify-center gap-4 md:gap-6">
          <img src="/Fb.png" alt="Facebook" className="h-8 w-8" />
          <img src="/Wa.png" alt="WhatsApp" className="h-8 w-8" />
          <img src="/Ig.png" alt="Instagram" className="h-8 w-8" />
          <img src="/Gmail.png" alt="Gmail" className="h-8 w-8" />
        </div>
      </div>
    </div>
  );
}
