export const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-12 text-center md:py-24">
      {/* Área gris: video o carrusel */}
      <div className="flex aspect-video w-full max-w-xl items-center justify-center bg-gray-300 text-xs text-black">
        VIDEO / CARRUSEL IMAGES
      </div>

      {/* Texto descriptivo */}
      <p className="font-montserrat mt-10 max-w-4xl text-sm leading-relaxed tracking-wide text-[#21260D] text-black">
        <span className="font-montserrat font-medium">DUO TECH</span> ES UN
        ESTUDIO CREATIVO INDEPENDIENTE QUE DISEÑA MARCAS, SITIOS WEB Y APPS QUE
        CONECTAN. <br />
        COMBINAMOS DISEÑO, TECNOLOGÍA Y ESTRATEGIA PARA IMPULSAR TU NEGOCIO.
      </p>
    </section>
  );
};
