import React, { useState } from 'react';
import type { StaticImageData } from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ImageViewer } from './ImageViewer';
import { ExternalLink, X } from 'lucide-react';
import alpacaDetailImg from '../imports/alpaca-detail.webp';
import alpacaThumbImg from '../imports/alpaca-thumb.webp';
import gallariaDetailImg from '../imports/gallaria-detail.webp';
import gallariaThumbImg from '../imports/gallaria-thumb.webp';
import ourRealtyDetailImg from '../imports/our-realty-detail.webp';
import ourRealtyThumbImg from '../imports/our-realty-thumb.webp';
import jantzenLandingDetailImg from '../imports/jantzen-landing-detail.webp';
import jantzenLandingThumbImg from '../imports/jantzen-landing-thumb.webp';
import jantzenCrmDetailImg from '../imports/jantzen-crm-detail.webp';
import jantzenCrmThumbImg from '../imports/jantzen-crm-thumb.webp';
import ourGallery01 from '../../../assets/projects/our/01.jpeg';
import ourGallery02 from '../../../assets/projects/our/02.jpeg';
import ourGallery03 from '../../../assets/projects/our/03.jpeg';
import ourGallery04 from '../../../assets/projects/our/04.jpeg';
import gallariaGallery01 from '../../../assets/projects/gallaria/01.png';
import gallariaGallery02 from '../../../assets/projects/gallaria/02.png';
import gallariaGallery03 from '../../../assets/projects/gallaria/03.png';
import gallariaGallery04 from '../../../assets/projects/gallaria/04.png';
import alpacaGallery01 from '../../../assets/projects/alpaca/01.png';
import alpacaGallery02 from '../../../assets/projects/alpaca/02.png';
import alpacaGallery03 from '../../../assets/projects/alpaca/03.png';
import alpacaGallery04 from '../../../assets/projects/alpaca/04.png';
import balanceGallery01 from '../../../assets/projects/balance/01.png';
import balanceGallery02 from '../../../assets/projects/balance/02.png';
import balanceGallery03 from '../../../assets/projects/balance/03.png';
import balanceGallery04 from '../../../assets/projects/balance/04.png';
import janztenGallery01 from '../../../assets/projects/janzten/01.png';
import janztenGallery02 from '../../../assets/projects/janzten/02.png';
import janztenGallery03 from '../../../assets/projects/janzten/03.png';
import janztenGallery04 from '../../../assets/projects/janzten/04.png';
import janztenCrmGallery01 from '../../../assets/projects/janzten-crm/01.png';
import janztenCrmGallery02 from '../../../assets/projects/janzten-crm/02.png';
import janztenCrmGallery03 from '../../../assets/projects/janzten-crm/03.png';
import janztenCrmGallery04 from '../../../assets/projects/janzten-crm/04.png';

type ProjectImage = {
  thumb: string | StaticImageData;
  detail: string | StaticImageData;
};

interface Project {
  name: string;
  description: string;
  details: string[];
  image: ProjectImage;
  gallery?: Array<string | StaticImageData>;
  color: string;
  link?: string;
}

