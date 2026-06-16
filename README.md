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

### Panel Admin (`/admin/*`) — Tidak Aktif
Panel admin tersedia tetapi **membutuhkan konfigurasi database Supabase** untuk dapat digunakan. Saat ini seluruh konten website menggunakan data statis.

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
| **TypeScript** | ^6.0.3 |
| **ESLint** | ^9 |

> **Catatan:** Proyek ini berjalan **tanpa database**. Seluruh data bersifat statis dan didefinisikan langsung di dalam file `data/` dan komponen.

## Struktur Folder

```
├── app/                  # Pages (App Router)
│   ├── admin/            # Panel admin (membutuhkan database)
│   ├── about/            # Halaman tentang
│   ├── program/          # Halaman program
│   ├── signature/        # Halaman signature program
│   ├── tutor/            # Halaman tutor
│   ├── faq/              # Halaman FAQ
│   └── privacy/          # Halaman privasi
├── components/           # UI components
│   ├── sections/         # Section components (Hero, dll)
│   └── ui/               # Utility components (ScrollReveal, icons)
├── constants/            # Konfigurasi situs (WA, sosial media, dll)
├── data/                 # Data statis (program, tutor, navigasi)
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

3. **Jalankan development server**
   ```bash
   npm run dev
   ```

4. Buka [http://localhost:3000](http://localhost:3000)

> Tidak perlu konfigurasi database atau file `.env` — proyek langsung berjalan dengan data statis.

### Scripts

| Perintah | Deskripsi |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Build production |
| `npm run start` | Jalankan production server |
| `npm run lint` | Jalankan ESLint |

## Konfigurasi

Semua konstanta situs (nomor WhatsApp, nama situs, URL sosial media, alamat) dapat diubah di `constants/index.ts`.

### Data Statis

Konten website dikelola melalui file-file berikut:

| File | Deskripsi |
|---|---|
| `data/tutors.ts` | Data tutor (nama, role, mapel, foto) |
| `data/programs.ts` | Data program (private, online, signature) |
| `data/navigation.ts` | Navigasi navbar & footer |
| `data/subjects.ts` | Daftar mata pelajaran per jenjang |
| `data/about.tsx` | Data halaman tentang (founder, milestone, values) |
| `constants/index.ts` | Konstanta (WA, sosial media, alamat) |
| `components/sections/Testimoni.js` | Data testimoni (hardcoded di komponen) |

## Deployment

Aplikasi siap dideploy ke [Vercel](https://vercel.com) tanpa perlu konfigurasi tambahan.
