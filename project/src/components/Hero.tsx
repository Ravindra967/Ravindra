import React from 'react';
import { Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-900 to-purple-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent)] bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent)]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">
            Hi, I'm Ravindra Gudala 👋
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Full Stack Developer | Python Enthusiast | Problem Solver
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I build scalable, secure, and responsive web applications using modern tools like Python, Django, React, and SQL.
            Actively seeking opportunities to grow as a developer and contribute to impactful, real-world projects.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="https://drive.google.com/file/d/1LoLIKGeOM-VhI97ApamfdgIATya0XYfu/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-200 hover:scale-105"
          >
            View Projects
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/Ravindra967"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-200 hover:scale-110"
          >
            <Github className="w-6 h-6 text-gray-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/ravindra-gudala"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-200 hover:scale-110"
          >
            <Linkedin className="w-6 h-6 text-gray-300" />
          </a>
          <a
            href="mailto:gudalaravindra15@gmail.com"
            className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-200 hover:scale-110"
          >
            <Mail className="w-6 h-6 text-gray-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;