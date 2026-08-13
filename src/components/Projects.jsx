import React, { useState } from 'react';
import { projectData } from '../Data/projects';
import { ExternalLink, Cloud, Server, Monitor } from 'lucide-react';
import { GithubIcon } from './Icons';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Cloud & DevOps', 'Machine Learning', 'Web Apps'];

  const filteredProjects = filter === 'All'
    ? projectData
    : projectData.filter(p => {
        if (filter === 'Machine Learning') return p.category.includes('Machine Learning');
        if (filter === 'Cloud & DevOps') return p.category.includes('Cloud');
        if (filter === 'Web Apps') return p.category.includes('Web') || p.category.includes('Frontend');
        return true;
      });

  const renderGraphic = (project) => {
    if (project.id === 'cloud-readiness-assessment') {
      return (
        <div className="w-full h-full bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-900 flex flex-col items-center justify-center p-4 text-center">
          <Cloud className="w-10 h-10 text-cyan-400 mb-2" />
          <span className="text-[10px] font-mono text-cyan-300 uppercase tracking-widest">Enterprise Architecture</span>
          <span className="text-xs font-bold text-white mt-1">Cloud Maturity & TCO/ROI</span>
        </div>
      );
    }
    if (project.id === 'sre-monitoring-observability') {
      return (
        <div className="w-full h-full bg-gradient-to-br from-emerald-950 via-teal-950 to-slate-900 flex flex-col items-center justify-center p-4 text-center">
          <Server className="w-10 h-10 text-emerald-400 mb-2" />
          <span className="text-[10px] font-mono text-emerald-300 uppercase tracking-widest">Observability Stack</span>
          <span className="text-xs font-bold text-white mt-1">Prometheus · Grafana · CloudWatch</span>
        </div>
      );
    }
    if (project.id === 'productivity-dashboard') {
      return (
        <div className="w-full h-full bg-gradient-to-br from-purple-950 via-slate-900 to-indigo-950 flex flex-col items-center justify-center p-4 text-center">
          <Monitor className="w-10 h-10 text-purple-400 mb-2" />
          <span className="text-[10px] font-mono text-purple-300 uppercase tracking-widest">Web Application</span>
          <span className="text-xs font-bold text-white mt-1">Pomodoro · Tasks · Weather API</span>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="projects" className="py-20 px-6 lg:px-12 max-w-7xl mx-auto border-t border-slate-200 dark:border-white/[0.05]">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider font-mono">
            Featured Projects
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                filter === cat
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 3-Column Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id || project.title}
            className="rounded-2xl bg-slate-50 dark:bg-[#080e1d] border border-slate-200 dark:border-slate-800/90 overflow-hidden hover:border-blue-400 dark:hover:border-slate-700 transition-all duration-200 flex flex-col justify-between group shadow-sm"
          >
            {/* Banner preview */}
            <div className="h-44 w-full bg-slate-200 dark:bg-[#030712] overflow-hidden relative border-b border-slate-200 dark:border-slate-800/60">
              {renderGraphic(project) || (
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              )}
            </div>

            {/* Content Body */}
            <div className="p-5 flex flex-col flex-grow justify-between">
              <div>
                <div className="flex items-center gap-2 flex-wrap mb-2">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20">
                    {project.tags[0]}
                  </span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 mb-4">
                  {project.description}
                </p>
              </div>

              {/* Bottom Actions Row */}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800/60 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(1, 4).map((tag, idx) => (
                    <span key={idx} className="text-[10px] font-mono text-slate-500">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                      title="GitHub Repository"
                    >
                      <GithubIcon size={14} />
                    </a>
                  )}

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                      title="Live Link"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Projects;