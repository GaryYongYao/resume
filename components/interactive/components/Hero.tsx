import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

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
                <ExternalLink size={18} />
              </div>
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
