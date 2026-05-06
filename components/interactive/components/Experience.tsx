import React, { useState } from 'react';
import type { StaticImageData } from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronDown, Images, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ImageViewer } from './ImageViewer';
import storytribeGallery01 from '../../../assets/experience/storytribe/01.png';
import storytribeGallery02 from '../../../assets/experience/storytribe/02.png';
import storytribeGallery03 from '../../../assets/experience/storytribe/03.png';
import storytribeGallery04 from '../../../assets/experience/storytribe/04.png';
import sphereusGallery01 from '../../../assets/experience/sphereus/01.png';
import sphereusGallery02 from '../../../assets/experience/sphereus/02.png';
import sphereusGallery03 from '../../../assets/experience/sphereus/03.png';
import sphereusGallery04 from '../../../assets/experience/sphereus/04.png';
import taylorsGallery01 from '../../../assets/experience/taylors/01.png';
import taylorsGallery02 from '../../../assets/experience/taylors/02.png';
import taylorsGallery03 from '../../../assets/experience/taylors/03.png';
import taylorsGallery04 from '../../../assets/experience/taylors/04.png';
import qumonGallery01 from '../../../assets/experience/qumon/01.png';
import qumonGallery02 from '../../../assets/experience/qumon/02.png';
import qumonGallery03 from '../../../assets/experience/qumon/03.png';

type ExperienceGallery = {
  company: string;
  images: StaticImageData[];
};

const experiences = [
  {
    company: "Storytribe",
    position: "Senior Fullstack Engineer",
    period: "Oct 2025 – Mar 2026",
    location: "Australia, Remote",
    description: "Developed and maintained a fullstack storytelling platform. Built frontend application using React/Next.js with modular component architecture and backend services using Node.js and Firebase Cloud Functions.",
    details: [
      "Developed and maintained a fullstack storytelling platform consisting of separate frontend and backend repositories.",
      "Built frontend application using React/Next.js with modular component architecture and scalable state management.",
      "Developed backend services using Node.js and Firebase Cloud Functions to manage business logic and API workflows.",
      "Designed structured data models and REST API endpoints to support dynamic storyboard rendering and content management.",
      "Implemented authentication flows and secure data handling mechanisms.",
      "Optimized performance across frontend rendering and serverless backend infrastructure.",
      "Contributed to architectural planning for scalable product growth."
    ],
    gallery: [storytribeGallery01, storytribeGallery02, storytribeGallery03, storytribeGallery04]
  },
  {
    company: "Sphereus",
    position: "Full Stack Product Engineer",
    period: "Jan 2024 – Oct 2025",
    location: "U.S, Remote",
    description: "Built a multi-tenant platform with Next.js App Router frontend and Express/MongoDB backend. Implemented role-based route enforcement, real-time updates via Socket.IO, and scalable UI architecture.",
    details: [
      "Built a multi-tenant platform with separate Next.js App Router frontend and Express/MongoDB backend.",
      "Developed brand, ambassador, and admin/control experiences including creator search, analytics dashboards, overlap analysis, brand safety scoring, messaging, and billing flows.",
      "Implemented role-based route enforcement using Next.js middleware and service-level access guards.",
      "Designed centralized authenticated fetch utilities with cookie-aware backend integration.",
      "Implemented real-time updates via Socket.IO and long-running workflows via SSE proxying through Next.js route handlers.",
      "Structured scalable UI architecture with modular components and progressive loading patterns."
    ],
    gallery: [sphereusGallery01, sphereusGallery02, sphereusGallery03, sphereusGallery04]
  },
  {
    company: "Taylor’s University",
    position: "Senior Web Developer",
    period: "Jan 2023 – Jan 2024",
    location: "Kuala Lumpur, Remote",
    description: "Developed multi-language university platforms using Next.js and scalable admin systems using ReactJS and Ant Design Pro. Integrated Salesforce CRM systems.",
    details: [
      "Developed multi-language university platforms using Next.js and TypeScript.",
      "Built scalable admin systems using ReactJS and Ant Design Pro.",
      "Developed backend services with Express.js and SQL to support localization and content workflows.",
      "Implemented dynamic PDF generation pipelines using pdf-lib for Digital Prospectus systems.",
      "Integrated Salesforce CRM systems to streamline student lead collection.",
      "Wrote unit tests using Jest to ensure long-term reliability."
    ],
    gallery: [taylorsGallery01, taylorsGallery02, taylorsGallery03, taylorsGallery04]
  },
  {
    company: "Qumon Intelligence",
    position: "Full Stack Web Developer",
    period: "Aug 2018 – Dec 2022",
    location: "Kuala Lumpur, Remote",
    description: "Developed enterprise-level admin and merchant management systems using ReactJS and TypeScript. Built live stream admin dashboards with real-time data management.",
    details: [
      "Developed enterprise-level admin and merchant management systems using ReactJS and TypeScript.",
      "Designed backend APIs using Express.js and MongoDB for modular business workflows.",
      "Implemented role-based access control systems with structured Swagger API documentation.",
      "Built live stream admin dashboards with real-time data management.",
      "Maintained scalable architecture across multi-module internal systems."
    ],
    gallery: [qumonGallery01, qumonGallery02, qumonGallery03]
  },
  {
    company: "SuperANT",
    position: "Web Application Developer",
    period: "Aug 2017 – Aug 2018",
    location: "Kuala Lumpur",
    description: "Built CRM functionality with React, integrating backend APIs and reusable shared components. Contributed to maintainable internal tooling.",
    details: [
      "Built CRM functionality with React, Flux, and Webpack, integrating backend APIs and reusable shared components.",
      "Developed an automated email workflow system for scheduled monthly blasts using Pug, jQuery, CSS, and Gulp.",
      "Contributed to maintainable internal tooling that supported client-facing CRM capabilities."
    ]
  },
  {
    company: "HP Malaysia",
    position: "Web Application Developer",
    period: "Nov 2014 – Aug 2017",
    location: "Cyberjaya",
    description: "Built internal dashboard interfaces with React and Redux to support operational visibility and team workflows through HP SDLC.",
    details: [
      "Built internal dashboard interfaces with React and Redux to support operational visibility and team workflows.",
      "Worked with change-management processes through HP SDLC and coordinated with DBAs and developers on database-related operations.",
      "Gained strong experience working in structured enterprise processes and cross-functional delivery."
    ]
  }
];

