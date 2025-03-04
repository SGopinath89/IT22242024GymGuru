import { motion } from "framer-motion";

function PopupAnimation() {
  return (
    <motion.span 
      className="text-black text-xl font-serif ml-3" // Small gap between button & text
      initial={{ opacity: 0 }} 
      animate={{ opacity: [0, 1, 0] }} 
      transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }} // Slow fade-in/out
    >
      Lets's practise
    </motion.span>
  );
}

export default PopupAnimation;
