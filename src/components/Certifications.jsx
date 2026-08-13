import React from 'react';
import { certificationsData } from '../Data/certifications';
import { Award, ExternalLink, ShieldCheck, Terminal, Binary, Briefcase, Lock, Database } from 'lucide-react';

const Certifications = () => {
  const getCertIcon = (id) => {
    switch (id) {
      case 'capgemini-fellowship':
        return <Briefcase size={18} className="text-blue-500" />;
      case 'hackviser-cybersecurity':
        return <Lock size={18} className="text-green-500" />;
      case 'code-with-harry-data-science':
        return <Database size={18} className="text-indigo-500" />;
      case 'cisco-cybersecurity':
        return <ShieldCheck size={18} className="text-cyan-500" />;
      case 'canonical-ubuntu':
        return <Terminal size={18} className="text-orange-500" />;
      case 'anaconda-python':
        return <Binary size={18} className="text-emerald-500" />;
      default:
        return <Award size={18} className="text-blue-500" />;
    }
  };

  return (
    <section id="certifications" className="py-20 px-6 lg:px-12 max-w-7xl mx-auto border-t border-slate-200 dark:border-white/[0.05]">
      
      {/* Section Title */}
      <div className="text-center mb-12">
        <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider font-mono">
          Credentials & Achievements
        </div>
      </div>

      {/* 6 Metric / Credential Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificationsData.map((cert) => (
          <div
            key={cert.id}
            className="p-6 rounded-2xl bg-slate-50 dark:bg-[#080e1d] border border-slate-200 dark:border-slate-800/90 hover:border-blue-400 dark:hover:border-slate-700 transition-all flex flex-col justify-between group shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#030712] border border-slate-200 dark:border-slate-800 flex items-center justify-center shadow-sm">
                  {getCertIcon(cert.id)}
                </div>
                {cert.status && (
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/25 animate-pulse">
                    {cert.status}
                  </span>
                )}
              </div>

              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {cert.title}
              </h3>

              <div className="text-xs font-medium text-blue-600 dark:text-blue-400 mb-3">
                {cert.issuer}
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                {cert.description}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800/60 flex items-center justify-between">
              <span className="text-[10px] font-mono text-slate-500">{cert.date}</span>
              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline transition-colors"
              >
                <span>{cert.status === 'Incoming' ? 'Expect' : 'Verify'}</span>
                <ExternalLink size={12} />
              </a>
            </div>
            {cert.certId && (
              <div className="mt-2 text-[9px] font-mono text-slate-400 dark:text-slate-500 truncate text-left">
                ID: {cert.certId}
              </div>
            )}
          </div>
        ))}
      </div>

    </section>
  );
};

export default Certifications;
