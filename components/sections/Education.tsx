'use client'

import { ScrollReveal } from '@/components/shared/ScrollReveal'
import type { EducationItem, CertificationItem } from '@/lib/resume'

interface EducationProps {
  education: EducationItem[]
  certifications: CertificationItem[]
}

export function Education({ education, certifications }: EducationProps) {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="font-mono text-2xl font-bold text-foreground mb-12">
            Education & Certifications
          </h2>
        </ScrollReveal>

        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <ScrollReveal>
              <h3 className="font-mono text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-5">
                Education
              </h3>
            </ScrollReveal>
            {education.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.06}>
                <div className="mb-4">
                  <p className="font-mono text-sm font-bold text-foreground">{item.school}</p>
                  <p className="font-sans text-sm text-muted-foreground mt-0.5">{item.degree}</p>
                  {item.area && (
                    <p className="font-sans text-xs text-muted-foreground">{item.area}</p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div>
            <ScrollReveal delay={0.05}>
              <h3 className="font-mono text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-5">
                Certifications
              </h3>
            </ScrollReveal>
            {certifications.map((cert, i) => (
              <ScrollReveal key={cert.id} delay={0.05 + i * 0.06}>
                <div className="mb-4">
                  <p className="font-sans text-sm text-foreground">{cert.title}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
