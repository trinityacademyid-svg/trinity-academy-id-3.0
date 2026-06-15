'use client'

import Image from 'next/image'
import { fallbackTutors } from '../../data/tutors'
import { WA_CONSULT_URL, WA_TUTOR_URL } from '../../constants'
import PageHero from '../../components/sections/PageHero'
import ScrollReveal from '../../components/ui/ScrollReveal'

const tutors = fallbackTutors

const selectionSteps = [
  { step: '01', title: 'Seleksi Administrasi', desc: 'Verifikasi latar belakang pendidikan dan pengalaman mengajar calon tutor.' },
  { step: '02', title: 'Uji Kompetensi', desc: 'Tes penguasaan materi pada bidang yang akan diampu.' },
  { step: '03', title: 'Micro-Teaching', desc: 'Simulasi mengajar untuk menilai metode penyampaian dan komunikasi.' },
  { step: '04', title: 'Onboarding', desc: 'Pelatihan standar Trinity Academy sebelum mulai mengajar.' },
]

export default function TutorPage() {
  return (
    <main style={{ paddingTop: 0 }}>
      <PageHero
        eyebrow="Tim Pengajar"
        title="Tutor"
        titleEm="Terseleksi Trinity Academy"
        description="Setiap tutor melewati proses seleksi ketat untuk memastikan kualitas pengajaran terbaik bagi setiap siswa."
      />

      <section className="section-sm" style={{ background: 'var(--off-white)', borderBottom: '1px solid var(--gray-200)' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: 36 }}>
              <div className="eyebrow eyebrow-blue" style={{ justifyContent: 'center' }}><span className="eyebrow-line" />Standar Seleksi Kami</div>
              <h2 className="section-title" style={{ fontSize: 'clamp(1.5rem,3vw,2.1rem)' }}>Proses Seleksi <em>Tutor Trinity</em></h2>
            </div>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }} className="steps-grid">
            {selectionSteps.map((s, i) => (
              <ScrollReveal key={i}>
                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: 'var(--blue)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.72rem', fontWeight: 800, flexShrink: 0 }}>{s.step}</div>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: '.9rem', color: 'var(--navy)', marginBottom: 4 }}>{s.title}</p>
                    <p style={{ fontSize: '.82rem', color: 'var(--gray-600)', lineHeight: 1.6 }}>{s.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <div className="eyebrow eyebrow-blue" style={{ justifyContent: 'center' }}><span className="eyebrow-line" />Tim Kami</div>
              <h2 className="section-title">Kenali Para <em>Pengajar Kami</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>Profesional, berpengalaman, dan berdedikasi untuk perkembangan setiap siswa.</p>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28 }} className="tutor-grid">
            {tutors.map((t) => (
              <ScrollReveal key={t.id}>
                <div className="card" style={{ overflow: 'hidden', padding: 0 }}>
                  <div style={{ position: 'relative', aspectRatio: '4/3', background: 'var(--blue-pale)' }}>
                    <Image src={t.photo} alt={`Foto ${t.name}`} fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--blue)', opacity: .28, pointerEvents: 'none' }}>
                      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                      </svg>
                    </div>
                    <div style={{ position: 'absolute', top: 14, right: 14, background: 'rgba(8,21,42,.75)', backdropFilter: 'blur(8px)', color: 'white', fontSize: '.72rem', fontWeight: 700, padding: '4px 12px', borderRadius: 50 }}>{t.jenjang}</div>
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg,var(--blue),#f59e0b)' }} />
                  </div>
                  <div style={{ padding: '24px' }}>
                    <h3 style={{ fontFamily: 'var(--font-montserrat),sans-serif', fontSize: '1.12rem', color: 'var(--navy)', marginBottom: 4 }}>{t.name}</h3>
                    <p style={{ fontSize: '.76rem', fontWeight: 700, color: 'var(--blue)', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 12 }}>{t.role}</p>
                    <p style={{ fontSize: '.86rem', color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 14 }}>{t.bio}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {t.mapel.map((m, j) => (
                        <span key={j} style={{ fontSize: '.72rem', fontWeight: 600, padding: '3px 10px', borderRadius: 50, background: 'var(--blue-pale)', color: 'var(--blue)' }}>{m}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <p style={{ textAlign: 'center', marginTop: 40, color: 'var(--gray-400)', fontSize: '.88rem' }}>
              Dan masih banyak tutor lainnya.{' '}
              <a href={WA_CONSULT_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue)', fontWeight: 600 }}>Hubungi kami</a>{' '}
              untuk info tutor tersedia di wilayah Anda.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="join-grid">
            <ScrollReveal>
              <div>
                <div className="eyebrow eyebrow-gold"><span className="eyebrow-line" />Bergabung Bersama Kami</div>
                <h2 className="section-title section-title-white">Ingin Menjadi <em>Tutor Trinity?</em></h2>
                <p className="section-sub section-sub-white" style={{ marginBottom: 32 }}>
                  Kami selalu mencari pengajar yang berdedikasi dan bersemangat memberi dampak nyata bagi pendidikan di Maluku.
                </p>
                <a href={WA_TUTOR_URL} target="_blank" rel="noopener noreferrer" className="btn btn-orange btn-lg">
                  Daftar Menjadi Tutor
                </a>
              </div>
            </ScrollReveal>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {[
                ['Jadwal Fleksibel', 'Atur jam mengajar sesuai ketersediaan waktu kamu.'],
                ['Penghasilan Kompetitif', 'Tarif adil dan dibayar tepat waktu setiap bulan.'],
                ['Komunitas Positif', 'Bergabung dengan tim yang suportif dan kolaboratif.'],
                ['Pengembangan Diri', 'Akses pelatihan dan program Trinity untuk para tutor.'],
              ].map(([t, d], i) => (
                <ScrollReveal key={i}>
                  <div style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 'var(--radius)', padding: '20px' }}>
                    <p style={{ fontWeight: 700, fontSize: '.9rem', color: 'white', marginBottom: 6 }}>{t}</p>
                    <p style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.5)', lineHeight: 1.6 }}>{d}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .steps-grid { grid-template-columns: repeat(4,1fr); }
        .tutor-grid { grid-template-columns: repeat(3,1fr); }
        .join-grid  { grid-template-columns: 1fr 1fr; }
        @media(max-width:900px){
          .tutor-grid { grid-template-columns: repeat(2,1fr) !important; }
          .join-grid  { grid-template-columns: 1fr !important; }
        }
        @media(max-width:800px){ .steps-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media(max-width:540px){
          .tutor-grid { grid-template-columns: 1fr !important; }
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  )
}
