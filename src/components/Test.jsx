import React from "react";
import { motion } from "framer-motion";
const Test = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <motion.div
        className=" w-52 h-52 bg-white"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1, x : 200, y:100 }}
        transition={{ duration: 2  }}
        whileInView={{opacity: 1, scale : 2}}
        drag
      ></motion.div>
    </div>
  );
};

export default Test;
