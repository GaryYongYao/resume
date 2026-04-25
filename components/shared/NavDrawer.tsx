'use client'

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from './ThemeToggle'

const NAV_LINKS = [
  { label: 'Hero', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Languages', href: '#languages' },
]

interface NavDrawerProps {
  isOpen: boolean
  onClose: () => void
  name: string
  headline: string
  phone: string
  email: string
}

export function NavDrawer({ isOpen, onClose, name, headline, phone, email }: NavDrawerProps) {
  const prefersReducedMotion = useReducedMotion()
  const whatsappNumber = phone.replace(/\D/g, '')

  const handleNavClick = (href: string) => {
    onClose()
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, 150)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-40 backdrop-blur-sm bg-foreground/10"
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            animate={prefersReducedMotion ? {} : { opacity: 1 }}
            exit={prefersReducedMotion ? {} : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.aside
            className="fixed left-0 top-0 h-full z-40 flex flex-col p-6
                       bg-card border-r border-border shadow-xl
                       w-full sm:w-[30vw] sm:min-w-[280px] sm:max-w-[400px]"
            initial={prefersReducedMotion ? {} : { x: '-100%' }}
            animate={prefersReducedMotion ? {} : { x: 0 }}
            exit={prefersReducedMotion ? {} : { x: '-100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            role="navigation"
            aria-label="Site navigation"
          >
            <div className="mb-6">
              <p className="font-mono text-sm font-bold text-foreground leading-tight">{name}</p>
              <p className="font-sans text-xs text-muted-foreground mt-1 leading-snug">{headline}</p>
            </div>

            <Separator className="mb-4" />

            <nav className="flex flex-col gap-1 flex-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left font-mono text-sm text-foreground
                             hover:text-primary transition-colors duration-150
                             py-2 px-2 rounded-md hover:bg-muted cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <Separator className="my-4" />

            <div className="flex flex-col gap-4">
              <ThemeToggle />
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  nativeButton={false}
                  render={<a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" />}
                >
                  WhatsApp
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  nativeButton={false}
                  render={<a href={`mailto:${email}`} />}
                >
                  Email
                </Button>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
