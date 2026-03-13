/**
 * PRECISION BRASS CRAFT — Internationalisation (i18n)
 * Languages: Indonesian (id) · English (en) · Mandarin (zh)
 * Usage: add data-i18n="key" to any element
 *        add data-i18n-html="key" for innerHTML (supports <em> tags)
 *        add data-i18n-attr="placeholder:key" for attributes
 */

const TRANSLATIONS = {

  /* ─────────────────────── INDONESIAN ─────────────────────── */
  id: {

    /* NAV */
    "nav.home":        "Beranda",
    "nav.hotStamp":    "Hot Stamping",
    "nav.embossing":   "Embossing",
    "nav.contact":     "Konsultasi",
    "nav.tagline":     "Est. 2008 · Jakarta, Indonesia",

    /* LANG SWITCHER */
    "lang.id": "Indonesia",
    "lang.en": "English",
    "lang.zh": "中文",

    /* HERO */
    "hero.eyebrow":   "Manufaktur Presisi Kuningan",
    "hero.title":     "Presisi <em>0,01mm.</em><br>Jiwa Seni dari<br>Kuningan.",
    "hero.subtitle":  "Spesialis Hot Stamping &amp; Embossing CNC untuk industri kemasan mewah dan desainer korporat. Dimana kekakuan teknikal bertemu kehangatan logam.",
    "hero.cta1":      "Konsultasi Desain Gratis",
    "hero.cta2":      "Lihat Portofolio",
    "hero.scroll":    "Gulir ke bawah",
    "hero.stat1":     "Toleransi Akurasi",
    "hero.stat2":     "Proyek Selesai",
    "hero.stat3":     "Pengalaman",
    "hero.stat4":     "Kepuasan Klien",

    /* CLIENTS */
    "clients.label": "Dipercaya oleh merek-merek terkemuka",

    /* PRECISION */
    "precision.label":      "Perbedaan Presisi",
    "precision.title":      "Bukan Sekadar <em>Stempel.</em>",
    "precision.subtitle":   "Di sinilah teknik konvensional berhenti, dan seni dimulai.",
    "precision.p1":         "Stamping konvensional menghasilkan tepi buram, kedalaman tidak konsisten, dan detail hancur di bawah 0,5mm. Mesin CNC kami memprogram setiap milimeter dengan akurasi matematis yang mutlak.",
    "precision.p2":         "Hasilnya: logo dengan tepi setajam silet, gradien emboss yang dramatis, dan reproduksi berulang yang identik — sempurna untuk packaging premium yang menuntut konsistensi absolut.",
    "precision.annotation": "Toleransi CNC — Setara 1/10 Rambut Manusia",
    "precision.stat1":      "Toleransi Akurasi",
    "precision.stat2":      "Kedalaman Ukir Maks",
    "precision.stat3":      "Tahun Pengalaman",
    "precision.stat4":      "Proyek Selesai",

    /* MATERIAL */
    "material.label":     "Material Unggulan",
    "material.title":     "Kuningan: Material <em>Para Pemenang.</em>",
    "material.subtitle":  "Dipilih oleh industri premium dunia, diproses dengan teknologi masa kini.",
    "material.desc":      "Kuningan adalah paduan terbaik untuk stamping presisi — keras namun mampu menampung detail mikron, tahan lama, dan memantulkan cahaya seperti tidak ada logam lain.",
    "material.c1.title":  "Ketebalan Variatif",
    "material.c1.value":  "0.1mm — 5mm",
    "material.c1.text":   "Tersedia dalam berbagai ketebalan sesuai kebutuhan teknis packaging Anda, dari foil ultra-tipis hingga plat solid untuk stamping berat.",
    "material.c2.title":  "Kedalaman Ukir",
    "material.c2.value":  "Hingga 2mm",
    "material.c2.text":   "Kedalaman ukiran hingga 2mm tanpa distorsi tepi — menciptakan efek timbul yang dramatis dan taktil pada setiap sentuhan packaging.",
    "material.c3.title":  "Akurasi CNC",
    "material.c3.value":  "Toleransi ±0,01mm",
    "material.c3.text":   "Setara 1/10 diameter rambut manusia. Setiap cetakan diprogram secara digital dan diverifikasi dengan alat ukur kalibrasi terstandarisasi.",

    /* PORTFOLIO */
    "portfolio.label":    "Portofolio Karya",
    "portfolio.title":    "Detail yang <em>Tak Tertandingi</em><br>dalam Setiap Karya.",
    "portfolio.discuss":  "Diskusi Proyek →",
    "portfolio.cta":      "Konsultasikan Proyek Anda →",
    "filter.all":         "Semua",
    "filter.stamp":       "Hot Stamping",
    "filter.emboss":      "Embossing",
    "filter.combo":       "Kombinasi",

    /* PROCESS */
    "process.label":    "Alur Kerja",
    "process.title":    "Dari Konsep ke <em>Mahakarya.</em>",
    "process.subtitle": "Lima langkah yang memastikan setiap cetakan adalah hasil terbaik yang bisa dibuat.",
    "process.s1.title": "Konsultasi",
    "process.s1.desc":  "Diskusi kebutuhan teknis & estetika. Evaluasi file desain bersama engineer.",
    "process.s2.title": "Persiapan File",
    "process.s2.desc":  "Konversi ke format CNC. Simulasi digital pastikan semua detail terpindahkan.",
    "process.s3.title": "Setup CNC",
    "process.s3.desc":  "Pemrograman mesin presisi. Pemilihan mata bor & kalibrasi untuk kuningan.",
    "process.s4.title": "Eksekusi",
    "process.s4.desc":  "Pengukiran CNC di bawah pengawasan ketat. Setiap pass dimonitor real-time.",
    "process.s5.title": "Quality Check",
    "process.s5.desc":  "Inspeksi dengan alat ukur presisi. Verifikasi toleransi sebelum pengiriman.",

    /* TESTIMONIALS */
    "testi.label":    "Kata Klien Kami",
    "testi.title":    "Kepercayaan yang <em>Dibangun</em><br>dari Hasil Nyata.",
    "testi.t1":       "Cetakan yang kami terima luar biasa. Setiap detail logo kami—termasuk garis tipis 0,3mm—terpindahkan sempurna. Tim packaging premium kami akhirnya menemukan mitra yang benar-benar mengerti standar luxury.",
    "testi.t2":       "Kami mempercayakan seluruh lini hot stamping untuk koleksi parfum kami. Konsistensi antar batch 100% identik—standar yang tidak bisa kami temukan di tempat lain di Indonesia.",
    "testi.t3":       "Proyek embossing cover buku anniversary kami butuh detail sangat rumit. Precision Brass Craft menyelesaikannya dalam toleransi yang tidak terbayangkan sebelumnya. Hasilnya memukau semua tamu undangan.",
    "testi.t4":       "Waktu respons cepat, hasil setara standar internasional, dan tim yang komunikatif. Kami telah menggunakan jasa mereka untuk 12 proyek berbeda dalam dua tahun terakhir tanpa satu pun kekecewaan.",
    "testi.r1":       "Creative Director · Araya Packaging",
    "testi.r2":       "Head of Packaging · Nusantara Luxury",
    "testi.r3":       "Brand Manager · Prestige Box Co.",
    "testi.r4":       "Procurement Lead · Elara Design Studio",

    /* CTA BANNER */
    "cta.title":    "Siap Mengukir<br><em>Detail Terbaik</em> Anda?",
    "cta.desc":     "Kirimkan file desain Anda dan kami berikan analisis teknis gratis dalam 24 jam kerja.",
    "cta.btn":      "Mulai Konsultasi Gratis →",

    /* FOOTER */
    "footer.tagline":  "Dimana Seni Bertemu Presisi Mutlak",
    "footer.desc":     "Manufaktur spesialis Hot Stamping dan Embossing berbahan dasar Kuningan dengan teknologi CNC presisi tinggi. Melayani industri kemasan mewah dan desainer korporat sejak 2008.",
    "footer.services": "Layanan",
    "footer.company":  "Perusahaan",
    "footer.contact":  "Hubungi Kami",
    "footer.home":     "Beranda",
    "footer.portfolio":"Portofolio",
    "footer.contactL": "Kontak",
    "footer.consult":  "Konsultasi Desain",
    "footer.address":  "Kawasan Industri Pulogadung<br>Jakarta Timur, 13930",
    "footer.copy":     "Crafted with precision in Jakarta, Indonesia",

    /* HOT STAMPING PAGE */
    "hs.page.label":    "Layanan Unggulan",
    "hs.page.title":    "Hot <em>Stamping</em><br>Kuningan CNC",
    "hs.page.subtitle": "Cetakan kuningan terukir presisi CNC untuk proses hot stamping foil. Detail tajam, konsistensi sempurna, untuk packaging yang berbicara tentang kemewahan.",
    "hs.label":         "Apa itu Hot Stamping?",
    "hs.title":         "Sentuhan Emas yang <em>Abadi.</em>",
    "hs.subtitle":      "Transfer foil metalik yang tak bisa ditiru oleh tinta manapun.",
    "hs.p1":            "Hot Stamping adalah proses transfer foil metalik (emas, perak, holografik) ke permukaan menggunakan tekanan panas dari cetakan kuningan berukir. Hasilnya: finish metalik yang tak bisa ditiru oleh tinta atau printing biasa.",
    "hs.p2":            "Perbedaan kami: cetakan dikerjakan dengan mesin CNC 5-axis, bukan manual. Setiap garis, sudut, dan kurva diprogram secara digital — menghasilkan akurasi yang mustahil dicapai dengan tangan.",
    "hs.p3":            "Cetakan kuningan CNC kami tahan hingga <strong style=\"color:var(--olive)\">100.000+ kesan</strong> tanpa degradasi kualitas, menjadikannya investasi ideal untuk brand dengan volume produksi tinggi.",
    "hs.f1.title":      "Foil Premium",
    "hs.f1.text":       "Kompatibel dengan semua jenis foil — emas, perak, rose gold, holografik, matte metalik, dan foil custom.",
    "hs.f2.title":      "Tahan Lama",
    "hs.f2.text":       "Cetakan kuningan CNC tahan 100.000+ kesan. Investasi jangka panjang untuk brand dengan produksi massal.",
    "hs.f3.title":      "Multi Material",
    "hs.f3.text":       "Efektif pada kertas, kulit sintetis, kanvas, plastik ABS, kayu, dan berbagai material kemasan premium.",
    "hs.f4.title":      "Konsistensi Batch",
    "hs.f4.text":       "Setiap kesan identik antar batch produksi. Tidak ada variasi yang terlihat meski di bawah kaca pembesar 10x.",
    "hs.app.label":     "Aplikasi",
    "hs.app.title":     "Di Mana <em>Hot Stamping</em> Bersinar.",
    "hs.app.subtitle":  "Dari packaging parfum hingga cover buku edisi terbatas.",
    "hs.a1.title":      "Kemasan Parfum & Kosmetik",
    "hs.a1.text":       "Rigid box, drawer box, dan tutup botol dengan foil emas yang memberikan kesan premium instan di rak toko.",
    "hs.a2.title":      "Cover Buku & Agenda",
    "hs.a2.text":       "Judul, logo, dan ornamen dekoratif dengan foil pada cover kulit atau linen untuk edisi kolektor.",
    "hs.a3.title":      "Kartu Nama Eksekutif",
    "hs.a3.text":       "Nama dan logo dengan hot stamping pada kartu tebal 600gsm — kesan pertama yang tak terlupakan.",
    "hs.a4.title":      "Packaging Wine & Spirits",
    "hs.a4.text":       "Label botol dan gift box dengan detail foil yang memperkuat positioning brand premium di pasar.",
    "hs.a5.title":      "Sertifikat & Penghargaan",
    "hs.a5.text":       "Dokumen resmi, sertifikat, dan piagam dengan emblem emas yang memberikan bobot resmi dan prestisius.",
    "hs.a6.title":      "Fashion & Aksesoris",
    "hs.a6.text":       "Tag mewah, packaging sepatu, dan tas tangan dengan foil yang memperkuat identitas brand fashion.",
    "hs.cta.title":     "Siap Membuat Cetakan<br><em>Hot Stamping</em> Anda?",
    "hs.cta.desc":      "Upload file AI/CDR/DXF dan kami analisis teknis gratis dalam 24 jam kerja.",
    "hs.cta.btn":       "Minta Analisis Gratis →",

    /* EMBOSSING PAGE */
    "em.page.label":    "Layanan Unggulan",
    "em.page.title":    "Embossing &<br><em>Debossing</em> CNC",
    "em.page.subtitle": "Detail taktil yang dapat dirasakan dengan sentuhan jari. Cetakan kuningan CNC menciptakan relief tiga dimensi yang menceritakan kualitas tanpa kata.",
    "em.label":         "Seni Tiga Dimensi",
    "em.title":         "Lebih dari Sekadar<br><em>Permukaan Datar.</em>",
    "em.subtitle":      "Desain yang bisa dilihat, dan lebih pentingnya — bisa dirasakan.",
    "em.p1":            "Embossing menciptakan relief positif (timbul) pada permukaan material, sementara debossing menciptakan cekungan negatif (tertekan). Keduanya menghasilkan elemen taktil yang tidak bisa diabaikan saat dipegang.",
    "em.p2":            "Cetakan kuningan CNC kami mampu mereproduksi detail sekecil <strong style=\"color:var(--olive)\">0,1mm radius</strong> — setiap lengkungan logo, sudut huruf, dan garis halus terwakili sempurna dalam bentuk tiga dimensi.",
    "em.p3":            "Untuk efek yang benar-benar dramatis, kami menawarkan <strong style=\"color:var(--olive)\">kombinasi emboss + hot stamp dalam satu cetakan</strong> — timbul sekaligus berkilau.",
    "em.depth.label":   "Kapabilitas Kedalaman",
    "em.compare.label": "Pilih Teknik",
    "em.compare.title": "Emboss vs <em>Deboss</em> —<br>Apa Bedanya?",
    "em.compare.sub":   "Dua pendekatan berbeda, satu tujuan yang sama: membuat brand Anda tak terlupakan.",
    "em.emb.badge":     "Embossing",
    "em.emb.title":     "Timbul ke Atas",
    "em.emb.l1":        "Relief positif — elemen desain naik di atas permukaan dasar material",
    "em.emb.l2":        "Efek cahaya dramatis dari sisi samping (raking light)",
    "em.emb.l3":        "Ideal untuk logo, teks headline, dan ornamen dekoratif utama",
    "em.emb.l4":        "Dapat dikombinasikan dengan hot stamp foil untuk efek maksimal",
    "em.emb.l5":        "Kedalaman standar 0.5–1.5mm untuk keterbacaan optimal",
    "em.deb.badge":     "Debossing",
    "em.deb.title":     "Tertekan ke Dalam",
    "em.deb.l1":        "Relief negatif — elemen desain tercetak masuk ke permukaan material",
    "em.deb.l2":        "Kesan elegan dan subtle, populer di industri fashion dan spirits",
    "em.deb.l3":        "Ideal untuk branding minimalis yang berbicara tanpa warna",
    "em.deb.l4":        "Terasa kuat dan kokoh saat dipegang — memperkuat persepsi kualitas",
    "em.deb.l5":        "Sering digunakan pada kulit, linen, dan karton tebal premium",
    "em.cta.title":     "Buat Desain Anda<br><em>Bisa Dirasakan.</em>",
    "em.cta.desc":      "Konsultasikan kebutuhan embossing Anda — kami analisis file dan rekomendasikan teknik terbaik secara gratis.",
    "em.cta.btn":       "Konsultasi Sekarang →",

    /* CONTACT PAGE */
    "ct.page.label":    "Mulai Proyek",
    "ct.page.title":    "Konsultasi <em>Gratis,</em><br>Respon 24 Jam.",
    "ct.page.subtitle": "Kirimkan file desain Anda dan ceritakan kebutuhan Anda. Tim engineer kami menganalisis dan memberikan rekomendasi teknis secara gratis — tanpa kewajiban apapun.",
    "ct.trust1":        "Waktu Respons",
    "ct.trust2":        "Proyek Selesai",
    "ct.trust3":        "Kepuasan Klien",
    "ct.trust4":        "Pengalaman",
    "ct.info.label":    "Informasi Kontak",
    "ct.info.phone":    "Telepon",
    "ct.info.email":    "Email",
    "ct.info.address":  "Alamat Bengkel",
    "ct.info.hours":    "Jam Operasional",
    "ct.info.hoursV":   "Senin — Jumat: 08.00 — 17.00 WIB<br>Sabtu: 08.00 — 13.00 WIB",
    "ct.info.format":   "Format File Diterima",
    "ct.map.link":      "Buka di Google Maps →",
    "ct.form.title":    "Ceritakan Proyek Anda",
    "ct.form.sub":      "Konsultasi awal sepenuhnya gratis. Tidak ada kewajiban apapun setelah mengirim form ini. Tim engineer kami akan merespons dalam 24 jam kerja.",
    "ct.f.name":        "Nama Lengkap *",
    "ct.f.email":       "Alamat Email *",
    "ct.f.company":     "Nama Perusahaan *",
    "ct.f.phone":       "Nomor Telepon",
    "ct.f.service":     "Layanan yang Dibutuhkan",
    "ct.f.opt0":        "Pilih layanan...",
    "ct.f.opt1":        "Hot Stamping",
    "ct.f.opt2":        "Embossing / Debossing",
    "ct.f.opt3":        "Kombinasi Hot Stamp + Emboss",
    "ct.f.opt4":        "Konsultasi Desain Saja",
    "ct.f.notes":       "Catatan & Kebutuhan Teknis",
    "ct.f.notesP":      "Ceritakan detail proyek Anda: jenis packaging, estimasi kuantitas, material target, deadline produksi, dan ekspektasi khusus lainnya...",
    "ct.f.upload":      "Upload File Desain (Opsional)",
    "ct.f.uploadT":     "<strong>Klik atau drag file ke sini</strong><br>Format: AI, CDR, DXF, EPS, PDF · Maks 50MB",
    "ct.f.submit":      "Kirim & Minta Analisis Gratis →",
    "ct.f.privacy":     "Data Anda aman bersama kami dan tidak akan dibagikan ke pihak ketiga.",
    "ct.faq.label":     "FAQ",
    "ct.faq.title":     "Pertanyaan yang <em>Sering</em> Ditanyakan.",
    "ct.faq.sub":       "Jawaban untuk pertanyaan teknis dan bisnis yang paling umum.",
    "ct.q1":            "Format file apa yang Anda terima?",
    "ct.a1":            "Kami menerima file vektor: Adobe Illustrator (.ai), CorelDRAW (.cdr), AutoCAD (.dxf), Encapsulated PostScript (.eps), dan PDF vektor. File raster (JPG, PNG) dapat diterima namun perlu konversi dengan biaya tambahan.",
    "ct.q2":            "Berapa minimum order untuk cetakan baru?",
    "ct.a2":            "Tidak ada minimum order untuk pembuatan cetakan. Biaya cetakan adalah one-time fee berdasarkan kompleksitas desain dan ukuran. Untuk produksi stamping, minimum order adalah 500 kesan per desain untuk efisiensi optimal.",
    "ct.q3":            "Berapa lama ketahanan cetakan kuningan CNC?",
    "ct.a3":            "Cetakan kuningan H62 kami dirancang tahan minimal 100.000 kesan tanpa degradasi kualitas yang terlihat. Dengan perawatan dan penyimpanan yang tepat, cetakan dapat digunakan jauh melampaui angka tersebut.",
    "ct.q4":            "Apakah bisa mengerjakan proyek dengan deadline singkat?",
    "ct.a4":            "Kami menawarkan layanan rush order dengan lead time 3–5 hari kerja (biaya tambahan berlaku). Hubungi kami langsung via WhatsApp untuk konfirmasi ketersediaan slot produksi.",
    "ct.q5":            "Apakah ada biaya konsultasi desain?",
    "ct.a5":            "Tidak. Konsultasi desain, analisis file, dan rekomendasi teknis semuanya gratis tanpa syarat. Kami percaya klien yang terinformasi dengan baik adalah dasar dari kemitraan bisnis yang sukses.",

    /* SPEC TABLE */
    "spec.param":       "Parameter",
    "spec.spec":        "Spesifikasi",
  },

  /* ─────────────────────── ENGLISH ─────────────────────── */
  en: {

    "nav.home":        "Home",
    "nav.hotStamp":    "Hot Stamping",
    "nav.embossing":   "Embossing",
    "nav.contact":     "Consultation",
    "nav.tagline":     "Est. 2008 · Jakarta, Indonesia",

    "lang.id": "Indonesia",
    "lang.en": "English",
    "lang.zh": "中文",

    "hero.eyebrow":   "Precision Brass Manufacturing",
    "hero.title":     "Precision <em>0.01mm.</em><br>The Soul of Art<br>in Brass.",
    "hero.subtitle":  "Specialists in CNC Hot Stamping &amp; Embossing for the luxury packaging industry and corporate designers. Where technical rigidity meets the warmth of metal.",
    "hero.cta1":      "Free Design Consultation",
    "hero.cta2":      "View Portfolio",
    "hero.scroll":    "Scroll down",
    "hero.stat1":     "Accuracy Tolerance",
    "hero.stat2":     "Projects Completed",
    "hero.stat3":     "Years Experience",
    "hero.stat4":     "Client Satisfaction",

    "clients.label": "Trusted by leading brands",

    "precision.label":      "The Precision Difference",
    "precision.title":      "More Than Just <em>a Stamp.</em>",
    "precision.subtitle":   "Where conventional technique stops, and art begins.",
    "precision.p1":         "Conventional stamping produces blurred edges, inconsistent depth, and detail that breaks down below 0.5mm. Our CNC machines program every millimeter with absolute mathematical accuracy.",
    "precision.p2":         "The result: razor-sharp logo edges, dramatic emboss gradients, and identically repeatable reproductions — perfect for premium packaging that demands absolute consistency.",
    "precision.annotation": "CNC Tolerance — Equal to 1/10 of a Human Hair",
    "precision.stat1":      "Accuracy Tolerance",
    "precision.stat2":      "Max Engraving Depth",
    "precision.stat3":      "Years of Experience",
    "precision.stat4":      "Projects Completed",

    "material.label":     "Premium Material",
    "material.title":     "Brass: The Material of <em>Champions.</em>",
    "material.subtitle":  "Chosen by the world's premium industry, processed with today's technology.",
    "material.desc":      "Brass is the finest alloy for precision stamping — hard yet capable of holding micron-level detail, durable, and reflecting light like no other metal.",
    "material.c1.title":  "Variable Thickness",
    "material.c1.value":  "0.1mm — 5mm",
    "material.c1.text":   "Available in various thicknesses to meet your packaging technical requirements, from ultra-thin foil to solid plate for heavy stamping.",
    "material.c2.title":  "Engraving Depth",
    "material.c2.value":  "Up to 2mm",
    "material.c2.text":   "Engraving depth up to 2mm without edge distortion — creating dramatic and tactile raised effects on every packaging touch point.",
    "material.c3.title":  "CNC Accuracy",
    "material.c3.value":  "Tolerance ±0.01mm",
    "material.c3.text":   "Equal to 1/10 the diameter of a human hair. Every die is digitally programmed and verified with standardized calibration measuring instruments.",

    "portfolio.label":    "Portfolio",
    "portfolio.title":    "Unrivalled <em>Detail</em><br>in Every Work.",
    "portfolio.discuss":  "Discuss a Project →",
    "portfolio.cta":      "Consult Your Project →",
    "filter.all":         "All",
    "filter.stamp":       "Hot Stamping",
    "filter.emboss":      "Embossing",
    "filter.combo":       "Combination",

    "process.label":    "Workflow",
    "process.title":    "From Concept to <em>Masterpiece.</em>",
    "process.subtitle": "Five steps ensuring every die is the best result achievable.",
    "process.s1.title": "Consultation",
    "process.s1.desc":  "Discuss technical & aesthetic needs. Evaluate design files with our engineers.",
    "process.s2.title": "File Preparation",
    "process.s2.desc":  "Convert to CNC format. Digital simulation ensures all details are captured.",
    "process.s3.title": "CNC Setup",
    "process.s3.desc":  "Precision machine programming. Bit selection & calibration for brass material.",
    "process.s4.title": "Execution",
    "process.s4.desc":  "CNC engraving under strict supervision. Every pass monitored in real-time.",
    "process.s5.title": "Quality Check",
    "process.s5.desc":  "Precision measurement inspection. Tolerance verified before delivery.",

    "testi.label":    "Client Testimonials",
    "testi.title":    "Trust Built from <em>Real</em><br>Results.",
    "testi.t1":       "The dies we received were extraordinary. Every detail of our logo — including 0.3mm thin lines — transferred perfectly. Our premium packaging team finally found a partner who truly understands luxury standards.",
    "testi.t2":       "We entrusted our entire hot stamping line for our fragrance collection. Batch-to-batch consistency is 100% identical — a standard we couldn't find anywhere else in Indonesia.",
    "testi.t3":       "Our anniversary book cover embossing project required extremely intricate detail. Precision Brass Craft delivered within tolerances previously unimaginable. The result amazed all our guests.",
    "testi.t4":       "Fast response time, results matching international standards, and a communicative team. We have used their services for 12 different projects over two years without a single disappointment.",
    "testi.r1":       "Creative Director · Araya Packaging",
    "testi.r2":       "Head of Packaging · Nusantara Luxury",
    "testi.r3":       "Brand Manager · Prestige Box Co.",
    "testi.r4":       "Procurement Lead · Elara Design Studio",

    "cta.title":    "Ready to Engrave Your<br><em>Finest Details?</em>",
    "cta.desc":     "Send us your design file and we'll provide a free technical analysis within 24 business hours.",
    "cta.btn":      "Start Free Consultation →",

    "footer.tagline":  "Where Art Meets Absolute Precision",
    "footer.desc":     "Specialist manufacturer of Hot Stamping and Embossing in Brass with high-precision CNC technology. Serving the luxury packaging industry and corporate designers since 2008.",
    "footer.services": "Services",
    "footer.company":  "Company",
    "footer.contact":  "Contact Us",
    "footer.home":     "Home",
    "footer.portfolio":"Portfolio",
    "footer.contactL": "Contact",
    "footer.consult":  "Design Consultation",
    "footer.address":  "Pulogadung Industrial Estate<br>East Jakarta, 13930",
    "footer.copy":     "Crafted with precision in Jakarta, Indonesia",

    "hs.page.label":    "Featured Service",
    "hs.page.title":    "CNC Brass<br><em>Hot Stamping</em>",
    "hs.page.subtitle": "CNC precision-engraved brass dies for the hot stamping foil process. Sharp detail, perfect consistency, for packaging that speaks of luxury.",
    "hs.label":         "What is Hot Stamping?",
    "hs.title":         "A Golden Touch that <em>Endures.</em>",
    "hs.subtitle":      "Metallic foil transfer that no ink can replicate.",
    "hs.p1":            "Hot Stamping is the process of transferring metallic foil (gold, silver, holographic) to a surface using heat pressure from an engraved brass die. The result: a metallic finish that cannot be replicated by any ink or conventional printing.",
    "hs.p2":            "Our difference: dies are crafted with 5-axis CNC machines, not by hand. Every line, angle, and curve is digitally programmed — delivering accuracy impossible to achieve manually.",
    "hs.p3":            "Our CNC brass dies withstand up to <strong style=\"color:var(--olive)\">100,000+ impressions</strong> without quality degradation, making them an ideal investment for brands with high production volumes.",
    "hs.f1.title":      "Premium Foils",
    "hs.f1.text":       "Compatible with all foil types — gold, silver, rose gold, holographic, matte metallic, and custom foils.",
    "hs.f2.title":      "Long-lasting",
    "hs.f2.text":       "CNC brass dies withstand 100,000+ impressions. Long-term investment for brands with mass production.",
    "hs.f3.title":      "Multi-Material",
    "hs.f3.text":       "Effective on paper, synthetic leather, canvas, ABS plastic, wood, and various premium packaging materials.",
    "hs.f4.title":      "Batch Consistency",
    "hs.f4.text":       "Every impression is identical across production batches. No variation visible even under a 10x magnifier.",
    "hs.app.label":     "Applications",
    "hs.app.title":     "Where <em>Hot Stamping</em> Shines.",
    "hs.app.subtitle":  "From fragrance packaging to limited edition book covers.",
    "hs.a1.title":      "Fragrance & Cosmetic Packaging",
    "hs.a1.text":       "Rigid boxes, drawer boxes, and bottle caps with gold foil delivering instant premium appeal at the point of sale.",
    "hs.a2.title":      "Book & Planner Covers",
    "hs.a2.text":       "Titles, logos, and decorative ornaments in foil on leather or linen covers for collector's editions.",
    "hs.a3.title":      "Executive Business Cards",
    "hs.a3.text":       "Name and logo in hot stamping on 600gsm thick card stock — an unforgettable first impression.",
    "hs.a4.title":      "Wine & Spirits Packaging",
    "hs.a4.text":       "Bottle labels and gift boxes with foil details that reinforce premium brand positioning in the market.",
    "hs.a5.title":      "Certificates & Awards",
    "hs.a5.text":       "Official documents, certificates, and diplomas with gold emblems lending official weight and prestige.",
    "hs.a6.title":      "Fashion & Accessories",
    "hs.a6.text":       "Luxury tags, shoe packaging, and handbags with foil that reinforces fashion brand identity.",
    "hs.cta.title":     "Ready to Create Your<br><em>Hot Stamping</em> Die?",
    "hs.cta.desc":      "Upload your AI/CDR/DXF file and we'll provide a free technical analysis within 24 business hours.",
    "hs.cta.btn":       "Request Free Analysis →",

    "em.page.label":    "Featured Service",
    "em.page.title":    "CNC Brass<br><em>Embossing &amp; Debossing</em>",
    "em.page.subtitle": "Tactile detail felt by the fingertip. CNC brass dies create three-dimensional relief that communicates quality without words.",
    "em.label":         "Three-Dimensional Art",
    "em.title":         "More Than a<br><em>Flat Surface.</em>",
    "em.subtitle":      "Design that can be seen, and more importantly — felt.",
    "em.p1":            "Embossing creates a positive relief (raised) on the material surface, while debossing creates a negative recess (pressed in). Both produce tactile elements that cannot be ignored when held.",
    "em.p2":            "Our CNC brass dies can reproduce detail as small as <strong style=\"color:var(--olive)\">0.1mm radius</strong> — every logo curve, letter corner, and fine line represented perfectly in three-dimensional form.",
    "em.p3":            "For truly dramatic effect, we offer a <strong style=\"color:var(--olive)\">combined emboss + hot stamp in a single die</strong> — raised and gleaming simultaneously.",
    "em.depth.label":   "Depth Capability",
    "em.compare.label": "Choose Technique",
    "em.compare.title": "Emboss vs <em>Deboss</em> —<br>What's the Difference?",
    "em.compare.sub":   "Two different approaches, one shared goal: making your brand unforgettable.",
    "em.emb.badge":     "Embossing",
    "em.emb.title":     "Raised Upward",
    "em.emb.l1":        "Positive relief — design elements rise above the base surface of the material",
    "em.emb.l2":        "Dramatic light effect from the side (raking light)",
    "em.emb.l3":        "Ideal for logos, headline text, and primary decorative ornaments",
    "em.emb.l4":        "Can be combined with hot stamp foil for maximum effect",
    "em.emb.l5":        "Standard depth 0.5–1.5mm for optimal legibility",
    "em.deb.badge":     "Debossing",
    "em.deb.title":     "Pressed Inward",
    "em.deb.l1":        "Negative relief — design elements are pressed into the material surface",
    "em.deb.l2":        "Elegant and subtle feel, popular in fashion and spirits industries",
    "em.deb.l3":        "Ideal for minimalist branding that speaks without colour",
    "em.deb.l4":        "Feels strong and solid when held — reinforces quality perception",
    "em.deb.l5":        "Frequently used on leather, linen, and premium thick cardstock",
    "em.cta.title":     "Make Your Design<br><em>Feel Real.</em>",
    "em.cta.desc":      "Consult your embossing needs — we'll analyse your file and recommend the best technique for free.",
    "em.cta.btn":       "Consult Now →",

    "ct.page.label":    "Start a Project",
    "ct.page.title":    "Free Consultation,<br><em>24-Hour</em> Response.",
    "ct.page.subtitle": "Send your design file and tell us your needs. Our engineering team analyses and provides technical recommendations for free — with no obligation.",
    "ct.trust1":        "Response Time",
    "ct.trust2":        "Projects Completed",
    "ct.trust3":        "Client Satisfaction",
    "ct.trust4":        "Experience",
    "ct.info.label":    "Contact Information",
    "ct.info.phone":    "Phone",
    "ct.info.email":    "Email",
    "ct.info.address":  "Workshop Address",
    "ct.info.hours":    "Operating Hours",
    "ct.info.hoursV":   "Monday — Friday: 08:00 — 17:00 WIB<br>Saturday: 08:00 — 13:00 WIB",
    "ct.info.format":   "Accepted File Formats",
    "ct.map.link":      "Open in Google Maps →",
    "ct.form.title":    "Tell Us About Your Project",
    "ct.form.sub":      "Initial consultation is completely free. No obligation after submitting this form. Our engineering team will respond within 24 business hours.",
    "ct.f.name":        "Full Name *",
    "ct.f.email":       "Email Address *",
    "ct.f.company":     "Company Name *",
    "ct.f.phone":       "Phone Number",
    "ct.f.service":     "Service Required",
    "ct.f.opt0":        "Select a service...",
    "ct.f.opt1":        "Hot Stamping",
    "ct.f.opt2":        "Embossing / Debossing",
    "ct.f.opt3":        "Combined Hot Stamp + Emboss",
    "ct.f.opt4":        "Design Consultation Only",
    "ct.f.notes":       "Notes & Technical Requirements",
    "ct.f.notesP":      "Describe your project in detail: packaging type, estimated quantity, target material, production deadline, and any special requirements...",
    "ct.f.upload":      "Upload Design File (Optional)",
    "ct.f.uploadT":     "<strong>Click or drag file here</strong><br>Formats: AI, CDR, DXF, EPS, PDF · Max 50MB",
    "ct.f.submit":      "Send & Request Free Analysis →",
    "ct.f.privacy":     "Your data is safe with us and will not be shared with third parties.",
    "ct.faq.label":     "FAQ",
    "ct.faq.title":     "Frequently Asked <em>Questions.</em>",
    "ct.faq.sub":       "Answers to the most common technical and business questions.",
    "ct.q1":            "What file formats do you accept?",
    "ct.a1":            "We accept vector files: Adobe Illustrator (.ai), CorelDRAW (.cdr), AutoCAD (.dxf), Encapsulated PostScript (.eps), and vector PDF. Raster files (JPG, PNG) can be accepted but require conversion at an additional cost.",
    "ct.q2":            "What is the minimum order for a new die?",
    "ct.a2":            "There is no minimum order for die production. Die costs are a one-time fee based on design complexity and size. For stamping production, the minimum order is 500 impressions per design for optimal efficiency.",
    "ct.q3":            "How long do CNC brass dies last?",
    "ct.a3":            "Our H62 brass dies are designed to withstand at least 100,000 impressions without visible quality degradation. With proper care and storage, dies can be used well beyond that figure.",
    "ct.q4":            "Can you handle projects with tight deadlines?",
    "ct.a4":            "We offer rush order service with a 3–5 business day lead time (additional charges apply). Contact us directly via WhatsApp to confirm production slot availability.",
    "ct.q5":            "Is there a charge for design consultation?",
    "ct.a5":            "No. Design consultation, file analysis, and technical recommendations are all completely free. We believe well-informed clients are the foundation of a successful business partnership.",

    "spec.param":       "Parameter",
    "spec.spec":        "Specification",
  },

  /* ─────────────────────── MANDARIN ─────────────────────── */
  zh: {

    "nav.home":        "首页",
    "nav.hotStamp":    "烫金工艺",
    "nav.embossing":   "压花工艺",
    "nav.contact":     "咨询服务",
    "nav.tagline":     "创立于2008年 · 印度尼西亚雅加达",

    "lang.id": "Indonesia",
    "lang.en": "English",
    "lang.zh": "中文",

    "hero.eyebrow":   "黄铜精密制造",
    "hero.title":     "精度 <em>0.01毫米。</em><br>黄铜中的<br>艺术灵魂。",
    "hero.subtitle":  "专业CNC烫金与压花工艺，服务奢侈品包装行业与企业设计师。技术严谨与金属温度的完美融合。",
    "hero.cta1":      "免费设计咨询",
    "hero.cta2":      "查看作品集",
    "hero.scroll":    "向下滚动",
    "hero.stat1":     "精度公差",
    "hero.stat2":     "完成项目",
    "hero.stat3":     "年行业经验",
    "hero.stat4":     "客户满意度",

    "clients.label": "受到知名品牌的信赖",

    "precision.label":      "精度差异",
    "precision.title":      "不只是一枚 <em>印章。</em>",
    "precision.subtitle":   "传统技术止步之处，艺术由此开始。",
    "precision.p1":         "传统压印产生模糊的边缘、不均匀的深度，以及0.5毫米以下细节的损失。我们的CNC机器以绝对数学精度对每一毫米进行编程。",
    "precision.p2":         "结果：刀锋般锐利的Logo边缘、戏剧性的压花渐变，以及完全相同的批次复制——完美适用于要求绝对一致性的高端包装。",
    "precision.annotation": "CNC公差 — 相当于人类头发直径的1/10",
    "precision.stat1":      "精度公差",
    "precision.stat2":      "最大雕刻深度",
    "precision.stat3":      "年行业经验",
    "precision.stat4":      "完成项目",

    "material.label":     "优质材料",
    "material.title":     "黄铜：<em>赢家的材料。</em>",
    "material.subtitle":  "全球奢侈品行业的首选，以现代技术精密加工。",
    "material.desc":      "黄铜是精密压印的最佳合金——坚硬却能容纳微米级细节，耐久，反光效果无与伦比。",
    "material.c1.title":  "多样厚度",
    "material.c1.value":  "0.1毫米 — 5毫米",
    "material.c1.text":   "提供多种厚度以满足包装技术需求，从超薄箔片到重型压印用实心板。",
    "material.c2.title":  "雕刻深度",
    "material.c2.value":  "最深2毫米",
    "material.c2.text":   "雕刻深度可达2毫米，无边缘变形——在每个包装触点创造戏剧性的立体触感效果。",
    "material.c3.title":  "CNC精度",
    "material.c3.value":  "公差 ±0.01毫米",
    "material.c3.text":   "相当于人类头发直径的1/10。每个模具均经数字编程，并通过标准化校准测量仪器验证。",

    "portfolio.label":    "作品集",
    "portfolio.title":    "每件作品中<br><em>无与伦比的</em>细节。",
    "portfolio.discuss":  "洽谈项目 →",
    "portfolio.cta":      "咨询您的项目 →",
    "filter.all":         "全部",
    "filter.stamp":       "烫金工艺",
    "filter.emboss":      "压花工艺",
    "filter.combo":       "组合工艺",

    "process.label":    "工作流程",
    "process.title":    "从概念到 <em>杰作。</em>",
    "process.subtitle": "五个步骤，确保每个模具都是可实现的最佳成果。",
    "process.s1.title": "咨询",
    "process.s1.desc":  "与工程师共同讨论技术与美学需求，评估设计文件。",
    "process.s2.title": "文件准备",
    "process.s2.desc":  "转换为CNC格式。数字仿真确保所有细节被准确捕捉。",
    "process.s3.title": "CNC设置",
    "process.s3.desc":  "精密机器编程。针对黄铜材料选择刀头并进行校准。",
    "process.s4.title": "加工执行",
    "process.s4.desc":  "严格监督下的CNC雕刻。每道工序实时监控。",
    "process.s5.title": "质量检验",
    "process.s5.desc":  "使用精密测量仪器检验。交货前验证公差。",

    "testi.label":    "客户评价",
    "testi.title":    "从真实成果中<br>建立的 <em>信任。</em>",
    "testi.t1":       "收到的模具令人叹为观止。我们Logo的每个细节——包括0.3毫米的细线——都被完美转移。我们的高端包装团队终于找到了真正懂得奢侈品标准的合作伙伴。",
    "testi.t2":       "我们将整个香水系列的烫金工艺委托给他们。批次间一致性100%相同——这是我们在印度尼西亚其他地方找不到的标准。",
    "testi.t3":       "我们的周年纪念书封压花项目需要极其复杂的细节处理。Precision Brass Craft在之前难以想象的公差范围内完成了任务，结果令所有宾客惊叹。",
    "testi.t4":       "响应速度快，成果达到国际标准，团队沟通顺畅。两年内我们合作了12个不同项目，没有一次失望。",
    "testi.r1":       "创意总监 · Araya Packaging",
    "testi.r2":       "包装总监 · Nusantara Luxury",
    "testi.r3":       "品牌经理 · Prestige Box Co.",
    "testi.r4":       "采购负责人 · Elara Design Studio",

    "cta.title":    "准备好雕刻您最<br><em>精细的细节</em>了吗？",
    "cta.desc":     "发送您的设计文件，我们将在24个工作小时内提供免费技术分析。",
    "cta.btn":      "开始免费咨询 →",

    "footer.tagline":  "艺术与极致精度的交汇",
    "footer.desc":     "专业黄铜烫金与压花制造商，采用高精度CNC技术。自2008年起服务奢侈品包装行业与企业设计师。",
    "footer.services": "服务",
    "footer.company":  "公司",
    "footer.contact":  "联系我们",
    "footer.home":     "首页",
    "footer.portfolio":"作品集",
    "footer.contactL": "联系",
    "footer.consult":  "设计咨询",
    "footer.address":  "普洛加杜工业园区<br>东雅加达 13930",
    "footer.copy":     "精心制造于印度尼西亚雅加达",

    "hs.page.label":    "特色服务",
    "hs.page.title":    "CNC黄铜<br><em>烫金工艺</em>",
    "hs.page.subtitle": "CNC精密雕刻黄铜模具，用于热烫金箔工艺。细节锐利，一致性完美，让包装彰显奢华。",
    "hs.label":         "什么是烫金工艺？",
    "hs.title":         "经久不衰的 <em>金色触感。</em>",
    "hs.subtitle":      "任何油墨都无法复制的金属箔转移效果。",
    "hs.p1":            "烫金工艺是利用雕刻黄铜模具施加热压力，将金属箔（金、银、全息）转移到表面的工艺。效果：任何油墨或传统印刷都无法复制的金属饰面。",
    "hs.p2":            "我们的差异：模具采用5轴CNC机器制作，而非手工完成。每条线、每个角度和曲线均以数字方式编程——达到手工无法实现的精度。",
    "hs.p3":            "我们的CNC黄铜模具可承受 <strong style=\"color:var(--olive)\">100,000+次压印</strong>而不影响质量，是高产量品牌的理想长期投资。",
    "hs.f1.title":      "优质箔片",
    "hs.f1.text":       "兼容所有类型箔片——金、银、玫瑰金、全息、哑光金属及定制箔片。",
    "hs.f2.title":      "持久耐用",
    "hs.f2.text":       "CNC黄铜模具可承受100,000+次压印。大规模生产品牌的长期投资。",
    "hs.f3.title":      "多材料适用",
    "hs.f3.text":       "适用于纸张、合成皮革、帆布、ABS塑料、木材及各种高档包装材料。",
    "hs.f4.title":      "批次一致性",
    "hs.f4.text":       "每次压印在各生产批次之间完全一致。即使在10倍放大镜下也看不出差异。",
    "hs.app.label":     "应用领域",
    "hs.app.title":     "<em>烫金工艺</em>的闪耀之处。",
    "hs.app.subtitle":  "从香水包装到限量版书封。",
    "hs.a1.title":      "香水与化妆品包装",
    "hs.a1.text":       "硬纸盒、抽屉盒和瓶盖，金箔让产品在货架上即刻呈现高端质感。",
    "hs.a2.title":      "书封与记事本封面",
    "hs.a2.text":       "皮革或亚麻封面上的标题、Logo及装饰纹样金箔，专为收藏版设计。",
    "hs.a3.title":      "高管名片",
    "hs.a3.text":       "600克厚卡纸上的姓名与Logo烫金——令人难忘的第一印象。",
    "hs.a4.title":      "葡萄酒与烈酒包装",
    "hs.a4.text":       "瓶标与礼品盒的箔片细节，强化品牌在市场中的高端定位。",
    "hs.a5.title":      "证书与奖项",
    "hs.a5.text":       "官方文件、证书和奖状，金色徽章赋予其正式的重量感与威望。",
    "hs.a6.title":      "时尚与配件",
    "hs.a6.text":       "奢华标签、鞋盒和手包箔片，强化时尚品牌形象。",
    "hs.cta.title":     "准备好制作您的<br><em>烫金</em>模具了吗？",
    "hs.cta.desc":      "上传您的AI/CDR/DXF文件，我们将在24个工作小时内提供免费技术分析。",
    "hs.cta.btn":       "申请免费分析 →",

    "em.page.label":    "特色服务",
    "em.page.title":    "CNC黄铜<br><em>压花与凹压工艺</em>",
    "em.page.subtitle": "指尖可感知的触觉细节。CNC黄铜模具创造出无需言语即可传达品质的三维浮雕。",
    "em.label":         "三维艺术",
    "em.title":         "不只是一个<br><em>平面。</em>",
    "em.subtitle":      "可以被看见的设计，更重要的是——可以被感受的设计。",
    "em.p1":            "压花（凸起）在材料表面创造正向浮雕，而凹压（下压）则创造负向凹槽。两者都产生拿在手中无法忽视的触觉元素。",
    "em.p2":            "我们的CNC黄铜模具可复现细至 <strong style=\"color:var(--olive)\">0.1毫米半径</strong>的细节——每个Logo曲线、字母转角和细线都完美呈现为三维形态。",
    "em.p3":            "为实现真正戏剧性的效果，我们提供 <strong style=\"color:var(--olive)\">单模具内压花+烫金组合</strong>——同时呈现立体感与金属光泽。",
    "em.depth.label":   "深度能力",
    "em.compare.label": "选择工艺",
    "em.compare.title": "压花 vs <em>凹压</em> —<br>有何区别？",
    "em.compare.sub":   "两种不同方法，同一个目标：让您的品牌令人难忘。",
    "em.emb.badge":     "压花工艺",
    "em.emb.title":     "向上凸起",
    "em.emb.l1":        "正向浮雕——设计元素高于材料基面",
    "em.emb.l2":        "侧面（掠射光）带来戏剧性光影效果",
    "em.emb.l3":        "适合Logo、标题文字和主要装饰纹样",
    "em.emb.l4":        "可与烫金箔结合以获得最大效果",
    "em.emb.l5":        "标准深度0.5–1.5毫米，达到最佳可读性",
    "em.deb.badge":     "凹压工艺",
    "em.deb.title":     "向下凹陷",
    "em.deb.l1":        "负向浮雕——设计元素压入材料表面",
    "em.deb.l2":        "优雅低调，在时尚与烈酒行业广受欢迎",
    "em.deb.l3":        "适合无需颜色即可表达的极简品牌",
    "em.deb.l4":        "握在手中感觉坚实稳固——强化品质感知",
    "em.deb.l5":        "常用于皮革、亚麻和高档厚卡纸",
    "em.cta.title":     "让您的设计<br><em>可以被感受。</em>",
    "em.cta.desc":      "咨询您的压花需求——我们免费分析文件并推荐最佳工艺。",
    "em.cta.btn":       "立即咨询 →",

    "ct.page.label":    "开始项目",
    "ct.page.title":    "免费咨询，<br><em>24小时</em>响应。",
    "ct.page.subtitle": "发送您的设计文件并告诉我们您的需求。我们的工程团队免费分析并提供技术建议——无任何义务。",
    "ct.trust1":        "响应时间",
    "ct.trust2":        "完成项目",
    "ct.trust3":        "客户满意度",
    "ct.trust4":        "年行业经验",
    "ct.info.label":    "联系信息",
    "ct.info.phone":    "电话",
    "ct.info.email":    "邮箱",
    "ct.info.address":  "工厂地址",
    "ct.info.hours":    "营业时间",
    "ct.info.hoursV":   "周一至周五：08:00 — 17:00 WIB<br>周六：08:00 — 13:00 WIB",
    "ct.info.format":   "接受的文件格式",
    "ct.map.link":      "在谷歌地图中打开 →",
    "ct.form.title":    "告诉我们您的项目",
    "ct.form.sub":      "初步咨询完全免费，提交表单后无任何义务。我们的工程团队将在24个工作小时内回复。",
    "ct.f.name":        "全名 *",
    "ct.f.email":       "电子邮件 *",
    "ct.f.company":     "公司名称 *",
    "ct.f.phone":       "电话号码",
    "ct.f.service":     "所需服务",
    "ct.f.opt0":        "选择服务...",
    "ct.f.opt1":        "烫金工艺",
    "ct.f.opt2":        "压花/凹压工艺",
    "ct.f.opt3":        "烫金+压花组合工艺",
    "ct.f.opt4":        "仅设计咨询",
    "ct.f.notes":       "备注与技术需求",
    "ct.f.notesP":      "详细描述您的项目：包装类型、预估数量、目标材料、生产截止日期及任何特殊要求...",
    "ct.f.upload":      "上传设计文件（可选）",
    "ct.f.uploadT":     "<strong>点击或拖拽文件至此</strong><br>格式：AI, CDR, DXF, EPS, PDF · 最大50MB",
    "ct.f.submit":      "提交并申请免费分析 →",
    "ct.f.privacy":     "您的数据由我们安全保管，不会与第三方共享。",
    "ct.faq.label":     "常见问题",
    "ct.faq.title":     "常见 <em>问题解答。</em>",
    "ct.faq.sub":       "最常见的技术与业务问题解答。",
    "ct.q1":            "您接受哪些文件格式？",
    "ct.a1":            "我们接受矢量文件：Adobe Illustrator (.ai)、CorelDRAW (.cdr)、AutoCAD (.dxf)、EPS及矢量PDF。光栅文件（JPG、PNG）可接受，但需额外收费进行转换。",
    "ct.q2":            "制作新模具的最低订购量是多少？",
    "ct.a2":            "模具制作无最低订购量要求。模具费用为一次性费用，根据设计复杂程度和尺寸而定。压印生产的最低订购量为每个设计500次压印，以实现最佳效率。",
    "ct.q3":            "CNC黄铜模具能用多久？",
    "ct.a3":            "我们的H62黄铜模具设计使用寿命至少100,000次压印，无明显质量退化。经过适当保养和存储，模具的使用寿命可远超此数字。",
    "ct.q4":            "您能处理截止日期紧张的项目吗？",
    "ct.a4":            "我们提供加急服务，交货期3–5个工作日（需加收额外费用）。请直接通过WhatsApp联系我们确认生产档期。",
    "ct.q5":            "设计咨询需要收费吗？",
    "ct.a5":            "不收费。设计咨询、文件分析和技术建议均完全免费。我们相信，知情的客户是成功业务合作的基础。",

    "spec.param":       "参数",
    "spec.spec":        "规格",
  }
};

