import React from 'react';
import { skills } from '../Data/skills';

const Skills = () => {
  return (
    <section id="skills" className="pt-10 pb-20 px-4 bg-slate-50 dark:bg-[#0f172a] transition-colors duration-300 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900 dark:text-white">Skills</h2>
        <p className="text-slate-600 dark:text-gray-400 text-center mb-16 text-lg">
          Here are some of my skills on which I have been working on for the past 2 years.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {skills.map((category, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-[#1e293b] p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-blue-500/10 transition-all hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold text-center mb-8 text-slate-800 dark:text-gray-100">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap justify-center gap-4">
                {category.skills.map((skill, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-3 px-4 py-3 bg-slate-50 dark:bg-[#0f172a] rounded-xl border border-gray-200 dark:border-gray-700 text-slate-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white hover:border-blue-500 transition-colors"
                  >
                    <img 
                      src={skill.image} 
                      alt={skill.name} 
                      className="w-6 h-6"
                    />
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;