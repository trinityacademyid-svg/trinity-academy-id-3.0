export interface SubjectData {
  SD: string[]
  SMP: string[]
  SMA: string[]
}

export const mapelData: SubjectData = {
  SD: [
    'Matematika','Bahasa Indonesia','IPA (Ilmu Pengetahuan Alam)',
    'IPS (Ilmu Pengetahuan Sosial)','Bahasa Inggris','Pendidikan Agama',
    'PKn','Seni Budaya & Prakarya','PJOK','Calistung (Kelas 1–3)',
  ],
  SMP: [
    'Matematika','Bahasa Indonesia','Bahasa Inggris','IPA Terpadu',
    'IPS Terpadu','PKn / PPKn','Seni Budaya','PJOK','Prakarya',
    'Bahasa Daerah','Informatika','Pendidikan Agama',
  ],
  SMA: [
    'Matematika Wajib','Matematika Peminatan','Bahasa Indonesia','Bahasa Inggris',
    'Fisika','Kimia','Biologi','Ekonomi','Sejarah','Geografi','Sosiologi',
    'PKn / PPKn','Bahasa Jerman / Prancis / Jepang','Informatika',
    'Pendidikan Agama','Persiapan UTBK (TPS & Literasi)',
  ],
}
