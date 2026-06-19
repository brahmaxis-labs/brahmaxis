import React from "react"
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from '@/components/site/navbar'
import { Footer } from '@/components/site/footer'
import { CalendlyWarmup } from '@/components/site/calendly-warmup'
import './globals.css'

const title = 'Brahmaxis Labs — Product Engineering for Revenue, Data and Operations Systems'
const description = 'Brahmaxis Labs builds eCommerce automation, AdTech workflows, SaaS MVPs, dashboards, internal tools, infrastructure, and edge-cloud systems for founders and teams building serious software.'
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export const metadata: Metadata = {
  metadataBase: new URL('https://brahmaxis.com'),
  title: {
    default: title,
    template: '%s — Brahmaxis Labs',
  },
  description,
  keywords: [
    'product engineering company',
    'SaaS MVP development',
    'eCommerce automation',
    'AdTech engineering',
    'internal tools development',
    'data dashboard development',
    'infrastructure consulting',
    'fractional CTO India',
    'edge cloud systems',
    'marketplace automation',
    'Brahmaxis Labs',
    'Brahmastra',
    'ParkTek',
  ],
  verification: {
    google: "S1OfFtgyX1j7yu_isav2MJUVpHiDoHX_XoWj7KDBbEs",
  },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://brahmaxis.com',
    siteName: 'Brahmaxis Labs',
    title,
    description,
    images: [
      {
        url: '/brand/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Brahmaxis Labs product engineering brand banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/brand/og-image.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0b10',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased">
        {gaMeasurementId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', ${JSON.stringify(gaMeasurementId)});
              `}
            </Script>
          </>
        )}
        {/* Warm up Calendly connections early; the idle client warmup below loads the widget script. */}
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link rel="preconnect" href="https://calendly.com" />
        <link rel="dns-prefetch" href="https://calendly.com" />
        <CalendlyWarmup />
        <Navbar />
        <main className="relative min-h-screen overflow-x-hidden noise-overlay">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
