'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function ScrollReveal({ children, delay = 0, className }: ScrollRevealProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
      animate={
        prefersReducedMotion
          ? {}
          : inView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 20 }
      }
      transition={{ duration: 0.3, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}
