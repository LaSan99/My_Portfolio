import React, { useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaArrowDown,
  FaFileDownload,
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { fadeIn, staggerContainer, scaleIn } from "../utils/animations";
import profile from "../assets/my.jpg";

const Hero = () => {
  const controls = useAnimation();
  
  useEffect(() => {
    controls.start({
      y: [0, -15, 0],
      transition: {
        duration: 2.5,
        ease: "easeInOut",
        repeat: Infinity,
      },
    });
  }, [controls]);

  const bgVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 1.5 }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3 + i * 0.1,
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    })
  };

  const profileImageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: { 
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      rotate: 5,
      boxShadow: "0px 0px 20px rgba(0, 100, 255, 0.5)",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
        url('https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=2071&auto=format&fit=crop')`,
      }}
    >
      <motion.div 
        variants={bgVariants}
        initial="initial"
        animate="animate"
        className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30"
      />
      
      {/* Animated particles in background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-12 h-12 rounded-full bg-white opacity-10"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "mirror"
            }}
          />
        ))}
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 py-20 text-center relative z-10"
      >
        <motion.div 
          variants={profileImageVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className="relative inline-block mb-8"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
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
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30"
          />
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -bottom-3 -right-3 w-12 h-12 bg-blue-500/50 rounded-full blur-sm"
          />
          <motion.div
            animate={{
              rotate: [360, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-3 -left-3 w-10 h-10 bg-purple-500/50 rounded-full blur-sm"
          />
        </motion.div>

        <motion.h1
          variants={fadeIn("up")}
          className="text-4xl md:text-7xl font-bold text-white mb-4 text-shadow-lg"
          style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.3)" }}
        >
          Lasan Navodya
        </motion.h1>
        
        <motion.h2
          variants={fadeIn("up", 0.2)}
          className="text-xl md:text-2xl font-light text-blue-200 mb-8"
        >
          <span className="typing-text">Full Stack Developer</span>
        </motion.h2>

        <motion.div
          variants={fadeIn("up", 0.3)}
          className="flex justify-center gap-6 mt-8"
        >
          {[
            { icon: FaGithub, href: "https://github.com/LaSan99" },
            { icon: FaLinkedin, href: "www.linkedin.com/in/lasan-navodya-6612112a2" },
            { icon: FaTwitter, href: "https://twitter.com/yourusername" },
          ].map((social, index) => (
            <motion.a
              key={index}
              custom={index}
              variants={socialVariants}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors duration-300 
                        bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20"
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>

        {/* CV Download Button */}
        <motion.div 
          variants={fadeIn("up", 0.4)} 
          className="mt-12"
        >
          <motion.a
            href="/assets/resume.pdf"
            download
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "rgba(59, 130, 246, 0.9)",
              boxShadow: "0px 0px 15px rgba(59, 130, 246, 0.5)" 
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 bg-blue-500 hover:bg-blue-600 
                      text-white rounded-full font-medium transition-all duration-300 
                      shadow-lg hover:shadow-xl backdrop-blur-sm"
          >
            <FaFileDownload className="w-5 h-5 mr-2" />
            Download CV
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div animate={controls}>
            <FaArrowDown className="text-white text-2xl" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;