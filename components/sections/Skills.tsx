'use client'

import { Badge } from '@/components/ui/badge'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import type { SkillItem } from '@/lib/resume'

interface SkillsProps {
  skills: SkillItem[]
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="py-24 px-6 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="font-mono text-2xl font-bold text-foreground mb-8">Skills</h2>
        </ScrollReveal>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <ScrollReveal key={skill.id} delay={i * 0.04}>
              <Badge
                variant="outline"
                className="font-mono text-sm px-3 py-1.5 border-border text-foreground"
              >
                {skill.name}
              </Badge>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
