'use client'

import Link from 'next/link'
import { privatePrograms, onlinePrograms, whyPrivate, whyOnline } from '../../data/programs'
import { WA_BASE_URL } from '../../constants'
import PageHero from '../../components/sections/PageHero'
import ScrollReveal from '../../components/ui/ScrollReveal'
import IconCheck from '../../components/ui/icons/IconCheck'

export default function ProgramPage() {
  return (
    <main style={{ paddingTop: 0 }}>
      <PageHero
        eyebrow="Program Belajar"
        title="Temukan Program yang"
        titleEm="Tepat untuk Anda"
        description="Les private datang ke rumah atau belajar online — semua tersedia dengan tutor terpilih dan metode yang terbukti efektif."
      />

      {/* Private */}
      <section className="section" style={{ background: 'var(--off-white)' }} id="private">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: 64, alignItems: 'start' }} className="prog-layout">
            <ScrollReveal>
              <div style={{ position: 'sticky', top: 104 }}>
                <div className="eyebrow eyebrow-blue"><span className="eyebrow-line" />Guru ke Rumah</div>
                <h2 className="section-title">Program <em>Les Private</em></h2>
                <p className="section-sub" style={{ marginBottom: 28 }}>Tutor terpilih datang langsung ke rumah Anda di Ambon. Lebih nyaman, lebih fokus, lebih efektif.</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  {whyPrivate.map((w, i) => (
                    <div key={i} style={{ background: 'white', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius-sm)', padding: '16px' }}>
                      <p style={{ fontWeight: 700, fontSize: '.88rem', color: 'var(--navy)', marginBottom: 5 }}>{w.title}</p>
                      <p style={{ fontSize: '.8rem', color: 'var(--gray-600)', lineHeight: 1.6 }}>{w.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 18 }} className="prog-cards">
              {privatePrograms.map((p, i) => (
                <ScrollReveal key={i}>
                  <div className="card" style={{ padding: '26px', display: 'flex', flexDirection: 'column', gap: 14, height: '100%' }}>
                    <span style={{ display: 'inline-block', fontSize: '.7rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--blue)', background: 'var(--blue-pale)', padding: '4px 12px', borderRadius: 50 }}>{p.jenjang}</span>
                    <h3 style={{ fontFamily: 'var(--font-montserrat),sans-serif', fontSize: '1.12rem', color: 'var(--navy)' }}>{p.title}</h3>
                    <p style={{ fontSize: '.87rem', color: 'var(--gray-600)', lineHeight: 1.7, flex: 1 }}>{p.desc}</p>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {p.features.map((f, j) => (
                        <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: '.86rem', color: 'var(--gray-800)' }}>
                          <IconCheck />{f}
                        </li>
                      ))}
                    </ul>
                    <a href={WA_BASE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ justifyContent: 'center', marginTop: 4 }}>Daftar Sekarang</a>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Online */}
      <section className="section dark-section" id="online">
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 64, alignItems: 'start' }} className="prog-layout-rev">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 18 }} className="prog-cards">
              {onlinePrograms.map((p, i) => (
                <ScrollReveal key={i}>
                  <div style={{
                    background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.09)',
                    borderRadius: 'var(--radius)', padding: '26px',
                    display: 'flex', flexDirection: 'column', gap: 14,
                    height: '100%',
                    gridColumn: i === 2 ? '1 / -1' : 'auto',
                  }}>
                    <span style={{ display: 'inline-block', fontSize: '.7rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: '#f59e0b', background: 'rgba(245,158,11,.15)', padding: '4px 12px', borderRadius: 50 }}>{p.jenjang}</span>
                    <h3 style={{ fontFamily: 'var(--font-montserrat),sans-serif', fontSize: '1.12rem', color: 'white' }}>{p.title}</h3>
                    <p style={{ fontSize: '.87rem', color: 'rgba(255,255,255,.6)', lineHeight: 1.7, flex: 1 }}>{p.desc}</p>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {p.features.map((f, j) => (
                        <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: '.86rem', color: 'rgba(255,255,255,.75)' }}>
                          <IconCheck color="#f59e0b" />{f}
                        </li>
                      ))}
                    </ul>
                    <a href={WA_BASE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-orange" style={{ justifyContent: 'center', marginTop: 4 }}>Daftar Sekarang</a>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal>
              <div style={{ position: 'sticky', top: 104 }}>
                <div className="eyebrow eyebrow-gold"><span className="eyebrow-line" />Belajar dari Mana Saja</div>
                <h2 className="section-title section-title-white">Program <em>Les Online</em></h2>
                <p className="section-sub section-sub-white" style={{ marginBottom: 28 }}>Via Zoom atau WhatsApp bersama tutor terpilih. Tersedia untuk seluruh Maluku dan Indonesia.</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  {whyOnline.map((w, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 'var(--radius-sm)', padding: '16px' }}>
                      <p style={{ fontWeight: 700, fontSize: '.88rem', color: 'white', marginBottom: 5 }}>{w.title}</p>
                      <p style={{ fontSize: '.8rem', color: 'rgba(255,255,255,.5)', lineHeight: 1.6 }}>{w.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <ScrollReveal>
        <section style={{ background: 'var(--blue)', padding: '80px 0' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-montserrat),sans-serif', fontWeight: 700, fontSize: 'clamp(1.8rem,4vw,2.6rem)', color: 'white', marginBottom: 14 }}>
              Tidak Yakin Program yang <em style={{ fontStyle: 'italic', color: '#f59e0b' }}>Tepat?</em>
            </h2>
            <p style={{ color: 'rgba(255,255,255,.72)', marginBottom: 36, fontSize: '1rem' }}>
              Konsultasikan kebutuhan ananda secara gratis. Kami bantu tentukan program yang paling sesuai.
            </p>
            <a href={WA_BASE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-orange btn-lg">Konsultasi Gratis Sekarang</a>
          </div>
        </section>
      </ScrollReveal>

      <style>{`
        .prog-layout     { grid-template-columns: 300px 1fr; }
        .prog-layout-rev { grid-template-columns: 1fr 300px; }
        .prog-cards { grid-auto-rows: 1fr; }
        @media(max-width:960px){
          .prog-layout,.prog-layout-rev { grid-template-columns: 1fr !important; }
          .prog-layout > div:first-child, .prog-layout-rev > div:last-child { position: static !important; }
        }
        @media(max-width:580px){ .prog-cards { grid-template-columns: 1fr !important; } }
      `}</style>
    </main>
  )
}
