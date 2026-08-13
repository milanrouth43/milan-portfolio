import React from 'react';
import { Cloud, Activity, Layout, Brain, Database } from 'lucide-react';

const Skills = () => {
  const services = [
    {
      icon: <Cloud size={18} className="text-blue-500" />,
      iconBg: 'bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/20',
      title: 'Cloud & DevOps',
      desc: 'Architecting scalable cloud environments and automating CI/CD release pipelines.',
      tags: 'AWS, Azure, Docker, Kubernetes, Terraform, Jenkins',
    },
    {
      icon: <Activity size={18} className="text-cyan-500" />,
      iconBg: 'bg-cyan-50 dark:bg-cyan-500/10 border-cyan-200 dark:border-cyan-500/20',
      title: 'SRE & Observability',
      desc: 'Configuring telemetry, SLIs/SLOs, alerting workflows, and system health dashboards.',
      tags: 'Prometheus, Grafana, CloudWatch, SRE, Alerting',
    },
    {
      icon: <Layout size={18} className="text-purple-500" />,
      iconBg: 'bg-purple-50 dark:bg-purple-500/10 border-purple-200 dark:border-purple-500/20',
      title: 'Full-Stack Engineering',
      desc: 'Building responsive frontends and resilient RESTful backend APIs with clean code.',
      tags: 'React.js, Flask, Python, JavaScript, HTML5, CSS3',
    },
    {
      icon: <Brain size={18} className="text-indigo-500" />,
      iconBg: 'bg-indigo-50 dark:bg-indigo-500/10 border-indigo-200 dark:border-indigo-500/20',
      title: 'AI & Machine Learning',
      desc: 'Building regression models, preprocessing datasets, and integrating predictive intelligence into applications.',
      tags: 'Scikit-learn, Pandas, NumPy, Python, Matplotlib, SQL',
    },
    {
      icon: <Database size={18} className="text-emerald-500" />,
      iconBg: 'bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/20',
      title: 'Data Science & Databases',
      desc: 'Developing data pipelines, cleaning datasets, and optimizing relational and non-relational database schemas.',
      tags: 'MySQL, PostgreSQL, Pandas, NumPy, SQL Query Tuning',
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 lg:px-12 max-w-7xl mx-auto border-t border-slate-200 dark:border-white/[0.05]">
      
      {/* Section Title */}
      <div className="text-center mb-12">
        <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider font-mono">
          Skills & Services
        </div>
      </div>

      {/* 5 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {services.map((srv, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-slate-50 dark:bg-[#080e1d] border border-slate-200 dark:border-slate-800/90 hover:border-blue-400 dark:hover:border-slate-700 transition-all duration-200 flex flex-col justify-between group shadow-sm"
          >
            <div>
              <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-5 ${srv.iconBg}`}>
                {srv.icon}
              </div>

              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {srv.title}
              </h3>

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {srv.desc}
              </p>
            </div>

            <div className="text-[11px] font-medium text-blue-600 dark:text-blue-400/90 font-mono pt-4 border-t border-slate-200 dark:border-slate-800/60">
              {srv.tags}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Skills;