/* ─────────────────────── ENGINE ─────────────────────── */

const I18N = {
  current: 'id',

  init() {
    const saved = localStorage.getItem('pbc_lang') || 'id';
    this.set(saved, false);
    this._bindSwitcher();
  },

  set(lang, animate = true) {
    if (!TRANSLATIONS[lang]) return;
    this.current = lang;
    localStorage.setItem('pbc_lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-Hans' : lang;

    /* apply font for Chinese */
    const body = document.body;
    if (lang === 'zh') {
      body.style.setProperty('--font-sans', "'DM Sans', 'Noto Sans SC', sans-serif");
    } else {
      body.style.setProperty('--font-sans', "'DM Sans', sans-serif");
    }

    const t = TRANSLATIONS[lang];

    /* data-i18n: textContent */
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (t[key] !== undefined) el.textContent = t[key];
    });

    /* data-i18n-html: innerHTML (supports tags) */
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.dataset.i18nHtml;
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    /* data-i18n-attr="attrName:key" */
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const [attr, key] = el.dataset.i18nAttr.split(':');
      if (t[key] !== undefined) el.setAttribute(attr, t[key]);
    });

    /* update page title */
    const titles = {
      id: 'Precision Brass Craft — Hot Stamping & Embossing Kuningan CNC',
      en: 'Precision Brass Craft — CNC Brass Hot Stamping & Embossing',
      zh: 'Precision Brass Craft — CNC黄铜烫金与压花工艺'
    };
    document.title = titles[lang];

    /* mark active switcher button */
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    if (animate) {
      body.style.opacity = '0';
      body.style.transition = 'opacity 0.25s';
      setTimeout(() => {
        body.style.opacity = '1';
      }, 60);
    }
  },

  _bindSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => this.set(btn.dataset.lang));
    });
  }
};

document.addEventListener('DOMContentLoaded', () => I18N.init());
