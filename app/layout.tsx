import { Analytics } from '@vercel/analytics/next'
import { Geist, Source_Serif_4 } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import { StartupLoader } from '@/components/startup-loader'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const sourceSerif = Source_Serif_4({ subsets: ['latin'], variable: '--font-source-serif' })

export const metadata: Metadata = {
  title: 'Kigola International Company Limited | Building a more prosperous future',
  description: 'KIC Ltd invests in renewable energy, healthcare, agriculture and sustainable infrastructure across Tanzania and East Africa.',
  generator: 'v0.app',
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#304d3f' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className="bg-background">
      <body className={`${geist.variable} ${sourceSerif.variable} antialiased`}>
        <StartupLoader />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
