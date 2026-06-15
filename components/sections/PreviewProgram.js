'use client'
import { WA_CONSULT_URL } from '@/constants'
import ScrollReveal from '../ui/ScrollReveal'

export default function PreviewProgram() {
  const plans = [
    {
      name: 'Basic Program',
      desc: 'Program belajar standar dengan jadwal dan tutor terpilih dari Trinity.',
      price: 'Rp 250.000',
      features: [
        'Sesi 2x per minggu (90 menit)',
        'Tutor dipilihkan oleh Trinity',
        'Laporan belajar bulanan',
        'Materi & modul belajar',
        'Dukungan via chat',
      ],
      highlighted: false,
    },
    {
      name: 'Exclusive Program',
      desc: 'Fleksibilitas maksimal — atur jadwal dan target belajar sendiri.',
      price: 'Rp 450.000',
      features: [
        'Sesi fleksibel (3-5x per minggu)',
        'Pilih tutor favorit sendiri',
        'Laporan belajar mingguan',
        'Materi & modul premium',
        'Konsultasi kapan saja',
        'Tryout & evaluasi berkala',
      ],
      highlighted: true,
    },
  ]

  return (
    <section className="section" style={{ background: 'var(--white)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div className="eyebrow eyebrow-blue" style={{ justifyContent: 'center' }}>
            <span className="eyebrow-line" />Program Belajar
          </div>
          <h2 className="section-title">
            Pilih Paket yang <em>Tepat untukmu</em>
          </h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Dua pilihan program yang dirancang untuk menyesuaikan kebutuhan dan tujuan belajar siswa.
          </p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 28, maxWidth: 800, margin: '0 auto',
        }} className="pricing-grid">
          {plans.map((plan, i) => (
            <ScrollReveal key={i} delay={i * 200} y={20} duration={500}>
            <div key={i} style={{
              position: 'relative',
              background: plan.highlighted
                ? 'linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%)'
                : 'var(--white)',
              border: plan.highlighted
                ? '1px solid var(--orange)'
                : '1px solid var(--gray-200)',
              borderRadius: 'var(--radius-lg)',
              padding: '40px 32px',
              boxShadow: plan.highlighted
                ? '0 8px 32px rgba(245,158,11,.2)'
                : 'var(--shadow-sm)',
              transform: plan.highlighted ? 'scale(1.03)' : 'none',
              transition: 'transform .25s ease, box-shadow .25s ease',
              display: 'flex', flexDirection: 'column', height: '100%',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = plan.highlighted ? 'scale(1.05)' : 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = plan.highlighted ? 'scale(1.03)' : 'none'; e.currentTarget.style.boxShadow = plan.highlighted ? '0 8px 32px rgba(245,158,11,.2)' : 'var(--shadow-sm)' }}
            >
              {/* Best Choice badge */}
              {plan.highlighted && (
                <div style={{
                  position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
                  background: 'var(--orange)', color: 'white',
                  fontWeight: 700, fontSize: '.78rem',
                  padding: '4px 20px', borderRadius: 20,
                  whiteSpace: 'nowrap', letterSpacing: '.03em',
                  boxShadow: '0 4px 12px rgba(245,158,11,.35)',
                }}>
                  Best Choice
                </div>
              )}

              <h3 style={{
                fontFamily: "'Montserrat',sans-serif",
                fontWeight: 700,
                fontSize: '1.3rem',
                color: plan.highlighted ? 'white' : 'var(--navy)',
                marginBottom: 8,
              }}>
                {plan.name}
              </h3>
              <p style={{
                fontSize: '.88rem',
                color: plan.highlighted ? 'rgba(255,255,255,.6)' : 'var(--gray-600)',
                lineHeight: 1.6, marginBottom: 24,
              }}>
                {plan.desc}
              </p>

              <div style={{
                fontFamily: "'Montserrat',sans-serif",
                fontWeight: 800, fontSize: '2rem',
                color: plan.highlighted ? 'var(--orange)' : 'var(--navy)',
                marginBottom: 28,
              }}>
                Mulai dari {plan.price}
                <span style={{
                  fontSize: '.85rem', fontWeight: 400,
                  color: plan.highlighted ? 'rgba(255,255,255,.4)' : 'var(--gray-400)',
                  marginLeft: 6,
                }}>
                  /bulan
                </span>
              </div>

              <ul style={{
                listStyle: 'none', display: 'flex', flexDirection: 'column',
                gap: 12, marginBottom: 32, flex: 1,
              }}>
                {plan.features.map((f, j) => (
                  <li key={j} style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    fontSize: '.88rem',
                    color: plan.highlighted ? 'rgba(255,255,255,.7)' : 'var(--gray-600)',
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                      stroke={plan.highlighted ? '#f59e0b' : 'var(--blue)'}
                      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                      style={{ flexShrink: 0 }}>
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={WA_CONSULT_URL}
                target="_blank" rel="noopener noreferrer"
                className={`btn ${plan.highlighted ? 'btn-orange' : 'btn-primary'}`}
                style={{
                  width: '100%', justifyContent: 'center', padding: '14px 0',
                  fontSize: '.95rem',
                }}
              >
                Pilih Paket Ini
              </a>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        .pricing-grid { grid-template-columns: 1fr 1fr; grid-auto-rows: 1fr; }
        @media(max-width:700px){
          .pricing-grid { grid-template-columns: 1fr !important; max-width: 420px !important; }
        }
      `}</style>
    </section>
  )
}
