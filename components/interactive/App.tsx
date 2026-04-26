'use client';

import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-blue-500/30 selection:text-blue-900 transition-[background-color,color] duration-200 ease-out dark:bg-[#0a0a0a] dark:text-zinc-50 dark:selection:text-blue-200" style={{ fontFamily: "var(--font-ibm-plex-sans), sans-serif" }}>
      <Navigation />
      
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
      </main>

      <Footer />
    </div>
  );
}
