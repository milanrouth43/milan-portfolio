import React from 'react';
// FIX: Imported 'skills' instead of 'skillsData' to match your data file
import { skills } from '../Data/skills'; 

const Skills = () => {
  return (
    <section id="skills" className="py-10 px-4 bg-white dark:bg-[#111827] transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-10">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900 dark:text-white">Skills</h2>
        <p className="text-slate-600 dark:text-gray-400 text-center mb-12">
          Here are some of my skills on which I have been working on for the past 2 years.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {/* FIX: Used 'skills.map' instead of 'skillsData.map' */}
          {skills.map((category, index) => (
            <div key={index} className="w-full md:w-[45%] lg:w-[30%] bg-slate-50 dark:bg-[#1e293b] p-6 rounded-2xl border border-slate-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-center mb-6 text-slate-800 dark:text-gray-200">{category.title}</h3>
              
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-4 py-2 border border-slate-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors">
                    <img src={skill.image} alt={skill.name} className="w-6 h-6" />
                    <span className="text-slate-700 dark:text-gray-300 font-medium">{skill.name}</span>
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