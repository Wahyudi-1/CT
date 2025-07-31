// js/abstraksi.js

/**
 * File JavaScript untuk Latihan Abstraksi (Versi Perbaikan)
 * ---------------------------------------------------------
 * - Menggunakan gambar lokal untuk keandalan.
 * - Mengelola semua level, variasi, dan mekanisme interaktif.
 */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================
    // BAGIAN 1: DATABASE LATIHAN KHUSUS ABSTRAKSI
    // PASTIKAN Anda memiliki gambar di folder /images/
    // ==========================================================
    const LATIHAN_ABSTRAKSI = [
        {
            level: 1,
            tingkat: "Pra-Sekolah (3-6 thn)",
            mekanisme: 'klik-gambar',
            variasi: [
                { id: "merah", judul: "Klik Semua yang Berwarna Merah", instruksi: "Abaikan bentuknya, fokus pada warnanya!", pilihan: [{ src: 'images/apel.png', tipe: 'benar' }, { src: 'images/daun.png', tipe: 'salah' }, { src: 'images/tomat.png', tipe: 'benar' }, { src: 'images/bunga.png', tipe: 'benar' }, { src: 'images/mobil.png', tipe: 'salah' }] },
                { id: "bulat", judul: "Klik Semua yang Berbentuk Bulat", instruksi: "Abaikan warnanya, fokus pada bentuknya!", pilihan: [{ src: 'images/bola.png', tipe: 'benar' }, { src: 'images/kotak.png', tipe: 'salah' }, { src: 'images/jeruk.png', tipe: 'benar' }, { src: 'images/buku.png', tipe: 'salah' }, { src: 'images/roda.png', tipe: 'benar' }] },
                { id: "terbang", judul: "Klik Semua yang Bisa Terbang", instruksi: "Fokus pada kemampuannya untuk terbang.", pilihan: [{ src: 'images/pesawat.png', tipe: 'benar' }, { src: 'images/burung.png', tipe: 'benar' }, { src: 'images/anjing.png', tipe: 'salah' }, { src: 'images/mobil.png', tipe: 'salah' }, { src: 'images/kupu-kupu.png', tipe: 'benar' }] },
                { id: "makanan-manis", judul: "Klik Semua Makanan Manis", instruksi: "Abaikan bentuk dan warnanya, fokus pada rasanya.", pilihan: [{ src: 'images/cokelat.png', tipe: 'benar' }, { src: 'images/brokoli.png', tipe: 'salah' }, { src: 'images/permen.png', tipe: 'benar' }, { src: 'images/kue.png', tipe: 'benar' }, { src: 'images/garam.png', tipe: 'salah' }] },
                { id: "alat-musik", judul: "Klik Semua Alat Musik", instruksi: "Pilih semua benda yang bisa menghasilkan musik.", pilihan: [{ src: 'images/gitar.png', tipe: 'benar' }, { src: 'images/sendok.png', tipe: 'salah' }, { src: 'images/piano.png', tipe: 'benar' }, { src: 'images/terompet.png', tipe: 'benar' }, { src: 'images/bantal.png', tipe: 'salah' }] }
            ]
        },
        {
            level: 2,
            tingkat: "SD Awal (7-9 thn)",
            mekanisme: 'klik-gambar',
            variasi: [
                { id: "transportasi", judul: "Klik Semua Alat Transportasi", instruksi: "Abaikan ukurannya, fokus pada fungsinya.", pilihan: [{ src: 'images/mobil.png', tipe: 'benar' }, { src: 'images/pohon.png', tipe: 'salah' }, { src: 'images/pesawat.png', tipe: 'benar' }, { src: 'images/rumah.png', tipe: 'salah' }, { src: 'images/kapal.png', tipe: 'benar' }] },
                { id: "perabotan", judul: "Klik Semua Perabotan Rumah", instruksi: "Pilih benda yang biasanya ada di dalam rumah.", pilihan: [{ src: 'images/meja.png', tipe: 'benar' }, { src: 'images/kursi.png', tipe: 'benar' }, { src: 'images/batu.png', tipe: 'salah' }, { src: 'images/lemari.png', tipe: 'benar' }, { src: 'images/rumput.png', tipe: 'salah' }] },
                { id: "mamalia", judul: "Klik Semua Hewan Mamalia", instruksi: "Pilih hewan yang menyusui.", pilihan: [{ src: 'images/anjing.png', tipe: 'benar' }, { src: 'images/ikan.png', tipe: 'salah' }, { src: 'images/singa.png', tipe: 'benar' }, { src: 'images/gajah.png', tipe: 'benar' }, { src: 'images/kadal.png', tipe: 'salah' }] },
                { id: "sayuran", judul: "Klik Semua Sayuran", instruksi: "Pilih yang termasuk sayuran.", pilihan: [{ src: 'images/brokoli.png', tipe: 'benar' }, { src: 'images/wortel.png', tipe: 'benar' }, { src: 'images/roti.png', tipe: 'salah' }, { src: 'images/bayam.png', tipe: 'benar' }, { src: 'images/apel.png', tipe: 'salah' }] },
                { id: "bangun-ruang", judul: "Klik Semua Bangun Ruang", instruksi: "Pilih objek yang memiliki volume (3D).", pilihan: [{ src: 'images/kubus.png', tipe: 'benar' }, { src: 'images/lingkaran.png', tipe: 'salah' }, { src: 'images/bola.png', tipe: 'benar' }, { src: 'images/segitiga.png', tipe: 'salah' }, { src: 'images/kerucut.png', tipe: 'benar' }] }
            ]
        },
        {
            level: 3,
            tingkat: "SD Akhir (10-13 thn)",
            mekanisme: 'seleksi-teks',
            variasi: [
                { id: "resep-kue", judul: "Resep Kue Nenek", instruksi: "Klik hanya pada kalimat yang merupakan instruksi inti untuk membuat kue.", teks: [{konten:"Nenekku selalu bilang, rahasia kue cokelat terenak adalah cinta.",tipe:"salah"}, {konten:"Panaskan oven hingga 180 derajat Celcius.",tipe:"benar"}, {konten:"Siapkan loyang dan olesi dengan mentega.",tipe:"benar"}, {konten:"Aroma kue ini selalu memenuhi rumah setiap akhir pekan.",tipe:"salah"}, {konten:"Campurkan 200g tepung, 50g cokelat, dan 1 sdt baking powder.",tipe:"benar"}, {konten:"Di mangkuk terpisah, kocok 2 butir telur dan 150g gula.",tipe:"benar"}, {konten:"Telurnya harus dari ayam kampung yang bahagia, kata nenek.",tipe:"salah"}, {konten:"Tuangkan adonan telur ke campuran tepung.",tipe:"benar"}, {konten:"Panggang di oven selama 30-35 menit.",tipe:"benar"}, {konten:"Keluarga pasti akan berkumpul dan memujimu.",tipe:"salah"}] },
                // ... Tambahkan 4 variasi lagi untuk level ini (misal: "Panduan Merakit Rak Buku", dll)...
            ]
        },
        {
            level: 4,
            tingkat: "Remaja (14-20+ thn)",
            mekanisme: 'seleksi-item',
            variasi: [
                { id: "debug", judul: "Mencari Bug dalam Kode", instruksi: "Seorang programmer menulis kode ini. Pilih hanya baris yang kemungkinan besar menyebabkan error atau perilaku tak terduga (abaikan error ketik minor).", pilihan: [{teks:"let total = 0;",tipe:"salah"}, {teks:"for (i = 0; i <= array.length; i++) {",tipe:"benar"}, {teks:"  total += array[i];",tipe:"salah"}, {teks:"}",tipe:"salah"}, {teks:"console.log('Totalnya adalah: ' + total);",tipe:"salah"}] },
                // ... Tambahkan 4 variasi lagi untuk level ini (misal: "Meringkas Artikel Berita", dll)...
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
            case 'klik-gambar': htmlContent += renderKlikGambarHTML(data); break;
            case 'seleksi-teks': htmlContent += renderSeleksiTeksHTML(data); break;
            case 'seleksi-item': htmlContent += renderSeleksiItemHTML(data); break;
        }

        exerciseArea.innerHTML = htmlContent;
        cekJawabanBtn.style.display = 'inline-block';
        setupEventListeners(data.mekanisme);
    }

    function setupEventListeners(mekanisme) {
        if (mekanisme === 'klik-gambar') setupKlikGambarListeners();
        else if (mekanisme === 'seleksi-teks') setupSeleksiTeksListeners();
        else if (mekanisme === 'seleksi-item') setupSeleksiItemListeners();
    }
    
    function handleCekJawaban() {
        if (!currentLatihanData) return;
        let isCorrect = false;
        
        // Semua mekanisme di halaman ini menggunakan validasi seleksi
        isCorrect = validateSeleksi();

        feedbackEl.textContent = isCorrect ? "Tepat! Kamu berhasil fokus pada hal yang penting." : "Belum tepat. Coba periksa kembali pilihanmu.";
        feedbackEl.style.color = isCorrect ? 'var(--success-color)' : 'var(--error-color)';
    }

    // ==========================================================
    // BAGIAN 3: FUNGSI-FUNGSI SPESIFIK PER MEKANISME
    // ==========================================================

    function renderKlikGambarHTML(data) {
        return `<div class="image-selection-container">${data.pilihan.map((p, index) => `<div class="image-item" data-index="${index}" data-tipe="${p.tipe}"><img src="${p.src}" alt="pilihan ${index + 1}"></div>`).join('')}</div>`;
    }
    function setupKlikGambarListeners() {
        document.querySelectorAll('.image-item').forEach(item => {
            item.addEventListener('click', () => item.classList.toggle('selected'));
        });
    }

    function renderSeleksiTeksHTML(data) {
        return `<div class="text-selection-area">${data.teks.map((t, index) => `<span class="kalimat selectable-item" data-index="${index}" data-tipe="${t.tipe}">${t.konten}</span>`).join('')}</div>`;
    }
    function setupSeleksiTeksListeners() {
        document.querySelectorAll('.selectable-item').forEach(item => {
            item.addEventListener('click', () => item.classList.toggle('selected'));
        });
    }

    function renderSeleksiItemHTML(data) {
        return `<div class="seleksi-container">${data.pilihan.map((p, index) => `<div class="selectable-item" data-index="${index}" data-tipe="${p.tipe}"><pre><code>${p.teks}</code></pre></div>`).join('')}</div>`;
    }
    function setupSeleksiItemListeners() {
        document.querySelectorAll('.selectable-item').forEach(item => {
            item.addEventListener('click', () => item.classList.toggle('selected'));
        });
    }

    function validateSeleksi() {
        const pilihanData = currentLatihanData.pilihan || currentLatihanData.teks;
        const totalSolusi = pilihanData.filter(p => p.tipe === 'benar').length;
        const selectedItems = document.querySelectorAll('.selected');
        const correctSelected = Array.from(selectedItems).filter(item => item.dataset.tipe === 'benar').length;
        const incorrectSelected = Array.from(selectedItems).filter(item => item.dataset.tipe === 'salah').length;

        // Jawaban benar jika semua item yang benar dipilih, dan tidak ada item salah yang dipilih.
        return correctSelected === totalSolusi && incorrectSelected === 0;
    }
    
    init();
});
