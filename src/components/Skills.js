import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/animations";

const skills = [
  {
    name: "React",
    level: 90,
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    color: "#61DAFB",
  },
  {
    name: "JavaScript",
    level: 85,
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    color: "#F7DF1E",
  },
  {
    name: "HTML5",
    level: 95,
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    color: "#E34F26",
  },
  {
    name: "Node.js",
    level: 80,
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    color: "#339933",
  },
  {
    name: "TypeScript",
    level: 75,
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    color: "#3178C6",
  },
  {
    name: "GraphQL",
    level: 70,
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg",
    color: "#E10098",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-6"
      >
        <motion.h2
          variants={fadeIn("up")}
          className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
        >
          Technical Skills
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up")}
              whileHover={{ scale: 1.03 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center mb-4">
                <motion.img
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  src={skill.icon}
                  alt={skill.name}
                  className="w-8 h-8 mr-3"
                />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {skill.name}
                </h3>
              </div>
              <div className="relative pt-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                    Proficiency
                  </span>
                  <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                    {skill.level}%
                  </span>
                </div>
                <div className="overflow-hidden h-2 text-xs flex rounded-full bg-gray-200 dark:bg-gray-700">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    style={{ backgroundColor: skill.color }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
