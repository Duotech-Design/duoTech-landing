import { useState } from "react";
import { motion } from "framer-motion";
import MessengerHover from "@/components/MessengerHover";

const TransparentButton = ({ title }: { title: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-transparent flex justify-center items-center text-white 
        font-semibold transition-text-color duration-300 hover:text-[#879EAD] 
        py-2 px-2 md:px-8 border border-white hover:border-[#879EAD] rounded-full 
        md:text-lg text-xs transition-transform duration-300 hover:scale-110 cotiza-button"
    >
      <MessengerHover text={title} isHovered={isHovered} />
      <svg
        className="text-current ml-1 md:ml-2"
        width="35px"
        height="30px"
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

export default TransparentButton;
