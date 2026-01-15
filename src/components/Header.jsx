import React, { useState } from 'react';

const Header = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    // CHANGED: bg-white/70 (High transparency) + backdrop-blur-md (Glass Blur)
    // REMOVED: Harsh border color (now using a very subtle shadow)
    <nav className="fixed w-full z-50 bg-white/70 dark:bg-[#0f172a]/70 backdrop-blur-md border-b border-white/20 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer text-slate-900 dark:text-white">
          <a href="#home">MiLAN ROUTH</a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-medium items-center text-slate-800 dark:text-gray-300">
          <a href="#home" className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors">About</a>
          <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Projects</a>
          <a href="#education" className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Education</a>
          
          {/* Dark Mode Toggle Button */}
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className="p-2 rounded-full bg-slate-100 dark:bg-gray-700 hover:bg-slate-200 dark:hover:bg-gray-600 transition-colors"
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          <a 
            href="https://github.com/milanrouth43" 
            target="_blank" 
            rel="noreferrer"
            className="bg-slate-900 dark:bg-white text-white dark:text-black px-5 py-2 rounded-full font-bold hover:opacity-80 transition-all shadow-md"
          >
            GitHub
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
           {/* Mobile Dark Mode Toggle */}
           <button 
            onClick={() => setDarkMode(!darkMode)} 
            className="p-2 rounded-full bg-slate-100 dark:bg-gray-700"
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          <button onClick={toggleMenu} className="text-slate-900 dark:text-white focus:outline-none">
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;