import React from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Footer = () => {


  return (
    <footer className="border-t border-slate-200 dark:border-white/[0.05] bg-slate-100 dark:bg-[#02050c] text-slate-600 dark:text-slate-400 py-12 px-6 lg:px-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          
          {/* Brand Info (Left 8 Cols) */}
          <div className="md:col-span-8 space-y-3 text-left">
            <a href="#home" className="flex items-center gap-2">
              <span className="font-extrabold text-xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-500 dark:from-sky-400 dark:to-purple-500">
                MR
              </span>
              <span className="font-bold text-sm text-slate-900 dark:text-white">
                Milan Routh
              </span>
            </a>
            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              Cloud & DevOps Engineer @ Capgemini. Building resilient digital infrastructure and machine learning solutions that are fast, scalable, and reliable.
            </p>
          </div>

          {/* Connect Icons (Right 4 Cols) */}
          <div className="md:col-span-4 text-left md:text-right">
            <div className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
              Connect
            </div>
            <div className="flex items-center gap-2 md:justify-end">
              <a
                href="https://github.com/milanrouth43"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white dark:bg-[#080e1d] border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:border-blue-400 dark:hover:border-slate-700 transition-colors shadow-sm"
                aria-label="GitHub"
              >
                <GithubIcon size={14} />
              </a>

              <a
                href="https://www.linkedin.com/in/milanrouth43/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white dark:bg-[#080e1d] border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400 dark:hover:border-slate-700 transition-colors shadow-sm"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={14} />
              </a>

              <a
                href="mailto:milanrouth43@gmail.com"
                className="w-8 h-8 rounded-lg bg-white dark:bg-[#080e1d] border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400 dark:hover:border-slate-700 transition-colors shadow-sm"
                aria-label="Email"
              >
                <Mail size={14} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Milan Routh. All rights reserved.
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;