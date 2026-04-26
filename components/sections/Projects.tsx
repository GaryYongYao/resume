'use client'

import { ScrollReveal } from '@/components/shared/ScrollReveal'
import type { ProjectItem } from '@/lib/resume'
import { renderSanitizedHtml } from '@/lib/sanitize-html'

interface ProjectsProps {
  projects: ProjectItem[]
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 px-6 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="font-mono text-2xl font-bold text-foreground mb-12">Projects</h2>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.06}>
              <div className="rounded-lg border border-border bg-card p-5 h-full flex flex-col gap-3">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-mono text-sm font-bold text-foreground leading-snug">
                    {project.name}
                  </h3>
                  {project.website?.url && (
                    <a
                      href={project.website.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-primary hover:underline shrink-0"
                    >
                      Link ↗
                    </a>
                  )}
                </div>
                <div
                  className="font-sans text-xs text-muted-foreground leading-relaxed flex-1
                              [&_ul]:list-disc [&_ul]:pl-4 [&_ul]:space-y-1
                              [&_strong]:text-foreground"
                >
                  {renderSanitizedHtml(project.description)}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
