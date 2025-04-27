export const Navbar = () => {
  return (
    <nav className="font-montserrat flex items-center justify-between border-b border-gray-300 bg-[#e5dfd5] px-4 py-4 text-[#21260D] md:px-10">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/DTsmall.png" alt="Logo" className="h-10 w-auto" />
      </div>

      {/* Links */}
      <div className="hidden items-center space-x-8 text-sm tracking-wide text-black md:flex">
        <a href="#" className="transition hover:text-gray-600">
          SERVICIOS
        </a>
        <a href="#" className="transition hover:text-gray-600">
          PROYECTOS
        </a>
        <a href="#" className="transition hover:text-gray-600">
          ABOUT
        </a>
        <a href="#" className="transition hover:text-gray-600">
          CONTACTO
        </a>
      </div>

      {/* Idioma y Status */}
      <div className="flex items-center space-x-4 text-sm font-medium tracking-wide text-black">
        <div className="flex cursor-pointer items-center transition hover:text-gray-600">
          ES
          <span className="ml-1">▼</span>
        </div>
        <div className="flex items-center space-x-1">
          <span className="h-2 w-2 rounded-full bg-green-400"></span>
          <span>ON-DUTY</span>
        </div>
      </div>
    </nav>
  );
};
