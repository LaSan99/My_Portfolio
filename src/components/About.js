import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
          About Me
        </h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Hello! I'm a passionate web developer and designer with a keen eye for creating beautiful,
            functional, and user-centered digital experiences. With a background in [Your Background],
            I combine my technical skills with creative problem-solving to build innovative web solutions.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/LaSan99" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

