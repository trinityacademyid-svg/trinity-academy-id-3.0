'use client'
import { useState } from 'react'
import PageHero from '../../components/sections/PageHero'
import ScrollReveal from '../../components/ui/ScrollReveal'
import { WA_CONSULT_URL } from '../../constants'

const faqs = [
  {
    q: 'Apa itu Trinity Academy?',
    a: 'Trinity Academy adalah platform edukasi yang dikembangkan oleh anak muda di Ambon, menghadirkan pengalaman belajar online dan offline yang personal, terarah, dan berdampak bagi setiap siswa.',
  },
  {
    q: 'Apa saja program yang tersedia?',
    a: 'Kami memiliki program Les Private (guru ke rumah) untuk jenjang TK hingga SMA, Les Online (via Zoom/WA), program intensif UTBK/SNBT, serta program unggulan seperti TASA, Trinity Impact Lab, dan Trinity Impact Talks.',
  },
  {
    q: 'Bagaimana cara mendaftar?',
    a: 'Cukup klik tombol "Konsultasi Gratis via WhatsApp" di halaman utama atau hubungi nomor WhatsApp kami. Tim kami akan membantu menentukan program yang sesuai dengan kebutuhan ananda.',
  },
  {
    q: 'Apakah ada biaya pendaftaran?',
    a: 'Tidak ada biaya pendaftaran. Konsultasi awal juga gratis tanpa kewajiban.',
  },
  {
    q: 'Di mana saja wilayah layanan Trinity Academy?',
    a: 'Untuk les private, kami melayani wilayah Ambon dan sekitarnya. Untuk les online, kami melayani seluruh Maluku dan Indonesia.',
  },
  {
    q: 'Bagaimana sistem pembayarannya?',
    a: 'Pembayaran dilakukan secara bulanan di awal periode. Kami menerima transfer bank dan metode pembayaran digital lainnya.',
  },
  {
    q: 'Apakah bisa ganti tutor jika tidak cocok?',
    a: 'Tentu. Kami menyediakan fasilitas ganti tutor gratis jika metode pengajaran kurang sesuai dengan ananda.',
  },
  {
    q: 'Apakah ada laporan perkembangan belajar?',
    a: 'Ya, orang tua akan menerima laporan perkembangan belajar secara berkala — bulanan untuk program Basic, mingguan untuk program Exclusive.',
  },
  {
    q: 'Bagaimana kualitas tutor di Trinity Academy?',
    a: 'Setiap tutor melewati 4 tahap seleksi: verifikasi administrasi, uji kompetensi, micro-teaching, dan onboarding. Kami hanya menerima tutor yang memenuhi standar kualitas.',
  },
  {
    q: 'Apakah Trinity Academy hanya fokus pada akademik?',
    a: 'Tidak. Selain bimbingan akademik, kami juga memiliki program pengembangan diri dan sociopreneur melalui Signature Programs seperti TASA dan Trinity Impact Lab.',
  },
]

export default function FAQPage() {
  const [open, setOpen] = useState(null)

  const toggle = (i) => setOpen(open === i ? null : i)

  return (
    <main style={{ paddingTop: 0 }}>
      <PageHero
        eyebrow="FAQ"
        title="Pertanyaan yang"
        titleEm="Sering Diajukan"
        description="Temukan jawaban cepat seputar program, pendaftaran, biaya, dan layanan Trinity Academy."
      />

      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container" style={{ maxWidth: 720, margin: '0 auto' }}>
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <ScrollReveal key={i}>
                <div style={{
                  borderBottom: '1px solid var(--gray-200)',
                  padding: '20px 0',
                }}>
                  <button
                    onClick={() => toggle(i)}
                    style={{
                      width: '100%', display: 'flex', justifyContent: 'space-between',
                      alignItems: 'center', gap: 16, background: 'none', border: 'none',
                      cursor: 'pointer', padding: 0, fontFamily: 'inherit',
                      textAlign: 'left',
                    }}
                    aria-expanded={isOpen}
                  >
                    <span style={{
                      fontFamily: 'var(--font-montserrat),sans-serif',
                      fontWeight: 700, fontSize: '1rem',
                      color: 'var(--navy)', flex: 1,
                      lineHeight: 1.4,
                    }}>
                      {faq.q}
                    </span>
                    <svg
                      width="20" height="20" viewBox="0 0 24 24" fill="none"
                      stroke="var(--gray-400)" strokeWidth="2.2"
                      strokeLinecap="round" strokeLinejoin="round"
                      style={{
                        flexShrink: 0,
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                        transition: 'transform .25s ease',
                      }}
                    >
                      <line x1="12" y1="5" x2="12" y2="19"/>
                      <line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                  </button>
                  <div style={{
                    display: 'grid',
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                    transition: 'grid-template-rows .3s ease',
                  }}>
                    <div style={{ overflow: 'hidden' }}>
                      <p style={{
                        fontSize: '.92rem', color: 'var(--gray-600)',
                        lineHeight: 1.75, paddingTop: 16, paddingRight: 36,
                      }}>
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <ScrollReveal>
        <section style={{ background: 'var(--off-white)', padding: '72px 0' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-montserrat),sans-serif', fontWeight: 700, fontSize: 'clamp(1.5rem,3vw,2rem)', color: 'var(--navy)', marginBottom: 12 }}>
              Masih Ada Pertanyaan?
            </h2>
            <p style={{ color: 'var(--gray-600)', marginBottom: 28, fontSize: '.95rem' }}>
              Tim kami siap membantu Anda melalui WhatsApp.
            </p>
            <a href={WA_CONSULT_URL} target="_blank" rel="noopener noreferrer"
               className="btn btn-orange btn-lg">
              Hubungi Kami via WhatsApp
            </a>
          </div>
        </section>
      </ScrollReveal>
    </main>
  )
}
