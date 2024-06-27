import { useState } from "react";
import { motion } from "framer-motion";
import MessengerHover from "@/components/MessengerHover";

const GenericButton = ({ title, widthButton=false }: { title: string, widthButton: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={ `bg-[#F5F5F5] flex justify-center items-center text-[#73726C]   
      font-semibold hover:text-[#879EAD] py-2 px-2 md:px-4 border border-[#73726C]
       hover:border-[#879EAD] rounded-full md:text-base text-md ${widthButton ? "w-full" : " "} `}
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

export default GenericButton;
