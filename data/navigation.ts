/*
=== DATA NAVIGASI ===
Daftar link yang muncul di navbar dan footer.
Cara nambah menu tinggal tambah object { href: '/path', label: 'Nama Menu' }
*/
export interface NavLink {
  href: string
  label: string
}

export const navLinks: NavLink[] = [
  { href: '/about', label: 'About Us' },
  { href: '/program', label: 'Program' },
  { href: '/signature', label: 'Signature' },
  { href: '/tutor', label: 'Tutor' },
  { href: '/faq', label: 'FAQ' },
]

export const footerProgramLinks = ['Les Private', 'Les Online', 'UTBK / SNBT', 'TASA', 'Trinity Impact Lab', 'Impact Talks']
// === PANDUAN EDIT ===
// Tambah/hapus menu di sini → otomatis muncul/hilang di Navbar (desktop + mobile) dan Footer
// Format: { href: '/nama-path', label: 'Nama Menu' }
// Path harus sesuai dengan folder di app/ (contoh: /about → app/about/page.js)
