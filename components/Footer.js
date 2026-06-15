'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { navLinks, footerProgramLinks } from '../data/navigation'
import { WA_BASE_URL, SITE_NAME } from '../constants'

const footerNavLinks = [['/', 'Home'], ...navLinks.map(n => [n.href, n.label])]

export default function Footer() {
  const [feedback, setFeedback] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!feedback.trim()) return
    const url = `${WA_BASE_URL}?text=${encodeURIComponent('Kotak Saran: ' + feedback)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setSent(true)
    setTimeout(() => { setSent(false); setFeedback('') }, 3000)
  }

  return (
    <footer style={{ background: 'var(--navy)', color: 'rgba(255,255,255,.5)', fontFamily: "'Inter',sans-serif" }}>
      <div className="container" style={{ padding: '72px 28px 36px' }}>
        {/* Kotak Saran */}
        <div style={{
          background: 'rgba(255,255,255,.05)',
          border: '1px solid rgba(255,255,255,.08)',
          borderRadius: 'var(--radius-lg)',
          padding: '32px 36px',
          marginBottom: 48,
          display: 'flex', alignItems: 'center',
          gap: 24, flexWrap: 'wrap',
        }} className="saran-row">
          <div style={{ flex: 1, minWidth: 200 }}>
            <p style={{ color: 'white', fontWeight: 700, fontSize: '.95rem', marginBottom: 4 }}>
              💬 Kotak Saran
            </p>
            <p style={{ fontSize: '.83rem', color: 'rgba(255,255,255,.45)' }}>
              Masukan dan kritik membangun dari Anda sangat berarti.
            </p>
          </div>
          <form onSubmit={handleSubmit} style={{
            display: 'flex', gap: 10, flex: 2, minWidth: 260,
          }} className="saran-form">
            <input
              type="text"
              placeholder="Tulis saran atau kritik Anda..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              style={{
                flex: 1, padding: '12px 18px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid rgba(255,255,255,.12)',
                background: 'rgba(255,255,255,.06)',
                color: 'white', fontSize: '.9rem',
                fontFamily: "'Inter',sans-serif",
                outline: 'none',
              }}
              onFocus={e => e.target.style.borderColor = '#f59e0b'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,.12)'}
            />
            <button
              type="submit"
              className="btn"
              style={{
                background: sent ? '#22c55e' : 'var(--orange)',
                color: 'white', fontWeight: 700, fontSize: '.88rem',
                padding: '12px 24px', border: 'none',
                borderRadius: 'var(--radius-sm)',
                cursor: 'pointer', transition: 'all .25s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => { if (!sent) e.currentTarget.style.background = 'var(--orange-light)' }}
              onMouseLeave={e => { if (!sent) e.currentTarget.style.background = 'var(--orange)' }}
            >
              {sent ? 'Terkirim ✓' : 'Kirim'}
            </button>
          </form>
        </div>

        {/* Main grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.4fr',
          gap: 48, paddingBottom: 48,
          borderBottom: '1px solid rgba(255,255,255,.07)',
        }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ position: 'relative', width: 36, height: 36, flexShrink: 0 }}>
                <Image
                  src="/images/logo.png"
                  alt={`${SITE_NAME} Logo`}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <span style={{
                fontFamily: "'Montserrat',sans-serif",
                fontWeight: 700, fontSize: '1.05rem', color: 'white',
              }}>
                Trinity <em style={{ fontStyle: 'italic', color: '#f59e0b' }}>Academy</em>
              </span>
            </div>
            <p style={{ fontSize: '.88rem', lineHeight: 1.8, maxWidth: 300 }}>
              Trinity Academy adalah platform belajar yang dikembangkan dari Ambon untuk
              menghadirkan pengalaman belajar yang lebih personal dan relevan bagi pelajar masa kini.
            </p>
            <p style={{ marginTop: 20, fontSize: '.83rem' }}>
              📍 Ambon, Maluku — Indonesia
            </p>
          </div>

          {/* Pages */}
          <div>
            <p style={{ color: 'white', fontWeight: 700, fontSize: '.88rem', marginBottom: 18, letterSpacing: '.05em', textTransform: 'uppercase' }}>Halaman</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 11 }}>
              {footerNavLinks.map(([href, label]) => (
                <li key={href}>
                  <Link href={href} style={{ fontSize: '.87rem', color: 'rgba(255,255,255,.5)', transition: 'color .2s' }}
                        onMouseEnter={e => e.target.style.color = '#f59e0b'}
                        onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,.5)'}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Program */}
          <div>
            <p style={{ color: 'white', fontWeight: 700, fontSize: '.88rem', marginBottom: 18, letterSpacing: '.05em', textTransform: 'uppercase' }}>Program</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 11 }}>
              {footerProgramLinks.map(p => (
                <li key={p} style={{ fontSize: '.87rem', color: 'rgba(255,255,255,.5)' }}>{p}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={{ color: 'white', fontWeight: 700, fontSize: '.88rem', marginBottom: 18, letterSpacing: '.05em', textTransform: 'uppercase' }}>Kontak</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href={WA_BASE_URL} target="_blank" rel="noopener noreferrer"
                 className="btn btn-primary"
                 style={{ justifyContent: 'center', fontSize: '.88rem', padding: '11px 20px' }}>
                WhatsApp Kami
              </a>
              <p style={{ fontSize: '.83rem', lineHeight: 1.7, color: 'rgba(255,255,255,.5)' }}>
                info@trinityacademy.id<br />
                Senin – Sabtu, 08.00 – 20.00 WIT
              </p>
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
              <a href="#" aria-label="Instagram"
                 style={{ width: 34, height: 34, borderRadius: '50%', background: 'rgba(255,255,255,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,.5)', transition: 'all .2s', fontSize: '.9rem' }}
                 onMouseEnter={e => { e.currentTarget.style.background = '#f59e0b'; e.currentTarget.style.color = 'white' }}
                 onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,.08)'; e.currentTarget.style.color = 'rgba(255,255,255,.5)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" aria-label="YouTube"
                 style={{ width: 34, height: 34, borderRadius: '50%', background: 'rgba(255,255,255,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,.5)', transition: 'all .2s', fontSize: '.9rem' }}
                 onMouseEnter={e => { e.currentTarget.style.background = '#f59e0b'; e.currentTarget.style.color = 'white' }}
                 onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,.08)'; e.currentTarget.style.color = 'rgba(255,255,255,.5)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div style={{ paddingTop: 28, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, fontSize: '.8rem', color: 'rgba(255,255,255,.28)' }}>
          <span>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</span>
          <span style={{ display: 'flex', gap: 16 }}>
            <Link href="/faq" style={{ color: 'inherit', textDecoration: 'none', transition: 'color .2s' }}
                  onMouseEnter={e => e.target.style.color = '#f59e0b'}
                  onMouseLeave={e => e.target.style.color = ''}>FAQ</Link>
            <Link href="/privacy" style={{ color: 'inherit', textDecoration: 'none', transition: 'color .2s' }}
                  onMouseEnter={e => e.target.style.color = '#f59e0b'}
                  onMouseLeave={e => e.target.style.color = ''}>Kebijakan Privasi</Link>
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr !important; }
          .saran-form { flex-direction: column !important; }
        }
      `}</style>
    </footer>
  )
}
