import { useState } from "react";
import { motion } from "framer-motion";
import MessengerHover from "@/components/MessengerHover";

const TransparentButton = ({
  title,
  state,
}: {
  title: string;
  state: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${state} transition-text-color flex items-center justify-center font-semibold text-white duration-300 hover:text-${state} border border-white px-2 py-2 md:px-8 hover:border-${state} cotiza-button w-3/5 rounded-full text-xs transition-transform duration-300 hover:scale-110 md:w-auto md:text-lg`}
    >
      <MessengerHover text={title} isHovered={isHovered} />
      <svg
        className="ml-1 text-current md:ml-2"
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
