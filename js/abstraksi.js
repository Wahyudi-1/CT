// js/abstraksi.js

/**
 * File JavaScript untuk Latihan Abstraksi
 * ---------------------------------------
 * Mengelola semua level, variasi, dan mekanisme interaktif
 * khusus untuk halaman abstraksi.html.
 */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================
    // BAGIAN 1: DATABASE LATIHAN KHUSUS ABSTRAKSI
    // ==========================================================
    const LATIHAN_ABSTRAKSI = [
        {
            level: 1,
            tingkat: "Pra-Sekolah (3-6 thn)",
            mekanisme: 'klik-gambar',
            variasi: [
                { id: "merah", judul: "Klik Semua yang Berwarna Merah", instruksi: "Abaikan bentuknya, fokus pada warnanya!", pilihan: [{ src: 'https://via.placeholder.com/80/FF0000/FFFFFF?text=Apel', tipe: 'benar' }, { src: 'https://via.placeholder.com/80/00FF00/FFFFFF?text=Daun', tipe: 'salah' }, { src: 'https://via.placeholder.com/80/FF0000/FFFFFF?text=Tomat', tipe: 'benar' }, { src: 'https://via.placeholder.com/80/FFC0CB/000000?text=Bunga', tipe: 'benar' }, { src: 'https://via.placeholder.com/80/0000FF/FFFFFF?text=Mobil', tipe: 'salah' }] },
                { id: "bulat", judul: "Klik Semua yang Berbentuk Bulat", instruksi: "Abaikan warnanya, fokus pada bentuknya!", pilihan: [{ src: 'https://via.placeholder.com/80/FFD700/000000?text=Bola', tipe: 'benar' }, { src: 'https://via.placeholder.com/80/A52A2A/FFFFFF?text=Kotak', tipe: 'salah' }, { src: 'https://via.placeholder.com/80/FFA500/000000?text=Jeruk', tipe: 'benar' }, { src: 'https://via.placeholder.com/80/87CEEB/FFFFFF?text=Buku', tipe: 'salah' }, { src: 'https://via.placeholder.com/80/808080/FFFFFF?text=Roda', tipe: 'benar' }] },
                { id: "terbang", judul: "Klik Semua yang Bisa Terbang", instruksi: "Fokus pada kemampuannya untuk terbang.", pilihan: [{ src: 'https://via.placeholder.com/80/ADD8E6/000000?text=Pesawat', tipe: 'benar' }, { src: 'https://via.placeholder.com/80/FFD700/000000?text=Burung', tipe: 'benar' }, { src: 'https://via.placeholder.com/80/A52A2A/FFFFFF?text=Anjing', tipe: 'salah' }, { src: 'https://via.placeholder.com/80/808080/FFFFFF?text=Mobil', tipe: 'salah' }, { src: 'https://via.placeholder.com/80/FFC0CB/000000?text=Kupu-kupu', tipe: 'benar' }] },
                { id: "makanan-manis", judul: "Klik Semua Makanan Manis", instruksi: "Abaikan bentuk dan warnanya, fokus pada rasanya.", pilihan: [{ src: 'https://via.placeholder.com/80/D2691E/FFFFFF?text=Cokelat', tipe: 'benar' }, { src: 'https://via.placeholder.com/80/90EE90/000000?text=Brokoli', tipe: 'salah' }, { src: 'https://via.placeholder.com/80/FFFF00/000000?text=Permen', tipe: 'benar' }, { src: 'https://via.placeholder.com/80/FF6347/FFFFFF?text=Kue', tipe: 'benar' }, { src: 'https://via.placeholder.com/80/FFFFFF/000000?text=Garam', tipe: 'salah' }] },
                { id: "alat-musik", judul: "Klik Semua Alat Musik", instruksi: "Pilih semua benda yang bisa menghasilkan musik.", pilihan: [{ src: 'https://via.placeholder.com/80/8B4513/FFFFFF?text=Gitar', tipe: 'benar' }, { src: 'https://via.placeholder.com/80/C0C0C0/000000?text=Sendok', tipe: 'salah' }, { src: 'https://via.placeholder.com/80/000000/FFFFFF?text=Piano', tipe: 'benar' }, { src: 'https://via.placeholder.com/80/FFD700/000000?text=Terompet', tipe: 'benar' }, { id: 'bantal', src: 'https://via.placeholder.com/80/F0E68C/000000?text=Bantal', tipe: 'salah' }] }
            ]
        },
        {
            level: 2,
            tingkat: "SD Awal (7-9 thn)",
            mekanisme: 'klik-gambar',
            variasi: [
                { id: "transportasi", judul: "Klik Semua Alat Transportasi", instruksi: "Abaikan ukurannya, fokus pada fungsinya.", pilihan: [{ src: 'https://via.placeholder.com/80/0000FF/FFFFFF?text=Mobil', tipe: 'benar' }, { src: 'https://via.placeholder.com/80/9ACD32/000000?text=Pohon', tipe: 'salah' }, { src: 'https://via.placeholder.com/80/C0C0C0/000000?text=Pesawat', tipe: 'benar' }, { src: 'https://via.placeholder.com/80/A52A2A/FFFFFF?text=Rumah', tipe: 'salah' }, { src: 'https://via.placeholder.com/80/FF4500/FFFFFF?text=Kapal', tipe: 'benar' }] },
                { id: "perabotan", judul: "Klik Semua Perabotan Rumah", instruksi: "Pilih benda yang biasanya ada di dalam rumah.", pilihan: [{ src: 'https://via.placeholder.com/80/8B4513/FFFFFF?text=Meja', tipe: 'benar' }, { src: 'https://via.placeholder.com/80/DEB887/000000?text=Kursi', tipe: 'benar' }, { src: 'https://via.placeholder.com/80/808080/FFFFFF?text=Batu', tipe: 'salah' }, { src: 'https://via.placeholder.com/80/F5DEB3/000000?text=Lemari', tipe: 'benar' }, { src: 'https://via.placeholder.com/80/00FF00/FFFFFF?text=Rumput', tipe: 'salah' }] },
                { id: "mamalia", judul: "Klik Semua Hewan Mamalia", instruksi: "Pilih hewan yang menyusui.", pilihan: [{ src: 'https://via.placeholder.com/80/A52A2A/FFFFFF?text=Anjing', tipe: 'benar' }, { src: 'https://via.placeholder.com/80/0000FF/FFFFFF?text=Ikan', tipe: 'salah' }, { src: 'https://via.placeholder.com/80/FFD700/000000?text=Singa', tipe: 'benar' }, { src: 'https://via.placeholder.com/80/808080/FFFFFF?text=Gajah', tipe: 'benar' }, { src: 'https://via.placeholder.com/80/228B22/FFFFFF?text=Kadal', tipe: 'salah' }] },
                { id: "sayuran", judul: "Klik Semua Sayuran", instruksi: "Pilih yang termasuk sayuran.", pilihan: [{ src: 'https://via.placeholder.com/80/008000/FFFFFF?text=Brokoli', tipe: 'benar' }, { src: 'https://via.placeholder.com/80/FFA500/000000?text=Wortel', tipe: 'benar' }, { src: 'https://via.placeholder.com/80/D2691E/FFFFFF?text=Roti', tipe: 'salah' }, { src: 'https://via.placeholder.com/80/90EE90/000000?text=Bayam', tipe: 'benar' }, { src: 'https://via.placeholder.com/80/FF0000/FFFFFF?text=Apel', tipe: 'salah' }] },
                { id: "bangun-ruang", judul: "Klik Semua Bangun Ruang", instruksi: "Pilih objek yang memiliki volume (3D).", pilihan: [{ src: 'https://via.placeholder.com/80/87CEEB/000000?text=Kubus', tipe: 'benar' }, { src: 'https://via.placeholder.com/80/FF69B4/FFFFFF?text=Lingkaran', tipe: 'salah' }, { src: 'https://via.placeholder.com/80/32CD32/FFFFFF?text=Bola', tipe: 'benar' }, { src: 'https://via.placeholder.com/80/FFD700/000000?text=Segitiga', tipe: 'salah' }, { src: 'https://via.placeholder.com/80/DC143C/FFFFFF?text=Kerucut', tipe: 'benar' }] }
            ]
        },
        {
            level: 3,
            tingkat: "SD Akhir (10-13 thn)",
            mekanisme: 'seleksi-teks',
            variasi: [
                { id: "resep-kue", judul: "Resep Kue Nenek", instruksi: "Klik hanya pada kalimat yang merupakan instruksi inti untuk membuat kue.", teks: [{konten:"Nenekku selalu bilang, rahasia kue cokelat terenak adalah cinta.",tipe:"salah"}, {konten:"Panaskan oven hingga 180 derajat Celcius.",tipe:"benar"}, {konten:"Siapkan loyang dan olesi dengan mentega.",tipe:"benar"}, {konten:"Aroma kue ini selalu memenuhi rumah setiap akhir pekan.",tipe:"salah"}, {konten:"Campurkan 200g tepung, 50g cokelat, dan 1 sdt baking powder.",tipe:"benar"}, {konten:"Di mangkuk terpisah, kocok 2 butir telur dan 150g gula.",tipe:"benar"}, {konten:"Telurnya harus dari ayam kampung yang bahagia, kata nenek.",tipe:"salah"}, {konten:"Tuangkan adonan telur ke campuran tepung.",tipe:"benar"}, {konten:"Panggang di oven selama 30-35 menit.",tipe:"benar"}, {konten:"Keluarga pasti akan berkumpul dan memujimu.",tipe:"salah"}] },
                // ... Tambahkan 4 variasi lagi untuk level ini ...
            ]
        },
        {
            level: 4,
            tingkat: "Remaja (14-20+ thn)",
            mekanisme: 'seleksi-item',
            variasi: [
                { id: "debug", judul: "Mencari Bug dalam Kode", instruksi: "Seorang programmer menulis kode ini. Pilih hanya baris yang kemungkinan besar menyebabkan error atau perilaku tak terduga (abaikan error ketik minor).", pilihan: [{teks:"let total = 0;",tipe:"salah"}, {teks:"for (i = 0; i <= array.length; i++) {",tipe:"benar"}, {teks:"  total += array[i];",tipe:"salah"}, {teks:"}",tipe:"salah"}, {teks:"console.log('Totalnya adalah: ' + total);",tipe:"salah"}] },
                // ... Tambahkan 4 variasi lagi untuk level ini ...
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

        switch (currentLatihanData.mekanisme) {
            case 'klik-gambar': isCorrect = validateSeleksi(); break;
            case 'seleksi-teks': isCorrect = validateSeleksi(); break;
            case 'seleksi-item': isCorrect = validateSeleksi(); break;
        }

        feedbackEl.textContent = isCorrect ? "Tepat! Kamu berhasil fokus pada hal yang penting." : "Belum tepat. Coba periksa kembali pilihanmu.";
        feedbackEl.style.color = isCorrect ? 'var(--success-color)' : 'var(--error-color)';
    }

    // ==========================================================
    // BAGIAN 3: FUNGSI-FUNGSI SPESIFIK PER MEKANISME
    // ==========================================================

    // --- Mekanisme 1: Klik Gambar ---
    function renderKlikGambarHTML(data) {
        return `<div class="image-selection-container">${data.pilihan.map((p, index) => `<div class="image-item" data-index="${index}" data-tipe="${p.tipe}"><img src="${p.src}" alt="pilihan ${index + 1}"></div>`).join('')}</div>`;
    }
    function setupKlikGambarListeners() {
        document.querySelectorAll('.image-item').forEach(item => {
            item.addEventListener('click', () => item.classList.toggle('selected'));
        });
    }

    // --- Mekanisme 2: Seleksi Teks ---
    function renderSeleksiTeksHTML(data) {
        return `<div class="text-selection-area">${data.teks.map((t, index) => `<span class="kalimat selectable-item" data-index="${index}" data-tipe="${t.tipe}">${t.konten} </span>`).join('')}</div>`;
    }
    function setupSeleksiTeksListeners() {
        document.querySelectorAll('.selectable-item').forEach(item => {
            item.addEventListener('click', () => item.classList.toggle('selected'));
        });
    }

    // --- Mekanisme 3: Seleksi Item (mirip seleksi teks) ---
    function renderSeleksiItemHTML(data) {
        return `<div class="seleksi-container">${data.pilihan.map((p, index) => `<div class="selectable-item" data-index="${index}" data-tipe="${p.tipe}"><pre><code>${p.teks}</code></pre></div>`).join('')}</div>`;
    }
    function setupSeleksiItemListeners() {
        document.querySelectorAll('.selectable-item').forEach(item => {
            item.addEventListener('click', () => item.classList.toggle('selected'));
        });
    }

    // --- Fungsi Validasi Universal untuk Mekanisme Seleksi ---
    function validateSeleksi() {
        const solusi = (currentLatihanData.pilihan || currentLatihanData.teks).filter(p => p.tipe === 'benar').length;
        const selectedItems = document.querySelectorAll('.selected');
        const correctSelected = Array.from(selectedItems).filter(item => item.dataset.tipe === 'benar').length;
        const incorrectSelected = Array.from(selectedItems).filter(item => item.dataset.tipe === 'salah').length;

        return correctSelected === solusi && incorrectSelected === 0;
    }
    
    // --- Jalankan Inisialisasi Saat Halaman Dimuat ---
    init();
});
