import Link from 'next/link'
import IconArrow from '@/components/ui/icons/IconArrow'
import ScrollReveal from '../ui/ScrollReveal'

export default function PreviewAbout() {
  return (
    <section className="section" style={{ background: 'var(--white)' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
        <ScrollReveal y={15} delay={0}>
          <div className="eyebrow eyebrow-blue" style={{ justifyContent: 'center' }}>
            <span className="eyebrow-line" />Siapa Trinity Academy?
          </div>
        </ScrollReveal>
        <ScrollReveal y={15} delay={120}>
          <h2 className="section-title" style={{ marginBottom: 24 }}>
            Dikembangkan oleh Anak Muda,{' '}
            <br /><em>untuk Generasi Muda</em>
          </h2>
        </ScrollReveal>
        <ScrollReveal y={15} delay={240}>
          <div className="divider" style={{ margin: '0 auto 28px' }} />
        </ScrollReveal>
        <ScrollReveal y={15} delay={360}>
          <p style={{
            fontSize: '1.05rem', color: 'var(--gray-600)',
            lineHeight: 1.8, maxWidth: 600, margin: '0 auto 16px',
          }}>
            Trinity Academy hadir sebagai platform edukasi yang dikembangkan oleh anak muda
            untuk memberikan pengalaman belajar yang lebih personal, relevan, dan terarah
            dibandingkan bimbingan belajar konvensional.
          </p>
        </ScrollReveal>
        <ScrollReveal y={15} delay={480}>
          <p style={{
            fontSize: '1rem', color: 'var(--gray-600)',
            lineHeight: 1.8, maxWidth: 560, margin: '0 auto 36px',
          }}>
            Kami percaya setiap siswa memiliki kebutuhan unik — pendekatan yang sama untuk
            semua orang bukanlah jawaban. Itulah mengapa kami merancang pembelajaran yang
            berpusat pada kebutuhan spesifik setiap siswa.
          </p>
        </ScrollReveal>
        <ScrollReveal y={15} delay={600}>
          <Link href="/about" className="btn btn-primary">
            Kenali Lebih Dekat <IconArrow size={16} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
