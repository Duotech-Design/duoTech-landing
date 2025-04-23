export default function Countdown() {
  return (
    <div className="flex justify-center gap-3 md:gap-4">
      {/* Días */}
      <div className="flex flex-col items-center">
        <div className="rounded-full p-3 w-12 h-12 flex items-center justify-center shadow-md border-2 border-[#70731F] md:w-16 md:h-16">
          <span className="text-xl md:text-3xl font-bold text-[#21260D]">04</span>
        </div>
        <span className="text-xs md:text-sm mt-2 text-[#70731F]">DAYS</span>
      </div>

      {/* Horas */}
      <div className="flex flex-col items-center">
        <div className="rounded-full p-3 w-12 h-12 flex items-center justify-center shadow-md border-2 border-[#70731F] md:w-16 md:h-16">
          <span className="text-xl md:text-3xl font-bold text-[#21260D]">12</span>
        </div>
        <span className="text-xs md:text-sm mt-2 text-[#70731F]">HOURS</span>
      </div>

      {/* Minutos */}
      <div className="flex flex-col items-center">
        <div className="rounded-full p-3 w-12 h-12 flex items-center justify-center shadow-md border-2 border-[#70731F] md:w-16 md:h-16">
          <span className="text-xl md:text-3xl font-bold text-[#21260D]">45</span>
        </div>
        <span className="text-xs md:text-sm mt-2 text-[#70731F]">MINUTES</span>
      </div>

      {/* Segundos */}
      <div className="flex flex-col items-center">
        <div className="rounded-full p-3 w-12 h-12 flex items-center justify-center shadow-md border-2 border-[#70731F] md:w-16 md:h-16">
          <span className="text-xl md:text-3xl font-bold text-[#21260D]">30</span>
        </div>
        <span className="text-xs md:text-sm mt-2 text-[#70731F]">SECONDS</span>
      </div>
    </div>
  );
}