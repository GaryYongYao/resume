'use client'

import parse from 'html-react-parser'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import type { ExperienceItem } from '@/lib/resume'

interface ExperienceProps {
  experience: ExperienceItem[]
}

export function Experience({ experience }: ExperienceProps) {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="font-mono text-2xl font-bold text-foreground mb-12">Experience</h2>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border" aria-hidden="true" />

          <div className="flex flex-col gap-10">
            {experience.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.06} className="pl-6 relative">
                <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-primary -translate-x-[3px]" />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="font-mono text-base font-bold text-foreground">
                      {item.position}
                    </h3>
                    <p className="font-sans text-sm text-primary font-medium">
                      {item.company}
                      {item.location && (
                        <span className="text-muted-foreground font-normal">
                          {' '}· {item.location}
                        </span>
                      )}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground whitespace-nowrap mt-0.5">
                    {item.period}
                  </span>
                </div>

                <div
                  className="font-sans text-sm text-muted-foreground leading-relaxed
                              [&_ul]:list-disc [&_ul]:pl-4 [&_ul]:space-y-1
                              [&_li]:text-muted-foreground [&_strong]:text-foreground"
                >
                  {parse(item.description)}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
