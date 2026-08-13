import React from 'react';
import { ExternalLink } from 'lucide-react';

const ExperienceEducation = () => {
  const timeline = [
    {
      type: 'work',
      date: 'Aug. 2026 – Present',
      title: 'Cloud & DevOps Engineer',
      org: 'Capgemini',
      location: 'India',
      logo: '/images/capgemini.svg',
      desc: 'Engineering multi-cloud infrastructure on AWS & Azure, CI/CD automation pipelines, Kubernetes orchestration, and SRE observability.',
      isLeft: true,
      current: true
    },
    {
      type: 'training',
      date: 'Jan. 2026 – May 2026',
      title: 'Exceller Edge Fellowship — Cloud & DevOps',
      org: 'Capgemini',
      location: 'Haldia Institute of Technology',
      logo: '/images/capgemini.svg',
      desc: 'Completed hands-on Cloud & DevOps training covering AWS, Azure, Docker, Kubernetes, Jenkins, Terraform, Ansible, GitOps, Prometheus, Grafana, Maven, and Linux.',
      isLeft: false,
      certLink: 'https://drive.google.com/file/d/1XM06y-NZtoVujy1aFMED_0o6rcXStOKA/view',
      certId: 'CEEFP2026-7060737'
    },
    {
      type: 'edu',
      date: 'Oct. 2024 – June 2026',
      title: 'Master of Computer Applications (MCA)',
      org: 'Haldia Institute of Technology',
      location: 'Haldia, WB',
      logo: '/images/hit.png',
      score: 'CGPA: 9.02 / 10',
      desc: 'Focusing on Cloud Computing, SRE & Observability, Distributed Systems, and Advanced Software Engineering.',
      isLeft: true,
      current: true
    },
    {
      type: 'edu',
      date: 'Sep. 2021 – Aug. 2024',
      title: 'B.Sc. (Hons.) in Computer Science',
      org: 'Hijli College (Vidyasagar University)',
      location: 'Kharagpur, WB',
      logo: '/images/hijli.png',
      score: 'CGPA: 7.90 / 10',
      desc: 'Studied Core Computer Science, Data Structures, Algorithms, DBMS, Operating Systems, and Computer Networks.',
      isLeft: false
    },
    {
      type: 'edu',
      date: 'July 2021',
      title: 'Higher Secondary (WBCHSE) — 12th Grade',
      org: 'Nachipur Adibasi High School (H.S.)',
      location: 'Keshiary, WB',
      logo: '/images/school.png',
      score: 'Percentage: 82.40%',
      desc: 'Completed Higher Secondary Education in Science stream (Mathematics, Physics, Chemistry, Computer Science).',
      isLeft: true
    },
    {
      type: 'edu',
      date: '2019',
      title: 'Secondary Examination (WBBSE) — 10th Grade',
      org: 'Nachipur Adibasi High School (H.S.)',
      location: 'Keshiary, WB',
      logo: '/images/school.png',
      score: 'Percentage: 78.29%',
      desc: 'Completed Secondary School education with strong foundation in general science and mathematics.',
      isLeft: false
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 lg:px-12 max-w-5xl mx-auto border-t border-white/[0.05]">
      
      {/* Section Title matching reference */}
      <div className="text-center mb-16">
        <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider font-mono">
          Experience & Education
        </div>
      </div>

      {/* Center Line Tree Layout matching reference */}
      <div className="relative">
        
        {/* Center Vertical Blue Line */}
        <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-blue-500/40 md:-translate-x-1/2"></div>

        <div className="space-y-10">
          {timeline.map((item, idx) => {
            const isLeft = item.isLeft;

            return (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  isLeft ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Center Glowing Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#030712] border-2 border-blue-400 shadow-glow-blue z-10"></div>

                {/* Card Container */}
                <div className="w-full md:w-1/2 pl-10 md:pl-0">
                  <div className={`p-5 rounded-xl bg-[#080e1d] border border-slate-800/90 hover:border-slate-700 transition-colors ${
                    isLeft ? 'md:mr-8 text-left' : 'md:ml-8 text-left'
                  }`}>
                    
                    {/* Header: Date + Logo + Badge */}
                    <div className="flex items-start justify-between gap-3 mb-2.5">
                      <div className="flex items-center gap-2.5">
                        {/* Logo Badge */}
                        <div className="w-8 h-8 rounded-lg bg-white p-1 flex items-center justify-center flex-shrink-0 shadow-sm overflow-hidden">
                          <img
                            src={item.logo}
                            alt={item.org}
                            className="w-full h-full object-contain"
                            onError={(e) => { e.target.style.display = 'none'; }}
                          />
                        </div>

                        <div>
                          <div className="text-[11px] font-mono text-slate-400">
                            {item.date}
                          </div>
                          <div className="text-xs font-semibold text-white">
                            {item.org}
                          </div>
                        </div>
                      </div>

                      {item.score && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 whitespace-nowrap">
                          {item.score}
                        </span>
                      )}

                      {item.current && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 whitespace-nowrap">
                          Active
                        </span>
                      )}
                    </div>

                    {/* Role / Degree Title in Electric Blue */}
                    <h3 className="text-xs sm:text-sm font-bold text-blue-400 mb-1">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>

                    {/* Certificate Link if available */}
                    {item.certLink && (
                      <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between">
                        <span className="text-[10px] font-mono text-slate-500">ID: {item.certId}</span>
                        <a
                          href={item.certLink}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-medium text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          <span>View Certificate</span>
                          <ExternalLink size={11} />
                        </a>
                      </div>
                    )}

                  </div>
                </div>

                {/* Empty Spacer on other side */}
                <div className="hidden md:block md:w-1/2"></div>

              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
};

export default ExperienceEducation;
