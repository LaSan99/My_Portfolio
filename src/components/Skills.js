import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/animations";

const skills = [
  {
    name: "React",
    level: 90,
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    color: "#61DAFB",
    description: "Building modern, responsive user interfaces with React.js and its ecosystem"
  },
  {
    name: "JavaScript",
    level: 85,
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    color: "#F7DF1E",
    description: "Creating dynamic web applications with modern JavaScript (ES6+)"
  },
  {
    name: "HTML5",
    level: 95,
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    color: "#E34F26",
    description: "Crafting semantic, accessible markup for web applications"
  },
  {
    name: "Node.js",
    level: 80,
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    color: "#339933",
    description: "Developing backend services and APIs with Node.js"
  },
  {
    name: "PHP",
    level: 75,
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
    color: "#777BB4",
    description: "Building server-side applications with PHP"
  },
  {
    name: "MongoDB",
    level: 85,
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
    color: "#47A248",
    description: "Designing and implementing NoSQL database solutions"
  },
  {
    name: "MySQL",
    level: 80,
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg", 
    color: "#4479A1",
    description: "Creating and optimizing relational database structures"
  },
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      }
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 30px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5
      }
    })
  };

  const iconVariants = {
    hover: {
      rotate: 360,
      scale: 1.2,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  const descriptionVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      }
    }
  };
  
  // Sort skills by proficiency level (highest to lowest)
  const sortedSkills = [...skills].sort((a, b) => b.level - a.level);

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto px-6"
      >
        <motion.div variants={headingVariants} className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            My technical expertise and proficiency levels in various technologies and frameworks
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {sortedSkills.map((skill, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 overflow-hidden relative"
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id={`pattern-${index}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="10" cy="10" r="2" fill={skill.color} />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#pattern-${index})`} />
                </svg>
              </div>
              
              {/* Top row with icon and skill name */}
              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="flex items-center">
                  <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                    className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-4"
                    style={{ 
                      boxShadow: `0 0 15px ${skill.color}30`
                    }}
                  >
                    <motion.img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-8 h-8"
                    />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      {skill.name}
                    </h3>
                    <div className="flex items-center">
                      {Array.from({ length: 5 }).map((_, i) => {
                        const starValue = i * 20 + 20;
                        return (
                          <svg 
                            key={i}
                            className="w-4 h-4 mr-1"
                            fill={starValue <= skill.level ? skill.color : "#d1d5db"}
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="text-2xl font-bold" style={{ color: skill.color }}>
                  {skill.level}%
                </div>
              </div>
              
              {/* Skill description */}
              <motion.div
                variants={descriptionVariants}
                initial="hidden"
                animate={hoveredSkill === skill.name ? "visible" : "hidden"}
                className="text-gray-600 dark:text-gray-300 text-sm mb-4 overflow-hidden"
              >
                {skill.description}
              </motion.div>
              
              {/* Progress bar */}
              <div className="relative">
                <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    custom={skill.level}
                    variants={progressVariants}
                    className="h-full rounded-full"
                    style={{ 
                      background: `linear-gradient(90deg, ${skill.color}80 0%, ${skill.color} 100%)`,
                      boxShadow: `0 0 10px ${skill.color}40`
                    }}
                  />
                </div>
                
                {/* Percentage markers */}
                <div className="flex justify-between mt-1 text-xs text-gray-500 dark:text-gray-400">
                  {[0, 25, 50, 75, 100].map((mark) => (
                    <span key={mark}>{mark}%</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Bottom section with skill categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
            Skill Categories
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900"
            >
              <h4 className="font-semibold text-lg mb-2 text-blue-600 dark:text-blue-400">Frontend Development</h4>
              <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  React & React Native
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  HTML5 & CSS3
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  JavaScript (ES6+)
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900"
            >
              <h4 className="font-semibold text-lg mb-2 text-green-600 dark:text-green-400">Backend Development</h4>
              <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Node.js & Express
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  PHP
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  RESTful APIs
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900"
            >
              <h4 className="font-semibold text-lg mb-2 text-purple-600 dark:text-purple-400">Database</h4>
              <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  MongoDB
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  MySQL
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Database Design
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;