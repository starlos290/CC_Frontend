import type { Metadata } from 'next'
import { Sora, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import './globals.css'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'ClinicClaw — Your 24/7 AI Employee for Private Practices',
    template: '%s | ClinicClaw',
  },
  description:
    'ClinicClaw deploys HIPAA-safe AI agents that handle appointment reminders, no-show recovery, Google reviews, and patient reactivation — all live in 48 hours.',
  keywords: [
    'AI for medical practices',
    'healthcare automation',
    'HIPAA-safe AI',
    'appointment reminders',
    'no-show reduction',
    'patient reactivation',
    'Google review automation',
    'chiropractic software',
    'med spa automation',
    'dental practice software',
  ],
  authors: [{ name: 'Metaphase Marketing' }],
  creator: 'Metaphase Marketing',
  metadataBase: new URL('https://clinicclaw.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://clinicclaw.com',
    siteName: 'ClinicClaw',
    title: 'ClinicClaw — Your 24/7 AI Employee for Private Practices',
    description:
      'HIPAA-safe AI automation for private practices. Cut no-shows 35–40%, generate 3–5x more Google reviews, reactivate dormant patients. Live in 48 hours.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ClinicClaw AI Automation Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClinicClaw — Your 24/7 AI Employee for Private Practices',
    description:
      'HIPAA-safe AI automation for private practices. Cut no-shows 35–40%, generate 3–5x more Google reviews. Live in 48 hours.',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable}`}>
      <body className="font-sans bg-bg-base text-text-primary antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
