/*
=== KONSTANTA WEBSITE ===
Semua info penting yang bisa diubah:
- Nama website
- Nomor WhatsApp (diganti sesuai nomor Trinity)
- URL konsultasi dan pendaftaran
- Social media links
- Alamat, jam operasional
*/
export const WA_NUMBER = '6281234567890'
export const WA_BASE_URL = `https://wa.me/${WA_NUMBER}`
export const WA_CONSULT_TEXT = encodeURIComponent('Halo Trinity Academy, saya ingin konsultasi gratis.')
export const WA_TUTOR_TEXT = encodeURIComponent('Halo Trinity Academy, saya tertarik bergabung sebagai tutor.')
export const WA_CONSULT_URL = `${WA_BASE_URL}?text=${WA_CONSULT_TEXT}`
export const WA_TUTOR_URL = `${WA_BASE_URL}?text=${WA_TUTOR_TEXT}`
export const SITE_NAME = 'Trinity Academy'
export const SITE_TAGLINE = 'Les Privat & Online di Ambon'
export const SITE_DESCRIPTION = 'Platform pendidikan dan bimbingan belajar terpercaya di Ambon, Maluku.'
export const SITE_URL = 'https://trinityacademy.id'
export const INSTAGRAM_URL = '#'
export const YOUTUBE_URL = '#'
// === PANDUAN EDIT ===
// - Nomor WA: ganti WA_BASE_URL, WA_CONSULT_URL, WA_TUTOR_URL → semua tombol WhatsApp berubah
// - Nama website: ganti SITE_NAME → muncul di footer & SEO
// - Social media: ganti INSTAGRAM_URL, TIKTOK_URL → link footer berubah
// - Alamat/jam: ganti ADDRESS, HOURS → muncul di footer
