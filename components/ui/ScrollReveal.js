/*
=== ANIMASI SCROLL REVEAL ===
Komponen ini bikin elemen muncul dengan efek fade-up saat di-scroll.
Cara pakai: bungkus elemen dengan <ScrollReveal> ... </ScrollReveal>
- delay: waktu tunda sebelum animasi (ms)
- duration: durasi animasi (ms)
- y: jarak geser dari bawah (px)
- once: true (animasi sekali) / false (animasi setiap kali lewat)
*/
'use client'
import { useEffect, useRef, useState } from 'react'

export default function ScrollReveal({
  children,
  className = '',
  style = {},
  delay = 0,
  duration = 600,
  y = 30,
  once = true,
  threshold = 0.15,
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [noMotion, setNoMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setNoMotion(mq.matches)
    const fn = (e) => setNoMotion(e.matches)
    mq.addEventListener('change', fn)
    return () => mq.removeEventListener('change', fn)
  }, [])

  useEffect(() => {
    if (noMotion) {
      setVisible(true)
      return
    }
    const el = ref.current
    if (!el) return
    const raf = requestAnimationFrame(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true)
            if (once) observer.unobserve(el)
          } else if (!once) {
            setVisible(false)
          }
        },
        { threshold }
      )
      observer.observe(el)
      return () => observer.disconnect()
    })
    return () => cancelAnimationFrame(raf)
  }, [once, threshold, noMotion])

  if (noMotion) return <div className={className} style={style}>{children}</div>

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : `translateY(${y}px)`,
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
        transitionDelay: `${delay}ms`,
        willChange: 'opacity, transform',
        ...style,
      }}
    >
      {children}
    </div>
  )
}
// === PANDUAN EDIT ===
// Komponen ini membungkus elemen yang ingin muncul dengan animasi fade-up
// Props: delay (tunda), duration (lama animasi), y (jarak geser)
// Kalau komponen ini dihapus, SEMUA animasi fade-up di website hilang
// Tapi konten tetap muncul tanpa animasi (tidak rusak)
