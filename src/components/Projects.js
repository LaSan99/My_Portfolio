import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import portfolio from "../assets/port.png";
import music from "../assets/music.png";
import lost from "../assets/lost.png";
import tourism from "../assets/booking.png";
import humanizer from "../assets/humanizer.jpg";
import nextVehicle from "../assets/nextjs-vehicle-book.jpg"
import a1 from "../assets/a1.jpg";
import s1 from "../assets/s1.jpg";
import shoe from "../assets/shoes.jpg";

const projects = [
  {
    title: "KV Audio",
    description:
      "A full-stack e-commerce platform for audio equipment with real-time inventory management, secure payments, and an intuitive admin dashboard.",
    image: a1,
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
  {
    title: "Text Humanizer App",
    description:
      "A versatile text transformation tool that converts text into a more natural, human-like format. Features include text case conversion, formatting options, and real-time preview with a clean, modern interface.",
    image: humanizer,
    github: "https://github.com/LaSan99/Text_humanizer",
    demo: "https://text-humanizer.netlify.app/",
    tags: ["React", "Next.js", "Tailwind CSS", "DaisyUI"],
  },
  {
    title: "NextJs Vehicle Renting App",
    description:
      "A modern vehicle rental platform built with Next.js, featuring an intuitive booking system, real-time availability checking, and secure payment integration. Users can easily browse vehicles, compare prices, and make reservations with a seamless, responsive interface.",
    image: nextVehicle,
    github: "https://github.com/LaSan99/NextJs-vehicle-booking", 
    demo: "https://next-js-vehicle-booking.vercel.app/",
    tags: ["React", "Next.js", "Tailwind CSS", "Superbase", "Prisma"],
  },
  {
    title: "Saloon Booking App",
    description:
      "A full-stack salon booking app with a modern UI and a sleek design, featuring a search bar, a lost and found, and a lost and found.",
    image: s1,
    github: "#",
    demo: "https://saloon-frontend-chi.vercel.app/",
    tags: ["React", "Express", "MongoDB", "Node.js", "Tailwind CSS"],
  },
  {
    title: "Online Sneaker Store",
    description:
      "Sneaker Store is a full-stack e-commerce platform for sneaker enthusiasts, featuring a modern UI, secure payment processing, and an intuitive admin dashboard for inventory management.",
    image: shoe,
    github: "#",
    demo: "https://e-com-front.netlify.app/",
    tags: ["React", "Express", "MongoDB", "Node.js", "Tailwind CSS"],
  },
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [filteredTag, setFilteredTag] = useState(null);
  
  // Get all unique tags
  const allTags = [...new Set(projects.flatMap(project => project.tags))];

  // Filter projects based on selected tag
  const filteredProjects = filteredTag 
    ? projects.filter(project => project.tags.includes(filteredTag))
    : projects;

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

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      }
    }
  };

  const tagFilterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 0.4,
        duration: 0.6,
        ease: "easeOut",
      }
    }
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-center text-gray-800 dark:text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-8 max-w-2xl mx-auto text-lg">
            Here are some of my recent projects that showcase my skills in web
            development, design, and problem-solving.
          </p>
        </motion.div>

        {/* Tag Filter Section */}
        <motion.div 
          variants={tagFilterVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilteredTag(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filteredTag === null 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-300 dark:shadow-blue-900' 
                : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
            }`}
          >
            All
          </motion.button>
          
          {allTags.map((tag, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilteredTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filteredTag === tag 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-300 dark:shadow-blue-900' 
                  : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-600 transform transition-all duration-300"
            >
              <div className="relative overflow-hidden h-52">
                <motion.img
                  animate={{ 
                    scale: hoveredIndex === index ? 1.1 : 1,
                    filter: hoveredIndex === index ? "brightness(0.7)" : "brightness(1)"
                  }}
                  transition={{ duration: 0.5 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0,
                    y: hoveredIndex === index ? 0 : 20
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center space-x-6"
                >
                  <motion.a
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full hover:bg-gray-100 shadow-lg"
                  >
                    <FaGithub className="w-6 h-6 text-gray-800" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full hover:bg-gray-100 shadow-lg"
                  >
                    <FaExternalLinkAlt className="w-6 h-6 text-gray-800" />
                  </motion.a>
                </motion.div>
              </div>

              <div className="p-6">
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-2xl font-bold text-gray-800 dark:text-white mb-3"
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                  className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed"
                >
                  {project.description}
                </motion.p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + tagIndex * 0.05, duration: 0.3 }}
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: filteredTag === tag ? "#3B82F6" : "#E5E7EB",
                        color: filteredTag === tag ? "#FFFFFF" : "#4B5563" 
                      }}
                      onClick={() => setFilteredTag(tag === filteredTag ? null : tag)}
                      className={`px-3 py-1 ${
                        filteredTag === tag 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
                      } rounded-full text-xs font-medium cursor-pointer transition-all duration-300`}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                  className="flex justify-between items-center"
                >
                  <motion.a
                    whileHover={{ scale: 1.05, x: -5 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300 flex items-center font-medium"
                  >
                    <FaGithub className="mr-2" /> View Code
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:text-green-600 dark:text-green-400 dark:hover:text-green-300 transition-colors duration-300 flex items-center font-medium"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </motion.a>
                </motion.div>
              </div>
              
              {/* Gradient border animation when hovered */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 z-[-1] rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                style={{ 
                  padding: "2px",
                  margin: "-2px",
                  pointerEvents: "none"
                }}
              />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-16"
        >
          <a 
            href="https://github.com/LaSan99" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 px-8 rounded-full hover:shadow-lg hover:shadow-blue-300/50 dark:hover:shadow-blue-800/50 transition-all duration-300 transform hover:scale-105"
          >
            See More Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;