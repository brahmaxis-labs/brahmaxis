import React from "react"
import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const title = 'Brahmaxis | Product Engineering for MVPs, IoT, Analytics, and Edge-Cloud'
const description = 'Brahmaxis builds deployable MVPs, IoT systems, analytics platforms, infrastructure, and edge-cloud products using the engineering playbook behind ParkTek and the Brahmastra accelerator.'

export const metadata: Metadata = {
  metadataBase: new URL('https://brahmaxis.com'),
  title,
  description,
  keywords: [
    'Brahmaxis',
    'product engineering',
    'MVP development',
    'IoT engineering',
    'edge-cloud systems',
    'analytics platforms',
    'infrastructure deployment',
    'fractional CTO',
    'ParkTek',
    'Brahmastra',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://brahmaxis.com',
    siteName: 'Brahmaxis',
    title,
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
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
        {children}
        <Analytics />
      </body>
    </html>
  )
}
