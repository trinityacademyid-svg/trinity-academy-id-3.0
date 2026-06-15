'use client'

import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { founders, milestones, values } from '../../data/about'
import { WA_CONSULT_URL } from '../../constants'
import PageHero from '../../components/sections/PageHero'
import ScrollReveal from '../../components/ui/ScrollReveal'
import IconArrow from '../../components/ui/icons/IconArrow'
import IconLinkedIn from '../../components/ui/icons/IconLinkedIn'
import FounderPhoto from '../../components/sections/about/FounderPhoto'

export default function AboutPage() {
  const timelineRef = useRef(null)
  const [lineProgress, setLineProgress] = useState(0)

  useEffect(() => {
    const el = timelineRef.current
    if (!el) return
    const handleScroll = () => {
      const rect = el.getBoundingClientRect()
      const wh = window.innerHeight
      const total = rect.height + rect.top - wh
      const current = -rect.top
      setLineProgress(Math.min(Math.max(current / total, 0), 1))
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <main style={{ paddingTop: 0 }}>
      <PageHero
        eyebrow="Tentang Kami"
        title="Mengenal"
        titleEm="Trinity Academy"
        description="Platform pendidikan yang lahir dari kepedulian terhadap generasi muda Indonesia Timur — menggabungkan bimbingan akademik dengan pendekatan sociopreneur."
      />

      {/* Sejarah & Misi */}
      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}
               className="about-grid">
            <ScrollReveal>
              <div className="eyebrow eyebrow-blue"><span className="eyebrow-line" />Latar Belakang</div>
              <h2 className="section-title">Mengapa Trinity <em>Hadir?</em></h2>
              <div className="divider" style={{ margin: '20px 0 26px' }} />
              <p style={{ color: 'var(--gray-600)', lineHeight: 1.85, marginBottom: 18 }}>
                Trinity Academy lahir dari keprihatinan mendalam terhadap kesenjangan kualitas pendidikan
                di wilayah Indonesia Timur, khususnya Ambon dan Maluku. Kami meyakini bahwa keterbatasan
                geografis tidak seharusnya menjadi penghalang bagi generasi muda untuk berkembang.
              </p>
              <p style={{ color: 'var(--gray-600)', lineHeight: 1.85, marginBottom: 18 }}>
                Didirikan pada 2021, Trinity Academy hadir sebagai jembatan antara potensi siswa dan
                kesempatan yang selama ini terasa jauh — melalui bimbingan belajar berkualitas, program
                pengembangan diri, dan ekosistem yang mendukung tumbuhnya pemimpin muda.
              </p>
              <p style={{ color: 'var(--gray-600)', lineHeight: 1.85 }}>
                Kami bukan sekadar lembaga les. Kami adalah <strong style={{ color: 'var(--navy)' }}>learning provider</strong> yang
                berkomitmen menciptakan dampak nyata dan berkelanjutan bagi masyarakat.
              </p>
            </ScrollReveal>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                {
                  label: 'Visi',
                  text: 'Menjadi platform pendidikan terdepan di Indonesia Timur yang melahirkan generasi muda berprestasi, berkarakter, dan berdampak.',
                  accent: 'var(--blue)',
                },
                {
                  label: 'Misi',
                  text: 'Menghadirkan layanan bimbingan belajar berkualitas, program pengembangan diri berbasis sociopreneur, dan ekosistem pendidikan yang inklusif bagi seluruh pelajar.',
                  accent: 'var(--orange)',
                },
              ].map(({ label, text, accent }) => (
                <ScrollReveal key={label}>
                  <div style={{
                    background: 'white', borderRadius: 'var(--radius)',
                    border: `1px solid var(--gray-200)`,
                    borderLeft: `4px solid ${accent}`,
                    padding: '28px 28px 28px 24px',
                    boxShadow: 'var(--shadow-sm)',
                  }}>
                    <p style={{
                      fontSize: '.72rem', fontWeight: 800, letterSpacing: '.1em',
                      textTransform: 'uppercase', color: accent, marginBottom: 10,
                    }}>{label}</p>
                    <p style={{ color: 'var(--gray-600)', lineHeight: 1.75, fontSize: '.97rem' }}>{text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline — redesigned */}
      <section ref={timelineRef} className="section dark-section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: 60 }}>
              <div className="eyebrow eyebrow-gold" style={{ justifyContent: 'center' }}>
                <span className="eyebrow-line" />Perjalanan Kami
              </div>
              <h2 className="section-title section-title-white">
                Sejarah <em>Trinity Academy</em>
              </h2>
            </div>
          </ScrollReveal>

          <div className="timeline-wrapper">
            <div className="timeline-track" />
            <div className="timeline-track-progress" style={{ height: `${lineProgress * 100}%` }} />
            <div className="timeline-glow" />

            {milestones.map((m, i) => (
              <ScrollReveal key={i}>
                <div className="timeline-item" style={{ marginBottom: 64 }}>
                  <div className={`timeline-card ${i % 2 === 0 ? 'tl-left' : 'tl-right'}`}>
                    <span className="tl-year">{m.year}</span>
                    <div className="tl-card-inner">
                      <h3 className="tl-card-title">{m.title}</h3>
                      <p className="tl-card-desc">{m.desc}</p>
                    </div>
                  </div>
                  <div className="tl-node">
                    <div className="tl-dot" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Decorative orbs */}
        <div className="tl-orb tl-orb-1" />
        <div className="tl-orb tl-orb-2" />
        <div className="tl-orb tl-orb-3" />

        <style>{`
          .timeline-wrapper {
            position: relative;
            max-width: 900px;
            margin: 0 auto;
            padding: 0 24px;
          }

          .timeline-track {
            position: absolute;
            left: 50%;
            top: 0;
            bottom: 0;
            width: 3px;
            background: linear-gradient(180deg, rgba(245,158,11,.15) 0%, rgba(245,158,11,.06) 100%);
            transform: translateX(-50%);
            border-radius: 4px;
          }

          .timeline-track-progress {
            position: absolute;
            left: 50%;
            top: 0;
            width: 3px;
            transform: translateX(-50%);
            border-radius: 4px;
            background: linear-gradient(180deg, #f59e0b 0%, #fbbf24 50%, #f59e0b 100%);
            box-shadow: 0 0 12px rgba(245,158,11,.4), 0 0 40px rgba(245,158,11,.2);
            transition: height .1s linear;
            z-index: 1;
          }

          .timeline-glow {
            position: absolute;
            left: 50%;
            top: 0;
            bottom: 0;
            width: 80px;
            transform: translateX(-50%);
            background: radial-gradient(ellipse at center, rgba(245,158,11,.08) 0%, transparent 70%);
            pointer-events: none;
          }

          .timeline-item {
            display: flex;
            align-items: flex-start;
            position: relative;
          }

          .timeline-card {
            width: calc(50% - 40px);
            position: relative;
          }

          .tl-left { padding-right: 56px; text-align: right; }
          .tl-right { padding-left: 56px; text-align: left; margin-left: auto; }

          .tl-card-inner {
            display: inline-block;
            background: rgba(255,255,255,.04);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255,255,255,.08);
            border-radius: 16px;
            padding: 24px 28px;
            transition: all .35s ease;
            box-shadow: 0 8px 32px rgba(0,0,0,.15);
          }

          .tl-card-inner:hover {
            background: rgba(255,255,255,.08);
            border-color: rgba(245,158,11,.25);
            transform: translateY(-4px);
            box-shadow: 0 12px 48px rgba(245,158,11,.08);
          }

          .tl-year {
            display: inline-block;
            font-family: var(--font-montserrat),sans-serif;
            font-size: 2.4rem;
            font-weight: 900;
            letter-spacing: -.03em;
            background: linear-gradient(135deg, #f59e0b, #fbbf24);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            line-height: 1;
            margin-bottom: 8px;
          }

          .tl-left .tl-year { display: block; }
          .tl-right .tl-year { display: block; }

          .tl-card-title {
            font-family: var(--font-montserrat),sans-serif;
            font-size: 1.1rem;
            color: white;
            margin-bottom: 8px;
          }

          .tl-card-desc {
            font-size: .86rem;
            color: rgba(255,255,255,.55);
            line-height: 1.7;
          }

          .tl-node {
            position: absolute;
            left: 50%;
            top: 8px;
            transform: translateX(-50%);
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .tl-dot {
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background: linear-gradient(135deg, #f59e0b, #fbbf24);
            border: 3px solid #08152a;
            box-shadow: 0 0 0 5px rgba(245,158,11,.2), 0 0 30px rgba(245,158,11,.15);
            animation: tl-pulse 2.5s ease-in-out infinite;
          }

          @keyframes tl-pulse {
            0%, 100% { box-shadow: 0 0 0 5px rgba(245,158,11,.2), 0 0 30px rgba(245,158,11,.15); }
            50% { box-shadow: 0 0 0 8px rgba(245,158,11,.1), 0 0 50px rgba(245,158,11,.08); }
          }

          .tl-orb {
            position: absolute;
            border-radius: 50%;
            pointer-events: none;
            opacity: .4;
          }
          .tl-orb-1 {
            width: 300px; height: 300px;
            background: radial-gradient(circle, rgba(245,158,11,.08) 0%, transparent 70%);
            top: 10%; left: -5%;
            animation: tl-float 8s ease-in-out infinite;
          }
          .tl-orb-2 {
            width: 200px; height: 200px;
            background: radial-gradient(circle, rgba(59,130,246,.06) 0%, transparent 70%);
            bottom: 15%; right: -3%;
            animation: tl-float 10s ease-in-out infinite reverse;
          }
          .tl-orb-3 {
            width: 150px; height: 150px;
            background: radial-gradient(circle, rgba(245,158,11,.05) 0%, transparent 70%);
            top: 50%; left: 50%;
            transform: translate(-50%,-50%);
            animation: tl-float 12s ease-in-out infinite 2s;
          }

          @keyframes tl-float {
            0%, 100% { transform: translate(0,0); }
            33% { transform: translate(20px,-20px); }
            66% { transform: translate(-15px,15px); }
          }

          @media(max-width:768px){
            .timeline-track { left: 24px; }
            .timeline-track-progress { left: 24px; }
            .timeline-glow { left: 24px; }

            .timeline-item {
              flex-direction: row;
              padding-left: 56px;
            }

            .timeline-card {
              width: 100%;
              padding: 0 !important;
              margin-left: 0 !important;
              text-align: left !important;
            }

            .tl-year { font-size: 1.8rem; }

            .tl-node {
              left: 24px;
              top: 6px;
            }

            .tl-dot {
              width: 14px; height: 14px;
            }

            .tl-card-inner {
              padding: 18px 20px;
            }

            .tl-orb { display: none; }
          }

          @media(max-width:480px){
            .tl-year { font-size: 1.5rem; }
            .tl-card-title { font-size: 1rem; }
            .tl-card-desc { font-size: .82rem; }
          }
        `}</style>
      </section>

      {/* Values */}
      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <div className="eyebrow eyebrow-blue" style={{ justifyContent: 'center' }}>
                <span className="eyebrow-line" />Nilai Kami
              </div>
              <h2 className="section-title">Nilai yang Kami <em>Pegang Teguh</em></h2>
            </div>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }} className="values-grid">
            {values.map((v, i) => (
              <ScrollReveal key={i}>
                <div className="card" style={{ padding: '28px 24px' }}>
                  <div style={{
                    width: 50, height: 50, borderRadius: 12,
                    background: 'var(--blue-pale)', color: 'var(--blue)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 18,
                  }}>
                    {v.icon}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-montserrat),sans-serif', fontSize: '1.05rem', color: 'var(--navy)', marginBottom: 10 }}>{v.title}</h3>
                  <p style={{ fontSize: '.86rem', color: 'var(--gray-600)', lineHeight: 1.7 }}>{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <style>{`
          @media(max-width:900px){.values-grid{grid-template-columns:repeat(2,1fr) !important;}}
          @media(max-width:520px){.values-grid{grid-template-columns:1fr !important;}}
        `}</style>
      </section>

      {/* Founders */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: 60 }}>
              <div className="eyebrow eyebrow-blue" style={{ justifyContent: 'center' }}>
                <span className="eyebrow-line" />Pendiri
              </div>
              <h2 className="section-title">Orang di Balik <em>Trinity Academy</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>
                Dua individu dengan satu misi — menghadirkan pendidikan berkualitas dan berdampak untuk generasi muda Indonesia Timur.
              </p>
            </div>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, maxWidth: 900, margin: '0 auto' }}
               className="founders-grid">
            {founders.map((f, i) => (
              <ScrollReveal key={i}>
                 <div style={{
                  background: 'var(--off-white)', borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden', border: '1px solid var(--gray-200)',
                  boxShadow: 'var(--shadow)',
                  display: 'flex', flexDirection: 'column', height: '100%',
                }}>
                  <div style={{ position: 'relative', aspectRatio: '4/3', background: 'var(--blue-pale)', overflow: 'hidden' }}>
                    <FounderPhoto src={f.photo} alt={`Foto ${f.name}`} />
                    <div style={{
                      position: 'absolute', inset: 0,
                      display: 'flex', flexDirection: 'column',
                      alignItems: 'center', justifyContent: 'center',
                      color: 'var(--blue)', opacity: .35,
                      fontFamily: 'var(--font-inter),sans-serif',
                    }}>
                      <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                      </svg>
                      <p style={{ fontSize: '.78rem', marginTop: 10 }}>Upload foto ke /public/images/</p>
                    </div>
                    <div style={{
                      position: 'absolute', bottom: 0, left: 0, right: 0,
                      height: 4, background: 'linear-gradient(90deg, var(--blue), #f59e0b)',
                    }} />
                  </div>
                  <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontFamily: 'var(--font-montserrat),sans-serif', fontSize: '1.35rem', color: 'var(--navy)', marginBottom: 4 }}>
                      {f.name}
                    </h3>
                    <p style={{ fontSize: '.82rem', fontWeight: 700, color: 'var(--blue)', letterSpacing: '.04em', textTransform: 'uppercase', marginBottom: 16 }}>
                      {f.role}
                    </p>
                    <div style={{ width: 36, height: 2, background: 'var(--orange)', borderRadius: 2, marginBottom: 18 }} />
                    <p style={{ fontSize: '.92rem', color: 'var(--gray-600)', lineHeight: 1.8, marginBottom: 22, flex: 1 }}>
                      {f.bio}
                    </p>
                    {f.linkedin !== '#' && (
                      <a href={f.linkedin} target="_blank" rel="noopener noreferrer"
                         style={{
                           display: 'inline-flex', alignItems: 'center', gap: 8,
                           color: 'var(--blue)', fontWeight: 600, fontSize: '.86rem',
                           transition: 'opacity .2s',
                         }}>
                        <IconLinkedIn /> LinkedIn Profile
                      </a>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <style>{`
          .about-grid    { grid-template-columns: 1fr 1fr; }
          .founders-grid { grid-template-columns: 1fr 1fr; grid-auto-rows: 1fr; }
          @media(max-width:800px){
            .about-grid    { grid-template-columns: 1fr !important; }
            .founders-grid { grid-template-columns: 1fr !important; max-width: 480px !important; }
          }
        `}</style>
      </section>

      {/* CTA */}
      <ScrollReveal>
        <section style={{ background: 'var(--blue)', padding: '80px 0' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-montserrat),sans-serif', fontWeight: 700, fontSize: 'clamp(1.8rem,4vw,2.6rem)', color: 'white', marginBottom: 14 }}>
              Bergabung Bersama <em style={{ fontStyle: 'italic', color: '#f59e0b' }}>Trinity Academy</em>
            </h2>
            <p style={{ color: 'rgba(255,255,255,.72)', marginBottom: 36, fontSize: '1rem' }}>
              Mulai perjalanan belajar ananda bersama kami. Konsultasi gratis, tanpa biaya pendaftaran.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={WA_CONSULT_URL} target="_blank" rel="noopener noreferrer"
                 className="btn btn-orange btn-lg">
                Hubungi Kami
              </a>
              <Link href="/program" className="btn btn-outline-white btn-lg">
                Lihat Program <IconArrow size={16} />
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  )
}
