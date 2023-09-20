import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/app/components/Header'
import { BacktoTopButton } from './components/BacktoTopButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wine Web',
  description: 'Web application for wine.com.br',
  icons: [
    {
      url: '/wineLogo.ico',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

        {children}
        <BacktoTopButton />
      </body>
    </html>
  )
}
