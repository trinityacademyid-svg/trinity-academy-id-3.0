'use client'
import IconStar from '@/components/ui/icons/IconStar'
import ScrollReveal from '../ui/ScrollReveal'

export default function Testimoni() {
  const reviews = [
    {
      name: 'Ibu Sari',
      role: 'Orang Tua Siswa SD',
      text: 'Anak saya yang tadinya kesulitan fokus kini jauh lebih semangat dan prestasinya meningkat pesat sejak belajar di Trinity.',
    },
    {
      name: 'Bapak Yusuf',
      role: 'Orang Tua Siswa SMP',
      text: 'Nilai matematika anak kami naik signifikan setelah dua bulan. Pendekatan personalnya sangat terasa.',
    },
    {
      name: 'Dewi R.',
      role: 'Siswa SMA — Lolos UTBK',
      text: 'Bimbingan intensif dari Trinity sangat membantu persiapan UTBK saya. Metode belajarnya tepat sasaran.',
    },
  ]

  return (
    <section className="section" style={{ background: 'var(--off-white)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="eyebrow eyebrow-blue" style={{ justifyContent: 'center' }}>
            <span className="eyebrow-line" />Testimoni
          </div>
          <h2 className="section-title">Kata Mereka tentang <em>Trinity</em></h2>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
        }} className="testi-grid">
          {reviews.map((r, i) => (
            <ScrollReveal key={i} delay={i * 150} y={20} duration={500}>
              <div style={{
                background: 'var(--white)',
                border: '1px solid var(--gray-200)',
                borderRadius: 'var(--radius)',
                padding: '28px 24px',
                boxShadow: 'var(--shadow-sm)',
                transition: 'transform .25s ease, box-shadow .25s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)' }}
              >
                <div style={{ display: 'flex', gap: 2, marginBottom: 16 }}>
                  {[...Array(5)].map((_, j) => <IconStar key={j} size={15} />)}
                </div>
                <p style={{
                  fontSize: '.92rem', color: 'var(--gray-600)',
                  lineHeight: 1.75, fontStyle: 'italic', marginBottom: 20,
                }}>
                  &ldquo;{r.text}&rdquo;
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--blue) 0%, var(--blue-light) 100%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'white', fontWeight: 700, fontSize: '1rem',
                    fontFamily: "'Montserrat',sans-serif",
                  }}>
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '.88rem', color: 'var(--navy)' }}>{r.name}</div>
                    <div style={{ fontSize: '.78rem', color: 'var(--gray-400)' }}>{r.role}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        .testi-grid { grid-template-columns: repeat(3, 1fr); }
        @media(max-width:760px){ .testi-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
