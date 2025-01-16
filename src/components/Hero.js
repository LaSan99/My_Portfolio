import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, scaleIn } from "../utils/animations";
import profile from "../assets/my.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
        url('https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=2071&auto=format&fit=crop')`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 py-20 text-center relative z-10"
      >
        <motion.div variants={scaleIn} className="relative inline-block mb-8">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <img
              src={profile}
              alt="Lasan Navodya"
              className="w-full h-full object-cover"
            />
          </div>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20"
          ></motion.div>
        </motion.div>

        <motion.h1
          variants={fadeIn("up")}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          Lasan Navodya
        </motion.h1>

        <motion.div
          variants={fadeIn("up")}
          className="flex justify-center gap-4 mt-8"
        >
          {[
            { icon: FaGithub, href: "https://github.com/LaSan99" },
            { icon: FaLinkedin, href: "www.linkedin.com/in/lasan-navodya-6612112a2" },
            { icon: FaTwitter, href: "https://twitter.com/yourusername" },
          ].map((social, index) => (
            <motion.a
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaArrowDown className="text-white text-2xl animate-bounce" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
