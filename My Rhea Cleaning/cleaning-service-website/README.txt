=====================================
  CleanPro Services - Website README
=====================================

DESKRIPSI
---------
Website profesional untuk jasa cleaning service CleanPro.
Dibangun dengan HTML5, CSS3, dan JavaScript murni.
Desain: Luxury Minimal dengan palet warna hijau hutan + krem + gold.

STRUKTUR FILE
-------------
cleaning-service-website/
├── index.html        ← Beranda (Hero, Layanan, Mengapa Kami, Testimoni, CTA)
├── about.html        ← Tentang Kami (Cerita, Tim, Sertifikasi)
├── services.html     ← Layanan Lengkap (Rumah, Komersial, Spesial)
├── pricing.html      ← Harga & Paket (Basic, Standard, Premium + tabel tarif)
├── contact.html      ← Kontak (Form, Peta, Info kontak)
├── booking.html      ← Pemesanan (Formulir lengkap multi-step)
├── faq.html          ← FAQ (Accordion interaktif)
├── css/
│   └── style.css     ← Semua styling (responsif, animasi, komponen)
├── js/
│   └── script.js     ← Interaktivitas (navbar, form validation, FAQ, counter)
└── README.txt        ← File ini

CARA MENJALANKAN
----------------
1. Ekstrak semua file ke satu folder
2. Buka index.html di browser modern (Chrome, Firefox, Edge, Safari)
3. Tidak memerlukan server khusus - file statis murni

CARA HOSTING
------------
OPSI A - GitHub Pages (Gratis):
  1. Buat repository baru di GitHub
  2. Upload semua file
  3. Settings > Pages > Deploy from branch > main / (root)
  4. Website aktif di https://username.github.io/repo-name/

OPSI B - Netlify (Gratis, Mudah):
  1. Pergi ke netlify.com
  2. Drag & drop folder website ke dashboard
  3. Website langsung aktif dengan URL custom

OPSI C - Hosting Indonesia (Niagahoster, IDwebhost, dll):
  1. Upload via File Manager di cPanel
  2. Ekstrak ke folder public_html

FORMULIR (PRODUCTION)
---------------------
Untuk production, integrasikan form dengan Formspree:
1. Daftar di https://formspree.io
2. Buat form baru, dapatkan endpoint ID
3. Pada setiap <form>, ganti id="..." dengan:
   <form action="https://formspree.io/f/XXXXXXXX" method="POST">
4. Tambahkan <input type="hidden" name="_next" value="URL_TERIMA_KASIH">
5. Hapus JavaScript form handler yang ada, ganti dengan Formspree

KUSTOMISASI
-----------
Untuk mengganti nama perusahaan:
- Cari & ganti "CleanPro" di semua .html file

Untuk mengganti nomor telepon/email:
- Edit di setiap halaman (section kontak & footer)

Untuk mengganti gambar:
- Ganti URL Unsplash dengan gambar milik sendiri
- Letakkan di folder images/ dan referensikan sebagai: src="images/nama-file.jpg"

Untuk mengganti warna:
- Edit variabel CSS di css/style.css bagian :root { ... }

TEKNOLOGI
---------
- HTML5 semantik
- CSS3 (Custom Properties, Grid, Flexbox, Animasi)
- JavaScript ES6+ (Intersection Observer, Form Validation)
- Google Fonts: Playfair Display + DM Sans
- Font Awesome 6.5.0 (CDN)
- Gambar: Unsplash (free for commercial use)

BROWSER SUPPORT
---------------
✅ Chrome 90+   ✅ Firefox 88+
✅ Safari 14+   ✅ Edge 90+
✅ Mobile (iOS Safari, Chrome Android)

KREDIT
------
Dikembangkan dengan ❤️ menggunakan teknologi web modern.
Gambar dari Unsplash.com (unsplash.com/license)
Ikon dari Font Awesome (fontawesome.com)

© 2025 CleanPro Services
=====================================
