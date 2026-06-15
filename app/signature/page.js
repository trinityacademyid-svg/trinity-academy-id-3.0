'use client'

import Link from 'next/link'
import { signaturePrograms } from '../../data/programs'
import { WA_BASE_URL } from '../../constants'
import PageHero from '../../components/sections/PageHero'
import ScrollReveal from '../../components/ui/ScrollReveal'
import Image from 'next/image'

const programs = signaturePrograms

export default function SignaturePage() {
  return (
    <main style={{ paddingTop: 0 }}>
      <PageHero
        eyebrow="Signature Programs"
        title="Program"
        titleEm="Unggulan Trinity Academy"
        description="Trinity Academy adalah platform pendidikan dan layanan bimbingan belajar (learning provider) yang menggabungkan pembelajaran akademik dengan pendekatan sociopreneur. Melalui berbagai Signature Programs, Trinity menghadirkan ruang bagi generasi muda untuk berkembang, membangun keterampilan, serta menciptakan dampak nyata."
      />

      {/* Programs */}
      {programs.map((p, i) => {
        const isEven = i % 2 === 0
        return (
          <section key={p.id} id={p.id} className="section" style={{
            background: isEven ? 'var(--off-white)' : 'white',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {isEven && (
              <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none', opacity: .3,
                backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(30,64,175,.04) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(245,158,11,.03) 0%, transparent 50%)',
              }} />
            )}
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: isEven ? '1fr 1fr' : '1fr 1fr',
                gap: 48,
                alignItems: 'center',
              }} className="sig-row">
                {/* Content */}
                <ScrollReveal>
                  <div style={{ order: isEven ? 1 : 2 }} className="sig-text">
                    <div style={{
                      display: 'inline-flex', alignItems: 'center', gap: 14,
                      marginBottom: 18,
                    }}>
                      <span style={{
                        fontFamily: 'var(--font-montserrat),sans-serif',
                        fontSize: '2.8rem', fontWeight: 900,
                        letterSpacing: '-.04em',
                        background: 'linear-gradient(135deg, var(--blue), #3b82f6)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        lineHeight: 1,
                      }}>{p.number}</span>
                      <div style={{ width: 2, height: 36, background: 'linear-gradient(180deg, var(--blue), transparent)' }} />
                      <span style={{
                        fontSize: '.72rem', fontWeight: 800, letterSpacing: '.12em',
                        textTransform: 'uppercase', color: 'var(--blue)',
                      }}>{p.short}</span>
                    </div>

                    <h2 style={{
                      fontFamily: 'var(--font-montserrat),sans-serif',
                      fontWeight: 700, fontSize: 'clamp(1.5rem,3vw,2rem)',
                      color: 'var(--navy)', lineHeight: 1.2, marginBottom: 14,
                    }}>{p.title}</h2>

                    <div style={{
                      background: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
                      width: 48, height: 3, borderRadius: 4, marginBottom: 18,
                    }} />

                    <p style={{
                      fontSize: '.88rem', fontWeight: 600, fontStyle: 'italic',
                      color: 'var(--orange)', marginBottom: 18, lineHeight: 1.5,
                    }}>{'\u201C'}{p.tagline}{'\u201D'}</p>

                    <p style={{
                      color: 'var(--gray-600)', lineHeight: 1.85,
                      fontSize: '.95rem', marginBottom: 24,
                    }}>{p.desc}</p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {p.pillars.map((pl, j) => (
                        <span key={j} style={{
                          fontSize: '.76rem', fontWeight: 600,
                          padding: '5px 14px', borderRadius: 50,
                          border: '1.5px solid var(--blue)',
                          color: 'var(--blue)',
                          background: 'rgba(30,64,175,.06)',
                        }}>{pl}</span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                {/*
                  GANTI GAMBAR: simpan file di /public/images/ dengan nama:
                  - tasa.png
                  - impact-lab.png
                  - impact-talks.png
                  - goes-to-school.png
                  - scholarship.png
                */}
                <ScrollReveal>
                  <div style={{ order: isEven ? 2 : 1 }} className="sig-visual">
                    <div style={{
                      position: 'relative',
                      width: '100%',
                      aspectRatio: '4/3',
                      background: isEven ? 'var(--off-white)' : 'white',
                    }}>
                      <Image
                        src={`/images/${p.id}.png`}
                        alt={p.title}
                        fill
                        sizes="(max-width: 900px) 100vw, 50vw"
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>
        )
      })}

      {/* CTA */}
      <ScrollReveal>
        <section style={{ background: 'var(--blue)', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(245,158,11,.08) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(255,255,255,.04) 0%, transparent 50%)',
          }} />
          <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <h2 style={{
              fontFamily: 'var(--font-montserrat),sans-serif', fontWeight: 700,
              fontSize: 'clamp(1.8rem,4vw,2.6rem)', color: 'white', marginBottom: 14,
            }}>
              Tertarik Bergabung dalam <em style={{ fontStyle: 'italic', color: '#f59e0b' }}>Signature Programs?</em>
            </h2>
            <p style={{ color: 'rgba(255,255,255,.72)', marginBottom: 36, fontSize: '1rem' }}>
              Hubungi kami untuk informasi pendaftaran dan jadwal program terbaru.
            </p>
            <a href={WA_BASE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-orange btn-lg">
              Hubungi Kami Sekarang
            </a>
          </div>
        </section>
      </ScrollReveal>

      <style>{`
        .sig-row  { align-items: center; }

        @media(max-width:900px){
          .sig-row  { grid-template-columns: 1fr !important; }
          .sig-text, .sig-visual { order: unset !important; }
        }
      `}</style>
    </main>
  )
}
