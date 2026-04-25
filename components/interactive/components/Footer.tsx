import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-zinc-950 dark:bg-black text-zinc-400 py-24 px-6 md:px-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-4xl font-bold tracking-tighter text-white" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>Gary Kok Yong Yao</h2>
          <p className="text-lg text-zinc-500">Fullstack Product Engineer based in KL, Malaysia.</p>
        </motion.div>

        <div className="flex items-center gap-8">
          <a href="https://github.com/GaryYongYao" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors p-3 bg-zinc-900 rounded-full hover:bg-zinc-800">
            <ExternalLink size={24} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/garyjay-kok-yong-yao-611a575a/" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-blue-500 transition-colors p-3 bg-zinc-900 rounded-full hover:bg-zinc-800">
            <ExternalLink size={24} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:garyyongyao@gmail.com" className="text-zinc-500 hover:text-white transition-colors p-3 bg-zinc-900 rounded-full hover:bg-zinc-800">
            <Mail size={24} />
            <span className="sr-only">Email</span>
          </a>
        </div>

        <p className="text-sm text-zinc-600">
          © {new Date().getFullYear()} Gary Kok Yong Yao. All rights reserved. Built with React & Framer Motion.
        </p>
      </div>
    </footer>
  );
}
