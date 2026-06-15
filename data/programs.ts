/*
=== DATA PROGRAM ===
Semua konten program belajar:
- privatePrograms: Les Private (TK, SD, SMP, SMA)
- onlinePrograms: Les Online (Regular, UTBK, Intensif)
- signaturePrograms: Program Unggulan (TASA, Impact Lab, dll)
- whyPrivate & whyOnline: alasan memilih masing-masing program
Cara edit: tinggal ganti title, desc, features di array
*/
export interface ProgramItem {
  title: string
  jenjang: string
  desc: string
  features: string[]
}

export interface WhyItem {
  title: string
  desc: string
}

export interface SignatureProgram {
  id: string
  number: string
  short: string
  title: string
  tagline: string
  desc: string
  pillars: string[]
}

export const privatePrograms: ProgramItem[] = [
  { title: 'Les Private TK / PAUD', jenjang: 'Usia 4–6 Tahun', desc: 'Program calistung dan persiapan sekolah dasar dengan pendekatan bermain yang menyenangkan, sabar, dan sesuai tumbuh kembang anak.', features: ['Calistung dasar', 'Bahasa Inggris awal', 'Logika & motorik', 'Pendekatan bermain'] },
  { title: 'Les Private SD', jenjang: 'Kelas 1–6', desc: 'Pendampingan intensif untuk penguatan materi sekolah dasar. Guru datang ke rumah dengan metode terstruktur dan menyenangkan.', features: ['Guru datang ke rumah', 'Jadwal fleksibel', 'Laporan belajar rutin', 'Semua mata pelajaran'] },
  { title: 'Les Private SMP', jenjang: 'Kelas 7–9', desc: 'Bimbingan mendalam untuk mapel eksak dan non-eksak. Mempersiapkan siswa menghadapi ujian dan seleksi SMA favorit.', features: ['Semua mata pelajaran', 'Persiapan ujian sekolah', 'Tryout berkala', 'Laporan kemajuan'] },
  { title: 'Les Private SMA', jenjang: 'Kelas 10–12', desc: 'Penguatan materi dan persiapan ujian untuk semua jurusan. Tutor spesialis yang ahli di bidangnya masing-masing.', features: ['IPA, IPS & Bahasa', 'Persiapan UN & ujian', 'Konsultasi jurusan', 'Tutor spesialis'] },
]

export const onlinePrograms: ProgramItem[] = [
  { title: 'Online Regular', jenjang: 'SD – SMA', desc: 'Sesi belajar online via Zoom atau WhatsApp dengan tutor terpilih. Tersedia untuk seluruh Maluku dan Indonesia.', features: ['Via Zoom / WhatsApp', 'Rekaman sesi tersedia', 'Semua jenjang & mapel', 'Jadwal fleksibel'] },
  { title: 'Persiapan UTBK / SNBT', jenjang: 'Kelas 12 & Alumni', desc: 'Program intensif persiapan masuk PTN. Latihan soal terstruktur, tryout berkala, dan pembahasan mendalam.', features: ['TPS & Literasi', 'Penalaran Matematika', 'Tryout online', 'Analisis hasil belajar'] },
  { title: 'Online Intensif', jenjang: 'Semua Jenjang', desc: 'Program belajar intensif jangka pendek untuk persiapan ujian, remedial, atau penguatan materi tertentu secara cepat.', features: ['Fokus satu topik', 'Sesi padat & terstruktur', 'Modul digital', 'Evaluasi akhir'] },
]

export const whyPrivate: WhyItem[] = [
  { title: 'Guru ke Rumah', desc: 'Tidak perlu keluar rumah. Tutor kami yang datang ke lokasi Anda.' },
  { title: 'Jadwal Bebas', desc: 'Tentukan hari dan jam belajar sesuai rutinitas ananda.' },
  { title: 'Perhatian Penuh', desc: 'Fokus satu siswa — lebih efektif dari kelas reguler mana pun.' },
  { title: 'Ganti Tutor Gratis', desc: 'Kurang cocok? Kami carikan pengganti tanpa biaya tambahan.' },
]

