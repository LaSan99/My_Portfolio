import React from "react";

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
      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <img
          src="https://images.unsplash.com/photo-1511804074-5e57bc14db9f?q=80&w=1897&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Your Name"
          className="w-32 h-32 rounded-full mx-auto mb-8 object-cover"
        />
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-down">
          Lasan Navodya
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up">
          Web Developer | Designer
        </p>
        <a
          href="#projects"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 animate-bounce"
        >
          View Projects
        </a>
      </div>
    </section>
  );
};

export default Hero;
