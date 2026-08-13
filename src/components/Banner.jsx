import React, { useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const Banner = () => {
  const [rotation, setRotation] = useState(0);
  const [isClockwise, setIsClockwise] = useState(true);
  const [floatingHearts, setFloatingHearts] = useState([]);

  const techStack = [
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  ];

  const spawnHeart = () => {
    const id = Date.now() + Math.random();
    const driftX = (Math.random() - 0.5) * 60;
    const rotateDeg = (Math.random() - 0.5) * 90;
    const emojis = ['❤️', '💖', '💝', '💕', '💘'];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    
    const newHeart = {
      id,
      dx: `${driftX}px`,
      dr: `${rotateDeg}deg`,
      emoji: randomEmoji
    };
    
    setFloatingHearts(prev => [...prev, newHeart]);
    setTimeout(() => {
      setFloatingHearts(prev => prev.filter(h => h.id !== id));
    }, 1000);
  };

  const spinLeft = () => {
    setRotation(prev => prev - 360);
    setIsClockwise(true); // next click will turn clockwise (alternating)
    spawnHeart();
  };

  const spinRight = () => {
    setRotation(prev => prev + 360);
    setIsClockwise(false); // next click will turn counter-clockwise (alternating)
    spawnHeart();
  };

  const handleHeartClick = () => {
    if (isClockwise) {
      spinRight();
    } else {
      spinLeft();
    }
  };

  const handleHeartContextMenu = (e) => {
    e.preventDefault();
    if (isClockwise) {
      spinLeft();
    } else {
      spinRight();
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
      
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left 7 Cols: Headline & Call To Action */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left order-2 lg:order-1 flex flex-col items-center lg:items-start">
          
          {/* Clean Modern Badge Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider font-mono">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Cloud & DevOps Engineer · SRE
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-[1.15] whitespace-normal">
            I Automate Everything, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400">
              Except Falling for        U
            </span>
            <span 
              className="relative inline-block ml-1 align-middle -top-[0.15em]"
              style={{ perspective: '1000px' }}
            >
              {/* Heart Emoji */}
              <button
                type="button"
                onClick={handleHeartClick}
                onContextMenu={handleHeartContextMenu}
                className="inline-block text-red-500 hover:scale-125 cursor-pointer focus:outline-none transition-transform duration-700 ease-out select-none active:scale-95"
                style={{
                  transform: `rotateY(${rotation}deg)`,
                  transformStyle: 'preserve-3d',
                }}
              >
                ❤️
              </button>

              {/* Floating Hearts Particles */}
              <div className="absolute inset-0 pointer-events-none">
                {floatingHearts.map(heart => (
                  <span
                    key={heart.id}
                    className="absolute pointer-events-none text-lg animate-float-up"
                    style={{
                      left: '50%',
                      bottom: '100%',
                      '--dx': heart.dx,
                      '--dr': heart.dr,
                    }}
                  >
                    {heart.emoji}
                  </span>
                ))}
              </div>
            </span>
          </h1>

          {/* Clean Professional Narrative */}
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
            Hi, I'm <strong className="text-slate-900 dark:text-white font-semibold">Milan Routh</strong>. I am a Cloud & DevOps Engineer at <strong className="text-blue-600 dark:text-blue-400 font-semibold">Capgemini</strong> and an MCA student at <strong className="text-slate-900 dark:text-white font-semibold">Haldia Institute of Technology</strong>. I specialize in automating cloud infrastructure, CI/CD pipelines, and observability systems.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2 w-full">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-5 py-3 rounded-lg transition-colors shadow-lg shadow-blue-600/25"
            >
              <span>View My Work</span>
              <ArrowRight size={14} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-slate-100 dark:bg-[#0a1020] hover:bg-slate-200 dark:hover:bg-[#111827] text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white text-xs font-semibold px-5 py-3 rounded-lg border border-slate-300 dark:border-slate-700/80 transition-colors"
            >
              <span>Get In Touch</span>
              <Mail size={14} className="text-slate-500 dark:text-slate-400" />
            </a>
          </div>

          {/* Tech Stack Row */}
          <div className="pt-6 w-full flex flex-col items-center lg:items-start">
            <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3 font-mono">
              Tech I Work With
            </div>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="w-10 h-10 rounded-xl bg-white dark:bg-[#090f1f] border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-center p-2 hover:border-blue-400 dark:hover:border-slate-700 transition-colors group"
                  title={tech.name}
                >
                  <img src={tech.icon} alt={tech.name} className="w-5 h-5 object-contain opacity-90 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right 5 Cols: Clean Profile Image (Placed on top on mobile using order-1) */}
        <div className="lg:col-span-5 flex items-center justify-center order-1 lg:order-2 mb-6 lg:mb-0">
          <div className="relative">
            
            {/* Soft Ambient Radial Glow Behind Avatar */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 rounded-full blur-2xl pointer-events-none"></div>

            {/* Profile Avatar Container */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-blue-500/40 shadow-2xl bg-white dark:bg-[#080d1a]">
              <img
                src="/images/profile.png"
                alt="Milan Routh"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/images/profile44444.png";
                }}
              />
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};

export default Banner;