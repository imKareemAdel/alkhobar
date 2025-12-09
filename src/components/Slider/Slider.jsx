import React from "react";
import { motion } from "framer-motion";
import logo1 from "../../assets/1.png";
import logo2 from "../../assets/2.png";
import logo3 from "../../assets/3.png";
import logo4 from "../../assets/4.png";
import logo5 from "../../assets/5.png";
import logo6 from "../../assets/6.png";
import logo7 from "../../assets/7.png";
import logo8 from "../../assets/8.png";
import logo9 from "../../assets/9.png";

export default function Slider() {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9];

  return (
    <div className="App flex justify-center items-center bg-[#ECF1F9] h-[150px] mt-16 overflow-hidden">
      <div className="relative w-full">
        <motion.div
          className="flex space-x-4 w-max"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            ease: "linear",
            duration: 10,
            repeat: Infinity,
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <img key={index} className="h-[100px]" src={logo} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
