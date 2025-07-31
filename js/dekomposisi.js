// js/dekomposisi.js

// Impor fungsi yang dibutuhkan dari file utilitas.
// Browser akan otomatis mencari file utils.js di folder yang sama.

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================
    // BAGIAN 1: DATABASE LATIHAN KHUSUS DEKOMPOSISI
    // ==========================================================
    const LATIHAN_DEKOMPOSISI = [
        {
            level: 1,
            tingkat: "Pra-Sekolah (3-6 thn)",
            mekanisme: 'drag-satu-target',
            variasi: [
                { id: "mainan", judul: "Bereskan Kotak Mainan", instruksi: "Seret hanya benda yang merupakan mainan ke dalam kotak.", pilihan: [{ id: "bola", teks: "Bola ⚽", tipe: "benar" }, { id: "buku", teks: "Buku 📚", tipe: "salah" }, { id: "boneka", teks: "Boneka 🧸", tipe: "benar" }, { id: "apel", teks: "Apel 🍎", tipe: "salah" }, { id: "mobil", teks: "Mobil 🚗", tipe: "benar" }] },
                { id: "buah", judul: "Masukkan ke Keranjang Buah", instruksi: "Seret hanya buah-buahan ke dalam keranjang.", pilihan: [{ id: "apel", teks: "Apel 🍎", tipe: "benar" }, { id: "pisang", teks: "Pisang 🍌", tipe: "benar" }, { id: "brokoli", teks: "Brokoli 🥦", tipe: "salah" }, { id: "stroberi", teks: "Stroberi 🍓", tipe: "benar" }, { id: "roti", teks: "Roti 🍞", tipe: "salah" }] },
                { id: "hewan-darat", judul: "Masukkan ke Kandang Darat", instruksi: "Seret hanya hewan yang hidup di darat.", pilihan: [{ id: "kucing", teks: "Kucing 🐈", tipe: "benar" }, { id: "ikan", teks: "Ikan 🐟", tipe: "salah" }, { id: "anjing", teks: "Anjing 🐕", tipe: "benar" }, { id: "sapi", teks: "Sapi 🐄", tipe: "benar" }, { id: "gurita", teks: "Gurita 🐙", tipe: "salah" }] },
                { id: "pakaian", judul: "Masukkan Pakaian ke Lemari", instruksi: "Seret hanya item yang merupakan pakaian.", pilihan: [{ id: "kaus", teks: "Kaus 👕", tipe: "benar" }, { id: "celana", teks: "Celana 👖", tipe: "benar" }, { id: "topi", teks: "Topi 🧢", tipe: "benar" }, { id: "jam", teks: "Jam ⌚", tipe: "salah" }, { id: "sendok", teks: "Sendok 🥄", tipe: "salah" }] },
                { id: "alat-tulis", judul: "Masukkan ke Tempat Pensil", instruksi: "Seret hanya alat tulis ke dalam tempat pensil.", pilihan: [{ id: "pensil", teks: "Pensil ✏️", tipe: "benar" }, { id: "gunting", teks: "Gunting ✂️", tipe: "benar" }, { id: "penghapus", teks: "Penghapus", tipe: "benar" }, { id: "garpu", teks: "Garpu 🍴", tipe: "salah" }, { id: "kunci", teks: "Kunci 🔑", tipe: "salah" }] }
            ]
        },
        {
            level: 2,
            tingkat: "SD Awal (7-9 thn)",
            mekanisme: 'drag-urutkan',
            variasi: [
                { id: "sandwich", judul: "Urutan Membuat Sandwich", instruksi: "Urutkan kartu ini untuk membuat sandwich.", pilihan: [{ id: "1", teks: "Ambil 2 lembar roti" }, { id: "2", teks: "Olesi selai/mentega" }, { id: "3", teks: "Letakkan isian (daging/sayur)" }, { id: "4", teks: "Tangkupkan roti" }] },
                { id: "cuci-tangan", judul: "Urutan Mencuci Tangan", instruksi: "Urutkan langkah mencuci tangan yang benar.", pilihan: [{ id: "1", teks: "Basahi tangan dengan air" }, { id: "2", teks: "Tuang sabun secukupnya" }, { id: "3", teks: "Gosok seluruh bagian tangan" }, { id: "4", teks: "Bilas dengan air bersih" }, { id: "5", teks: "Keringkan dengan handuk" }] },
                { id: "menanam", judul: "Urutan Menanam Biji", instruksi: "Urutkan langkah-langkah menanam biji di pot.", pilihan: [{ id: "1", teks: "Masukkan tanah ke pot" }, { id: "2", teks: "Buat lubang kecil" }, { id: "3", teks: "Masukkan biji ke lubang" }, { id: "4", teks: "Tutup biji dengan tanah" }, { id: "5", teks: "Siram dengan air" }] },
                { id: "surat", judul: "Urutan Mengirim Surat", instruksi: "Urutkan cara mengirim surat melalui pos.", pilihan: [{ id: "1", teks: "Tulis surat di kertas" }, { id: "2", teks: "Masukkan ke amplop" }, { id: "3", teks: "Tulis alamat & tempel perangko" }, { id: "4", teks: "Masukkan ke kotak pos" }] },
                { id: "email", judul: "Urutan Mengirim Email", instruksi: "Urutkan langkah mengirim email.", pilihan: [{ id: "1", teks: "Buka aplikasi email" }, { id: "2", teks: "Klik 'Tulis Pesan Baru'" }, { id: "3", teks: "Isi alamat penerima & subjek" }, { id: "4", teks: "Tulis isi email" }, { id: "5", teks: "Klik 'Kirim'" }] }
            ]
        },
        {
            level: 3,
            tingkat: "SD Akhir (10-13 thn)",
            mekanisme: 'drag-kategorikan',
            variasi: [
                { id: "pesta", judul: "Rencana Pesta Ulang Tahun", instruksi: "Kelompokkan tugas-tugas ini ke kategori yang tepat.", pilihan: [{ id: "kue", teks: "Beli Kue", tipe: "makanan" }, { id: "balon", teks: "Tiup Balon", tipe: "dekorasi" }, { id: "undangan", teks: "Kirim Undangan", tipe: "persiapan" }, { id: "pizza", teks: "Pesan Pizza", tipe: "makanan" }, { id: "pita", teks: "Gantung Pita", tipe: "dekorasi" }], kategori: [{ id: "makanan", nama: "Makanan & Minuman" }, { id: "dekorasi", nama: "Dekorasi" }, { id: "persiapan", nama: "Persiapan" }] },
                { id: "belanja", judul: "Daftar Belanja di Supermarket", instruksi: "Kelompokkan item belanja ini berdasarkan jenisnya.", pilihan: [{ id: "susu", teks: "Susu", tipe: "produk-susu" }, { id: "sikat-gigi", teks: "Sikat Gigi", tipe: "kebersihan" }, { id: "apel", teks: "Apel", tipe: "buah-sayur" }, { id: "keju", teks: "Keju", tipe: "produk-susu" }, { id: "sabun", teks: "Sabun Mandi", tipe: "kebersihan" }, { id: "bayam", teks: "Bayam", tipe: "buah-sayur" }], kategori: [{ id: "buah-sayur", nama: "Buah & Sayuran" }, { id: "produk-susu", nama: "Produk Susu" }, { id: "kebersihan", nama: "Alat Kebersihan" }] },
                { id: "perpustakaan", judul: "Mengelompokkan Buku", instruksi: "Kelompokkan buku-buku ini ke rak yang sesuai.", pilihan: [{ id: "legenda", teks: "Legenda Malin Kundang", tipe: "fiksi" }, { id: "ensiklopedia", teks: "Ensiklopedia Dinosaurus", tipe: "non-fiksi" }, { id: "komik", teks: "Komik Petualangan", tipe: "fiksi" }, { id: "biografi", teks: "Biografi B.J. Habibie", tipe: "non-fiksi" }], kategori: [{ id: "fiksi", nama: "Fiksi" }, { id: "non-fiksi", nama: "Non-Fiksi" }] },
                { id: "ekosistem", judul: "Mengelompokkan Organisme", instruksi: "Kelompokkan organisme ini berdasarkan habitatnya.", pilihan: [{ id: "singa", teks: "Singa", tipe: "darat" }, { id: "paus", teks: "Paus", tipe: "air" }, { id: "elang", teks: "Elang", tipe: "udara" }, { id: "gajah", teks: "Gajah", tipe: "darat" }, { id: "lumba-lumba", teks: "Lumba-lumba", tipe: "air" }], kategori: [{ id: "darat", nama: "Habitat Darat" }, { id: "air", nama: "Habitat Air" }, { id: "udara", nama: "Habitat Udara" }] },
                { id: "sampah", judul: "Memilah Sampah", instruksi: "Kelompokkan sampah ini ke tempat yang benar.", pilihan: [{ id: "botol-plastik", teks: "Botol Plastik", tipe: "anorganik" }, { id: "sisa-sayur", teks: "Sisa Sayuran", tipe: "organik" }, { id: "kertas", teks: "Kertas Bekas", tipe: "anorganik" }, { id: "kulit-pisang", teks: "Kulit Pisang", tipe: "organik" }], kategori: [{ id: "organik", nama: "Sampah Organik" }, { id: "anorganik", nama: "Sampah Anorganik" }] }
            ]
        },
        {
            level: 4,
            tingkat: "Remaja (14-20+ thn)",
            mekanisme: 'seleksi-klik',
            variasi: [
                { id: "aplikasi-catatan", judul: "Fitur Inti Aplikasi Catatan (MVP)", instruksi: "Pilih fitur-fitur yang paling esensial untuk sebuah aplikasi pencatat agar bisa dirilis.", pilihan: [{ id: "tulis", teks: "Menulis & Edit Teks", tipe: "benar" }, { id: "simpan", teks: "Menyimpan Catatan", tipe: "benar" }, { id: "integrasi-ai", teks: "Integrasi AI untuk Meringkas", tipe: "salah" }, { id: "hapus", teks: "Menghapus Catatan", tipe: "benar" }, { id: "cari", teks: "Mencari Catatan", tipe: "benar" }, { id: "kolaborasi", teks: "Kolaborasi Real-time", tipe: "salah" }, { id: "dark-mode", teks: "Mode Gelap", tipe: "salah" }] },
                { id: "ecommerce", judul: "Fitur Inti Toko Online (MVP)", instruksi: "Pilih fitur-fitur yang paling esensial untuk sebuah website e-commerce agar bisa berjualan.", pilihan: [{ id: "lihat-produk", teks: "Melihat Daftar Produk", tipe: "benar" }, { id: "keranjang", teks: "Menambah ke Keranjang", tipe: "benar" }, { id: "rekomendasi-ml", teks: "Rekomendasi Machine Learning", tipe: "salah" }, { id: "checkout", teks: "Proses Checkout/Pembayaran", tipe: "benar" }, { id: "live-chat-cs", teks: "Live Chat dengan CS", tipe: "salah" }, { id: "cari-produk", teks: "Mencari Produk", tipe: "benar" }, { id: "review-3d", teks: "Review Produk 3D AR", tipe: "salah" }] },
                { id: "game-platformer", judul: "Mekanisme Inti Game Platformer", instruksi: "Pilih mekanisme yang paling esensial untuk sebuah game platformer sederhana.", pilihan: [{ id: "bergerak", teks: "Bergerak Kiri & Kanan", tipe: "benar" }, { id: "lompat", teks: "Lompat", tipe: "benar" }, { id: "online-multiplayer", teks: "Online Multiplayer", tipe: "salah" }, { id: "koin", teks: "Mengumpulkan Koin", tipe: "benar" }, { id: "musuh", teks: "Menghindari Musuh Sederhana", tipe: "benar" }, { id: "skin-karakter", teks: "Kustomisasi Skin Karakter", tipe: "salah" }] },
                { id: "sosmed-foto", judul: "Fitur Inti Aplikasi Media Sosial Foto", instruksi: "Pilih fitur-fitur paling esensial untuk aplikasi berbagi foto seperti Instagram versi awal.", pilihan: [{ id: "upload", teks: "Upload Foto", tipe: "benar" }, { id: "filter", teks: "Filter Foto Sederhana", tipe: "benar" }, { id: "story", teks: "Fitur Stories 24 Jam", tipe: "salah" }, { id: "like", teks: "Memberi 'Like'", tipe: "benar" }, { id: "follow", teks: "Mengikuti Pengguna Lain", tipe: "benar" }, { id: "live-streaming", teks: "Live Streaming", tipe: "salah" }] },
                { id: "video-call", judul: "Fitur Inti Aplikasi Video Call", instruksi: "Pilih fitur esensial untuk aplikasi video call agar bisa berfungsi.", pilihan: [{ id: "panggilan-video", teks: "Memulai Panggilan Video 1-on-1", tipe: "benar" }, { id: "mute-audio", teks: "Mute/Unmute Audio", tipe: "benar" }, { id: "virtual-background", teks: "Latar Belakang Virtual", tipe: "salah" }, { id: "chat-teks", teks: "Chat Teks selama Panggilan", tipe: "benar" }, { id: "rekam-panggilan", teks: "Merekam Panggilan", tipe: "salah" }, { id: "nonaktif-video", teks: "Menyalakan/Mematikan Video", tipe: "benar" }] }
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
        LATIHAN_DEKOMPOSISI.forEach(levelData => {
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

        const levelData = LATIHAN_DEKOMPOSISI.find(l => l.level === selectedLevel);
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
            case 'drag-satu-target': htmlContent += renderDragSatuTargetHTML(data); break;
            case 'drag-urutkan': htmlContent += renderDragUrutkanHTML(data); break;
            case 'drag-kategorikan': htmlContent += renderDragKategorikanHTML(data); break;
            case 'seleksi-klik': htmlContent += renderSeleksiKlikHTML(data); break;
        }

        exerciseArea.innerHTML = htmlContent;
        cekJawabanBtn.style.display = 'inline-block';
        setupEventListeners(data.mekanisme);
    }

    function setupEventListeners(mekanisme) {
        if (mekanisme.startsWith('drag')) setupDragDropListeners();
        else if (mekanisme === 'seleksi-klik') setupSeleksiKlikListeners();
    }
    
    function handleCekJawaban() {
        if (!currentLatihanData) return;
        let isCorrect = false;

        switch (currentLatihanData.mekanisme) {
            case 'drag-satu-target': isCorrect = validateDragSatuTarget(); break;
            case 'drag-urutkan': isCorrect = validateDragUrutkan(); break;
            case 'drag-kategorikan': isCorrect = validateDragKategorikan(); break;
            case 'seleksi-klik': isCorrect = validateSeleksiKlik(); break;
        }

        feedbackEl.textContent = isCorrect ? "Kerja Bagus! Jawabanmu Tepat!" : "Oops, coba periksa kembali jawabanmu.";
        feedbackEl.style.color = isCorrect ? 'var(--success-color)' : 'var(--error-color)';
    }

    // ==========================================================
    // BAGIAN 3: FUNGSI-FUNGSI SPESIFIK PER MEKANISME
    // ==========================================================

    // --- Mekanisme 1: Drag Satu Target ---
    function renderDragSatuTargetHTML(data) {
        return `<div class="exercise-container"><div class="komponen-kolom"><h4>Pilihan</h4><div class="sumber-pilihan">${data.pilihan.map(p => `<div class="komponen draggable-item" draggable="true" data-id="${p.id}" data-tipe="${p.tipe}">${p.teks}</div>`).join('')}</div></div><div class="komponen-kolom"><h4>Kotak Jawaban</h4><div class="drop-zone" id="jawaban-area"></div></div></div>`;
    }
    function validateDragSatuTarget() {
        const solusi = currentLatihanData.pilihan.filter(p => p.tipe === 'benar').map(p => p.id);
        const jawabanUser = Array.from(document.querySelectorAll('#jawaban-area .draggable-item')).map(item => item.dataset.id);
        return solusi.length === jawabanUser.length && solusi.every(s => jawabanUser.includes(s));
    }

    // --- Mekanisme 2: Drag Urutkan ---
    function renderDragUrutkanHTML(data) {
        const pilihanAcak = [...data.pilihan].sort(() => Math.random() - 0.5);
        let targetHTML = '';
        for (let i = 1; i <= data.pilihan.length; i++) {
            targetHTML += `<div class="urutan-target"><div class="urutan-nomor">${i}.</div><div class="urutan-drop-zone drop-zone" data-urutan="${i}"></div></div>`;
        }
        return `<div class="urutan-container">${targetHTML}</div><h4>Pilihan Langkah (acak):</h4><div class="urutan-pilihan sumber-pilihan">${pilihanAcak.map(p => `<div class="komponen draggable-item" draggable="true" data-id="${p.id}">${p.teks}</div>`).join('')}</div>`;
    }
    function validateDragUrutkan() {
        const dropZones = document.querySelectorAll('.urutan-drop-zone');
        for (let zone of dropZones) {
            const urutan = zone.dataset.urutan;
            const item = zone.querySelector('.draggable-item');
            if (!item || !item.dataset.id.startsWith(urutan)) return false;
        }
        return true;
    }

    // --- Mekanisme 3: Drag Kategorikan ---
    function renderDragKategorikanHTML(data) {
        return `<div class="kategori-container"><div class="kategori-pilihan-sumber"><h4>Pilihan Item</h4><div class="sumber-pilihan">${data.pilihan.map(p => `<div class="komponen draggable-item" draggable="true" data-id="${p.id}" data-tipe="${p.tipe}">${p.teks}</div>`).join('')}</div></div><div class="kategori-target-area">${data.kategori.map(k => `<div class="kategori-grup"><h4>${k.nama}</h4><div class="drop-zone" data-kategori-id="${k.id}"></div></div>`).join('')}</div></div>`;
    }
    function validateDragKategorikan() {
        const dropZones = document.querySelectorAll('.kategori-grup .drop-zone');
        let allItemsPlacedCorrectly = true;
        for (let zone of dropZones) {
            const kategoriId = zone.dataset.kategoriId;
            const items = zone.querySelectorAll('.draggable-item');
            for (let item of items) {
                if (item.dataset.tipe !== kategoriId) allItemsPlacedCorrectly = false;
            }
        }
        const totalItems = document.querySelectorAll('.sumber-pilihan .draggable-item, .kategori-grup .draggable-item').length;
        const placedItems = document.querySelectorAll('.kategori-grup .draggable-item').length;
        return allItemsPlacedCorrectly && (totalItems === placedItems);
    }

    // --- Mekanisme 4: Seleksi Klik ---
    function renderSeleksiKlikHTML(data) {
        return `<div class="seleksi-container">${data.pilihan.map(p => `<div class="selectable-item" data-id="${p.id}" data-tipe="${p.tipe}">${p.teks}</div>`).join('')}</div>`;
    }
    function validateSeleksiKlik() {
        const solusi = currentLatihanData.pilihan.filter(p => p.tipe === 'benar').map(p => p.id);
        const jawabanUser = Array.from(document.querySelectorAll('.selectable-item.selected')).map(item => item.dataset.id);
        const salahTerpilih = Array.from(document.querySelectorAll('.selectable-item.selected')).some(item => item.dataset.tipe === 'salah');
        return solusi.length === jawabanUser.length && !salahTerpilih;
    }
    
    // --- Jalankan Inisialisasi Saat Halaman Dimuat ---
    init();
});
