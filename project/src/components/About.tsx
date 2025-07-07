import React from 'react';
import { Rocket, Award, Users, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certified Python Developer",
      description: "CPDA-24 certified with strong foundation in Python development"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Full Stack Expertise",
      description: "Strong command of RESTful APIs and modern web technologies"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborative Developer",
      description: "Skilled in version control (Git) and agile collaboration"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Innovation Focus",
      description: "Building real-world EdTech platform and automation tools"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-white">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a passionate <span className="text-blue-400 font-semibold">Full Stack Developer</span> with a strong foundation in Python and SQL, 
              and a proven ability to deliver production-ready web applications. I specialize in backend frameworks like Django and FastAPI, 
              and build user-friendly frontends using React.js, HTML, CSS, and JavaScript.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              I focus on creating solutions that are clean, efficient, and scalable. From backend APIs to frontend interfaces, 
              I bridge the gap between functionality and design.
            </p>
            
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-6 rounded-lg border border-blue-500/20">
              <h3 className="text-xl font-semibold text-white mb-4">Current Focus</h3>
              <p className="text-gray-300">
                Building an EdTech product aimed at simplifying digital learning for schools and educators, 
                and looking for real world projects.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-blue-400 mb-4">
                  {highlight.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-400 text-sm">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;