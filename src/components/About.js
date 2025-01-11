import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaCode,
  FaServer,
  FaMobile,
} from "react-icons/fa";

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
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-12">
            Turning ideas into reality through code
          </p>

          {/* Main Content */}
          <div className="grid md:grid-cols-[2fr,1fr] gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Hello! I'm a passionate Full Stack Developer based in Sri Lanka,
                specializing in building exceptional digital experiences. With a
                strong foundation in both frontend and backend development, I
                create scalable, user-friendly applications that solve
                real-world problems.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Currently, I'm focused on building accessible, human-centered
                products using modern web technologies. I enjoy working on
                challenging projects that push my boundaries and help me grow as
                a developer.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/LaSan99"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                >
                  <FaGithub className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                >
                  <FaLinkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                >
                  <FaTwitter className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=2070&auto=format&fit=crop"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500 rounded-xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-500 rounded-xl -z-10"></div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {skill.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
