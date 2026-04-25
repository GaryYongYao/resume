'use client'

import { useState } from 'react'
import { FloatingFAB } from './FloatingFAB'
import { NavDrawer } from './NavDrawer'

interface ShellProps {
  name: string
  headline: string
  phone: string
  email: string
}

export function Shell({ name, headline, phone, email }: ShellProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <FloatingFAB isOpen={isOpen} onToggle={() => setIsOpen((v) => !v)} />
      <NavDrawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        name={name}
        headline={headline}
        phone={phone}
        email={email}
      />
    </>
  )
}
