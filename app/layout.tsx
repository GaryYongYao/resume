import type { Metadata } from 'next'
import { JetBrains_Mono, IBM_Plex_Sans } from 'next/font/google'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: ['400', '500', '600', '700'],
})

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-ibm-plex-sans',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Gary Kok Yong Yao — Fullstack Product Engineer',
  description:
    'Senior Fullstack Product Engineer with 9+ years experience in React, Next.js, Node.js. Based in Kuala Lumpur, Malaysia.',
  manifest: '/manifest.json',
}

const themeScript = `
(() => {
  try {
    const theme = localStorage.getItem('theme') || 'dark';
    document.documentElement.classList.toggle('dark', theme === 'dark');
  } catch {
    document.documentElement.classList.add('dark');
  }
})();
`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${jetbrainsMono.variable} ${ibmPlexSans.variable} dark`}
    >
      <body className="bg-background text-foreground antialiased font-sans">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  )
}
