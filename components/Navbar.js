/*
=== KOMPONEN NAVBAR (Navigation Bar) ===
Navbar fixed di atas:
- Logo kiri (link ke Home)
- Menu tengah: About Us, Program, Signature, Tutor, FAQ (data dari data/navigation.ts)
- Tombol 'Daftar Sekarang' (ke WhatsApp)
- Hamburger menu untuk mobile
- Progress bar horizontal (strip kuning) yang bertambah saat scroll
- Background berubah transparan → solid saat scroll
*/
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { navLinks } from '../data/navigation'
import { WA_BASE_URL } from '../constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  const pathname = usePathname()
  const isHome   = pathname === '/'

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 50)
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min((window.scrollY / max) * 100, 100) : 0)
    }
    window.addEventListener('scroll', fn, { passive: true })
    fn()
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNav = (href) => {
    if (pathname === href) window.scrollTo({ top: 0, behavior: 'smooth' })
    setMenuOpen(false)
  }

  const transparent = isHome && !scrolled && !menuOpen
  const bg     = transparent ? 'transparent'         : 'rgba(8,21,42,0.97)'
  const blur   = transparent ? 'none'                : 'blur(14px)'
  const shadow = transparent ? 'none'                : '0 2px 28px rgba(0,0,0,.22)'
  const py     = scrolled    ? '10px'                : '18px'

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 'var(--z-navbar)',
        background: bg, backdropFilter: blur,
        WebkitBackdropFilter: blur,
        boxShadow: shadow, padding: `${py} 0`,
        transition: 'all .3s ease',
      }}>
        {/* Scroll progress bar */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, height: 3,
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #f59e0b, #fbbf24)',
          transition: 'width .1s linear',
          borderRadius: '0 2px 2px 0',
        }} />
        <div className="container" style={{ display: 'flex', alignItems: 'center' }}>

          {/* ── Logo ── */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, marginRight: 'auto', textDecoration: 'none' }}>
            <div style={{ position: 'relative', width: 38, height: 38, flexShrink: 0 }}>
              {/* Next.js 16: 'priority' sudah deprecated, ganti pakai 'preload'.
                  preload=true → logo di-preload di <head> agar LCP lebih cepat */}
              <Image
                src="/images/logo.png" 
                alt="Trinity Academy Logo"
                fill
                style={{ objectFit: 'contain' }}
                preload={true}
              />
            </div>
            <span style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700, fontSize: '1.1rem',
              color: 'white', letterSpacing: '-.01em',
              lineHeight: 1,
            }}>
              Trinity <em style={{ fontStyle: 'italic', color: '#f59e0b' }}>Academy</em>
            </span>
          </Link>

          {/* ── Desktop links ── */}
          <ul style={{ display: 'flex', listStyle: 'none', gap: 34, margin: '0 36px' }}
              className="nav-desktop">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} onClick={() => handleNav(href)} style={{
                  color: pathname === href ? '#f59e0b' : 'rgba(255,255,255,.82)',
                  fontWeight: 600, fontSize: '.88rem',
                  letterSpacing: '.01em',
                  borderBottom: pathname === href ? '2px solid #f59e0b' : '2px solid transparent',
                  paddingBottom: 3,
                  transition: 'color .25s, border-color .25s',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => { if (pathname !== href) { e.target.style.color = 'white'; e.target.style.borderColor = 'rgba(255,255,255,.2)' } }}
                onMouseLeave={e => { if (pathname !== href) { e.target.style.color = 'rgba(255,255,255,.82)'; e.target.style.borderColor = 'transparent' } }}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* ── CTA button ── */}
          <a
            href={WA_BASE_URL}
            target="_blank" rel="noopener noreferrer"
            className="nav-desktop"
            style={{
              background: '#f59e0b', color: 'white',
              fontWeight: 700, fontSize: '.86rem',
              padding: '10px 22px', borderRadius: 50,
              textDecoration: 'none', whiteSpace: 'nowrap',
              transition: 'all .25s',
              boxShadow: '0 2px 12px rgba(245,158,11,.35)',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 4px 18px rgba(245,158,11,.45)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(245,158,11,.35)' }}
          >
            Daftar Sekarang
          </a>

          {/* ── Hamburger ── */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="nav-hamburger"
            aria-label="Menu"
            style={{
              display: 'none', flexDirection: 'column', gap: 5,
              background: 'none', border: 'none',
              padding: 4, marginLeft: 16, cursor: 'pointer',
            }}
          >
            <span style={{ ...bar, transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
            <span style={{ ...bar, opacity: menuOpen ? 0 : 1 }} />
            <span style={{ ...bar, transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
          </button>
        </div>
      </nav>

      {/* ── Mobile fullscreen menu ── */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 99,
        background: 'rgba(8,21,42,0.98)', backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center',
        gap: 0, padding: '90px 28px 48px',
        opacity: menuOpen ? 1 : 0,
        pointerEvents: menuOpen ? 'auto' : 'none',
        transition: 'opacity .35s ease',
      }}>
        {/* Logo di mobile menu */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10, marginBottom: 40,
          transform: menuOpen ? 'none' : 'translateY(-10px)',
          transition: 'transform .35s ease .1s',
        }}>
          <div style={{ position: 'relative', width: 44, height: 44 }}>
            <Image src="/images/logo.png" alt="Logo" fill style={{ objectFit: 'contain' }} />
          </div>
          <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '1.2rem', color: 'white', fontWeight: 700 }}>
            Trinity <em style={{ color: '#f59e0b' }}>Academy</em>
          </span>
        </div>

        {[{ href: '/', label: 'Home' }, ...navLinks].map(({ href, label }, i) => (
          <Link
            key={href} href={href}
            onClick={() => handleNav(href)}
            style={{
              color: pathname === href ? '#f59e0b' : 'rgba(255,255,255,.85)',
              fontFamily: "'Montserrat',sans-serif",
              fontSize: '2rem', fontWeight: 700,
              padding: '14px 0', width: '100%', textAlign: 'center',
              borderBottom: '1px solid rgba(255,255,255,.07)',
              textDecoration: 'none',
              transform: menuOpen ? 'none' : 'translateY(-10px)',
              opacity: menuOpen ? 1 : 0,
              transition: `opacity .35s ease ${.15 + i*.06}s, transform .35s ease ${.15 + i*.06}s, color .2s`,
            }}
            onMouseEnter={e => e.target.style.color = '#f59e0b'}
            onMouseLeave={e => e.target.style.color = pathname === href ? '#f59e0b' : 'rgba(255,255,255,.85)'}
          >
            {label}
          </Link>
        ))}

        <a
          href={WA_BASE_URL}
          target="_blank" rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
          style={{
            marginTop: 28, width: '100%', textAlign: 'center',
            background: '#f59e0b', color: 'white',
            fontWeight: 700, fontSize: '1rem',
            padding: '16px 0', borderRadius: 50,
            textDecoration: 'none',
            transform: menuOpen ? 'none' : 'translateY(-10px)',
            opacity: menuOpen ? 1 : 0,
            transition: `opacity .35s ease .4s, transform .35s ease .4s`,
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#fbbf24'; e.currentTarget.style.transform = 'translateY(-1px)' }}
          onMouseLeave={e => { e.currentTarget.style.background = '#f59e0b'; e.currentTarget.style.transform = 'none' }}
        >
          Daftar Sekarang
        </a>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .nav-desktop   { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        .nav-hamburger { display: none; }
        .nav-hamburger:focus-visible { outline: 2px solid white; outline-offset: 4px; border-radius: 4px; }
      `}</style>
    </>
  )
}

const bar = {
  display: 'block', width: 24, height: 2,
  background: 'white', borderRadius: 2,
  transition: 'all .28s ease',
}