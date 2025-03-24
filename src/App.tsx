import "./App.css";
import SocialIcons from "./components/SocialIcons";
import Countdown from "./components/Countdown";

function App() {
  return (
    <>
      <SocialIcons />

      <div
        className="fixed left-0 top-0 flex h-screen w-screen flex-col items-center justify-center"
        style={{
          backgroundImage: `url('/bbCountdown.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          backdropFilter: "blur(4px)",
        }}
      >
        {/* Íconos de redes sociales */}
        <div className="absolute right-12 top-4 flex gap-3 opacity-70">
          <img src="/Fb.png" alt="Facebook" className="h-8 w-8" />
          <img src="/Wa.png" alt="WhatsApp" className="h-8 w-8" />
          <img src="/Ig.png" alt="Instagram" className="h-8 w-8" />
          <img src="/Gmail.png" alt="Gmail" className="h-8 w-8" />
        </div>

        {/* Contenido principal */}
        <div className="flex flex-1 items-center justify-center">
          <div className="space-y-8 text-center">
            <div className="space-y-4 rounded-2xl bg-white/40 p-8 shadow-lg">
              <h1 className="text-4xl font-semibold uppercase tracking-wide text-gray-800">
                WE'RE STILL BUILDING
              </h1>
              <h2 className="text-4xl font-semibold uppercase tracking-wide text-gray-800">
                SOMETHING <span className="italic text-black">AWESOME</span>.
              </h2>
            </div>
            <Countdown />
          </div>
        </div>

        {/* Sección inferior */}
        <div className="absolute bottom-8 flex w-full flex-col items-center gap-4">
          <p
            className="text-center text-2xl font-medium uppercase tracking-wide"
            style={{ color: "#21260D" }}
          >
            BE THE FIRST TO KNOW WHEN WE LAUNCH.
          </p>

          {/* Nuevo diseño del formulario */}
          <form className="w-full max-w-sm">
            <div className="flex items-center overflow-hidden rounded-full border-2 border-[#70731F] shadow-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/90 px-6 py-3 text-gray-800 focus:outline-none"
                style={{ minWidth: "200px" }}
              />
              <button
                type="submit"
                className="whitespace-nowrap bg-[#70731F] px-8 py-3 font-semibold uppercase tracking-wide text-[#21260D] transition-colors hover:bg-[#5a5f19]"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
