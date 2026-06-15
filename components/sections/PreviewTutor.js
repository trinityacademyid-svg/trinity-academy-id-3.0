'use client'
import { useRef, useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import IconArrow from '@/components/ui/icons/IconArrow'
import { fallbackTutors } from '@/data/tutors'

export default function PreviewTutor() {
  const scrollRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const autoRef = useRef(null)

  const onMouseDown = useCallback((e) => {
    setIsDragging(true)
    setStartX(e.pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
  }, [])

  const onMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  const onMouseMove = useCallback((e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 1.5
    scrollRef.current.scrollLeft = scrollLeft - walk
  }, [isDragging, startX, scrollLeft])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const startScroll = () => {
      if (autoRef.current) clearInterval(autoRef.current)
      autoRef.current = setInterval(() => {
        const maxScroll = el.scrollWidth - el.clientWidth
        if (el.scrollLeft >= maxScroll - 10) {
          el.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          el.scrollBy({ left: 1, behavior: 'smooth' })
        }
      }, 30)
    }

    const stopScroll = () => {
      if (autoRef.current) {
        clearInterval(autoRef.current)
        autoRef.current = null
      }
    }

    startScroll()
    el.addEventListener('mouseenter', stopScroll)
    el.addEventListener('mouseleave', startScroll)
    el.addEventListener('touchstart', stopScroll)
    el.addEventListener('touchend', startScroll)

    return () => {
      stopScroll()
      el.removeEventListener('mouseenter', stopScroll)
      el.removeEventListener('mouseleave', startScroll)
      el.removeEventListener('touchstart', stopScroll)
      el.removeEventListener('touchend', startScroll)
    }
  }, [])

  return (
    <section className="section" style={{ background: 'var(--off-white)', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 42, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <div className="eyebrow eyebrow-blue"><span className="eyebrow-line" />Tutor Terpilih</div>
            <h2 className="section-title">Tenaga Pengajar <em>Berkualitas</em></h2>
          </div>
          <Link href="/tutor" className="btn btn-outline">
            Lihat Semua <IconArrow size={16} />
          </Link>
        </div>
      </div>

      {/* Carousel */}
      <div style={{ position: 'relative', padding: '0 28px' }}>
        <div
          ref={scrollRef}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onMouseMove={onMouseMove}
          style={{
            display: 'flex', gap: 20, overflowX: 'auto',
            scrollBehavior: isDragging ? 'auto' : 'smooth',
            cursor: isDragging ? 'grabbing' : 'grab',
            scrollbarWidth: 'none', msOverflowStyle: 'none',
            padding: '8px 4px', userSelect: 'none',
            maxWidth: 1120, margin: '0 auto',
          }}
          className="tutor-carousel"
        >
          {[...fallbackTutors, ...fallbackTutors].map((tutor, i) => (
            <div
              key={`${tutor.id}-${i}`}
              className="card"
              style={{
                flex: '0 0 250px', padding: '24px 20px', textAlign: 'center',
                transition: 'transform .25s ease, box-shadow .25s ease',
              }}
            >
              <div style={{
                width: 80, height: 80, borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--blue-pale) 0%, #dbeafe 100%)',
                margin: '0 auto 14px', overflow: 'hidden', position: 'relative',
                border: '3px solid white', boxShadow: '0 4px 14px rgba(0,0,0,.08)',
              }}>
                <Image
                  src={tutor.photo}
                  alt={tutor.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>

              <h3 style={{
                fontFamily: "'Montserrat',sans-serif",
                fontWeight: 700, fontSize: '.95rem',
                color: 'var(--navy)', marginBottom: 4,
              }}>
                {tutor.name}
              </h3>

              <p style={{
                fontSize: '.78rem', color: 'var(--blue)',
                fontWeight: 600, marginBottom: 4,
              }}>
                {tutor.role}
              </p>

              <p style={{
                fontSize: '.74rem', color: 'var(--gray-400)',
              }}>
                Jenjang: {tutor.jenjang}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .tutor-carousel::-webkit-scrollbar { display: none; }
        @media(max-width:768px){
          .tutor-carousel > div { flex: 0 0 220px !important; }
        }
        @media(max-width:480px){
          .tutor-carousel { padding: 8px 0 !important; }
          .tutor-carousel > div { flex: 0 0 200px !important; padding: 20px 16px !important; }
        }
      `}</style>
    </section>
  )
}
// === PANDUAN EDIT ===
// Carousel tutor di halaman Home
// Auto-scroll tiap 3 detik, berhenti saat cursor di atas / touch
// Data tutor dari data/tutors.ts (fallbackTutors)
// Kalau data kosong, carousel tidak muncul (ada fallback pesan)
