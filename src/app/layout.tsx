import './globals.css'
import { Poppins } from 'next/font/google'
import { ReactNode } from 'react'

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], variable: '--font-poppins' })

export const metadata = {
  title: 'MarketKade',
  description: 'website de e-commerce',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.variable} font-sans`}>{children}</body>
    </html>
  )
}
