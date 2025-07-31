// js/abstraksi.js

/**
 * File JavaScript untuk Latihan Abstraksi (Versi Emoji)
 * -------------------------------------------------------
 * - Menggunakan EMOJI sebagai visual untuk menghilangkan dependensi file.
 * - Mengelola semua level, variasi, dan mekanisme interaktif.
 */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================
    // BAGIAN 1: DATABASE LATIHAN KHUSUS ABSTRAKSI (MENGGUNAKAN EMOJI)
    // ==========================================================
    const LATIHAN_ABSTRAKSI = [
        {
            level: 1,
            tingkat: "Pra-Sekolah (3-6 thn)",
            mekanisme: 'klik-emoji',
            variasi: [
                { id: "merah", judul: "Klik Semua yang Berwarna Merah", instruksi: "Abaikan bentuknya, fokus pada warnanya!", pilihan: [{ teks: '🍎', tipe: 'benar' }, { teks: '🥦', tipe: 'salah' }, { teks: '🍓', tipe: 'benar' }, { teks: '🚗', tipe: 'benar' }, { teks: '🔵', tipe: 'salah' }] },
                { id: "bulat", judul: "Klik Semua yang Berbentuk Bulat", instruksi: "Abaikan warnanya, fokus pada bentuknya!", pilihan: [{ teks: '🏀', tipe: 'benar' }, { teks: '🧱', tipe: 'salah' }, { teks: '🍊', tipe: 'benar' }, { teks: '📖', tipe: 'salah' }, { teks: '🌎', tipe: 'benar' }] },
                { id: "terbang", judul: "Klik Semua yang Bisa Terbang", instruksi: "Fokus pada kemampuannya untuk terbang.", pilihan: [{ teks: '✈️', tipe: 'benar' }, { teks: '🐦', tipe: 'benar' }, { teks: '🐕', tipe: 'salah' }, { teks: '🚗', tipe: 'salah' }, { teks: '🦋', tipe: 'benar' }] },
                { id: "makanan-manis", judul: "Klik Semua Makanan Manis", instruksi: "Abaikan bentuk dan warnanya, fokus pada rasanya.", pilihan: [{ teks: '🍫', tipe: 'benar' }, { teks: '🥦', tipe: 'salah' }, { teks: '🍭', tipe: 'benar' }, { teks: '🍰', tipe: 'benar' }, { teks: '🧂', tipe: 'salah' }] },
                { id: "alat-musik", judul: "Klik Semua Alat Musik", instruksi: "Pilih semua benda yang bisa menghasilkan musik.", pilihan: [{ teks: '🎸', tipe: 'benar' }, { teks: '🥄', tipe: 'salah' }, { teks: '🎹', tipe: 'benar' }, { teks: '🎺', tipe: 'benar' }, { teks: '🛏️', tipe: 'salah' }] }
            ]
        },
        {
            level: 2,
            tingkat: "SD Awal (7-9 thn)",
            mekanisme: 'klik-emoji',
            variasi: [
                { id: "transportasi", judul: "Klik Semua Alat Transportasi", instruksi: "Abaikan ukurannya, fokus pada fungsinya.", pilihan: [{ teks: '🚗', tipe: 'benar' }, { teks: '🌳', tipe: 'salah' }, { teks: '✈️', tipe: 'benar' }, { teks: '🏠', tipe: 'salah' }, { teks: '🚢', tipe: 'benar' }] },
                { id: "perabotan", judul: "Klik Semua Perabotan Rumah", instruksi: "Pilih benda yang biasanya ada di dalam rumah.", pilihan: [{ teks: '🪑', tipe: 'benar' }, { teks: '🛋️', tipe: 'benar' }, { teks: '🪨', tipe: 'salah' }, { teks: '🚪', tipe: 'benar' }, { teks: '🌿', tipe: 'salah' }] },
                { id: "mamalia", judul: "Klik Semua Hewan Mamalia", instruksi: "Pilih hewan yang menyusui.", pilihan: [{ teks: '🐕', tipe: 'benar' }, { teks: '🐟', tipe: 'salah' }, { teks: '🦁', tipe: 'benar' }, { teks: '🐘', tipe: 'benar' }, { teks: '🦎', tipe: 'salah' }] },
                { id: "sayuran", judul: "Klik Semua Sayuran", instruksi: "Pilih yang termasuk sayuran.", pilihan: [{ teks: '🥦', tipe: 'benar' }, { teks: '🥕', tipe: 'benar' }, { teks: '🍞', tipe: 'salah' }, { teks: '🥬', tipe: 'benar' }, { teks: '🍎', tipe: 'salah' }] },
                { id: "bangun-ruang", judul: "Klik Semua Bangun Ruang", instruksi: "Pilih objek yang memiliki volume (3D).", pilihan: [{ teks: '📦', tipe: 'benar' }, { teks: '⭕', tipe: 'salah' }, { teks: '⚽', tipe: 'benar' }, { teks: '🔺', tipe: 'salah' }, { teks: '🍦', tipe: 'benar' }] }
            ]
        },
        {
            level: 3,
            tingkat: "SD Akhir (10-13 thn)",
            mekanisme: 'seleksi-teks',
            variasi: [
                { id: "resep-kue", judul: "Resep Kue Nenek", instruksi: "Klik hanya pada kalimat yang merupakan instruksi inti untuk membuat kue.", teks: [{konten:"Nenekku selalu bilang, rahasia kue cokelat terenak adalah cinta.",tipe:"salah"}, {konten:"Panaskan oven hingga 180 derajat Celcius.",tipe:"benar"}, {konten:"Siapkan loyang dan olesi dengan mentega.",tipe:"benar"}, {konten:"Aroma kue ini selalu memenuhi rumah setiap akhir pekan.",tipe:"salah"}, {konten:"Campurkan 200g tepung, 50g cokelat, dan 1 sdt baking powder.",tipe:"benar"}, {konten:"Di mangkuk terpisah, kocok 2 butir telur dan 150g gula.",tipe:"benar"}, {konten:"Telurnya harus dari ayam kampung yang bahagia, kata nenek.",tipe:"salah"}, {konten:"Tuangkan adonan telur ke campuran tepung.",tipe:"benar"}, {konten:"Panggang di oven selama 30-35 menit.",tipe:"benar"}, {konten:"Keluarga pasti akan berkumpul dan memujimu.",tipe:"salah"}] },
                { id: "rakit-rak", judul: "Panduan Merakit Rak Buku", instruksi: "Pilih hanya kalimat instruksi dari panduan ini.", teks: [{konten:"Rak buku ini hadiah dari paman.",tipe:"salah"}, {konten:"Buka kotak dengan hati-hati.",tipe:"benar"}, {konten:"Pastikan semua komponen lengkap.",tipe:"benar"}, {konten:"Kayunya terasa sangat halus dan wangi.",tipe:"salah"}, {konten:"Pasang sisi kiri dan kanan ke papan bawah.",tipe:"benar"}, {konten:"Gunakan sekrup yang disediakan.",tipe:"benar"}, {konten:"Selesai! Rakmu siap digunakan.",tipe:"benar"}] },
                { id: "laporan-cuaca", judul: "Laporan Cuaca", instruksi: "Pilih informasi penting dari laporan cuaca berikut.", teks: [{konten:"Selamat pagi pemirsa.",tipe:"salah"}, {konten:"Suhu hari ini diperkirakan 30 derajat Celcius.",tipe:"benar"}, {konten:"Langit akan cerah berawan sepanjang hari.",tipe:"benar"}, {konten:"Ini cuaca yang bagus untuk berjalan-jalan.",tipe:"salah"}, {konten:"Kecepatan angin 10 km/jam dari arah timur.",tipe:"benar"}, {konten:"Jangan lupa gunakan tabir surya.",tipe:"salah"}] },
                { id: "berita-kecelakaan", judul: "Berita Kecelakaan", instruksi: "Abstraksikan detail penting dari berita ini.", teks: [{konten:"Telah terjadi kecelakaan di Jalan Sudirman.",tipe:"benar"}, {konten:"Saksi mata, Budi, terlihat sangat kaget.",tipe:"salah"}, {konten:"Kecelakaan melibatkan sebuah mobil dan motor.",tipe:"benar"}, {konten:"Mobilnya berwarna merah mengkilap.",tipe:"salah"}, {konten:"Tidak ada korban jiwa dalam kejadian ini.",tipe:"benar"}, {konten:"Polisi sudah berada di lokasi.",tipe:"benar"}] },
                { id: "review-film", judul: "Ulasan Film", instruksi: "Pilih kalimat yang merupakan inti dari plot film, bukan opini.", teks: [{konten:"Film ini sangat luar biasa, saya beri 5 bintang!",tipe:"salah"}, {konten:"Film ini bercerita tentang seorang astronot.",tipe:"benar"}, {konten:"Dia terdampar di planet Mars sendirian.",tipe:"benar"}, {konten:"Sinematografinya sangat indah dan memanjakan mata.",tipe:"salah"}, {konten:"Dia harus bertahan hidup menggunakan pengetahuannya.",tipe:"benar"}, {konten:"Saya menangis di bagian akhir film.",tipe:"salah"}] }
            ]
        },
        {
            level: 4,
            tingkat: "Remaja (14-20+ thn)",
            mekanisme: 'seleksi-item',
            variasi: [
                { id: "debug", judul: "Mencari Bug dalam Kode", instruksi: "Pilih hanya baris yang kemungkinan besar menyebabkan error (abaikan error ketik minor).", pilihan: [{teks:"let total = 0;",tipe:"salah"}, {teks:"for (i = 0; i <= array.length; i++) {",tipe:"benar"}, {teks:"  total += array[i];",tipe:"salah"}, {teks:"}",tipe:"salah"}, {teks:"console.log('Totalnya adalah: ' + total);",tipe:"salah"}] },
                { id: "html-semantik", judul: "Memilih Tag HTML Semantik", instruksi: "Pilih tag yang paling sesuai dan semantik untuk membungkus navigasi utama website.", pilihan: [{teks:"<div>",tipe:"salah"}, {teks:"<section>",tipe:"salah"}, {teks:"<nav>",tipe:"benar"}, {teks:"<span>",tipe:"salah"}, {teks:"<p>",tipe:"salah"}] },
                { id: "css-selector", judul: "Selektor CSS Paling Spesifik", instruksi: "Manakah selektor yang akan menimpa (override) aturan dari selektor lainnya?", pilihan: [{teks:".tombol",tipe:"salah"}, {teks:"button",tipe:"salah"}, {teks:"header .tombol",tipe:"salah"}, {teks:"#tombol-utama",tipe:"benar"}] },
                { id: "variabel-js", judul: "Memilih Jenis Variabel", instruksi: "Jika sebuah nilai tidak akan pernah berubah, variabel jenis apa yang paling baik digunakan?", pilihan: [{teks:"let",tipe:"salah"}, {teks:"var",tipe:"salah"}, {teks:"const",tipe:"benar"}, {teks:"function",tipe:"salah"}] },
                { id: "http-status", judul: "Kode Status HTTP", instruksi: "Manakah kode status yang berarti 'Not Found' atau halaman tidak ditemukan?", pilihan: [{teks:"200 OK",tipe:"salah"}, {teks:"301 Moved Permanently",tipe:"salah"}, {teks:"404 Not Found",tipe:"benar"}, {teks:"500 Internal Server Error",tipe:"salah"}] }
            ]
        }
    ];

    // ==========================================================
    // BAGIAN 2: LOGIKA UTAMA APLIKASI
    // ==========================================================
    const levelSelect = document.getElementById('level-select');
    const exerciseArea = document.getElementById('exercise-content-area');
    const cekJawabanBtn = document.getElementById('cek-jawaban');
    const feedbackEl = document.getElementById('hasil-feedback');
    let currentLatihanData = null;

    function init() {
        if (!levelSelect) return;
        LATIHAN_ABSTRAKSI.forEach(levelData => {
            const option = document.createElement('option');
            option.value = levelData.level;
            option.textContent = `${levelData.level}: ${levelData.tingkat}`;
            levelSelect.appendChild(option);
        });
        levelSelect.addEventListener('change', handleLevelChange);
        cekJawabanBtn.addEventListener('click', handleCekJawaban);
    }

    function handleLevelChange(e) {
        const selectedLevel = parseInt(e.target.value);
        feedbackEl.innerHTML = '';
        if (!selectedLevel) {
            exerciseArea.innerHTML = '<p class="placeholder-text">Pilih level untuk memulai latihan.</p>';
            cekJawabanBtn.style.display = 'none';
            return;
        }

        const levelData = LATIHAN_ABSTRAKSI.find(l => l.level === selectedLevel);
        if (!levelData || levelData.variasi.length === 0) return;

        const randomIndex = Math.floor(Math.random() * levelData.variasi.length);
        const latihanVariasi = levelData.variasi[randomIndex];
        currentLatihanData = { ...levelData, ...latihanVariasi };
        renderLatihan(currentLatihanData);
    }

    function renderLatihan(data) {
        exerciseArea.innerHTML = '';
        let htmlContent = `<h3>${data.judul}</h3><p>${data.instruksi}</p>`;

        switch (data.mekanisme) {
            case 'klik-emoji': htmlContent += renderKlikEmojiHTML(data); break;
            case 'seleksi-teks': htmlContent += renderSeleksiTeksHTML(data); break;
            case 'seleksi-item': htmlContent += renderSeleksiItemHTML(data); break;
        }

        exerciseArea.innerHTML = htmlContent;
        cekJawabanBtn.style.display = 'inline-block';
        setupEventListeners(data.mekanisme);
    }

    function setupEventListeners(mekanisme) {
        if (mekanisme === 'klik-emoji') setupKlikEmojiListeners();
        else if (mekanisme === 'seleksi-teks') setupSeleksiTeksListeners();
        else if (mekanisme === 'seleksi-item') setupSeleksiItemListeners();
    }
    
    function handleCekJawaban() {
        if (!currentLatihanData) return;
        const isCorrect = validateSeleksi();
        feedbackEl.textContent = isCorrect ? "Tepat! Kamu berhasil fokus pada hal yang penting." : "Belum tepat. Coba periksa kembali pilihanmu.";
        feedbackEl.style.color = isCorrect ? 'var(--success-color)' : 'var(--error-color)';
    }

    // ==========================================================
    // BAGIAN 3: FUNGSI-FUNGSI SPESIFIK PER MEKANISME
    // ==========================================================

    function renderKlikEmojiHTML(data) {
        return `<div class="pola-sequence-container">${data.pilihan.map((p, index) => `<div class="pola-sequence-item selectable-item" data-index="${index}" data-tipe="${p.tipe}">${p.teks}</div>`).join('')}</div>`;
    }
    function setupKlikEmojiListeners() {
        document.querySelectorAll('.selectable-item').forEach(item => item.addEventListener('click', () => item.classList.toggle('selected')));
    }

    function renderSeleksiTeksHTML(data) {
        return `<div class="text-selection-area">${data.teks.map((t, index) => `<span class="kalimat selectable-item" data-index="${index}" data-tipe="${t.tipe}">${t.konten}</span>`).join('')}</div>`;
    }
    function setupSeleksiTeksListeners() {
        document.querySelectorAll('.selectable-item').forEach(item => item.addEventListener('click', () => item.classList.toggle('selected')));
    }

    function renderSeleksiItemHTML(data) {
        return `<div class="seleksi-container">${data.pilihan.map((p, index) => `<div class="selectable-item" data-index="${index}" data-tipe="${p.tipe}"><pre><code>${p.teks}</code></pre></div>`).join('')}</div>`;
    }
    function setupSeleksiItemListeners() {
        document.querySelectorAll('.selectable-item').forEach(item => item.addEventListener('click', () => item.classList.toggle('selected')));
    }

    function validateSeleksi() {
        const pilihanData = currentLatihanData.pilihan || currentLatihanData.teks;
        const totalSolusi = pilihanData.filter(p => p.tipe === 'benar').length;
        const selectedItems = document.querySelectorAll('.selected');
        if (selectedItems.length === 0) return false; // Jangan beri nilai benar jika tidak ada yang dipilih

        const correctSelected = Array.from(selectedItems).filter(item => item.dataset.tipe === 'benar').length;
        const incorrectSelected = Array.from(selectedItems).filter(item => item.dataset.tipe === 'salah').length;

        return correctSelected === totalSolusi && incorrectSelected === 0;
    }
    
    init();
});
