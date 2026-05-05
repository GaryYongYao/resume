import React from 'react';
import { motion } from 'framer-motion';
import { Download, MapPin, Mail, Phone } from 'lucide-react';
import garyPdf from '@/assets/gary.pdf';

function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.51 11.51 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export function Hero() {
  const name = "Gary Kok Yong Yao".split(" ");
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };
  
  const wordVariants = {
    hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative px-6 md:px-12 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full z-10 mt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-8 flex flex-wrap gap-x-4 gap-y-2"
        >
          {name.map((word, i) => (
            <motion.span 
              key={i} 
              variants={wordVariants}
              className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 leading-none cursor-default hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-600 dark:text-zinc-300 mb-6" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>
            Fullstack Product Engineer (React, Next.js, Node.js)
          </h2>
          <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed mb-10">
            Senior Frontend Engineer with 9+ years of experience architecting and developing scalable web platforms. Specialized in building high-performance systems and managing multi-repository products.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-6 text-sm font-medium" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>
            <a href="mailto:garyyongyao@gmail.com" className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors group">
              <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail size={18} />
              </div>
              garyyongyao@gmail.com
            </a>
            <a href="tel:+60169239899" className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors group">
              <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone size={18} />
              </div>
              +6016 923 9899
            </a>
            <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
              <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                <MapPin size={18} />
              </div>
              Kuala Lumpur, Malaysia
            </div>
            <a href="https://github.com/GaryYongYao" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors group">
              <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                <GitHubIcon className="h-[18px] w-[18px]" />
              </div>
              GitHub
            </a>
            <a href={garyPdf} download="gary-kok-yong-yao.pdf" className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors group">
              <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Download size={18} />
              </div>
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
