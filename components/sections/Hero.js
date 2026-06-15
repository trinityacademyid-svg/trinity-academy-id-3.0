'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { WA_CONSULT_URL } from '@/constants'

function CountUp({ end, suffix = '', decimals = 0 }) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const counted = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !counted.current) {
        counted.current = true
        const duration = 1800
        const start = performance.now()
        const target = end
        const frame = (now) => {
          const t = Math.min((now - start) / duration, 1)
          const ease = 1 - Math.pow(1 - t, 3)
          setValue(Math.round(target * ease * Math.pow(10, decimals)) / Math.pow(10, decimals))
          if (t < 1) requestAnimationFrame(frame)
        }
        requestAnimationFrame(frame)
      }
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [end, decimals])

  return <span ref={ref}>{value}{suffix}</span>
}

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      background: 'linear-gradient(140deg, #08152a 0%, #0d2044 50%, #163266 100%)',
      display: 'flex', flexDirection: 'column',
      justifyContent: 'center', padding: '110px 0 72px',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(255,255,255,.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.022) 1px,transparent 1px)',
        backgroundSize: '64px 64px' }} />
      <div style={{ position: 'absolute', width: 700, height: 700, borderRadius: '50%',
        background: 'radial-gradient(circle,rgba(26,86,196,.18) 0%,transparent 70%)',
        top: -200, right: -150, pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 3, width: '100%' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 24, alignItems: 'center',
        }} className="hero-split">
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              fontSize: '.8rem', color: 'rgba(255,255,255,.6)',
              fontWeight: 500, marginBottom: 20,
            }}>
              <span>📍</span>
              <span>Berbasis di Ambon, Melayani Secara Luas</span>
            </div>

            <h1 style={{
              fontFamily: "'Montserrat',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(2rem,4.8vw,3.8rem)',
              color: 'white', lineHeight: 1.08, marginBottom: 16,
            }}>
              Belajar Lebih Personal,<br />
              Terarah, dan{' '}
              <em style={{ fontStyle: 'italic', color: '#f59e0b' }}>Berdampak</em>
            </h1>

            <p style={{
              fontSize: '1rem', lineHeight: 1.7,
              color: 'rgba(255,255,255,.7)',
              maxWidth: 480, marginBottom: 28,
            }}>
              Platform edukasi yang dikembangkan oleh anak muda untuk menghadirkan
              pengalaman belajar online dan offline yang dirancang khusus menjawab
              kebutuhan spesifik setiap siswa.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a
                href={WA_CONSULT_URL}
                target="_blank" rel="noopener noreferrer"
                className="btn btn-orange"
                style={{ gap: 8, fontSize: '.92rem', padding: '14px 28px' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                Konsultasi Gratis via WhatsApp
              </a>
              <Link href="/program" className="btn btn-outline-white">
                Lihat Program
              </Link>
            </div>

            <div style={{ display: 'flex', gap: 28, marginTop: 40 }}>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#f59e0b', lineHeight: 1, fontFamily: "'Montserrat',sans-serif" }}>
                  <CountUp end={50} suffix="+" />
                </div>
                <div style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.45)', marginTop: 4 }}>Pengajar</div>
              </div>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#f59e0b', lineHeight: 1, fontFamily: "'Montserrat',sans-serif" }}>
                  <CountUp end={300} suffix="+" />
                </div>
                <div style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.45)', marginTop: 4 }}>Siswa</div>
              </div>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#f59e0b', lineHeight: 1, fontFamily: "'Montserrat',sans-serif" }}>
                  <CountUp end={4.9} decimals={1} />
                </div>
                <div style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.45)', marginTop: 4 }}>Rating</div>
              </div>
            </div>
          </div>

          <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            position: 'relative',
          }} className="hero-mascot-col">
            <div className="mascot-ring" />
            <Image
              src="/images/maskot.png"
              alt="Maskot Trinity Academy"
              width={280}
              height={320}
              className="mascot-hero"
              style={{
                objectFit: 'contain',
                filter: 'drop-shadow(0 16px 32px rgba(0,0,0,.3))',
              }}
              preload
            />
          </div>
        </div>
      </div>

      <div aria-hidden="true" style={{
        position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)',
        zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
        opacity: .5, pointerEvents: 'none',
      }} className="scroll-indicator">
        <span style={{ fontSize: '.62rem', fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,.4)' }}>Scroll</span>
        <div style={{ width: 1, height: 32, background: 'linear-gradient(to bottom, rgba(255,255,255,.4), transparent)', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', top: -8, left: 0, right: 0, height: 8,
            background: 'rgba(255,255,255,.6)', borderRadius: 2,
            animation: 'scrollDown 2s ease-in-out infinite',
          }} />
        </div>
      </div>

      <style>{`
        @keyframes scrollDown {
          0%   { transform: translateY(-8px); opacity: 0; }
          50%  { opacity: 1; }
          100% { transform: translateY(36px); opacity: 0; }
        }
        .mascot-ring {
          position: absolute;
          width: 320px; height: 320px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(245,158,11,.08) 0%, transparent 65%);
          animation: mascot-pulse 3s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes mascot-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes mascot-pulse {
          0%, 100% { opacity: .5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        .mascot-hero {
          animation: mascot-float 4s ease-in-out infinite;
          height: auto !important;
        }
        @media(max-width:1100px){
          .mascot-hero { width: 200px !important; height: auto !important; }
        }
        @media(max-width:900px){
          .hero-split { grid-template-columns: 1fr !important; text-align: center; }
          .hero-split > div:first-child { order: 1; }
          .hero-mascot-col { display: none !important; }
          .scroll-indicator { display: none !important; }
        }
        @media(max-width:480px){
          section > .container > .hero-split h1 { font-size: 1.8rem !important; }
          section > .container > .hero-split .btn { font-size: .85rem !important; padding: 12px 20px !important; }
        }
      `}</style>
    </section>
  )
}
// === PANDUAN EDIT ===
// Section utama halaman Home (background biru gradien + maskot)
// CountUp: animasi angka (50+ Pengajar, 300+ Siswa, 4.9 Rating)
// WA_CONSULT_URL: tombol "Konsultasi Gratis" arah ke WhatsApp
// src="/images/maskot.png": ganti file ini untuk tampilan hero berbeda
