import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaCode,
  FaServer,
  FaMobile,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/animations";
import profileImage from "../assets/myport.jpg";

const skills = [
  {
    title: "Frontend Development",
    description:
      "Building responsive and interactive user interfaces using modern web technologies.",
    icon: FaCode,
    technologies: ["React", "JavaScript", "HTML/CSS", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    description: "Developing robust server-side applications and RESTful APIs.",
    icon: FaServer,
    technologies: ["Node.js", "Express", "MongoDB", "Firebase"],
  },
  {
    title: "Mobile Development",
    description:
      "Creating cross-platform mobile applications with modern frameworks.",
    icon: FaMobile,
    technologies: ["React Native", "Expo", "Mobile UI/UX"],
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-6"
      >
        <motion.div variants={fadeIn("up")} className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.h2
              variants={fadeIn("up")}
              className="text-4xl font-bold text-gray-800 dark:text-white mb-4"
            >
              About Me
            </motion.h2>
            <motion.p
              variants={fadeIn("up")}
              className="text-xl text-gray-600 dark:text-gray-300"
            >
              Turning ideas into reality through code
            </motion.p>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-[2fr,1fr] gap-12 items-center mb-16">
            {/* Text Content */}
            <motion.div variants={fadeIn("right")} className="space-y-6">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Hello! I'm a Software Engineering undergraduate student at SLIIT university Malabe, Sri Lanka.
                I'm passionate about full-stack development and building exceptional digital experiences. With a
                growing foundation in both frontend and backend technologies, I strive to create scalable,
                user-friendly applications that solve real-world problems.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Currently, I'm focused on expanding my knowledge and skills through hands-on projects
                while pursuing my degree. I enjoy taking on challenging assignments that push my boundaries
                and contribute to my growth as an aspiring software engineer.
              </p>
              <motion.div variants={fadeIn("up")} className="flex gap-4">
                {[
                  { icon: FaGithub, href: "https://github.com/LaSan99" },
                  {
                    icon: FaLinkedin,
                    href: "www.linkedin.com/in/lasan-navodya-6612112a2",
                  },
                  { icon: FaTwitter, href: "https://twitter.com/yourusername" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
                  >
                    <social.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Profile Image with Decorative Elements */}
            <motion.div variants={fadeIn("left")} className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="aspect-square rounded-2xl overflow-hidden shadow-xl"
              >
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500 rounded-xl -z-10"
              />
              <motion.div
                animate={{
                  rotate: [360, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -top-6 -left-6 w-24 h-24 bg-purple-500 rounded-xl -z-10"
              />
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up")}
                whileHover={{ y: -10 }}
                className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4"
                >
                  <skill.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {skill.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
