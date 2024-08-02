import React from "react";
import { IoLogoHtml5 } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoJavascript } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { animate, motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }} className="my-20 text-center text-4xl">Technolgies</motion.h2>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.9 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer hover:scale-105 duration-200"
        >
          <IoLogoHtml5 className="lg:text-7xl text-5xl text-red-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-105 duration-200"
        >
          <RiTailwindCssFill className="lg:text-7xl text-5xl text-cyan-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer hover:scale-105 duration-200"
        >
          <BiLogoJavascript className="lg:text-7xl text-5xl text-yellow-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer hover:scale-105 duration-200"
        >
          <RiReactjsLine className="lg:text-7xl text-5xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer hover:scale-105 duration-200"
        >
          <TbBrandNextjs className="lg:text-7xl text-5xl text-white-800" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer hover:scale-105 duration-200"
        >
          <FaNodeJs className="lg:text-7xl text-5xl text-green-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
