import React from 'react';
import { educationData } from '../Data/education';

const Education = () => {
  return (
    <section id="education" className="pt-10 pb-20 px-4 bg-slate-50 dark:bg-[#0f172a] transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-4 md:px-10">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900 dark:text-white">Education</h2>
        <p className="text-slate-600 dark:text-gray-400 text-center mb-16">
          My Education details from schooling to till yet
        </p>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-300 dark:bg-gray-700 hidden md:block"></div>

          {educationData.map((item, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center justify-between mb-16 w-full ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
              
              {/* LEFT SIDE (Card) */}
              <div className="w-full md:w-5/12 mb-4 md:mb-0">
                <div className="bg-white dark:bg-[#1e293b] p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-blue-500/20 transition-all flex items-start gap-4">
                  
                  {/* CARD LOGO (Visible on BOTH Mobile and Desktop now) */}
                  <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full overflow-hidden border border-gray-200 p-1 flex items-center justify-center">
                    <img 
                      src={item.image} 
                      alt={item.institution} 
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="text-left">
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white leading-tight mb-1">{item.institution}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-2">{item.degree}</p>
                    <p className="text-slate-600 dark:text-gray-400 text-sm">{item.desc}</p>
                    <p className="text-blue-500 text-xs font-bold mt-2 md:hidden">{item.year}</p>
                  </div>
                </div>
              </div>

              {/* CENTER LOGO CIRCLE (Desktop Only) */}
              <div className="relative z-10 hidden md:flex items-center justify-center w-20 h-20 bg-white dark:bg-[#1e293b] rounded-full border-4 border-slate-300 dark:border-gray-600 shadow-2xl my-4 md:my-0 p-2">
                 <img 
                   src={item.image} 
                   alt="Logo" 
                   className="w-full h-full object-contain rounded-full"
                 />
              </div>

              {/* RIGHT SIDE (Date) */}
              <div className="w-full md:w-5/12 text-center md:text-left hidden md:block">
                <div className={`text-xl font-bold text-slate-900 dark:text-white ${index % 2 === 0 ? 'pl-12 text-left' : 'pr-12 text-right'}`}>
                  {item.year}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;