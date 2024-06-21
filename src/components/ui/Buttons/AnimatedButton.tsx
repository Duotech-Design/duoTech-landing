import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MessengerHover from "@/components/MessengerHover";


const AnimatedButton = ({ title, onClick }: { title: string; onClick: () => void }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  const handleClick = () => {
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
      onClick();
    }, 1000); // Ajusta el tiempo según la duración de tu animación
  };

  return (
    <>
      <motion.button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        className="bg-[#F5F5F5] flex justify-center items-center text-[#73726C] font-semibold hover:text-[#879EAD] py-2 px-2 md:px-4 border border-[#73726C] hover:border-[#879EAD] rounded-full md:text-base text-xs"
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
      <AnimatePresence>
        {showAnimation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-gray-800 flex items-center justify-center z-50"
          >
            <div className=""></div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AnimatedButton;
