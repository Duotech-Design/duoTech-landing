export const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-12 text-center md:py-24">
      {/* Área gris: video o carrusel */}
      <div className="flex aspect-video w-full max-w-xl items-center justify-center bg-gray-300 text-xs text-black">
        VIDEO / CARRUSEL IMAGES
      </div>

      {/* Texto descriptivo */}
      <p className="mt-10 max-w-4xl text-justify font-ace text-base leading-relaxed tracking-wide text-[#21260D] text-black">
        <span className="font-other text-2xl font-semibold">DUO TECH </span> ES
        UN ESTUDIO CREATIVO INDEPENDIENTE QUE DISEÑA MARCAS, SITIOS WEB Y APPS
        QUE CONECTAN. <br />
        COMBINAMOS DISEÑO, TECNOLOGÍA Y ESTRATEGIA PARA IMPULSAR TU NEGOCIO.
      </p>
    </section>
  );
};
