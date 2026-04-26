import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function getInitialTheme() {
  if (typeof document === 'undefined') {
    return 'dark';
  }

  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleTheme = () => {
    const nextTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';

    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
    localStorage.setItem('theme', nextTheme);
    setTheme(nextTheme);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,padding] duration-200 ${
        scrolled 
          ? 'bg-white/70 dark:bg-black/70 backdrop-blur-xl border-b border-zinc-200/50 dark:border-white/10 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <button 
          onClick={() => scrollTo('hero')}
          className="text-xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-100 hover:opacity-70 transition-opacity"
          style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
        >
          Gary Kok
        </button>
        
        <div className="flex items-center gap-6 md:gap-10">
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>
            <button onClick={() => scrollTo('experience')} className="hover:text-blue-500 transition-colors">Experience</button>
            <button onClick={() => scrollTo('projects')} className="hover:text-blue-500 transition-colors">Projects</button>
            <button onClick={() => scrollTo('skills')} className="hover:text-blue-500 transition-colors">Skills</button>
          </div>
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors relative overflow-hidden"
            aria-label="Toggle Theme"
          >
            <AnimatePresence mode="wait">
              {theme === 'dark' ? (
                <motion.div
                  key="sun"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Sun size={20} className="text-zinc-100" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Moon size={20} className="text-zinc-900" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
