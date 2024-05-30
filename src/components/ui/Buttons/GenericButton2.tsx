
import { motion } from "framer-motion";


const GenericButton2 = ({title }: {title: string}) => {
  return (
    <motion.button
     whileHover={{ scale : 1.2}} className="bg-black flex justify-center text-[#F5F5F5] font-semibold py-2 px-4 border border-[#252525] rounded-full hover:bg-transparent hover:text-[#879EAD] hover:border-[#879EAD]">
  {title}
      < svg className=" text-currentColor "  width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      </motion.button>
  );
};

export default GenericButton2;
