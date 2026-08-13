import React from 'react';
import { experienceData } from '../Data/experience';
import { ExternalLink } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-slate-200 dark:border-white/[0.05]">
      
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">
          Experience & Training
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
          Full-time engineering role at Capgemini and professional Cloud & DevOps fellowship
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        
        {/* Center Vertical Line (Desktop) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-slate-300 dark:bg-slate-700/80 hidden md:block"></div>

        <div className="space-y-12 md:space-y-16">
          {experienceData.map((item, index) => {
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
                        src={item.logo} 
                        alt={item.company} 
                        className="w-full h-full object-contain"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                          {item.company}
                        </h3>
                        {item.current && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
                            Active
                          </span>
                        )}
                      </div>

                      <p className="text-blue-600 dark:text-blue-400 font-semibold text-xs sm:text-sm mb-1.5">
                        {item.role}
                      </p>

                      <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-3">
                        {item.description}
                      </p>

                      {/* Certificate link if available */}
                      {item.certificateLink && (
                        <div className="pt-2 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                          <span className="text-[10px] font-mono text-slate-500">ID: {item.certificateId}</span>
                          <a
                            href={item.certificateLink}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline transition-colors"
                          >
                            <span>View Certificate</span>
                            <ExternalLink size={12} />
                          </a>
                        </div>
                      )}
                      
                      {/* Mobile Year badge */}
                      <div className="flex items-center gap-2 md:hidden pt-2">
                        <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                          {item.duration}
                        </span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* CENTER LOGO EMBLEM CIRCLE (Desktop) */}
                <div className="relative z-10 hidden md:flex items-center justify-center w-18 h-18 bg-white dark:bg-[#0b1222] rounded-full border-4 border-slate-300 dark:border-slate-700 shadow-2xl p-2.5 flex-shrink-0">
                  <img 
                    src={item.logo} 
                    alt="Capgemini" 
                    className="w-11 h-11 object-contain rounded-full"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>

                {/* OPPOSITE SIDE: Big Bold Date & Location */}
                <div className="w-full md:w-5/12 hidden md:block">
                  <div className={`space-y-1 ${isEven ? 'pl-10 text-left' : 'pr-10 text-right'}`}>
                    <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                      {item.duration}
                    </div>
                    <div className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
                      {item.type} · {item.location}
                    </div>
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

export default Experience;
