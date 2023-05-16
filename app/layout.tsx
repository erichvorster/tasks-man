import './globals.css'
import { Inter } from 'next/font/google'
import MainNav from '../components/MainNav'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}><MainNav/>{children}</body>
    </html>
  )
}
