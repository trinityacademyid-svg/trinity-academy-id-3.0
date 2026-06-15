import ScrollReveal from '../ui/ScrollReveal'

export default function Keunggulan() {
  const items = [
    {
      title: 'Trinity Learning Report',
      desc: 'Pantau perkembangan belajar siswa secara transparan dengan laporan rutin yang detail dan mudah dipahami.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10 9 9 9 8 9"/>
        </svg>
      ),
    },
    {
      title: 'Pendampingan Personal',
      desc: 'Metode belajar yang disesuaikan dengan gaya belajar, kecepatan, dan kebutuhan unik setiap siswa.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
    },
    {
      title: 'Komunikasi Terbuka',
      desc: 'Fleksibel berkomunikasi dengan orang tua — diskusi perkembangan, konsultasi, dan feedback kapan saja.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          <line x1="12" y1="9" x2="16" y2="9"/>
          <line x1="8" y1="13" x2="16" y2="13"/>
          <line x1="8" y1="9" x2="9" y2="9"/>
        </svg>
      ),
    },
  ]

  return (
    <section className="section" style={{ background: 'var(--off-white)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div className="eyebrow eyebrow-blue" style={{ justifyContent: 'center' }}>
            <span className="eyebrow-line" />Keunggulan Kami
          </div>
          <h2 className="section-title">
            Kenapa Memilih <em>Trinity Academy?</em>
          </h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Tiga pilar utama yang membedakan pengalaman belajar bersama kami.
          </p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
        }} className="keunggulan-grid">
          {items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 120} y={20} duration={500}>
              <div className="card" style={{
                padding: '36px 28px', textAlign: 'center',
                transition: 'transform .25s ease, box-shadow .25s ease',
              }}>
                <div style={{
                  width: 56, height: 56,
                  background: 'var(--blue-pale)',
                  borderRadius: 'var(--radius)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px',
                  transition: 'background .25s ease',
                }}>
                  {item.icon}
                </div>
                <h3 style={{
                  fontFamily: "'Montserrat',sans-serif",
                  fontWeight: 700, fontSize: '1.1rem',
                  color: 'var(--navy)', marginBottom: 12,
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '.9rem', color: 'var(--gray-600)',
                  lineHeight: 1.7,
                }}>
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        .keunggulan-grid { grid-template-columns: repeat(3, 1fr); }
        @media(max-width:760px){ .keunggulan-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
