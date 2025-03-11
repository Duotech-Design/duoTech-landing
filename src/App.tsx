import "./App.css";
import SocialIcons from "./components/SocialIcons";
import Countdown from "./components/Countdown";

function App() {
  return (
    <>
      <SocialIcons />

      <div
        className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url('/bbCountdown.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          backdropFilter: 'blur(4px)',
        }}
      >
        {/* Contenido principal */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-8">
            <div className="space-y-4 bg-white/40 p-8 rounded-2xl shadow-lg">
              <h1 className="text-4xl font-semibold text-gray-800 tracking-wide uppercase">
                WE'RE STILL BUILDING
              </h1>
              <h2 className="text-4xl font-semibold text-gray-800 tracking-wide uppercase">
                SOMETHING <span className="text-black italic">AWESOME</span>.
              </h2>
            </div>
            <Countdown />
          </div>
        </div>

        {/* Sección inferior */}
        <div className="absolute bottom-8 w-full flex flex-col items-center gap-4">
          <p 
            className="text-2xl font-medium uppercase tracking-wide text-center"
            style={{ color: '#21260D' }}
          >
            BE THE FIRST TO KNOW WHEN WE LAUNCH.
          </p>

          {/* Nuevo diseño del formulario */}
          <form className="w-full max-w-sm">
            <div className="flex items-center rounded-full overflow-hidden border-2 border-[#70731F] shadow-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/90 focus:outline-none text-gray-800"
                style={{ minWidth: '200px' }}
              />
              <button
                type="submit"
                className="px-8 py-3 bg-[#70731F] hover:bg-[#5a5f19] transition-colors text-[#21260D] font-semibold uppercase tracking-wide whitespace-nowrap"
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