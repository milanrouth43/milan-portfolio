import React from 'react';

const Banner = () => {
  return (
    // REVERTED: 'md:px-32' -> 'md:px-16' (Normal Left Spacing)
    // REDUCED: 'py-20' -> 'pt-28 pb-10' (Less gap at the bottom, closer to Skills)
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 pt-28 pb-10 px-6 md:px-16 container mx-auto">
      
      {/* Left Side: Text */}
      <div className="md:w-1/2 text-left">
        <h1 className="text-5xl font-bold mb-4 text-slate-900 dark:text-white">
          Hi, I am <span className="text-blue-600 dark:text-blue-500">Milan Routh</span>
        </h1>
        <h2 className="text-2xl font-semibold text-slate-600 dark:text-gray-400 mb-6">
          M.C.A. Student @ Haldia Institute of Technology
        </h2>
        <p className="text-slate-600 dark:text-gray-300 mb-8 leading-relaxed text-lg">
          I am a college student with a strong foundation in computer science and a deep passion for technology, data, and innovation. 
          I specialize in designing efficient solutions and writing clean code.
        </p>
        
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-blue-500/30 inline-block"
        >
          View Resume
        </a>
      </div>
      
      {/* Right Side: Profile Image */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <div className="relative w-80 h-80 rounded-full border-4 border-blue-600 dark:border-blue-500 overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-800">
          <img 
            src="/images/profile.png" 
            alt="Milan Routh" 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;