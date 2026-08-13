import React, { useState, useEffect } from 'react';
import { Download, Menu, X, Sun, Moon } from 'lucide-react';

const Header = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Credentials', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      scrolled 
        ? 'py-3.5 bg-white/90 dark:bg-[#030712]/90 backdrop-blur-md border-b border-slate-200/80 dark:border-white/[0.08] shadow-sm' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="font-extrabold text-2xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-500 dark:from-sky-400 dark:to-purple-500 transition-transform">
            MR43
          </span>
          <span className="font-bold text-base text-slate-900 dark:text-white tracking-tight">
            
          </span>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                idx === 0 ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Buttons: Theme Toggle & Download CV */}
        <div className="hidden sm:flex items-center gap-3">
          
          {/* Dark / Light Mode Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Theme"
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-[#080e1d] text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/40 transition-colors"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? <Sun size={15} className="text-amber-400" /> : <Moon size={15} className="text-slate-700" />}
          </button>

          {/* Download CV button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <span>Resume</span>
            <Download size={13} className="text-slate-500 dark:text-slate-400" />
          </a>
        </div>

        {/* Mobile Buttons */}
        <div className="flex md:hidden items-center gap-3">
          {/* Dark Mode button shifted left */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Theme"
            className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {darkMode ? <Sun size={15} className="text-amber-400" /> : <Moon size={15} className="text-slate-700" />}
          </button>

          {/* Hamburger menu button placed at the right corner with Keka Dinda visual styling */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className="p-2.5 rounded-lg border border-slate-200 dark:border-blue-500/35 bg-slate-50 dark:bg-blue-500/5 text-slate-700 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-all shadow-sm"
          >
            {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#070d1d] border-b border-slate-200 dark:border-white/[0.08] px-6 py-5 shadow-xl">
          <div className="flex flex-col gap-3 text-left">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 py-1.5"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 text-xs font-medium py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white"
            >
              <Download size={14} />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;