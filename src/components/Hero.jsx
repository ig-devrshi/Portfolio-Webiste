import React from "react";
import { HERO_CONTENT } from "../constants";
import image from "../assets/profile.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const containerRight = (delay) => ({
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
  });

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin traking-tight text-center lg:mt-16 lg:text-start "
            >
              Devrshi Bhavsar
            </motion.h1>
            <motion.span
              variants={container(0.8)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-400 via-slate-500 to-purple-500 bg-clip-text text-2xl traking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(0.9)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light text-center lg:text-start"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 visibility: visible">
          <div className="flex justify-center">
            <motion.img
              variants={containerRight(1)}
              initial="hidden"
              animate="visible"
              src={image}
              alt=""
              className="w-96 rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