export function Experience() {
  const ref = React.useRef(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [selectedGallery, setSelectedGallery] = useState<ExperienceGallery | null>(null);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<StaticImageData | null>(null);

  React.useEffect(() => {
    if (!selectedGallery || selectedGalleryImage) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedGallery(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedGallery, selectedGalleryImage]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-32 px-6 md:px-12 bg-zinc-50 dark:bg-[#050505]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-zinc-900 dark:text-zinc-50" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>
            &lt;Experience /&gt;
          </h2>
          <p className="text-xl text-zinc-500 dark:text-zinc-400" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>
            {`// 9+ years of shipping products that scale`}
          </p>
        </motion.div>

        <div className="relative" ref={ref}>
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800 -translate-x-1/2">
            <motion.div 
              style={{ height: lineHeight }}
              className="w-full bg-blue-500 origin-top"
            />
          </div>

          <div className="space-y-12 md:space-y-24">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const isExpanded = expandedIndex === index;

              return (
                <div key={index} className={`relative flex items-start ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}>
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 mt-6 rounded-full bg-zinc-50 dark:bg-[#050505] border-2 border-zinc-200 dark:border-zinc-800 flex items-center justify-center z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring' }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="w-3 h-3 rounded-full bg-blue-500"
                    />
                  </div>

                  {/* Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50, filter: 'blur(10px)' }}
                    whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`w-full md:w-1/2 pl-12 pr-0 pt-2 ${isEven ? 'md:pr-16 md:pl-0' : 'md:pl-16'}`}
                  >
                    <div 
                      className={`group p-6 md:p-8 rounded-xl bg-white dark:bg-[#0a0a0a] border border-zinc-100 dark:border-zinc-800/50 shadow-sm hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-blue-900/10 transition-[background-color,border-color,box-shadow,color] duration-200 cursor-pointer ${isExpanded ? 'ring-1 ring-blue-500' : ''}`}
                      onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    >
                      <div className={`flex flex-col mb-4 gap-2 ${isEven ? 'md:items-end md:text-right' : 'items-start text-left'}`}>
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>
                          {exp.period}
                        </span>
                        <span className="text-xs text-zinc-400 flex items-center gap-1" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>
                          {exp.location}
                        </span>
                      </div>
                      
                      <div className={isEven ? 'md:text-right' : 'text-left'}>
                        <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-1" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>{exp.company}</h3>
                        <h4 className="text-md md:text-lg text-blue-600 dark:text-blue-400 mb-4" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>{`> ${exp.position}`}</h4>
                        
                        <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm mb-4">
                          {exp.description}
                        </p>

                        <button 
                          className="flex items-center gap-2 text-sm text-zinc-400 hover:text-blue-500 transition-colors uppercase tracking-wider mx-auto md:mx-0"
                          style={{ marginLeft: isEven ? 'auto' : '0', fontFamily: "var(--font-jetbrains-mono), monospace" }}
                        >
                          {isExpanded ? 'Less info' : 'More info'}
                          <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown size={16} />
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0, marginTop: 0 }}
                              animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                              exit={{ opacity: 0, height: 0, marginTop: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden text-left"
                            >
                              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800">
                                <ul className="space-y-3">
                                  {exp.details.map((detail, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-zinc-500 dark:text-zinc-400">
                                      <span className="text-blue-500 mt-1 flex-shrink-0" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>{'->'}</span>
                                      <span>{detail}</span>
                                    </li>
                                  ))}
                                </ul>
                                {exp.gallery && (
                                  <button
                                    type="button"
                                    onClick={(event) => {
                                      event.stopPropagation();
                                      setSelectedGallery({
                                        company: exp.company,
                                        images: exp.gallery
                                      });
                                    }}
                                    className="mt-5 inline-flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 transition-colors hover:border-blue-500 hover:text-blue-500 focus:outline-none dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-blue-400 dark:hover:text-blue-400"
                                    style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                                  >
                                    <Images size={15} />
                                    View media
                                  </button>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedGallery && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6">
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 cursor-default bg-black/70 backdrop-blur-sm"
              onClick={() => setSelectedGallery(null)}
              aria-label="Close experience gallery"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="relative w-full max-w-3xl rounded-3xl border border-white/10 bg-white p-4 shadow-2xl dark:bg-[#0a0a0a] sm:p-5"
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>
                  {selectedGallery.company} media
                </h3>
                <button
                  type="button"
                  onClick={() => setSelectedGallery(null)}
                  className="rounded-full p-2 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus:outline-none dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
                  aria-label="Close experience gallery"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {selectedGallery.images.map((image, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedGalleryImage(image)}
                    className="group relative aspect-[16/10] overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 text-left transition-transform hover:scale-[1.02] focus:outline-none dark:border-zinc-800 dark:bg-zinc-900"
                    aria-label={`Open ${selectedGallery.company} media ${idx + 1}`}
                  >
                    <ImageWithFallback
                      src={image}
                      alt={`${selectedGallery.company} media ${idx + 1}`}
                      fill
                      sizes="(min-width: 768px) 384px, 50vw"
                      className="object-cover transition-[filter,transform] duration-300 group-hover:scale-105 group-hover:blur-sm"
                    />
                    <span
                      className="absolute inset-0 flex items-center justify-center bg-black/35 text-sm font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                    >
                      View image
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <ImageViewer
        image={selectedGalleryImage}
        alt="Expanded experience media image"
        onClose={() => setSelectedGalleryImage(null)}
      />
    </section>
  );
}