const projects: Project[] = [
  {
    name: "OUR Realty System",
    description: "Architected and developed a fullstack real estate management system. Built frontend dashboards and backend architectures using Node.js, Express, and MongoDB.",
    details: [
      "Architected and developed a fullstack real estate management system.",
      "Designed backend architecture using Node.js, Express, and MongoDB.",
      "Built frontend dashboards for property, unit, and sales management.",
      "Implemented structured data models for projects, units, commissions, and sales workflows.",
      "Developed modular admin panels for reporting and operational use cases.",
      "Optimized API structures for scalable property listing management."
    ],
    image: {
      thumb: ourRealtyThumbImg,
      detail: ourRealtyDetailImg,
    },
    gallery: [ourGallery01, ourGallery02, ourGallery03, ourGallery04],
    color: "bg-orange-500/10 dark:bg-orange-500/20"
  },
  {
    name: "Balance.Fun",
    description: "Web3-enabled product platform using Next.js and TypeScript. Implemented wallet authentication and smart contract interaction layers.",
    details: [
      "Built a Web3-enabled product platform using Next.js and TypeScript, focused on scalable frontend architecture and interactive user flows.",
      "Implemented wallet authentication and smart contract interaction layers using modern Web3 tooling.",
      "Developed real-time dashboard features backed by GraphQL and API-driven data flows.",
      "Improved performance through server-side rendering strategies, caching, and modular component design.",
      "Built reusable back-office and product UI modules using Ant Design and Tailwind CSS, with support for secure asset handling and animated interfaces."
    ],
    image: {
      thumb: "https://images.unsplash.com/photo-1716573248961-c1fbf8574057?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2glMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzc3MTE5NjczfDA&ixlib=rb-4.1.0&q=70&w=800",
      detail: "https://images.unsplash.com/photo-1716573248961-c1fbf8574057?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2glMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzc3MTE5NjczfDA&ixlib=rb-4.1.0&q=80&w=1400",
    },
    gallery: [balanceGallery01, balanceGallery02, balanceGallery03, balanceGallery04],
    color: "bg-blue-500/10 dark:bg-blue-500/20"
  },
  {
    name: "Janzten Landing Page",
    description: "Production-ready Next.js 15 App Router frontend. Built customer-facing flows with Redux Toolkit state management.",
    details: [
      "Developed a production-ready Next.js 15 App Router frontend using React 19 and Tailwind CSS.",
      "Built customer-facing flows including order tracking, order completion, product listings, deals, and delivery service pages.",
      "Implemented scalable client state management using Redux Toolkit.",
      "Structured client API integration with documented endpoints under /client/*.",
      "Delivered responsive UI components optimized for performance and maintainability."
    ],
    image: {
      thumb: jantzenLandingThumbImg,
      detail: jantzenLandingDetailImg,
    },
    gallery: [janztenGallery01, janztenGallery02, janztenGallery03, janztenGallery04],
    color: "bg-green-500/10 dark:bg-green-500/20"
  },
  {
    name: "Jantzen CRM",
    description: "CRM platform using Vue 3 and TypeScript. Implemented Pinia state management and dynamic dashboards using ApexCharts.",
    details: [
      "Built CRM platform using Vue 3 and TypeScript.",
      "Implemented state management using Pinia.",
      "Developed dynamic dashboards using ApexCharts.",
      "Integrated REST APIs using Axios.",
      "Added multi-language support using Vue I18n."
    ],
    image: {
      thumb: jantzenCrmThumbImg,
      detail: jantzenCrmDetailImg,
    },
    gallery: [janztenCrmGallery01, janztenCrmGallery02, janztenCrmGallery03, janztenCrmGallery04],
    color: "bg-purple-500/10 dark:bg-purple-500/20"
  },
  {
    name: "NFT Game – Alpaca Run",
    description: "Blockchain-integrated browser game using React and Phaser 3. Integrated MetaMask and OpenSea APIs.",
    details: [
      "Developed blockchain-integrated browser game using React and Phaser 3.",
      "Implemented encrypted leaderboard submissions.",
      "Integrated MetaMask and OpenSea APIs for NFT-based asset rendering.",
      "Built backend using Express, MongoDB, and GraphQL."
    ],
    image: {
      thumb: alpacaThumbImg,
      detail: alpacaDetailImg,
    },
    color: "bg-pink-500/10 dark:bg-pink-500/20",
    link: "https://alpaca-run.vercel.app/",
    gallery: [alpacaGallery01, alpacaGallery02, alpacaGallery03, alpacaGallery04]
  },
  {
    name: "Gallaria Website",
    description: "Custom e-commerce platform using Next.js. Built backend CMS using MongoDB and GraphQL with Stripe integrations.",
    details: [
      "Developed custom e-commerce platform using Next.js.",
      "Built backend CMS using MongoDB and GraphQL.",
      "Integrated Stripe payments and Google Cloud Storage."
    ],
    image: {
      thumb: gallariaThumbImg,
      detail: gallariaDetailImg,
    },
    gallery: [gallariaGallery01, gallariaGallery02, gallariaGallery03, gallariaGallery04],
    color: "bg-zinc-500/10 dark:bg-zinc-500/20",
    link: "https://www.gallaria.com.au/"
  }
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string | StaticImageData | null>(null);

  const closeProjectModal = () => {
    setSelectedGalleryImage(null);
    setSelectedProject(null);
  };

  return (
    <>
      <section id="projects" className="py-32 bg-white dark:bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-zinc-900 dark:text-zinc-50" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>
              &lt;Selected Works /&gt;
            </h2>
            <p className="text-xl text-zinc-500 dark:text-zinc-400" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>
              {`// Building across web3, enterprise CRM, e-commerce, and high-performance apps.`}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative w-full h-[400px] rounded-[2rem] overflow-hidden group shadow-lg hover:shadow-2xl cursor-pointer ${project.color}`}
                onClick={() => setSelectedProject(index)}
              >
                <div className="absolute inset-0 w-full h-full mix-blend-overlay opacity-50 transition-opacity duration-500 group-hover:opacity-80">
                  <ImageWithFallback 
                    src={project.image.thumb}
                    alt={project.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 z-10 transition-transform duration-500">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <h3 className="text-2xl font-bold text-white mb-2 tracking-tight" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>{project.name}</h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                      {project.description}
                    </p>
                    <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold transition-colors opacity-0 group-hover:opacity-100 duration-500 delay-200 w-fit text-sm" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>
                      View Details <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-6 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={closeProjectModal}
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative h-[90vh] max-h-[780px] w-full max-w-[calc(100vw-1rem)] bg-white dark:bg-[#111] rounded-3xl shadow-2xl overflow-hidden flex flex-col sm:max-w-5xl sm:rounded-[2rem]"
            >
              <div className="relative h-48 md:h-64 flex-shrink-0">
                <ImageWithFallback 
                  src={projects[selectedProject].image.detail}
                  alt={projects[selectedProject].name}
                  fill
                  sizes="(min-width: 768px) 896px, 100vw"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <button 
                  onClick={closeProjectModal}
                  className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-md transition-colors"
                >
                  <X size={20} />
                </button>
                <div className="absolute bottom-5 left-5 pr-6 md:bottom-6 md:left-8">
                  <h3 className="text-2xl font-bold text-white tracking-tight md:text-4xl" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>{projects[selectedProject].name}</h3>
                </div>
              </div>

              <div className="flex-1 min-h-0 overflow-y-auto p-4 sm:p-6 md:p-8 lg:overflow-hidden">
                <div className="grid gap-8 lg:h-full lg:min-h-0 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)]">
                  <div className="lg:min-h-0 lg:overflow-y-auto lg:pr-1">
                    <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-8 leading-relaxed">
                      {projects[selectedProject].description}
                    </p>

                    <h4 className="text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-50 border-b border-zinc-200 dark:border-zinc-800 pb-2" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>
                      Key Implementations
                    </h4>
                    
                    <ul className="space-y-4">
                      {projects[selectedProject].details.map((detail, idx) => (
                        <li key={idx} className="grid grid-cols-[24px_minmax(0,1fr)] items-start gap-3 text-zinc-600 dark:text-zinc-400">
                          <span className="mt-1 block w-6 shrink-0 whitespace-nowrap text-blue-500 font-bold" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>{'->'}</span>
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {projects[selectedProject].link && (
                      <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800 flex justify-start">
                        <a 
                          href={projects[selectedProject].link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors shadow-lg shadow-blue-500/30 w-full sm:w-auto justify-center" 
                          style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                        >
                          Visit Project <ExternalLink size={18} />
                        </a>
                      </div>
                    )}
                  </div>

                  {projects[selectedProject].gallery && (
                    <div className="lg:min-h-0 lg:overflow-y-auto">
                      <h4 className="text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-50 border-b border-zinc-200 dark:border-zinc-800 pb-2" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>
                        Gallery
                      </h4>
                      <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
                        {projects[selectedProject].gallery.map((image, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => setSelectedGalleryImage(image)}
                            className="group relative aspect-[16/10] overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 text-left transition-transform hover:scale-[1.02] focus:outline-none dark:border-zinc-800 dark:bg-zinc-900"
                            aria-label={`Open ${projects[selectedProject].name} gallery image ${idx + 1}`}
                          >
                            <ImageWithFallback
                              src={image}
                              alt={`${projects[selectedProject].name} gallery ${idx + 1}`}
                              fill
                              sizes="(min-width: 1024px) 360px, 50vw"
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
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <ImageViewer
        image={selectedGalleryImage}
        alt="Expanded project gallery image"
        onClose={() => setSelectedGalleryImage(null)}
      />
    </>
  );
}
