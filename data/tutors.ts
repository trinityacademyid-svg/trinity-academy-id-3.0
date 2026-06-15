export interface Tutor {
  id: number
  name: string
  role: string
  jenjang: string
  bio: string
  mapel: string[]
  photo: string
}

export const fallbackTutors: Tutor[] = [
  { id: 1, name: 'Nama Tutor 1', role: 'Tutor Matematika & Fisika', jenjang: 'SMP – SMA', bio: 'Lulusan S1 Pendidikan Matematika dengan pengalaman mengajar lebih dari 3 tahun. Spesialis mapel eksak dan persiapan UTBK.', mapel: ['Matematika', 'Fisika', 'Kimia'], photo: '/images/profile-icon.jpg' },
  { id: 2, name: 'Nama Tutor 2', role: 'Tutor Bahasa Inggris', jenjang: 'SD – SMA', bio: 'Certified English teacher dengan skor TOEFL 580+. Berpengalaman mengajar conversation, grammar, dan ujian bahasa Inggris.', mapel: ['Bahasa Inggris'], photo: '/images/profile-icon.jpg' },
  { id: 3, name: 'Nama Tutor 3', role: 'Tutor IPA & Biologi', jenjang: 'SMP – SMA', bio: 'Lulusan S1 Biologi dengan metode pembelajaran berbasis visual dan eksperimen yang mudah dipahami siswa.', mapel: ['IPA', 'Biologi', 'Kimia'], photo: '/images/profile-icon.jpg' },
  { id: 4, name: 'Nama Tutor 4', role: 'Tutor SD & Calistung', jenjang: 'TK – SD', bio: 'Lulusan PGSD, spesialis pembelajaran anak usia dini. Sabar dan kreatif dalam menangani berbagai gaya belajar anak.', mapel: ['Calistung', 'Matematika SD', 'B. Indonesia'], photo: '/images/profile-icon.jpg' },
  { id: 5, name: 'Nama Tutor 5', role: 'Tutor Ekonomi & IPS', jenjang: 'SMP – SMA', bio: 'Lulusan S1 Ekonomi dengan keahlian bimbingan UTBK Soshum. Metode analitis dan sistematis untuk hasil maksimal.', mapel: ['Ekonomi', 'IPS', 'Geografi', 'Sosiologi'], photo: '/images/profile-icon.jpg' },
  { id: 6, name: 'Nama Tutor 6', role: 'Tutor Bahasa Indonesia', jenjang: 'SD – SMA', bio: 'Lulusan S1 Sastra Indonesia. Membantu siswa menguasai literasi, menulis esai, dan persiapan ujian bahasa Indonesia.', mapel: ['B. Indonesia', 'Literasi'], photo: '/images/profile-icon.jpg' },
]
// === PANDUAN EDIT ===
// fallbackTutors → muncul di halaman /tutor dan carousel PreviewTutor di Home
// Setiap tutor: id, name, role, jenjang, bio, mapel, photo
// photo: path ke file gambar di /public/images/
// Kalau photo tidak ditemukan, akan tampil placeholder icon
