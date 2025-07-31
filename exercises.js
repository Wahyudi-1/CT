/**
 * File JavaScript untuk Latihan Interaktif
 * -----------------------------------------
 * Berisi semua logika untuk:
 * 1. Dekomposisi (Drag & Drop)
 * 2. Pengenalan Pola (Tebak Pilihan)
 * 3. Abstraksi (Seleksi Teks)
 * 4. Algoritma (Puzzle Labirin)
 *
 * Menggunakan 'DOMContentLoaded' untuk memastikan skrip berjalan
 * setelah seluruh halaman HTML siap.
 */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================
    // BAGIAN 1: LOGIKA UNTUK HALAMAN DEKOMPOSISI
    // Kode ini hanya berjalan jika elemen dengan id 'kotak-rakitan' ditemukan.
    // ==========================================================
    const dekomposisiContainer = document.getElementById('kotak-rakitan');
    if (dekomposisiContainer) {
        const komponenList = document.querySelectorAll('.komponen');
        const cekJawabanBtn = document.getElementById('cek-jawaban-dekomposisi');
        const feedbackEl = document.getElementById('hasil-feedback');
        const komponenTersedia = document.getElementById('komponen-tersedia');

        // Menambahkan event listeners untuk setiap komponen yang bisa di-drag
        komponenList.forEach(komponen => {
            komponen.addEventListener('dragstart', () => {
                // Menambahkan class 'dragging' saat komponen mulai diseret
                komponen.classList.add('dragging');
            });

            komponen.addEventListener('dragend', () => {
                // Menghapus class 'dragging' saat komponen selesai diseret
                komponen.classList.remove('dragging');
            });
        });

        // Menambahkan event listener ke kedua kontainer (sumber dan target)
        [komponenTersedia, dekomposisiContainer].forEach(container => {
            container.addEventListener('dragover', e => {
                e.preventDefault(); // Wajib agar event 'drop' bisa terjadi
            });
    
            container.addEventListener('drop', e => {
                e.preventDefault();
                const draggable = document.querySelector('.dragging');
                if (draggable && container.contains(draggable) === false) {
                    // Jika ada tulisan "Seret komponen ke sini...", hapus
                    const placeholder = container.querySelector('p');
                    if (placeholder) placeholder.remove();
                    
                    container.appendChild(draggable);
                }
            });
        });
        
        // Logika untuk tombol Cek Jawaban
        cekJawabanBtn.addEventListener('click', () => {
            const jawabanBenar = ['cpu', 'ram', 'mobo', 'psu', 'storage'];
            const jawabanUser = [];
            const komponenDiRakitan = dekomposisiContainer.querySelectorAll('.komponen');

            komponenDiRakitan.forEach(komp => jawabanUser.push(komp.dataset.id));

            // Validasi: jumlahnya harus sama dan semua item benar harus ada
            const isCorrect = jawabanBenar.length === jawabanUser.length && jawabanBenar.every(j => jawabanUser.includes(j));

            if (isCorrect) {
                feedbackEl.textContent = "Hebat! Kamu berhasil mengidentifikasi semua komponen inti. Ini adalah dekomposisi yang baik!";
                feedbackEl.style.color = 'var(--success-color)';
            } else {
                feedbackEl.textContent = "Oops, sepertinya ada komponen yang salah atau kurang. Coba periksa lagi mana yang merupakan komponen internal utama.";
                feedbackEl.style.color = 'var(--error-color)';
            }
        });
    }


    // ==========================================================
    // BAGIAN 2: LOGIKA UNTUK HALAMAN PENGENALAN POLA
    // Kode ini hanya berjalan jika elemen dengan id 'pilihan-jawaban' ditemukan.
    // ==========================================================
    const polaContainer = document.getElementById('pilihan-jawaban');
    if (polaContainer) {
        const pilihanButtons = polaContainer.querySelectorAll('.pilihan');
        const feedbackEl = document.getElementById('hasil-feedback-pola');
        const resetBtn = document.getElementById('reset-pola');

        pilihanButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                // Nonaktifkan semua tombol setelah satu jawaban dipilih
                pilihanButtons.forEach(btn => btn.disabled = true);

                const isCorrect = e.target.dataset.correct === 'true';

                if (isCorrect) {
                    e.target.classList.add('correct');
                    feedbackEl.textContent = "Tepat sekali! Polanya adalah Matahari, Bulan, berulang.";
                    feedbackEl.style.color = 'var(--success-color)';
                } else {
                    e.target.classList.add('incorrect');
                    feedbackEl.textContent = "Belum tepat. Coba perhatikan urutan gambarnya lagi.";
                    feedbackEl.style.color = 'var(--error-color)';
                }
                // Tampilkan tombol reset
                resetBtn.style.display = 'inline-block';
            });
        });
        
        // Tombol reset akan me-reload halaman untuk memulai kembali latihan
        resetBtn.addEventListener('click', () => {
            location.reload();
        });
    }


    // ==========================================================
    // BAGIAN 3: LOGIKA UNTUK HALAMAN ABSTRAKSI
    // Kode ini hanya berjalan jika elemen dengan id 'resep-cerita' ditemukan.
    // ==========================================================
    const abstraksiContainer = document.getElementById('resep-cerita');
    if (abstraksiContainer) {
        const kalimatList = abstraksiContainer.querySelectorAll('.kalimat');
        const cekJawabanBtn = document.getElementById('cek-jawaban-abstraksi');
        const feedbackEl = document.getElementById('hasil-feedback-abstraksi');

        // Menambahkan event listener ke setiap kalimat agar bisa diklik
        kalimatList.forEach(kalimat => {
            kalimat.addEventListener('click', () => {
                // Toggle class 'selected' untuk memberi highlight
                kalimat.classList.toggle('selected');
            });
        });

        // Logika untuk tombol Cek Jawaban
        cekJawabanBtn.addEventListener('click', () => {
            let correctSelected = 0;
            let incorrectSelected = 0;
            const totalCorrect = abstraksiContainer.querySelectorAll('[data-type="instruksi"]').length;

            const selectedKalimat = abstraksiContainer.querySelectorAll('.selected');
            selectedKalimat.forEach(kalimat => {
                if (kalimat.dataset.type === 'instruksi') {
                    correctSelected++;
                } else {
                    incorrectSelected++;
                }
            });

            // Jawaban benar jika semua instruksi dipilih dan tidak ada narasi yang dipilih
            if (correctSelected === totalCorrect && incorrectSelected === 0 && selectedKalimat.length === totalCorrect) {
                feedbackEl.textContent = "Sempurna! Kamu berhasil memisahkan instruksi inti dari cerita. Itulah inti dari abstraksi!";
                feedbackEl.style.color = 'var(--success-color)';
            } else {
                feedbackEl.textContent = "Hmm, sepertinya ada instruksi yang terlewat atau ada cerita yang ikut terpilih. Coba fokus pada langkah-langkah penting saja.";
                feedbackEl.style.color = 'var(--error-color)';
            }
        });
    }


    // ==========================================================
    // BAGIAN 4: LOGIKA UNTUK HALAMAN ALGORITMA
    // Kode ini hanya berjalan jika elemen dengan id 'grid-labirin' ditemukan.
    // ==========================================================
    const algoritmaGrid = document.getElementById('grid-labirin');
    if (algoritmaGrid) {
        // --- State dan Variabel Awal ---
        const COLS = 5, ROWS = 5;
        const mazeLayout = [
            ['start', 'path', 'path', 'wall', 'path'],
            ['wall',  'wall', 'path', 'wall', 'path'],
            ['path',  'path', 'path', 'path', 'path'],
            ['path',  'wall', 'wall', 'wall', 'wall'],
            ['path',  'path', 'path', 'path', 'finish'],
        ];
        let commandQueue = [];
        let robotStartPos = { x: 0, y: 0 };
        const urutanLangkahEl = document.getElementById('urutan-langkah');
        const feedbackEl = document.getElementById('hasil-feedback-algoritma');
        
        // --- Fungsi Inisialisasi/Reset ---
        function initAlgoritma() {
            commandQueue = [];
            urutanLangkahEl.innerHTML = '';
            feedbackEl.textContent = '';
            
            algoritmaGrid.innerHTML = '';
            algoritmaGrid.style.gridTemplateColumns = `repeat(${COLS}, 1fr)`;
            
            for(let r = 0; r < ROWS; r++) {
                for(let c = 0; c < COLS; c++) {
                    const cell = document.createElement('div');
                    cell.classList.add('grid-cell', mazeLayout[r][c]);
                    if (mazeLayout[r][c] === 'start') {
                        robotStartPos = { x: c, y: r };
                        cell.innerHTML = '🤖';
                    }
                    if (mazeLayout[r][c] === 'finish') cell.innerHTML = '✨';
                    cell.dataset.x = c;
                    cell.dataset.y = r;
                    algoritmaGrid.appendChild(cell);
                }
            }
        }

        // --- Fungsi untuk Menambahkan Perintah ---
        function addCommand(symbol, command) {
            commandQueue.push(command);
            urutanLangkahEl.innerHTML += `<span>${symbol}</span>`;
        }

        // --- Menghubungkan Tombol Kontrol ---
        document.getElementById('btn-atas').addEventListener('click', () => addCommand('↑', 'atas'));
        document.getElementById('btn-bawah').addEventListener('click', () => addCommand('↓', 'bawah'));
        document.getElementById('btn-kiri').addEventListener('click', () => addCommand('←', 'kiri'));
        document.getElementById('btn-kanan').addEventListener('click', () => addCommand('→', 'kanan'));
        document.getElementById('reset-algoritma').addEventListener('click', initAlgoritma);
        
        // --- Fungsi untuk Menjalankan Algoritma ---
        document.getElementById('jalankan-algoritma').addEventListener('click', () => {
            let currentPos = { ...robotStartPos };
            let step = 0;
            
            // Animasi pergerakan menggunakan setInterval
            const interval = setInterval(() => {
                // Hentikan jika semua perintah sudah dijalankan
                if (step >= commandQueue.length) {
                    clearInterval(interval);
                    checkFinalPosition(currentPos);
                    return;
                }

                const command = commandQueue[step];
                let nextPos = { ...currentPos };

                if (command === 'atas') nextPos.y--;
                if (command === 'bawah') nextPos.y++;
                if (command === 'kiri') nextPos.x--;
                if (command === 'kanan') nextPos.x++;
                
                // Validasi gerakan
                if (isValidMove(nextPos.x, nextPos.y)) {
                    currentPos = nextPos;
                    updateRobotUI(currentPos);
                } else {
                    clearInterval(interval);
                    feedbackEl.textContent = "Algoritma gagal! Robot menabrak tembok atau keluar jalur.";
                    feedbackEl.style.color = 'var(--error-color)';
                    return;
                }
                step++;
            }, 400); // Bergerak setiap 400ms untuk animasi
        });

        function isValidMove(x, y) {
            return x >= 0 && x < COLS && y >= 0 && y < ROWS && mazeLayout[y][x] !== 'wall';
        }
        
        function updateRobotUI(newPos) {
            // Hapus robot dari posisi lama
            const oldCell = algoritmaGrid.querySelector('.robot');
            if(oldCell) oldCell.classList.remove('robot');
            document.querySelectorAll('.grid-cell').forEach(cell => cell.innerHTML = cell.innerHTML.replace('🤖', ''));

            // Tambahkan robot ke posisi baru
            const targetCell = document.querySelector(`.grid-cell[data-x='${newPos.x}'][data-y='${newPos.y}']`);
            if(targetCell) targetCell.innerHTML = '🤖';
        }
        
        function checkFinalPosition(pos) {
            if (mazeLayout[pos.y][pos.x] === 'finish') {
                feedbackEl.textContent = "Berhasil! Algoritma Anda membawa robot ke tujuan!";
                feedbackEl.style.color = 'var(--success-color)';
            } else {
                feedbackEl.textContent = "Algoritma selesai, tapi robot belum sampai tujuan.";
                feedbackEl.style.color = 'var(--error-color)';
            }
        }
        
        // Panggil inisialisasi untuk pertama kali halaman dimuat
        initAlgoritma();
    }
});
