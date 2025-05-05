export const PortfolioTable: React.FC = () => {
  return (
    <section className="flex w-full justify-center bg-[#e5dfd5] px-6 py-16">
      <div className="w-full max-w-5xl">
        {/* Header con flecha */}
        <div className="mb-16 flex items-center gap-2">
          <h2 className="text-xl tracking-wide">PORTFOLIO</h2>
          <svg
            width="48"
            height="51"
            viewBox="0 0 48 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.03717 9.30785C16.3455 20.9675 29.2239 30.3359 39.5265 41.989"
              stroke="#21260D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M40.4608 28.7507C40.6731 31.0036 40.5431 33.3021 40.5408 35.565C40.5391 37.2949 40.5365 39.025 40.5536 40.7545C40.5602 41.4222 40.7855 42.6507 40.5065 43.3233C40.3231 43.7655 39.7629 43.5819 39.4252 43.5492C36.6281 43.2788 33.85 42.629 31.1005 42.0991C28.5081 41.5996 25.8415 41.2116 23.2943 40.5224"
              stroke="#21260D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Tabla */}
        <div className="space-y-4 font-ace text-sm">
          {/* Fila 1 */}
          <div className="grid grid-cols-3 border-b border-[#21260D] pb-2">
            <span>2024</span>
            <span className="text-center">IEPP</span>
            <span className="text-right">UX/UI</span>
          </div>

          {/* Fila 2 */}
          <div className="grid grid-cols-3 border-b border-[#21260D] pb-2">
            <span>2024</span>
            <span className="text-center">CAPA ARQUITECTOS</span>
            <span className="text-right">WEB</span>
          </div>
        </div>
      </div>
    </section>
  );
};
