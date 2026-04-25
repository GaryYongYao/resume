'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface FloatingFABProps {
  isOpen: boolean
  onToggle: () => void
}

export function FloatingFAB({ isOpen, onToggle }: FloatingFABProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className="fixed top-4 right-4 z-50"
      initial={prefersReducedMotion ? {} : { scale: 0, opacity: 0 }}
      animate={prefersReducedMotion ? {} : { scale: 1, opacity: 1 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      <Button
        variant="outline"
        size="icon"
        onClick={onToggle}
        aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
        className="rounded-full shadow-md cursor-pointer"
      >
        <motion.div
          animate={prefersReducedMotion ? {} : { rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </motion.div>
      </Button>
    </motion.div>
  )
}
