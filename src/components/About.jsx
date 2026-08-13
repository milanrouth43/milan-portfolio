import React from 'react';
import { User, Mail, MapPin, Clock } from 'lucide-react';

const About = () => {
  const details = [
    {
      icon: <User size={15} className="text-blue-500" />,
      label: 'Name',
      value: 'Milan Routh'
    },
    {
      icon: <Mail size={15} className="text-indigo-500" />,
      label: 'Email',
      value: 'milanrouth43@gmail.com'
    },
    {
      icon: <MapPin size={15} className="text-purple-500" />,
      label: 'Location',
      value: 'West Bengal, India'
    },
    {
      icon: <Clock size={15} className="text-emerald-500" />,
      label: 'Availability',
      value: 'Cloud Engineer @ Capgemini'
    }
  ];

  return (
    <section id="about" className="py-20 px-6 lg:px-12 max-w-7xl mx-auto border-t border-slate-200 dark:border-white/[0.05]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left 6 Cols: Title, Narrative & CTA */}
        <div className="lg:col-span-6 space-y-4 text-left">
          <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider font-mono">
            About Me
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
            Building reliable infrastructure with <span className="text-blue-600 dark:text-blue-400">clean automation</span> and <span className="text-purple-600 dark:text-purple-400">real impact</span>.
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
            I am a Cloud & DevOps Engineer specializing in architecting resilient multi-cloud environments, container orchestration with Kubernetes & Docker, and automated CI/CD pipelines. Currently working at Capgemini while completing my Master of Computer Applications (9.02 CGPA) at Haldia Institute of Technology.
          </p>

          <div className="pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-white px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#080e1d] hover:bg-slate-100 dark:hover:bg-[#0f172a] transition-colors"
            >
              <span>More About Me</span>
              <User size={13} className="text-blue-500" />
            </a>
          </div>
        </div>

        {/* Right 6 Cols: 2x2 Info Grid */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {details.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-50 dark:bg-[#080e1d]/80 border border-slate-200 dark:border-slate-800/80 hover:border-blue-400 dark:hover:border-slate-700 transition-colors shadow-sm"
            >
              <div className="w-9 h-9 rounded-full bg-white dark:bg-[#030712] border border-slate-200 dark:border-slate-800 flex items-center justify-center flex-shrink-0 shadow-sm">
                {item.icon}
              </div>
              <div className="min-w-0">
                <div className="text-[11px] font-medium text-slate-500">{item.label}</div>
                <div className="text-xs font-semibold text-slate-900 dark:text-white truncate">{item.value}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
