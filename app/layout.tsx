import type { Metadata } from 'next'
import './globals.css'
import StatisticsScript from "@/app/(main)/_components/statistics-script";

export const metadata: Metadata = {
  title: 'yzZ',
  description: 'NoFearInMyHeart',
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        href: "/favicon.svg",
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
      <StatisticsScript />
      <body>{children}</body>
    </html>
  )
}
