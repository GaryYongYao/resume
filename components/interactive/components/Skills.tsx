import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  "React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Redux", "Tailwind CSS",
  "Framer Motion", "Node.js", "Express.js", "MongoDB (Mongoose)", "Firebase Cloud Functions", "REST API"
];

export function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-32 px-6 md:px-12 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-zinc-900 dark:text-zinc-50" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>
            &lt;Skills /&gt;
          </h2>
          <p className="text-xl text-zinc-500 dark:text-zinc-400" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>
            {`// Tools I use to build scalable products.`}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-4 md:gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              className="px-6 py-4 rounded-2xl bg-zinc-50 dark:bg-[#111] border border-zinc-100 dark:border-zinc-800 text-lg font-medium text-zinc-800 dark:text-zinc-200 shadow-sm hover:shadow-md hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-[background-color,border-color,box-shadow,color] duration-200 cursor-default"
              style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
