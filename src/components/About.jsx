import React from "react";
import aboutImage from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-4 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              src={aboutImage}
              alt="about"
              className="rounded-2xl lg:max-w-md"
            />
          </div>
        </motion.div>

        <div className="w-full lg:w-1/2">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center lg:justify-center"
          >
            <p className="my-4 py-8 text-center ml-4 lg:text-start">
              {ABOUT_TEXT}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
