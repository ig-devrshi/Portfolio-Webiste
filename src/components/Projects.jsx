import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 ">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center hover:scale-105 duration-200 cursor-pointer">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-screen lg:w-1/4"
            >
              <a href="https://github.com/ig-devrshi/"><img
                src={project.image}
                alt={project.title}
                className="mb-6 rounded w-72"
              /></a>
            </motion.div>
            <div className="w-full max-w-xl lg:w-3/4 lg:mx-10 text-start lg:text0-start ">
              <motion.h6
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="mb-2 font-semibold text-purple-400"
              >
                {project.title}
              </motion.h6>
              <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ x: 100, opacity: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="mb-4 text-sm text-neutral-400 pr-12"
              >
                {project.description}
              </motion.p>
              {project.technologies.map((tech, index) => (
                <motion.span
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: -100 }}
                  transition={{ duration: 0.5, delay: 2 }}
                  key={index}
                  className="mr-2 mt-1 font-small px-2 py-1 rounded bg-neutral-900 text-sm lg:text-md text-yellow-300"
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

export default Projects;
