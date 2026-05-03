# 🚀 Fortofolio-app

Fortofolio-app adalah sebuah website portofolio pribadi yang dibangun menggunakan teknologi modern web. Proyek ini dirancang untuk menampilkan profil, pengalaman, proyek, sertifikat, dan kontak dengan tampilan yang profesional, interaktif, dan responsif di berbagai perangkat.

## ✨ Fitur Utama

- **Tampilan Interaktif & Modern:** Dibangun dengan animasi yang halus menggunakan Framer Motion.
- **Dark Mode Support:** Pengguna dapat dengan mudah beralih antara tema terang (Light Mode) dan gelap (Dark Mode).
- **Responsif:** Tampilan yang dioptimalkan untuk perangkat mobile, tablet, dan desktop.
- **Halaman Proyek & Sertifikat:** Menampilkan daftar karya dan sertifikat dengan kartu yang menarik.
- **Dukungan Tampilan PDF:** Terintegrasi dengan `react-pdf` untuk menampilkan dokumen seperti CV atau resume langsung di browser.
- **Performa Tinggi:** Menggunakan Next.js (Pages Router) untuk proses rendering yang cepat dan optimalisasi gambar/font bawaan.

## 🛠️ Teknologi yang Digunakan

Proyek ini dibangun menggunakan *tech stack* berikut:

- **Framework:** [Next.js](https://nextjs.org/) (React 19)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animasi:** [Framer Motion](https://www.framer.com/motion/)
- **Ikon:** [Lucide React](https://lucide.dev/)
- **Tema:** [next-themes](https://github.com/pacocoursey/next-themes) (Untuk Dark Mode)
- **PDF Viewer:** [react-pdf](https://github.com/wojtekmaj/react-pdf)
- **Font:** [Inter (@fontsource/inter)](https://fontsource.org/fonts/inter)
- **Linter & Formatting:** ESLint & TypeScript

## 📂 Struktur Proyek

Berikut adalah gambaran umum dari struktur direktori utama:

```text
├── public/                 # Aset statis seperti gambar (.png, .jpg) dan file lainnya
├── src/
│   ├── components/         # Komponen UI yang dapat digunakan kembali (Navbar, Footer, Cards, dll)
│   ├── pages/              # Halaman-halaman website (index, about, projects, certificates, contact)
│   ├── styles/             # File CSS global (termasuk konfigurasi Tailwind)
│   └── types/              # Definisi tipe TypeScript
├── next.config.ts          # Konfigurasi Next.js
├── tailwind.config.ts      # Konfigurasi Tailwind CSS
└── package.json            # Daftar dependensi dan scripts npm
```

## ⚙️ Prasyarat

Sebelum menjalankan proyek ini, pastikan Anda telah menginstal perangkat lunak berikut:
- **Node.js** (versi 18.x atau lebih baru disarankan)
- **npm** (atau package manager lain seperti Yarn/pnpm/bun)

## 🚀 Instalasi & Menjalankan secara Lokal

1. **Clone repositori ini:**
   ```bash
   git clone https://github.com/IndalAwalaikal/Fortofolio-app.git
   cd Fortofolio-app
   ```

2. **Instal dependensi:**
   ```bash
   npm install
   ```

3. **Jalankan server pengembangan (Development Server):**
   ```bash
   npm run dev
   ```

4. **Buka di Browser:**
   Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat hasilnya. Halaman akan otomatis diperbarui setiap kali Anda menyimpan perubahan pada kode.

## 🏗️ Build & Production

Untuk membangun proyek ini agar siap di-*deploy* ke tahap *production*, jalankan perintah berikut:

```bash
npm run build
```

Setelah proses build selesai, Anda dapat menjalankan server *production* dengan:

```bash
npm run start
```

## 👨‍💻 Pembuat

- **Indal Awalaikal** - [GitHub Profile](https://github.com/IndalAwalaikal)

---
*Dibuat dengan ❤️ menggunakan Next.js dan Tailwind CSS.*
