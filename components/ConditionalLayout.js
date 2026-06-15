'use client'
import { usePathname } from 'next/navigation'
import Navbar from './Navbar'
import Footer from './Footer'
import { WA_CONSULT_URL } from '../constants'
import IconWhatsApp from './ui/icons/IconWhatsApp'

export default function ConditionalLayout({ children }) {
  const pathname = usePathname()
  const isAdmin  = pathname?.startsWith('/admin')

  if (isAdmin) {
    return <>{children}</>
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <a
        href={WA_CONSULT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float"
        aria-label="Chat WhatsApp"
      >
        <IconWhatsApp />
      </a>
    </>
  )
}