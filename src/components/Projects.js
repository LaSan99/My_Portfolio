import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import portfolio from "../assets/port.png";
import music from "../assets/music.png";
import lost from "../assets/lost.png";
import tourism from "../assets/booking.png";

const projects = [
  {
    title: "KV Audio",
    description:
      "A full-stack e-commerce platform for audio equipment with real-time inventory management, secure payments, and an intuitive admin dashboard.",
    image:
      "https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=2070&auto=format&fit=crop",
    github: "https://github.com/LaSan99/KV-AUDIO",
    demo: "#",
    tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with React and Tailwind CSS, featuring dark mode, contact form, and smooth animations.",
    image: portfolio,
    github: "https://github.com/LaSan99/My_Portfolio",
    demo: "https://lasanportfolio.netlify.app/",
    tags: ["React", "Tailwind CSS", "EmailJS", "Responsive Design"],
  },
  {
    title: "Music App",
    description:
      "A music app with a modern UI and a sleek design, featuring a search bar, a playlist, and a music player.",
    image: music,
    github: "https://github.com/LaSan99/MUSIC_APP",
    demo: "#",
    tags: ["React", "MongoDB", "Node.js", "Express", "Tailwind CSS"],
  },
  {
    title: "LostConnect App",
    description:
      "A lost and found app with a modern UI and a sleek design, featuring a search bar, a lost and found, and a lost and found.",
    image: lost,
    github: "#",
    demo: "#",
    tags: ["React", "Express", "MongoDB", "Node.js", "Tailwind CSS"],
  },
  {
    title: "Tourism Vehicle Booking App",
    description:
      "A tourism vehicle booking app with a modern UI and a sleek design, featuring a search bar, a lost and found, and a lost and found.",
    image: tourism,
    github: "#",
    demo: "#",
    tags: ["React", "Express", "MongoDB", "Node.js", "Material-UI"],
  },
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in web
            development, design, and problem-solving.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center space-x-4"
                >
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full hover:bg-gray-100"
                  >
                    <FaGithub className="w-6 h-6 text-gray-800" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full hover:bg-gray-100"
                  >
                    <FaExternalLinkAlt className="w-6 h-6 text-gray-800" />
                  </motion.a>
                </motion.div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300 flex items-center"
                  >
                    <FaGithub className="mr-2" /> Code
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:text-green-600 dark:text-green-400 dark:hover:text-green-300 transition-colors duration-300 flex items-center"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
