'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Mail, MessageCircle, Download, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { ResumeBasics } from '@/lib/resume'
import garyPdf from '@/assets/gary.pdf'

interface HeroProps {
  basics: ResumeBasics
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

export function Hero({ basics }: HeroProps) {
  const prefersReducedMotion = useReducedMotion()
  const linkedin = basics.customFields.find((f) => f.icon === 'linkedin-logo')
  const github = basics.customFields.find((f) => f.icon === 'github-logo')
  const whatsappNumber = basics.phone.replace(/\D/g, '')

  const fadeUp = (delay: number) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.3, ease: 'easeOut' as const, delay },
        }

  return (
    <section id="hero" className="min-h-dvh flex items-center justify-center px-6">
      <div className="text-center max-w-2xl w-full">
        <motion.h1
          className="font-mono text-4xl md:text-6xl font-bold text-foreground tracking-tight"
          {...fadeUp(0.1)}
        >
          {basics.name}
        </motion.h1>

        <motion.p
          className="font-sans text-base md:text-lg text-muted-foreground mt-4 leading-relaxed"
          {...fadeUp(0.2)}
        >
          {basics.headline}
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-1.5 text-muted-foreground text-sm mt-3"
          {...fadeUp(0.3)}
        >
          <MapPin className="h-3.5 w-3.5 shrink-0" />
          <span className="font-sans">{basics.location}</span>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-2 mt-8 flex-wrap"
          {...fadeUp(0.4)}
        >
          {linkedin && (
            <Button
              variant="outline"
              size="icon"
              aria-label="LinkedIn"
              nativeButton={false}
              render={<a href={linkedin.link} target="_blank" rel="noopener noreferrer" />}
            >
              <LinkedInIcon />
            </Button>
          )}
          {github && (
            <Button
              variant="outline"
              size="icon"
              aria-label="GitHub"
              nativeButton={false}
              render={<a href={github.link} target="_blank" rel="noopener noreferrer" />}
            >
              <GitHubIcon />
            </Button>
          )}
          <Button
            variant="outline"
            size="icon"
            aria-label="WhatsApp"
            nativeButton={false}
            render={<a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" />}
          >
            <MessageCircle className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            aria-label="Email"
            nativeButton={false}
            render={<a href={`mailto:${basics.email}`} />}
          >
            <Mail className="h-5 w-5" />
          </Button>
        </motion.div>

        <motion.div className="mt-6" {...fadeUp(0.5)}>
          <Button size="lg" nativeButton={false} render={<a href={garyPdf} download="gary-kok-yong-yao.pdf" />}>
            <Download className="h-4 w-4 mr-2" />
            Download Resume
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
