import type { Metadata } from 'next'
import { ThemeProvider } from '../components/theme-provider'
import { Header } from '../components/layout/header'
import { Footer } from '../components/layout/footer'
import { SkipLink } from '../components/layout/skip-link'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://bpluscommunity.org'),
  title: {
    default: 'BusinessPlus Community',
    template: '%s | BusinessPlus Community',
  },
  description:
    'Empowering K-12 Technology Teams - An independent, volunteer-driven community sharing open-source tools and knowledge for BusinessPlus system administrators.',
  keywords: [
    'BusinessPlus',
    'PowerSchool',
    'K-12',
    'school district',
    'ERP',
    'system administration',
    'open source',
    'education technology',
  ],
  authors: [{ name: 'BusinessPlus Community' }],
  creator: 'BusinessPlus Community',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bpluscommunity.org',
    siteName: 'BusinessPlus Community',
    title: 'BusinessPlus Community',
    description:
      'Empowering K-12 Technology Teams - Open-source tools and knowledge sharing for BusinessPlus administrators.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BusinessPlus Community - Empowering K-12 Technology Teams',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BusinessPlus Community',
    description:
      'Empowering K-12 Technology Teams - Open-source tools for BusinessPlus administrators.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'BusinessPlus Community',
              url: 'https://bpluscommunity.org',
              logo: 'https://bpluscommunity.org/logo.png',
              description:
                'An independent, volunteer-driven community of K-12 technology professionals sharing open-source tools and knowledge for BusinessPlus system administration.',
              email: 'code@bpluscommunity.org',
              sameAs: [
                'https://github.com/BusinessPlus-Community',
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SkipLink />
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
