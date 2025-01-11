import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "KV Audio",
    description:
      "A full-stack e-commerce platform for audio equipment with real-time inventory management, secure payments, and an intuitive admin dashboard.",
    image:
      "https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=2070&auto=format&fit=crop",
    github: "https://github.com/LaSan99/KV-AUDIO",
    demo: "https://snakemern.netlify.app/",
    tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with React and Tailwind CSS, featuring dark mode, contact form, and smooth animations.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    github: "https://github.com/yourusername/project2",
    demo: "https://project2-demo.com",
    tags: ["React", "Tailwind CSS", "EmailJS", "Responsive Design"],
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    github: "https://github.com/yourusername/project3",
    demo: "https://project3-demo.com",
    tags: ["React", "Firebase", "Material-UI", "Real-time Database"],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
          Featured Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills in web
          development, design, and problem-solving.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full hover:bg-gray-100 transform hover:scale-110 transition-all duration-300"
                  >
                    <FaGithub className="w-6 h-6 text-gray-800" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full hover:bg-gray-100 transform hover:scale-110 transition-all duration-300"
                  >
                    <FaExternalLinkAlt className="w-6 h-6 text-gray-800" />
                  </a>
                </div>
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
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300 flex items-center"
                  >
                    <FaGithub className="mr-2" /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:text-green-600 dark:text-green-400 dark:hover:text-green-300 transition-colors duration-300 flex items-center"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
