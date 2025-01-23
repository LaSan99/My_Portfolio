import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
      icon: FaGithub,
      hoverColor: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      url: "www.linkedin.com/in/lasan-navodya-6612112a2",
      icon: FaLinkedin,
      hoverColor: "hover:text-blue-400",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yourusername",
      icon: FaTwitter,
      hoverColor: "hover:text-blue-400",
    },
    {
      name: "Email",
      url: "mailto:your.email@example.com",
      icon: HiMail,
      hoverColor: "hover:text-red-400",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
              Lasan Navodya
            </h3>
            <p className="text-gray-400 max-w-xs mx-auto md:mx-0">
              Crafting digital experiences with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a
                href="#about"
                className="block text-gray-400 hover:text-white transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#projects"
                className="block text-gray-400 hover:text-white transition-colors duration-300"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="block text-gray-400 hover:text-white transition-colors duration-300"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="block text-gray-400 hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transform hover:scale-110 transition-all duration-300 ${link.hoverColor}`}
                  aria-label={link.name}
                >
                  <link.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Lasan Navodya. All rights
              reserved.
            </p>
            <p className="flex items-center text-sm text-gray-400 mt-4 md:mt-0">
              Designed By - Lasan Navodya <FaHeart className="text-red-500 mx-1 animate-pulse" />{" "}
              
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
