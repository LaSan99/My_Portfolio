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
    technologies: ["React", "JavaScript", "HTML/CSS", "Tailwind CSS", "Next.js"],
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "Backend Development",
    description: "Developing robust server-side applications and RESTful APIs.",
    icon: FaServer,
    technologies: ["Node.js", "Express", "MongoDB", "Firebase", "Spring Boot", "Nest.js"],
    color: "from-purple-400 to-purple-600",
  },
  {
    title: "Mobile Development",
    description:
      "Creating cross-platform mobile applications with modern frameworks.",
    icon: FaMobile,
    technologies: ["React Native", "Expo", "Mobile UI/UX", "Flutter"],
    color: "from-green-400 to-green-600",
  },
];

const About = () => {
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      rotate: 2,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <section
        id="about"
        className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="container mx-auto px-6"
        >
          <motion.div variants={fadeIn("up")} className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-20">
              <motion.h2
                variants={fadeIn("up")}
                className="text-5xl font-bold text-gray-800 dark:text-white mb-4 relative inline-block"
              >
                About Me
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute bottom-0 left-0 h-1 bg-blue-500"
                />
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.2)}
                className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              >
                Turning ideas into reality through code
              </motion.p>
            </div>

            {/* Main Content Grid */}
            <div className="grid md:grid-cols-[2fr,1fr] gap-16 items-center mb-20">
              {/* Text Content */}
              <motion.div variants={fadeIn("right", 0.2)} className="space-y-6">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Hello! I'm a Software Engineering undergraduate student at SLIIT university Malabe, Sri Lanka.
                  I'm passionate about full-stack development and building exceptional digital experiences. With a
                  growing foundation in both frontend and backend technologies, I strive to create scalable,
                  user-friendly applications that solve real-world problems.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Currently, I'm focused on expanding my knowledge and skills through hands-on projects
                  while pursuing my degree. I enjoy taking on challenging assignments that push my boundaries
                  and contribute to my growth as an aspiring software engineer.
                </p>

                {/* Social Links */}
                <div className="pt-4">
                  <motion.h3
                    variants={fadeIn("up")}
                    className="text-xl font-semibold text-gray-800 dark:text-white mb-4"
                  >
                    Connect With Me
                  </motion.h3>
                  <motion.div variants={fadeIn("up")} className="flex gap-5 flex-wrap">
                    {[
                      { icon: FaGithub, href: "https://github.com/LaSan99", label: "GitHub" },
                      { icon: FaLinkedin, href: "https://www.linkedin.com/in/lasan-navodya-6612112a2", label: "LinkedIn" },
                      { icon: FaTwitter, href: "https://twitter.com/yourusername", label: "Twitter" },
                    ].map((social) => (
                      <motion.a
                        key={social.label}
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg 
                                bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 
                                text-gray-700 dark:text-gray-300 transition-all duration-300 group"
                      >
                        <social.icon className="w-5 h-5 group-hover:text-blue-500 transition-colors" />
                        <span className="font-medium">{social.label}</span>
                      </motion.a>
                    ))}
                  </motion.div>
                </div>
              </motion.div>

              {/* Profile Image */}
              <motion.div
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl relative">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.7 }}
                    className="absolute inset-0 bg-gradient-to-tr from-blue-500/40 to-purple-500/40"
                  />
                </div>

                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl -z-10"
                />
                <motion.div
                  animate={{ rotate: [360, 0] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl -z-10"
                />
              </motion.div>
            </div>

            {/* Skills Section */}
            <div className="grid md:grid-cols-3 gap-10">
              {skills.map((skill, idx) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className={`rounded-xl p-6 bg-gradient-to-br ${skill.color} text-white shadow-lg`}
                >
                  <skill.icon className="w-10 h-10 mb-4" />
                  <h4 className="text-2xl font-bold mb-2">{skill.title}</h4>
                  <p className="mb-4">{skill.description}</p>
                  <ul className="text-sm list-disc list-inside space-y-1">
                    {skill.technologies.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default About;
