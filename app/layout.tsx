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
  weight: ['400', '500', '600', '700', '800'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Carlos Courtney | Performance Marketing Expert | $30M+ Ad Spend',
  description:
    'Carlos Courtney is a performance marketing expert who has managed $30M+ in ad spend and generated 50M+ leads. CEO of Metaphase Marketing. Book a discovery call.',
  keywords: [
    'Carlos Courtney',
    'performance marketing consultant',
    'paid media expert',
    'Metaphase Marketing',
    'Google Ads expert',
    'Meta Ads expert',
    'marketing consultant',
    'ad spend manager',
  ],
  authors: [{ name: 'Carlos Courtney' }],
  creator: 'Carlos Courtney',
  metadataBase: new URL('https://www.carloscourtney.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.carloscourtney.com',
    siteName: 'Carlos Courtney',
    title: 'Carlos Courtney | Performance Marketing Expert',
    description:
      'CEO of Metaphase Marketing. $30M+ in ad spend managed. 50M+ leads generated. Book a discovery call.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Carlos Courtney — Performance Marketing Expert',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carlos Courtney | Performance Marketing Expert',
    description:
      '$30M+ in ad spend managed. 50M+ leads generated. CEO of Metaphase Marketing.',
    images: ['/og-image.png'],
    creator: '@carloscourtney',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Carlos Courtney',
  jobTitle: 'CEO, Performance Marketing Expert',
  worksFor: {
    '@type': 'Organization',
    name: 'Metaphase Marketing',
    url: 'https://www.metaphasemarketing.com',
  },
  url: 'https://www.carloscourtney.com',
  sameAs: [
    'https://twitter.com/carloscourtney',
    'https://www.instagram.com/helloimcarlos/',
    'https://www.youtube.com/c/CarlosCourtney',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="font-sans bg-bg-base text-text-primary antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
