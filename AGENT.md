# Gary Portfolio — Project Agent Guide

## Purpose
Personal resume/portfolio site for Gary Kok Yong Yao. Single-page scrollable, App Router, PWA-enabled.

## Stack
- Next.js 16 (App Router), TypeScript, React 19
- Tailwind CSS v4, shadcn/ui (Button, Badge, Sheet, Switch, Separator)
- Framer Motion (animations), Lodash (data helpers)
- html-react-parser (renders HTML from resume JSON)
- next-themes (dark/light mode, class strategy via `@custom-variant dark`)
- @ducanh2912/next-pwa (PWA)
- Fonts: JetBrains Mono (headings/display/badges), IBM Plex Sans (body)

## File Structure
- `assets/gary.pdf` — PDF resume, imported as `import pdf from '@/assets/gary.pdf'`
- `data/resume.json` — single content source, never imported directly in components
- `lib/resume.ts` — all typed helpers; components import from here only
- `components/sections/` — one file per section, all `'use client'` (Framer Motion)
- `components/shared/` — FloatingFAB, NavDrawer, ThemeToggle, ScrollReveal, Shell
- `components/ui/` — shadcn primitives, never modified directly
- `app/layout.tsx` — root layout: fonts, ThemeProvider, Shell
- `app/page.tsx` — composes all sections, passes data as props

## Design Tokens
Defined as CSS variables in `app/globals.css`. Dark mode via `.dark` class (next-themes).
Never use raw hex values in components — always use Tailwind token classes.

Key classes: `bg-background`, `text-foreground`, `bg-card` (surface), `text-muted-foreground`,
`bg-primary` (accent), `text-primary`, `border-border`, `bg-muted` (surface-muted)

Custom additions: `bg-surface`, `bg-surface-muted`

## Fonts
Loaded via `next/font/google` in `app/layout.tsx`. CSS variables:
- `--font-jetbrains-mono` → `font-mono` Tailwind class
- `--font-ibm-plex-sans` → `font-sans` Tailwind class

Use `font-mono` for: name, section headings, skill badges, nav links
Use `font-sans` for: body text, descriptions, bullet points

## Animation Rules
- Framer Motion only — no CSS animation/transition for entrance effects
- Durations: 150–300ms micro-interactions, ≤400ms transitions
- Easing: ease-out on enter, ease-in on exit
- Scroll stagger: 40ms delay per item via `ScrollReveal` component
- Always check `useReducedMotion()` — pass empty variants when true
- Animate only `transform` and `opacity`

## Section Order (page.tsx)
Hero → About → Skills → Experience → Projects → Education → Languages

## Section IDs (anchor links)
`#hero`, `#about`, `#skills`, `#experience`, `#projects`, `#education`, `#languages`

## PDF Import
```typescript
import garyPdf from '@/assets/gary.pdf'
// use as: <a href={garyPdf} download="gary-kok-yong-yao.pdf">
```
webpack `asset/resource` rule in `next.config.ts` handles this.

## Build Artifacts
`npm run build` regenerates the PWA service worker at `public/sw.js`. Treat this as expected build output and do not restore it just because it changed after a build.

## Future Pages
Add under `app/[page]/page.tsx`. Shell (FAB + NavDrawer) is in `app/layout.tsx` and is inherited automatically.
