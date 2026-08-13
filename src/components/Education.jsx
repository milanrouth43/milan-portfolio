import React from 'react';
import { educationData } from '../Data/education';

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-slate-200 dark:border-white/[0.05]">
      
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">
          Education
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
          My Education details from schooling to till yet
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        
        {/* Center Vertical Line (Desktop) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-slate-300 dark:bg-slate-700/80 hidden md:block"></div>

        <div className="space-y-12 md:space-y-16">
          {educationData.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row items-center justify-between w-full ${
                  isEven ? '' : 'md:flex-row-reverse'
                }`}
              >
                
                {/* CARD SIDE */}
                <div className="w-full md:w-5/12 mb-4 md:mb-0">
                  <div className="bg-slate-50 dark:bg-[#080e1d] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-slate-700 shadow-sm dark:shadow-xl transition-all duration-200 flex items-start gap-4 text-left">
                    
                    {/* Card Logo Thumbnail */}
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-2xl p-1.5 flex items-center justify-center shadow-md overflow-hidden border border-slate-200 dark:border-slate-700">
                      <img 
                        src={item.image} 
                        alt={item.institution} 
                        className="w-full h-full object-contain"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug mb-1">
                        {item.institution}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold text-xs sm:text-sm mb-1.5">
                        {item.degree}
                      </p>
                      <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-2">
                        {item.desc}
                      </p>
                      
                      {/* Mobile Year & Score badge */}
                      <div className="flex items-center gap-2 md:hidden pt-1">
                        <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                          {item.year}
                        </span>
                        {item.score && (
                          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-500/20">
                            {item.score}
                          </span>
                        )}
                      </div>
                    </div>

                  </div>
                </div>

                {/* CENTER LOGO EMBLEM CIRCLE (Desktop) */}
                <div className="relative z-10 hidden md:flex items-center justify-center w-18 h-18 bg-white dark:bg-[#0b1222] rounded-full border-4 border-slate-300 dark:border-slate-700 shadow-2xl p-2.5 flex-shrink-0 group">
                  <img 
                    src={item.image} 
                    alt="Emblem" 
                    className="w-11 h-11 object-contain rounded-full"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>

                {/* OPPOSITE SIDE: Big Bold Date & Score Text (Desktop) */}
                <div className="w-full md:w-5/12 hidden md:block">
                  <div className={`space-y-1 ${isEven ? 'pl-10 text-left' : 'pr-10 text-right'}`}>
                    <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                      {item.year}
                    </div>
                    {item.score && (
                      <div className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400">
                        {item.score}
                      </div>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Education;