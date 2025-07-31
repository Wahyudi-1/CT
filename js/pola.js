// js/pola.js

/**
 * File JavaScript untuk Latihan Pengenalan Pola
 * ----------------------------------------------
 * Mengelola semua level, variasi, dan mekanisme interaktif
 * khusus untuk halaman pola.html.
 */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================
    // BAGIAN 1: DATABASE LATIHAN KHUSUS PENGENALAN POLA
    // ==========================================================
    const LATIHAN_POLA = [
        {
            level: 1,
            tingkat: "Pra-Sekolah (3-6 thn)",
            mekanisme: 'tebak-selanjutnya',
            variasi: [
                { id: "warna-1", judul: "Lanjutkan Pola Warna", pola: ["🔴", "🔵", "🔴", "🔵", "?"], pilihan: [{ teks: "🔴", benar: true }, { teks: "🟢", benar: false }, { teks: "🔵", benar: false }] },
                { id: "hewan-1", judul: "Lanjutkan Pola Hewan", pola: ["🐈", "🐕", "🐈", "🐕", "?"], pilihan: [{ teks: "🐕", benar: false }, { teks: "🐈", benar: true }, { teks: "🐇", benar: false }] },
                { id: "buah-1", judul: "Lanjutkan Pola Buah", pola: ["🍎", "🍌", "🍎", "🍌", "?"], pilihan: [{ teks: "🍇", benar: false }, { teks: "🍌", benar: false }, { teks: "🍎", benar: true }] },
                { id: "bentuk-1", judul: "Lanjutkan Pola Bentuk", pola: ["⭐", "🌙", "⭐", "🌙", "?"], pilihan: [{ teks: "⭐", benar: true }, { teks: "☀️", benar: false }, { teks: "🌙", benar: false }] },
                { id: "transportasi-1", judul: "Lanjutkan Pola Kendaraan", pola: ["🚗", "🚲", "🚗", "🚲", "?"], pilihan: [{ teks: "✈️", benar: false }, { teks: "🚗", benar: true }, { teks: "🚲", benar: false }] }
            ]
        },
        {
            level: 2,
            tingkat: "SD Awal (7-9 thn)",
            mekanisme: 'tebak-selanjutnya',
            variasi: [
                { id: "angka-1", judul: "Lanjutkan Pola Angka", pola: ["2", "4", "6", "8", "?"], pilihan: [{ teks: "9", benar: false }, { teks: "10", benar: true }, { teks: "12", benar: false }] },
                { id: "abc-1", judul: "Lanjutkan Pola Huruf", pola: ["A", "B", "C", "A", "B", "?"], pilihan: [{ teks: "A", benar: false }, { teks: "D", benar: false }, { teks: "C", benar: true }] },
                { id: "aab-1", judul: "Lanjutkan Pola Bentuk", pola: ["🟥", "🟥", "🟦", "🟥", "🟥", "?"], pilihan: [{ teks: "🟦", benar: true }, { teks: "🟥", benar: false }, { teks: "🟩", benar: false }] },
                { id: "angka-mundur", judul: "Lanjutkan Pola Angka Mundur", pola: ["10", "9", "8", "7", "?"], pilihan: [{ teks: "5", benar: false }, { teks: "6", benar: true }, { teks: "8", benar: false }] },
                { id: "angka-loncat-5", judul: "Lanjutkan Pola Angka Loncat 5", pola: ["5", "10", "15", "20", "?"], pilihan: [{ teks: "25", benar: true }, { teks: "30", benar: false }, { teks: "21", benar: false }] }
            ]
        },
        {
            level: 3,
            tingkat: "SD Akhir (10-13 thn)",
            mekanisme: 'temukan-aneh', // Mekanisme baru!
            variasi: [
                { id: "aneh-angka-genap", judul: "Temukan yang Aneh!", instruksi: "Klik angka yang tidak sesuai dengan polanya.", pola: [{ teks: "2", tipe: "benar" }, { teks: "4", tipe: "benar" }, { teks: "6", tipe: "benar" }, { teks: "9", tipe: "salah" }, { teks: "10", tipe: "benar" }] },
                { id: "aneh-huruf-vokal", judul: "Temukan yang Aneh!", instruksi: "Klik huruf yang tidak sesuai dengan kelompoknya.", pola: [{ teks: "A", tipe: "benar" }, { teks: "I", tipe: "benar" }, { teks: "K", tipe: "salah" }, { teks: "U", tipe: "benar" }, { teks: "E", tipe: "benar" }] },
                { id: "aneh-buah", judul: "Temukan yang Aneh!", instruksi: "Klik gambar yang bukan buah.", pola: [{ teks: "🍎", tipe: "benar" }, { teks: "🥦", tipe: "salah" }, { teks: "🍌", tipe: "benar" }, { teks: "🍇", tipe: "benar" }, { teks: "🍓", tipe: "benar" }] },
                { id: "aneh-kelipatan-3", judul: "Temukan yang Aneh!", instruksi: "Klik angka yang bukan kelipatan 3.", pola: [{ teks: "3", tipe: "benar" }, { teks: "6", tipe: "benar" }, { teks: "9", tipe: "benar" }, { teks: "10", tipe: "salah" }, { teks: "12", tipe: "benar" }] },
                { id: "aneh-hewan-mamalia", judul: "Temukan yang Aneh!", instruksi: "Klik hewan yang bukan mamalia.", pola: [{ teks: "🐄", tipe: "benar" }, { teks: "🐕", tipe: "benar" }, { teks: "🐈", tipe: "benar" }, { teks: "🐟", tipe: "salah" }, { teks: "🐘", tipe: "benar" }] }
            ]
        },
        {
            level: 4,
            tingkat: "Remaja (14-20+ thn)",
            mekanisme: 'tebak-selanjutnya',
            variasi: [
                { id: "fibonacci", judul: "Lanjutkan Pola Fibonacci", pola: ["1", "1", "2", "3", "5", "?"], pilihan: [{ teks: "7", benar: false }, { teks: "8", benar: true }, { teks: "9", benar: false }] },
                { id: "kuadrat", judul: "Lanjutkan Pola Bilangan Kuadrat", pola: ["1", "4", "9", "16", "?"], pilihan: [{ teks: "20", benar: false }, { teks: "32", benar: false }, { teks: "25", benar: true }] },
                { id: "rotasi", judul: "Lanjutkan Pola Rotasi", pola: ["↑", "→", "↓", "←", "?"], pilihan: [{ teks: "↑", benar: true }, { teks: "↓", benar: false }, { teks: "→", benar: false }] },
                { id: "kali-2", judul: "Lanjutkan Pola Perkalian", pola: ["3", "6", "12", "24", "?"], pilihan: [{ teks: "36", benar: false }, { teks: "48", benar: true }, { teks: "30", benar: false }] },
                { id: "prima", judul: "Lanjutkan Pola Bilangan Prima", pola: ["2", "3", "5", "7", "?"], pilihan: [{ teks: "9", benar: false }, { teks: "10", benar: false }, { teks: "11", benar: true }] }
            ]
        }
    ];

    // ==========================================================
    // BAGIAN 2: LOGIKA UTAMA APLIKASI
    // ==========================================================
    const levelSelect = document.getElementById('level-select');
    const exerciseArea = document.getElementById('exercise-content-area');
    const feedbackEl = document.getElementById('hasil-feedback');
    let currentLatihanData = null;

    function init() {
        if (!levelSelect) return;
        LATIHAN_POLA.forEach(levelData => {
            const option = document.createElement('option');
            option.value = levelData.level;
            option.textContent = `${levelData.level}: ${levelData.tingkat}`;
            levelSelect.appendChild(option);
        });
        levelSelect.addEventListener('change', handleLevelChange);
    }

    function handleLevelChange(e) {
        const selectedLevel = parseInt(e.target.value);
        feedbackEl.innerHTML = '';
        if (!selectedLevel) {
            exerciseArea.innerHTML = '<p class="placeholder-text">Pilih level untuk memulai latihan.</p>';
            return;
        }

        const levelData = LATIHAN_POLA.find(l => l.level === selectedLevel);
        if (!levelData || levelData.variasi.length === 0) return;

        const randomIndex = Math.floor(Math.random() * levelData.variasi.length);
        const latihanVariasi = levelData.variasi[randomIndex];
        currentLatihanData = { ...levelData, ...latihanVariasi };
        renderLatihan(currentLatihanData);
    }

    function renderLatihan(data) {
        exerciseArea.innerHTML = '';
        let htmlContent = `<h3>${data.judul}</h3><p>${data.instruksi || 'Perhatikan pola di bawah ini.'}</p>`;

        switch (data.mekanisme) {
            case 'tebak-selanjutnya':
                htmlContent += renderTebakSelanjutnyaHTML(data);
                break;
            case 'temukan-aneh':
                htmlContent += renderTemukanAnehHTML(data);
                break;
        }

        exerciseArea.innerHTML = htmlContent;
        setupEventListeners(data.mekanisme);
    }

    function setupEventListeners(mekanisme) {
        if (mekanisme === 'tebak-selanjutnya') setupTebakSelanjutnyaListeners();
        else if (mekanisme === 'temukan-aneh') setupTemukanAnehListeners();
    }

    // ==========================================================
    // BAGIAN 3: FUNGSI-FUNGSI SPESIFIK PER MEKANISME
    // ==========================================================

    // --- Mekanisme 1: Tebak Selanjutnya ---
    function renderTebakSelanjutnyaHTML(data) {
        return `
            <div class="pola-display">${data.pola.join(' ')}</div>
            <h4>Pilih Jawabanmu:</h4>
            <div class="pilihan-container">
                ${data.pilihan.map(p => `<button class="pilihan" data-correct="${p.benar}">${p.teks}</button>`).join('')}
            </div>
        `;
    }

    function setupTebakSelanjutnyaListeners() {
        const pilihanButtons = document.querySelectorAll('.pilihan-container .pilihan');
        pilihanButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                pilihanButtons.forEach(btn => btn.disabled = true);
                const isCorrect = e.target.dataset.correct === 'true';

                if (isCorrect) {
                    e.target.classList.add('correct');
                    feedbackEl.textContent = "Tepat sekali! Kamu berhasil menemukan polanya.";
                    feedbackEl.style.color = 'var(--success-color)';
                } else {
                    e.target.classList.add('incorrect');
                    feedbackEl.textContent = "Belum tepat. Coba perhatikan lagi keteraturannya.";
                    feedbackEl.style.color = 'var(--error-color)';
                }
            });
        });
    }

    // --- Mekanisme 2: Temukan yang Aneh ---
    function renderTemukanAnehHTML(data) {
        return `
            <div class="pola-sequence-container">
                ${data.pola.map(p => `<div class="pola-sequence-item" data-tipe="${p.tipe}">${p.teks}</div>`).join('')}
            </div>
        `;
    }

    function setupTemukanAnehListeners() {
        const sequenceItems = document.querySelectorAll('.pola-sequence-item');
        sequenceItems.forEach(item => {
            item.addEventListener('click', (e) => {
                sequenceItems.forEach(i => i.style.pointerEvents = 'none'); // Matikan klik setelah memilih
                const isIncorrectItem = e.target.dataset.tipe === 'salah';

                if (isIncorrectItem) {
                    e.target.classList.add('correct');
                    feedbackEl.textContent = "Benar! Kamu jeli sekali menemukan item yang tidak sesuai.";
                    feedbackEl.style.color = 'var(--success-color)';
                } else {
                    e.target.classList.add('incorrect');
                    feedbackEl.textContent = "Bukan yang itu. Ada item lain yang tidak cocok dengan kelompoknya.";
                    feedbackEl.style.color = 'var(--error-color)';
                }
            });
        });
    }
    
    // --- Jalankan Inisialisasi Saat Halaman Dimuat ---
    init();
});
