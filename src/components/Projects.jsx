import React from 'react';
import { projectData } from '../Data/projects';

const Projects = () => {
  return (
    <section id="projects" className="pt-10 pb-20 px-4 bg-slate-50 dark:bg-[#0f172a] transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900 dark:text-white">Projects</h2>
        <p className="text-slate-600 dark:text-gray-400 text-center mb-16 text-lg">
          Here are some of the projects I have worked on.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectData.map((project, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-[#1e293b] rounded-xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 hover:transform hover:scale-105 transition-all duration-300 flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">{project.title}</h3>
                <p className="text-slate-600 dark:text-gray-400 mb-4 text-sm flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs bg-slate-100 dark:bg-[#0f172a] text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-900"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full block text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors"
                >
                  View Live Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;