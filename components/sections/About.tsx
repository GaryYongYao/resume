'use client'

import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { renderSanitizedHtml } from '@/lib/sanitize-html'

interface AboutProps {
  content: string
}

export function About({ content }: AboutProps) {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="font-mono text-2xl font-bold text-foreground mb-8">About</h2>
        </ScrollReveal>
        <ScrollReveal
          delay={0.05}
          className="font-sans text-muted-foreground leading-relaxed space-y-4 [&_p]:text-base"
        >
          {renderSanitizedHtml(content)}
        </ScrollReveal>
      </div>
    </section>
  )
}
