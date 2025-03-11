import { useEffect, useState } from "react";

const Countdown = () => {
  // Fecha de fin: 2 semanas y media desde ahora
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 17); // 17 días = 2 semanas y media

  // Estado para almacenar el tiempo restante
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = targetDate.getTime() - new Date().getTime();
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center space-x-6 text-[#21260D] mt-8">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center">
          {/* Círculo sin fondo y con borde */}
          <div 
            className="text-4xl font-bold w-20 h-20 flex items-center justify-center border-2 border-[#70731F] rounded-full"
          >
            {value}
          </div>
          {/* Nombre de la unidad (días, horas, etc.) */}
          <span className="uppercase text-sm mt-2">{unit}</span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
