import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  // Default to false (Light Mode) since you prefer it
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    // The Main Background Color changes here
    <div className="min-h-screen transition-colors duration-300 bg-slate-50 dark:bg-[#0f172a] text-slate-900 dark:text-white">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Banner />
      <Skills />
      <Projects />
      <Education />
      <Footer />
    </div>
  );
}

export default App;