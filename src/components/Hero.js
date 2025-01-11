import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from "react-icons/fa";

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
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>

      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        {/* Profile Image with Animation */}
        <div className="relative inline-block mb-8">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://images.unsplash.com/photo-1511804074-5e57bc14db9f?q=80&w=1897&auto=format&fit=crop"
              alt="Lasan Navodya"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"></div>
        </div>

        {/* Name and Title with Animations */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-down">
          Lasan Navodya
        </h1>
        <div className="flex flex-col items-center space-y-4">
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up">
            <span className="text-blue-400">Full Stack Developer</span> |{" "}
            <span className="text-purple-400">UI/UX Designer</span>
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-8">
            <a
              href="https://github.com/LaSan99"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
            >
              <FaTwitter size={24} />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full transition duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>View Projects</span>
              <FaArrowDown className="animate-bounce" />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold rounded-full transition duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Contact Me</span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <FaArrowDown className="text-white text-2xl" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </section>
  );
};

export default Hero;
