import React from 'react';
import { Code2, Database, Globe, Wrench, Shield, Award } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Languages",
      skills: ["Python", "JavaScript", "SQL", "HTML5", "CSS3"],
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Frontend",
      skills: ["React.js", "Tailwind CSS", "JavaScript", "Responsive Design"],
      color: "from-green-400 to-green-600"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend",
      skills: ["Django", "FastAPI", "Flask", "REST API", "JWT Auth"],
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database",
      skills: ["PostgreSQL", "MySQL", "SQLite"],
      color: "from-orange-400 to-orange-600"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Tools",
      skills: ["Git", "GitHub", "Vercel", "Docker"],
      color: "from-red-400 to-red-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Concepts",
      skills: ["OOP", "Data Structures", "Cybersecurity", "Machine Learning"],
      color: "from-indigo-400 to-indigo-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-white">Skills & Tech Stack</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl"
            >
              <div className={`inline-flex p-4 rounded-lg bg-gradient-to-r ${category.color} mb-6`}>
                <div className="text-white">
                  {category.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4">
                {category.title}
              </h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center justify-between p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-200"
                  >
                    <span className="text-gray-300">{skill}</span>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-xl border border-blue-500/20">
            <h3 className="text-2xl font-semibold text-white mb-4">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="text-blue-400 mb-2">
                  <Award className="w-6 h-6 mx-auto" />
                </div>
                <p className="text-white font-medium">CPDA-24</p>
                <p className="text-gray-400 text-sm">Certified Python Developer</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="text-green-400 mb-2">
                  <Award className="w-6 h-6 mx-auto" />
                </div>
                <p className="text-white font-medium">ML Mathematics</p>
                <p className="text-gray-400 text-sm">Statistics & Machine Learning</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="text-purple-400 mb-2">
                  <Shield className="w-6 h-6 mx-auto" />
                </div>
                <p className="text-white font-medium">Cybersecurity</p>
                <p className="text-gray-400 text-sm">Hack The Vibe Competition</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;