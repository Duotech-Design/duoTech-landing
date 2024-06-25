import { useState } from "react";
import { motion } from "framer-motion";
import MessengerHover from "@/components/MessengerHover";

interface GenericButton2Props {
  title: string;
  onClick?: () => void;
  className?: string;  // Añadir la propiedad className
}

const GenericButton2: React.FC<GenericButton2Props> = ({ title, onClick, className }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`bg-black flex justify-center items-center font-roboto-Font text-[#F5F5F5] font-semibold py-2 px-4 md:px-4 border border-[#252525] rounded-full hover:bg-[#879EAD] hover:text-white hover:border-[#879EAD] md:text-base text-xs w-full md:w-auto ${className}`}  // Incluir className
    >
      <MessengerHover text={title} isHovered={isHovered} />
      <svg
        className="text-currentColor ml-1 md:ml-2"
        width="20px"
        height="20px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 12H18M18 12L13 7M18 12L13 17"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.button>
  );
};

export default GenericButton2;
