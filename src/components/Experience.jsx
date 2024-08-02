import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>
            <div className="w-full max-w-xl lg:w-3/4">
              <motion.h6
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="mb-2 font-semibold cursor-pointer"
              >
                {experience.role} -{" "}
                <motion.span
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ x: -100, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 1.5 }}
                  className="text-md text-purple-400"
                >
                  {experience.company}
                </motion.span>
              </motion.h6>
              <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ x: 100, opacity: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="mb-4 text-neutral-500"
              >
                {experience.description}
              </motion.p>
              {experience.technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: -100 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="cursor-pointer mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-small lg:font-medium text-yellow-500"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
