
import AnimatedTextWithMessenger from "./MessengerWithCSSAnimation";
import Messenger from "./Messenger";

export const Contacto = () => {
  return (
    <section id="contacto" className="container py-24 sm:py-32">
      <div className="flex flex-col items-center justify-center mt-6">
        <p className="text-sm">SI BUSCAS ALGO ...</p>
        <h2 className="text-5xl md:text-6xl font-bold my-3">
          <AnimatedTextWithMessenger />
        </h2>
        <div className="flex items-center mt-4">
          <p className="text-sm mr-4">EMPECEMOS A</p>
          <span className="px-6 py-2 border border-black rounded-full text-black">
            <Messenger text="CREAR" />
          </span>
        </div>
      </div>
    </section>
  );
};
