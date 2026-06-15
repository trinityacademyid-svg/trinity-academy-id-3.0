export default function PageHero({
  eyebrow,
  eyebrowColor = 'eyebrow-gold',
  title,
  titleEm,
  description,
  children,
}) {
  const dots = [
    { w: 8, h: 8, t: 20, l: 15, c: 'rgba(59,130,246,.25)' },
    { w: 5, h: 5, t: 35, l: 80, c: 'rgba(245,158,11,.15)' },
    { w: 10, h: 10, t: 65, l: 70, c: 'rgba(59,130,246,.2)' },
    { w: 4, h: 4, t: 75, l: 25, c: 'rgba(245,158,11,.2)' },
    { w: 6, h: 6, t: 45, l: 55, c: 'rgba(59,130,246,.3)' },
  ]

  return (
    <section style={{
      background: 'linear-gradient(140deg, #08152a 0%, #0d2044 55%, #163266 100%)',
      padding: '160px 0 80px', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(255,255,255,.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.022) 1px,transparent 1px)',
        backgroundSize: '64px 64px',
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden',
      }}>
        {dots.map((d, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: d.w, height: d.h,
            borderRadius: '50%',
            background: d.c,
            top: `${d.t}%`, left: `${d.l}%`,
          }} />
        ))}
      </div>
      <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
        <div className={`eyebrow ${eyebrowColor}`} style={{ justifyContent: 'center' }}>
          <span className="eyebrow-line" />{eyebrow}
        </div>
        <h1 style={{
          fontFamily: 'var(--font-montserrat), sans-serif',
          fontWeight: 800,
          fontSize: 'clamp(2.2rem,5vw,3.8rem)',
          color: 'white', lineHeight: 1.12, marginBottom: 20,
        }}>
          {title} <em style={{ fontStyle: 'italic', color: '#f59e0b' }}>{titleEm}</em>
        </h1>
        {description && (
          <p style={{
            color: 'rgba(255,255,255,.65)', fontSize: '1.05rem',
            maxWidth: 560, margin: '0 auto', lineHeight: 1.75,
          }}>
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}
