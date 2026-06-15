# Trinity Academy

Platform pendidikan dan bimbingan belajar terpercaya di **Ambon, Maluku**. Menyediakan les privat (offline) dan les online untuk jenjang TK sampai SMA, serta program pengembangan non-akademik (sociopreneur, leadership, content creation) untuk pemuda di Indonesia Timur.

## Fitur

### Halaman Publik
| Halaman | Rute | Deskripsi |
|---|---|---|
| **Beranda** | `/` | Hero statistik, keunggulan, paket harga, carousel tutor, testimoni |
| **Tentang** | `/about` | Latar belakang, visi/misi, timeline interaktif, profil founder |
| **Program** | `/program` | Les Private (TK–SMA) & Les Online (Regular, UTBK/SNBT, Intensif) |
| **Signature** | `/signature` | Program unggulan: TASA, Impact Lab, Impact Talks, Goes to School, Scholarship |
| **Tutor** | `/tutor` | Grid tutor dengan foto, bio, mata pelajaran |
| **FAQ** | `/faq` | Akordion 10 pertanyaan seputar program & pendaftaran |
| **Kebijakan Privasi** | `/privacy` | Dokumen kebijakan privasi |

### Panel Admin (`/admin/*`)
| Halaman | Deskripsi |
|---|---|
| **Dashboard** | Statistik pendaftaran, tutor, testimoni; tabel pendaftaran terbaru |
| **Registrasi** | Kelola pendaftaran siswa (filter, cari, ubah status, hapus, link WA) |
| **Tutor** | CRUD tutor + upload foto ke Supabase Storage |
| **Testimoni** | CRUD testimoni dengan rating, toggle aktif/nonaktif |
| **Konten** | Edit konten situs (hero, tentang, kontak, statistik) |

### Komponen UI
- Navbar sticky dengan progress bar scroll
- Footer dengan form feedback (WhatsApp)
- Animasi scroll (IntersectionObserver)
- Floating tombol WhatsApp
- Hero dengan animasi counter

## Tech Stack

| Teknologi | Versi |
|---|---|
| **Next.js** (App Router) | 16.2.4 |
| **React** | 19.2.4 |
| **Tailwind CSS** | ^4 |
| **Supabase** (Auth, DB, Storage) | ^2.105.3 |
| **TypeScript** | ^6.0.3 |
| **ESLint** | ^9 |

## Struktur Folder

```
├── app/                  # Pages (App Router)
│   ├── admin/            # Panel admin (login, dashboard, CRUD)
│   ├── about/            # Halaman tentang
│   ├── program/          # Halaman program
│   ├── signature/        # Halaman signature program
│   ├── tutor/            # Halaman tutor
│   └── faq/              # Halaman FAQ
│   └── privacy/          # Halaman privasi
├── components/           # UI components
│   ├── sections/         # Section components (Hero, dll)
│   └── ui/               # Utility components (ScrollReveal, icons)
├── constants/            # Konfigurasi situs (WA, sosial media, dll)
├── data/                 # Data statis (program, tutor, navigasi)
├── lib/                  # Inisialisasi Supabase client
├── services/             # CRUD services (Auth, content, registrations, dll)
├── types/                # TypeScript type definitions
└── public/               # Assets statis (images, robots.txt, sitemap)
```

## Cara Menjalankan

1. **Clone repositori**
   ```bash
   git clone <repo-url>
   cd trinity-academy-id-2.0-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Buat file `.env.local`** dengan variabel environment berikut:
   ```
   NEXT_PUBLIC_SUPABASE_URL=<url-proyek-supabase>
   NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon-key-supabase>
   ```

4. **Jalankan development server**
   ```bash
   npm run dev
   ```

5. Buka [http://localhost:3000](http://localhost:3000)

### Scripts

| Perintah | Deskripsi |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Build production |
| `npm run start` | Jalankan production server |
| `npm run lint` | Jalankan ESLint |

## Konfigurasi

Semua konstanta situs (nomor WhatsApp, nama situs, URL sosial media, alamat) dapat diubah di `constants/index.ts`.

Struktur tabel database Supabase (inferensi dari services):
- `registrations` — Pendaftaran siswa
- `tutors` — Data tutor
- `testimonials` — Testimoni
- `site_content` — Konten situs (key-value)

Storage bucket: `trinity-assets` (untuk foto tutor)

## Deployment

Aplikasi siap dideploy ke [Vercel](https://vercel.com). Pastikan variabel environment sudah diatur di dashboard Vercel.
