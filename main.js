// proyek-ct/js/exercises.js

/**
 * File JavaScript untuk Latihan Interaktif
 * 
 * Berisi semua logika untuk:
 * 1. Dekomposisi (Drag & Drop)
 * 2. Pengenalan Pola (Tebak Pilihan)
 * 3. Abstraksi (Seleksi Teks)
 * 4. Algoritma (Puzzle Labirin)
 */

// Event listener ini memastikan semua kode dijalankan setelah
// seluruh halaman HTML selesai dimuat. Ini adalah praktik terbaik.
document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================
    // LOGIKA UNTUK HALAMAN DEKOMPOSISI
    // ==========================================================
    const dekomposisiContainer = document.getElementById('kotak-rakitan');
    if (dekomposisiContainer) {
        const komponenList = document.querySelectorAll('.komponen');
        const cekJawabanBtn = document.getElementById('cek-jawaban-dekomposisi');
        const feedbackEl = document.getElementById('hasil-feedback');

        // Tambahkan event listener untuk setiap komponen yang bisa di-drag
        komponenList.forEach(komponen => {
            komponen.addEventListener('dragstart', () => {
                komponen.classList.add('dragging');
            });
            komponen.addEventListener('dragend', () => {
                komponen.classList.remove('dragging');
            });
        });

        // Tambahkan event listener untuk drop zone
        dekomposisiContainer.addEventListener('dragover', e => {
            e.preventDefault(); // Wajib agar event 'drop' bisa terjadi
            const afterElement = getDragAfterElement(dekomposisiContainer, e.clientY);
            const draggable = document.querySelector('.dragging');
            if (afterElement == null) {
                dekomposisiContainer.appendChild(draggable);
            } else {
                dekomposisiContainer.insertBefore(draggable, afterElement);
            }
        });

        // Cek jawaban ketika tombol diklik
        cekJawabanBtn.addEventListener('click', () => {
            const jawabanBenar = ['cpu', 'ram', 'mobo', 'psu', 'storage'];
            const jawabanUser = [];
            const komponenDiRakitan = dekomposisiContainer.querySelectorAll('.komponen');

            komponenDiRakitan.forEach(komp => jawabanUser.push(komp.dataset.id));

            // Cek apakah jawaban user mengandung semua jawaban benar dan tidak ada yang salah
            const isCorrect = jawabanBenar.length === jawabanUser.length && jawabanBenar.every(j => jawabanUser.includes(j));

            if (isCorrect) {
                feedbackEl.textContent = "Hebat! Kamu berhasil mengidentifikasi semua komponen inti. Ini adalah dekomposisi yang baik!";
                feedbackEl.style.color = 'var(--success-color)';
            } else {
                feedbackEl.textContent = "Oops, sepertinya ada komponen yang salah atau kurang. Coba periksa lagi mana yang merupakan komponen internal utama.";
                feedbackEl.style.color = 'var(--error-color)';
            }
        });

        function getDragAfterElement(container, y) {
            const draggableElements = [...container.querySelectorAll('.komponen:not(.dragging)')];
            return draggableElements.reduce((closest, child) => {
                const box = child.getBoundingClientRect();
                const offset = y - box.top - box.height / 2;
                if (offset < 0 && offset > closest.offset) {
                    return { offset: offset, element: child };
                } else {
                    return closest;
                }
            }, { offset: Number.NEGATIVE_INFINITY }).element;
        }
    }

    // ==========================================================
    // LOGIKA UNTUK HALAMAN PENGENALAN POLA
    // ==========================================================
    const polaContainer = document.getElementById('pilihan-jawaban');
    if (polaContainer) {
        const pilihanButtons = polaContainer.querySelectorAll('.pilihan');
        const feedbackEl = document.getElementById('hasil-feedback-pola');
        const resetBtn = document.getElementById('reset-pola');

        pilihanButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                // Nonaktifkan semua tombol setelah memilih
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
                resetBtn.style.display = 'inline-block';
            });
        });
        
        resetBtn.addEventListener('click', () => {
            location.reload(); // Cara termudah untuk reset adalah me-reload halaman
        });
    }

    // ==========================================================
    // LOGIKA UNTUK HALAMAN ABSTRAKSI
    // ==========================================================
    const abstraksiContainer = document.getElementById('resep-cerita');
    if (abstraksiContainer) {
        const kalimatList = abstraksiContainer.querySelectorAll('.kalimat');
        const cekJawabanBtn = document.getElementById('cek-jawaban-abstraksi');
        const feedbackEl = document.getElementById('hasil-feedback-abstraksi');

        kalimatList.forEach(kalimat => {
            kalimat.addEventListener('click', () => {
                kalimat.classList.toggle('selected');
            });
        });

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

            if (correctSelected === totalCorrect && incorrectSelected === 0) {
                feedbackEl.textContent = "Sempurna! Kamu berhasil memisahkan instruksi inti dari cerita. Itulah inti dari abstraksi!";
                feedbackEl.style.color = 'var(--success-color)';
            } else {
                feedbackEl.textContent = "Hmm, sepertinya ada instruksi yang terlewat atau ada cerita yang ikut terpilih. Coba fokus pada langkah-langkah penting saja.";
                feedbackEl.style.color = 'var(--error-color)';
            }
        });
    }

    // ==========================================================
    // LOGIKA UNTUK HALAMAN ALGORITMA
    // ==========================================================
    const algoritmaGrid = document.getElementById('grid-labirin');
    if (algoritmaGrid) {
        // --- State dan Variabel ---
        const COLS = 5, ROWS = 5;
        const mazeLayout = [
            ['start', 'path', 'path', 'wall', 'path'],
            ['wall',  'wall', 'path', 'wall', 'path'],
            ['path',  'path', 'path', 'path', 'path'],
            ['path',  'wall', 'wall', 'wall', 'wall'],
            ['path',  'path', 'path', 'path', 'finish'],
        ];
        let commandQueue = [];
        let robotPos = { x: 0, y: 0 };
        const urutanLangkahEl = document.getElementById('urutan-langkah');
        const feedbackEl = document.getElementById('hasil-feedback-algoritma');
        
        // --- Inisialisasi ---
        function initAlgoritma() {
            // Reset state
            commandQueue = [];
            urutanLangkahEl.innerHTML = '';
            feedbackEl.textContent = '';
            
            // Gambar grid
            algoritmaGrid.innerHTML = '';
            algoritmaGrid.style.gridTemplateColumns = `repeat(${COLS}, 1fr)`;
            
            for(let r = 0; r < ROWS; r++) {
                for(let c = 0; c < COLS; c++) {
                    const cell = document.createElement('div');
                    cell.classList.add('grid-cell', mazeLayout[r][c]);
                    if (mazeLayout[r][c] === 'start') {
                        robotPos = { x: c, y: r };
                        cell.innerHTML = '🤖';
                    }
                    if (mazeLayout[r][c] === 'finish') cell.innerHTML = '✨';
                    cell.dataset.x = c;
                    cell.dataset.y = r;
                    algoritmaGrid.appendChild(cell);
                }
            }
        }

        // --- Kontrol ---
        document.getElementById('btn-atas').addEventListener('click', () => addCommand('↑', 'atas'));
        document.getElementById('btn-bawah').addEventListener('click', () => addCommand('↓', 'bawah'));
        document.getElementById('btn-kiri').addEventListener('click', () => addCommand('←', 'kiri'));
        document.getElementById('btn-kanan').addEventListener('click', () => addCommand('→', 'kanan'));
        document.getElementById('reset-algoritma').addEventListener('click', initAlgoritma);
        
        function addCommand(symbol, command) {
            commandQueue.push(command);
            urutanLangkahEl.innerHTML += `<span>${symbol}</span>`;
        }

        // --- Eksekusi Algoritma ---
        document.getElementById('jalankan-algoritma').addEventListener('click', () => {
            let currentPos = { ...robotPos };
            let step = 0;
            
            const interval = setInterval(() => {
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
                
                // Cek batas dan tembok
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
            }, 500); // Bergerak setiap 500ms
        });

        function isValidMove(x, y) {
            return x >= 0 && x < COLS && y >= 0 && y < ROWS && mazeLayout[y][x] !== 'wall';
        }
        
        function updateRobotUI(pos) {
            document.querySelectorAll('.grid-cell').forEach(cell => cell.innerHTML = cell.innerHTML.replace('🤖', ''));
            const targetCell = document.querySelector(`.grid-cell[data-x='${pos.x}'][data-y='${pos.y}']`);
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
        
        // Panggil inisialisasi saat halaman dimuat
        initAlgoritma();
    }
});
