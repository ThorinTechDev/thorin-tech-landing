import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

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
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