export const whyOnline: WhyItem[] = [
  { title: 'Jangkauan Luas', desc: 'Tersedia untuk seluruh Maluku dan Indonesia tanpa batas jarak.' },
  { title: 'Hemat Waktu', desc: 'Belajar dari rumah, tidak perlu perjalanan. Lebih efisien.' },
  { title: 'Rekaman Sesi', desc: 'Sesi dapat direkam untuk ditonton ulang kapan saja.' },
  { title: 'Teknologi Modern', desc: 'Platform video call dan tools digital untuk pengalaman optimal.' },
]

export const signaturePrograms: SignatureProgram[] = [
  {
    id: 'tasa', number: '01', short: 'TASA',
    title: 'Trinity Academy Student Ambassador',
    tagline: 'The Growth Catalyst: Leveling Up The Next Generation Of Visionaries',
    desc: 'Trinity Academy Student Ambassador (TASA) adalah program pengembangan generasi muda yang berfokus pada personal growth, content creation, dan pengalaman melalui campaign nyata. Peserta akan dilatih untuk membangun personal branding, menyampaikan ide, serta menjadi representasi Trinity Academy dalam menciptakan dampak positif di lingkungannya.',
    pillars: ['Personal Growth', 'Content Creation', 'Personal Branding', 'Real Campaign'],
  },
  {
    id: 'impact-lab', number: '02', short: 'Trinity Impact Lab',
    title: 'Trinity Impact Lab',
    tagline: 'Learn Today, Lead Tomorrow!',
    desc: 'Trinity Impact Lab merupakan program berbasis sociopreneur yang mendorong peserta untuk mengembangkan ide menjadi aksi nyata. Melalui pendekatan project-based learning, peserta akan merancang solusi terhadap isu sosial di sekitarnya, khususnya di wilayah Indonesia Timur, serta menciptakan dampak yang berkelanjutan.',
    pillars: ['Sociopreneur', 'Project-Based Learning', 'Solusi Sosial', 'Indonesia Timur'],
  },
  {
    id: 'impact-talks', number: '03', short: 'Trinity Impact Talks',
    title: 'Trinity Impact Talks',
    tagline: 'Voices That Inspire Action',
    desc: 'Trinity Impact Talks adalah rangkaian sharing session yang menghadirkan speakers dari tingkat nasional hingga internasional. Program ini memberikan insight, pengalaman, dan perspektif baru kepada peserta melalui diskusi yang relevan dengan isu terkini seperti AI, youth empowerment, dan social impact.',
    pillars: ['Speakers Nasional & Internasional', 'Youth Empowerment', 'Social Impact', 'AI & Future'],
  },
  {
    id: 'goes-to-school', number: '04', short: 'Trinity Goes to School',
    title: 'Trinity Goes to School',
    tagline: 'Bringing Growth Closer to You',
    desc: 'Trinity Goes to School merupakan program kunjungan langsung ke sekolah-sekolah yang menghadirkan pengalaman belajar yang lebih interaktif dan inspiratif. Melalui sharing session dan mini workshop, siswa akan mendapatkan wawasan baru seputar pengembangan diri, digital skills, dan peluang masa depan.',
    pillars: ['Kunjungan ke Sekolah', 'Mini Workshop', 'Digital Skills', 'Pengembangan Diri'],
  },
  {
    id: 'scholarship', number: '05', short: 'Trinity Scholarship Initiative',
    title: 'Trinity Scholarship Initiative',
    tagline: 'Empowering Access, Unlocking Potential',
    desc: 'Trinity Scholarship Initiative adalah program dukungan pendidikan yang bertujuan untuk membuka akses belajar bagi pelajar berpotensi, khususnya di wilayah Indonesia Timur. Program ini memberikan kesempatan bagi mereka untuk berkembang melalui pembelajaran dan berbagai program Trinity Academy.',
    pillars: ['Akses Pendidikan', 'Indonesia Timur', 'Pelajar Berpotensi', 'Dampak Berkelanjutan'],
  },
]
// === PANDUAN EDIT ===
// privatePrograms → muncul di halaman /program bagian "Les Private" (4 card)
// onlinePrograms → muncul di halaman /program bagian "Les Online" (3 card)
// whyPrivate & whyOnline → muncul sebagai benefit cards di /program
// signaturePrograms → muncul di halaman /signature (5 program)
// Cara edit: tinggal ubah title, desc, features, pillars, tagline
