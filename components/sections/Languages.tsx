'use client'

import { Badge } from '@/components/ui/badge'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import type { LanguageItem } from '@/lib/resume'

interface LanguagesProps {
  languages: LanguageItem[]
}

export function Languages({ languages }: LanguagesProps) {
  return (
    <section id="languages" className="py-24 px-6 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="font-mono text-2xl font-bold text-foreground mb-8">Languages</h2>
        </ScrollReveal>
        <div className="flex flex-wrap gap-4">
          {languages.map((lang, i) => (
            <ScrollReveal key={lang.id} delay={i * 0.04}>
              <div className="flex items-center gap-2">
                <Badge
                  variant="outline"
                  className="font-mono text-sm px-3 py-1.5 border-border text-foreground"
                >
                  {lang.language}
                </Badge>
                <span className="font-sans text-xs text-muted-foreground">{lang.fluency}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
