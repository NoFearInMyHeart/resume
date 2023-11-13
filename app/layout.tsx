import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'yzZ',
  description: 'NoFearInMyHeart',
  icons: {
    icon: [
      {
        url: "/logo.jpg",
        href: "/logo.jpg",
      },
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
