'use client';

import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`${theme === 'dark' ? 'dark' : ''}`}>
      <div className={`min-h-screen bg-white dark:bg-[#0a0a0a] text-zinc-900 dark:text-zinc-50 selection:bg-blue-500/30 selection:text-blue-900 dark:selection:text-blue-200 transition-colors duration-500 ease-in-out`} style={{ fontFamily: "var(--font-ibm-plex-sans), sans-serif" }}>
        <Navigation theme={theme} toggleTheme={toggleTheme} />
        
        <main>
          <Hero />
          <Experience />
          <Projects />
          <Skills />
        </main>

        <Footer />
      </div>
    </div>
  );
}
