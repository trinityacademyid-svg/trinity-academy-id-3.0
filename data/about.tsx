import type { ReactNode } from 'react'

export interface Founder {
  name: string
  role: string
  photo: string
  bio: string
  linkedin: string
}

export interface Milestone {
  year: string
  title: string
  desc: string
}

export interface Value {
  icon: ReactNode
  title: string
  desc: string
}

export const founders: Founder[] = [
  {
    name: 'Nama Founder 1',
    role: 'Co-Founder & CEO',
    photo: '/images/profile-icon.jpg',
    bio: 'Deskripsi singkat Founder 1. Latar belakang pendidikan, pengalaman, dan motivasi mendirikan Trinity Academy. Ganti teks ini dengan cerita nyata.',
    linkedin: '#',
  },
  {
    name: 'Nama Founder 2',
    role: 'Co-Founder & Director',
    photo: '/images/profile-icon.jpg',
    bio: 'Deskripsi singkat Founder 2. Latar belakang pendidikan, pengalaman, dan kontribusi dalam membangun Trinity Academy. Ganti teks ini dengan cerita nyata.',
    linkedin: '#',
  },
]

export const milestones: Milestone[] = [
  { year: '2021', title: 'Trinity Academy Berdiri', desc: 'Berawal dari keprihatinan terhadap keterbatasan akses pendidikan berkualitas di Ambon, Trinity Academy resmi didirikan.' },
  { year: '2022', title: 'Ekspansi Program', desc: 'Meluncurkan program les online dan memperluas jangkauan ke seluruh Maluku dengan tutor yang terus bertambah.' },
  { year: '2023', title: 'Signature Programs Lahir', desc: 'TASA, Trinity Impact Lab, dan Trinity Impact Talks resmi diluncurkan sebagai wujud pendekatan sociopreneur Trinity.' },
  { year: '2024', title: 'Ratusan Siswa Terdaftar', desc: 'Lebih dari 300 siswa aktif dan 50 tutor bergabung, menjadikan Trinity Academy lembaga terpercaya di Maluku.' },
]

export const values: Value[] = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
    title: 'Integritas',
    desc: 'Kami berkomitmen pada kejujuran dan transparansi dalam setiap layanan yang kami berikan.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: 'Dampak Nyata',
    desc: 'Setiap program dirancang untuk menciptakan perubahan positif yang terukur bagi siswa dan masyarakat.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Inklusivitas',
    desc: 'Kami percaya setiap anak berhak mendapat pendidikan berkualitas, tanpa memandang latar belakang.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
    title: 'Inovasi',
    desc: 'Kami terus berinovasi dalam metode pembelajaran untuk menjawab tantangan pendidikan masa kini.',
  },
]
// === PANDUAN EDIT ===
// founders → muncul di halaman About Us bagian "Orang di Balik Trinity Academy"
// milestones → muncul di halaman About Us bagian "Sejarah Trinity Academy" (timeline)
// values → muncul di halaman About Us bagian "Nilai yang Kami Pegang Teguh"
