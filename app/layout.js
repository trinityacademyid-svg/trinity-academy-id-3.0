/*
=== FILE UTAMA — ROOT LAYOUT ===
Ini adalah layout utama website. Semua halaman dibungkus oleh file ini.
- Mengatur font Montserrat (judul) dan Inter (body)
- Menentukan title & description website (metadata)
- Memuat file CSS global (globals.css)
*/
import { Montserrat, Inter } from 'next/font/google'
import './globals.css'
import ConditionalLayout from '../components/ConditionalLayout'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['600', '700', '800', '900'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata = {
  title: 'Trinity Academy – Les Privat & Online di Ambon',
  description: 'Platform pendidikan dan bimbingan belajar terpercaya di Ambon, Maluku.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${montserrat.variable} ${inter.variable}`} data-scroll-behavior="smooth">
      <body>
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  )
}
