import React from 'react';
import { ExternalLink, Github, Shield, BarChart3, ShoppingCart } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Phishing URL Detection with Machine Learning",
      description: "Developed an ML-based phishing website detector processing 500,000+ URLs daily. Used Decision Trees and Neural Networks to increase detection speed by 30%.",
      icon: <Shield className="w-8 h-8" />,
      technologies: ["Python", "Machine Learning", "Neural Networks", "Decision Trees"],
      githubUrl: "https://github.com/Ravindra967/Phishing-URL-Detection",
      gradient: "from-red-400 to-red-600"
    },
    {
      title: "React Dashboard with Django Backend",
      description: "Built a responsive admin dashboard using ReactJS, Django REST API, JWT Auth. Features role-based access, route protection, and PostgreSQL for efficient queries.",
      icon: <BarChart3 className="w-8 h-8" />,
      technologies: ["React.js", "Django", "PostgreSQL", "JWT", "REST API"],
      githubUrl: "https://github.com/Ravindra967/django-react",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      title: "Django + React E-Commerce Admin Panel",
      description: "E-commerce admin system with Stripe integration and full product/order CRUD. Used Redux for state management, React Lazy loading for performance boost.",
      icon: <ShoppingCart className="w-8 h-8" />,
      technologies: ["Django", "React.js", "Redux", "Stripe", "PostgreSQL"],
      githubUrl: "https://github.com/Ravindra967/studyhub/tree/master",
      gradient: "from-green-400 to-green-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-white">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Real-world applications showcasing my expertise in full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-8">
                <div className={`inline-flex p-4 rounded-lg bg-gradient-to-r ${project.gradient} mb-6`}>
                  <div className="text-white">
                    {project.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <Github className="w-5 h-5" />
                    Code
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-xl border border-blue-500/20">
          <h3 className="text-2xl font-semibold text-white mb-4 text-center">Current Project</h3>
          <div className="text-center">
            <h4 className="text-xl font-semibold text-blue-400 mb-4">EdTech Platform </h4>
            <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
              I'm actively building an EdTech product aimed at simplifying digital learning for schools and educators. 
              From user dashboards to smart course delivery and content automation — this project brings together the best of 
              full stack development and user-centered design. Built with Django + React + PostgreSQL, focusing on 
              offline-first support and responsive design.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {["Django", "React.js", "PostgreSQL", "Responsive Design", "Offline-First"].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm border border-blue-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;