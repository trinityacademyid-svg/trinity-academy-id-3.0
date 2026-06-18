/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    /*
      === KONFIGURASI IMAGE OPTIMIZATION ===
      qualities:
      - WAJIB di Next.js 16 (dokumentasi: "This field is required starting with Next.js 16")
      - Mendefinisikan daftar kualitas gambar yang diizinkan (0–100)
      - Jika kualitas yang diminta tidak ada di array ini, Next.js akan return 400 error
      - [75] = default, cukup untuk kebanyakan kasus
      - Kalau butuh variasi, bisa ditambah: [25, 50, 75, 100]
    */
    qualities: [75],

    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
}

module.exports = nextConfig