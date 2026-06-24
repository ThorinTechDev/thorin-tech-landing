import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
// Import the Next.js Script component for optimized third-party script loading
import Script from 'next/script' 
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

// SEO & Social Media Metadata configuration
export const metadata: Metadata = {
  title: 'Thorin Tech | Depth. Intelligence. Dominance.',
  description: 'Transforming industries through an integrated AI ecosystem of content, finance, and automation. Enterprise AI solutions for Invoice OCR, Marketing Suite, WhatsApp Automation, Financial Intelligence, and MedTech AI.',
  keywords: ['AI', 'Enterprise AI', 'Invoice OCR', 'Marketing Automation', 'WhatsApp API', 'Financial AI', 'MedTech'],
  authors: [{ name: 'Thorin Tech' }],
  openGraph: {
    title: 'Thorin Tech | Depth. Intelligence. Dominance.',
    description: 'Transforming industries through an integrated AI ecosystem of content, finance, and automation.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thorin Tech | Depth. Intelligence. Dominance.',
    description: 'Transforming industries through an integrated AI ecosystem of content, finance, and automation.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

// Device Viewport & Theme settings
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-background">
      
      {/* 
        Google Analytics (gtag.js) Integration
        'strategy="afterInteractive"' loads the script immediately after the page becomes interactive,
        ensuring zero negative impact on your landing page's initial loading speed (SEO/Core Web Vitals).
      */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-SLKP5XLF37"
        strategy="afterInteractive"
      />
      
      {/* 
        Inline Initialization Script for Google Analytics
        The 'id' prop is strictly required by Next.js to track and execute inline scripts correctly.
      */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-SLKP5XLF37');
        `}
      </Script>

      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Theme wrapper for light/dark mode handling */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        
        {/* Vercel Speed Insights & Analytics (Only active in production environment) */}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}