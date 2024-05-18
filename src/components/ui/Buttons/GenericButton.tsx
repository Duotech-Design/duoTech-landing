

import { motion } from "framer-motion";

//" bg-[#2D2E31 text-white font-bold py-3 px-10 rounded-full  hover:bg-[#879EAD]


const GenericButton = () => {
  return (
    <motion.button
     whileHover={{ scale : 1.2}}
    className="bg-[#F5F5F5] flex justify-center text-[#73726C]  font-semibold hover:text-[#879EAD] py-2 px-4 border border-[#73726C] hover:border-[#879EAD] rounded-full"
    >
   
    Cotiza tu proyecto
     <svg  width="25px" height="25px" viewBox="0 0 24 24" fill="#FFF" xmlns="http://www.w3.org/2000/svg">

<path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</motion.button>

  
  );
};

export default GenericButton ;
