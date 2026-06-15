'use client'

import Link from 'next/link'
import PageHero from '../../components/sections/PageHero'
import ScrollReveal from '../../components/ui/ScrollReveal'
import { WA_CONSULT_URL } from '../../constants'

export default function PrivacyPage() {
  const sections = [
    {
      title: 'Informasi yang Kami Kumpulkan',
      content: 'Kami mengumpulkan informasi yang Anda berikan secara langsung saat menghubungi kami melalui WhatsApp, formulir pendaftaran, atau kotak saran. Informasi tersebut dapat mencakup nama, nomor telepon, alamat email, dan informasi terkait kebutuhan belajar.',
    },
    {
      title: 'Penggunaan Informasi',
      content: 'Informasi yang kami kumpulkan digunakan untuk: (1) Memproses pendaftaran dan memberikan layanan bimbingan belajar, (2) Berkomunikasi dengan Anda terkait perkembangan belajar, jadwal, dan informasi program, (3) Meningkatkan kualitas layanan kami berdasarkan masukan yang diterima.',
    },
    {
      title: 'Perlindungan Data',
      content: 'Kami berkomitmen untuk melindungi data pribadi Anda. Kami menerapkan langkah-langkah keamanan yang wajar untuk mencegah akses tidak sah, perubahan, pengungkapan, atau perusakan data pribadi yang dikelola oleh kami.',
    },
    {
      title: 'Berbagi Informasi dengan Pihak Ketiga',
      content: 'Kami tidak menjual, menukarkan, atau mentransfer data pribadi Anda kepada pihak ketiga tanpa persetujuan Anda, kecuali diwajibkan oleh hukum atau untuk memberikan layanan yang Anda minta (misalnya, kepada tutor yang ditugaskan).',
    },
    {
      title: 'Penyimpanan Data',
      content: 'Kami menyimpan data pribadi Anda selama diperlukan untuk memberikan layanan atau sesuai dengan ketentuan hukum yang berlaku. Jika Anda ingin data Anda dihapus, silakan hubungi kami melalui WhatsApp.',
    },
    {
      title: 'Hak Anda',
      content: 'Anda berhak untuk mengakses, memperbarui, atau meminta penghapusan data pribadi Anda yang kami simpan. Untuk melakukan hal tersebut, silakan hubungi tim kami melalui kontak yang tersedia.',
    },
    {
      title: 'Perubahan Kebijakan Privasi',
      content: 'Kebijakan privasi ini dapat diperbarui sewaktu-waktu. Perubahan akan diumumkan melalui halaman ini. Dengan terus menggunakan layanan kami setelah perubahan, Anda menyetujui kebijakan yang diperbarui.',
    },
  ]

  return (
    <main style={{ paddingTop: 0 }}>
      <PageHero
        eyebrow="Kebijakan Privasi"
        title="Kebijakan"
        titleEm="Privasi"
        description="Transparansi penuh mengenai bagaimana Trinity Academy mengelola dan melindungi data pribadi Anda."
      />

      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container" style={{ maxWidth: 760, margin: '0 auto' }}>
          <ScrollReveal>
            <p style={{ color: 'var(--gray-600)', lineHeight: 1.8, marginBottom: 40, fontSize: '.95rem' }}>
              Terakhir diperbarui: 1 Januari 2025. Kebijakan privasi ini menjelaskan bagaimana Trinity Academy
              mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat menggunakan layanan kami.
            </p>
          </ScrollReveal>

          {sections.map((s, i) => (
            <ScrollReveal key={i}>
              <div style={{ marginBottom: 36 }}>
                <h2 style={{
                  fontFamily: 'var(--font-montserrat),sans-serif',
                  fontWeight: 700, fontSize: '1.15rem',
                  color: 'var(--navy)', marginBottom: 12,
                }}>
                  {i + 1}. {s.title}
                </h2>
                <p style={{ color: 'var(--gray-600)', lineHeight: 1.8, fontSize: '.95rem' }}>
                  {s.content}
                </p>
              </div>
            </ScrollReveal>
          ))}

          <ScrollReveal>
            <div style={{
              marginTop: 48, padding: '28px', background: 'var(--off-white)',
              borderRadius: 'var(--radius)', border: '1px solid var(--gray-200)',
              textAlign: 'center',
            }}>
              <p style={{ color: 'var(--gray-600)', fontSize: '.9rem', marginBottom: 16 }}>
                Jika ada pertanyaan mengenai kebijakan privasi, silakan hubungi kami.
              </p>
              <a href={WA_CONSULT_URL} target="_blank" rel="noopener noreferrer"
                 className="btn btn-orange">
                Hubungi Kami
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
