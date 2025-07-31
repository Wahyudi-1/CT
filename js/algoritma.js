// js/algoritma.js

/**
 * File JavaScript untuk Latihan Algoritma
 * ---------------------------------------
 * Mengelola semua level, variasi, dan mekanisme interaktif
 * khusus untuk halaman algoritma.html.
 */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================
    // BAGIAN 1: DATABASE LATIHAN KHUSUS ALGORITMA
    // 's' = start, 'f' = finish, 'w' = wall, 'p' = path, 'k' = key, 'd' = door
    // ==========================================================
    const LATIHAN_ALGORITMA = [
        {
            level: 1,
            tingkat: "Pra-Sekolah (3-6 thn)",
            variasi: [
                { id: "lurus", judul: "Jalan Lurus", instruksi: "Bantu robot berjalan lurus ke bintang!", layout: [['s', 'p', 'p', 'f']] },
                { id: "belok", judul: "Belok Kanan", instruksi: "Arahkan robot untuk berbelok ke bawah.", layout: [['s', 'p', 'p'], ['w', 'w', 'p'], ['w', 'w', 'f']] },
                { id: "zig-zag", judul: "Jalan Zig-Zag", instruksi: "Ikuti jalurnya sampai ke bintang!", layout: [['s', 'p', 'w'], ['w', 'p', 'w'], ['w', 'p', 'f']] },
                { id: "kotak-kecil", judul: "Putar Kotak", instruksi: "Arahkan robot mengelilingi kotak kecil.", layout: [['s', 'p', 'p'], ['w', 'p', 'f']] },
                { id: "turun-lurus", judul: "Lompat Turun", instruksi: "Buat robot turun lurus ke bintang.", layout: [['s'], ['p'], ['p'], ['f']] }
            ]
        },
        {
            level: 2,
            tingkat: "SD Awal (7-9 thn)",
            variasi: [
                { id: "satu-tembok", judul: "Hindari Tembok", instruksi: "Jangan menabrak tembok!", layout: [['s', 'p', 'p'], ['w', 'w', 'p'], ['f', 'p', 'p']] },
                { id: "lorong-sempit", judul: "Lorong Sempit", instruksi: "Hati-hati, jalannya sempit!", layout: [['s', 'w', 'f'], ['p', 'w', 'p'], ['p', 'p', 'p']] },
                { id: "U-turn", judul: "Jalan Buntu", instruksi: "Robot harus berputar balik.", layout: [['s', 'p', 'p'], ['p', 'w', 'w'], ['f', 'p', 'p']] },
                { id: "pilihan-atas-bawah", judul: "Pilih Jalan", instruksi: "Pilih jalan atas atau bawah?", layout: [['s', 'p', 'w', 'p', 'f'], ['w', 'p', 'p', 'p', 'w']] },
                { id: "lewati-tengah", judul: "Lewati Tengah", instruksi: "Temukan jalan di antara dua tembok.", layout: [['s', 'p', 'p', 'p'], ['w', 'w', 'p', 'w'], ['f', 'p', 'p', 'w']] }
            ]
        },
        {
            level: 3,
            tingkat: "SD Akhir (10-13 thn)",
            variasi: [
                { id: "kunci-dasar", judul: "Ambil Kunci!", instruksi: "Ambil kunci 🔑 untuk membuka pintu 🚪!", layout: [['s', 'p', 'k'], ['w', 'w', 'p'], ['d', 'p', 'f']] },
                { id: "pintu-jauh", judul: "Kunci dan Pintu", instruksi: "Kunci ada di atas, pintu di bawah.", layout: [['k', 'p', 's'], ['w', 'w', 'p'], ['p', 'p', 'p'], ['d', 'w', 'f']] },
                { id: "kunci-terhalang", judul: "Jalan Berputar", instruksi: "Jalan ke kunci sedikit memutar.", layout: [['s', 'p', 'p', 'p'], ['w', 'w', 'w', 'p'], ['k', 'p', 'd', 'f']] },
                { id: "dua-pintu", judul: "Pintu Tipuan", instruksi: "Hanya satu pintu yang bisa dibuka!", layout: [['s', 'p', 'w', 'k'], ['p', 'd', 'p', 'p'], ['w', 'w', 'w', 'p'], ['f', 'p', 'p', 'w']] },
                { id: "labirin-kunci", judul: "Labirin Kunci", instruksi: "Temukan kunci di dalam labirin.", layout: [['s', 'w', 'k', 'p'], ['p', 'p', 'p', 'w'], ['p', 'w', 'd', 'p'], ['p', 'p', 'w', 'f']] }
            ]
        },
        {
            level: 4,
            tingkat: "Remaja (14-20+ thn)",
            variasi: [
                { id: "jalur-terpendek", judul: "Jalur Terpendek", instruksi: "Temukan jalur terpendek (6 langkah) ke tujuan!", layout: [['s', 'p', 'p', 'p'], ['p', 'w', 'w', 'p'], ['p', 'p', 'p', 'f']], solusiPanjang: 6 },
                { id: "efisiensi", judul: "Lebih Cepat", instruksi: "Ada jalan panjang dan pendek. Pilih yang terpendek (7 langkah)!", layout: [['s', 'p', 'p', 'p', 'p', 'p', 'p'], ['p', 'w', 'w', 'w', 'w', 'w', 'p'], ['p', 'p', 'p', 'f', 'w', 'w', 'p']], solusiPanjang: 7 },
                { id: "hindari-loop", judul: "Hindari Putaran Sia-sia", instruksi: "Jangan berputar-putar! Jalur terpendek adalah 8 langkah.", layout: [['s', 'p', 'p', 'w'], ['w', 'p', 'w', 'w'], ['p', 'p', 'p', 'p'], ['p', 'w', 'f', 'p']], solusiPanjang: 8 },
                { id: "optimasi-diagonal", judul: "Pikirkan Biaya", instruksi: "Meskipun terlihat jauh, jalur lurus lebih efisien (9 langkah).", layout: [['s', 'p', 'w', 'p', 'p'], ['p', 'p', 'w', 'p', 'w'], ['w', 'p', 'p', 'p', 'p'], ['p', 'p', 'w', 'w', 'p'], ['p', 'w', 'f', 'p', 'p']], solusiPanjang: 9 },
                { id: "analisis-lintasan", judul: "Analisis Lintasan", instruksi: "Analisis kedua jalur dan temukan yang terpendek (10 langkah).", layout: [['s', 'p', 'p', 'w', 'f'], ['p', 'w', 'p', 'w', 'p'], ['p', 'w', 'p', 'p', 'p'], ['p', 'p', 'p', 'w', 'w']], solusiPanjang: 10 }
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
    let commandQueue = [];
    let isExecuting = false;

    function init() {
        if (!levelSelect) return;
        LATIHAN_ALGORITMA.forEach(levelData => {
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

        const levelData = LATIHAN_ALGORITMA.find(l => l.level === selectedLevel);
        if (!levelData || levelData.variasi.length === 0) return;

        const randomIndex = Math.floor(Math.random() * levelData.variasi.length);
        const latihanVariasi = levelData.variasi[randomIndex];
        currentLatihanData = { ...levelData, ...latihanVariasi };
        renderLatihan(currentLatihanData);
    }

    function renderLatihan(data) {
        commandQueue = [];
        const gridRows = data.layout.length;
        const gridCols = data.layout[0].length;

        const html = `
            <h3>${data.judul}</h3>
            <p>${data.instruksi}</p>
            <div class="algoritma-exercise-container">
                <div class="algoritma-controls">
                    <h4>Panel Kontrol</h4>
                    <div class="tombol-arah">
                        <button id="btn-atas">↑ Atas</button>
                        <button id="btn-bawah">↓ Bawah</button>
                        <button id="btn-kiri">← Kiri</button>
                        <button id="btn-kanan">→ Kanan</button>
                    </div>
                    <h4>Urutan Langkah Anda:</h4>
                    <div id="urutan-langkah" class="urutan-display"></div>
                    <div class="tombol-aksi">
                        <button id="jalankan-algoritma">Jalankan</button>
                        <button id="reset-algoritma">Reset</button>
                    </div>
                </div>
                <div class="algoritma-grid-container">
                    <div id="grid-labirin" class="grid-display" style="grid-template-columns: repeat(${gridCols}, 1fr);">
                        ${data.layout.flat().map(cellType => {
                            let content = '';
                            if (cellType === 's') content = '🤖';
                            if (cellType === 'f') content = '✨';
                            if (cellType === 'k') content = '🔑';
                            if (cellType === 'd') content = '🚪';
                            if (cellType === 'w') content = '⬛';
                            return `<div class="grid-cell ${cellType}">${content}</div>`;
                        }).join('')}
                    </div>
                </div>
            </div>`;
        
        exerciseArea.innerHTML = html;
        setupEventListeners();
    }
    
    function setupEventListeners() {
        document.getElementById('btn-atas').addEventListener('click', () => addCommand('↑', 'atas'));
        document.getElementById('btn-bawah').addEventListener('click', () => addCommand('↓', 'bawah'));
        document.getElementById('btn-kiri').addEventListener('click', () => addCommand('←', 'kiri'));
        document.getElementById('btn-kanan').addEventListener('click', () => addCommand('→', 'kanan'));
        document.getElementById('reset-algoritma').addEventListener('click', () => renderLatihan(currentLatihanData));
        document.getElementById('jalankan-algoritma').addEventListener('click', handleJalankanAlgoritma);
    }

    function addCommand(symbol, command) {
        if (isExecuting) return;
        commandQueue.push(command);
        document.getElementById('urutan-langkah').innerHTML += `<span>${symbol}</span>`;
    }

    function handleJalankanAlgoritma() {
        if (isExecuting || commandQueue.length === 0) return;
        isExecuting = true;
        feedbackEl.textContent = "Menjalankan algoritma...";
        feedbackEl.style.color = 'var(--dark-color)';

        let { startPos, hasKey } = getInitialState();
        let currentPos = { ...startPos };
        let step = 0;

        const interval = setInterval(() => {
            if (step >= commandQueue.length) {
                clearInterval(interval);
                validateFinalPosition(currentPos, hasKey);
                isExecuting = false;
                return;
            }

            const command = commandQueue[step];
            let nextPos = { ...currentPos };

            if (command === 'atas') nextPos.y--;
            if (command === 'bawah') nextPos.y++;
            if (command === 'kiri') nextPos.x--;
            if (command === 'kanan') nextPos.x++;

            const moveResult = isValidMove(nextPos, hasKey);
            if (moveResult.valid) {
                hasKey = moveResult.newHasKey;
                updateRobotUI(currentPos, nextPos, hasKey);
                currentPos = nextPos;
            } else {
                clearInterval(interval);
                feedbackEl.textContent = `Algoritma gagal! ${moveResult.reason}`;
                feedbackEl.style.color = 'var(--error-color)';
                isExecuting = false;
                return;
            }
            step++;
        }, 400);
    }

    function getInitialState() {
        const layout = currentLatihanData.layout;
        let startPos = { x: 0, y: 0 };
        for (let r = 0; r < layout.length; r++) {
            for (let c = 0; c < layout[r].length; c++) {
                if (layout[r][c] === 's') {
                    startPos = { x: c, y: r };
                    break;
                }
            }
        }
        return { startPos, hasKey: false };
    }

    function isValidMove(pos, hasKey) {
        const layout = currentLatihanData.layout;
        const rows = layout.length;
        const cols = layout[0].length;

        if (pos.y < 0 || pos.y >= rows || pos.x < 0 || pos.x >= cols) {
            return { valid: false, reason: "Robot keluar jalur." };
        }

        const cellType = layout[pos.y][pos.x];
        if (cellType === 'w') {
            return { valid: false, reason: "Robot menabrak tembok." };
        }
        if (cellType === 'd' && !hasKey) {
            return { valid: false, reason: "Pintu terkunci! Ambil kunci dulu." };
        }
        
        let newHasKey = hasKey;
        if (cellType === 'k') {
            newHasKey = true;
        }

        return { valid: true, newHasKey };
    }

    function updateRobotUI(oldPos, newPos, hasKey) {
        const cols = currentLatihanData.layout[0].length;
        const oldIndex = oldPos.y * cols + oldPos.x;
        const newIndex = newPos.y * cols + newPos.x;
        const cells = document.querySelectorAll('#grid-labirin .grid-cell');
        
        cells[oldIndex].innerHTML = cells[oldIndex].innerHTML.replace('🤖', '');
        cells[oldIndex].innerHTML += '<div class="robot-trail"></div>'; // Tinggalkan jejak
        
        const newCellType = currentLatihanData.layout[newPos.y][newPos.x];
        if (newCellType === 'k') {
            cells[newIndex].innerHTML = ''; // Kunci diambil
        }
        if (newCellType === 'd' && hasKey) {
            cells[newIndex].classList.add('unlocked');
        }
        cells[newIndex].innerHTML = '🤖' + cells[newIndex].innerHTML;
    }

    function validateFinalPosition(pos) {
        const cellType = currentLatihanData.layout[pos.y][pos.x];
        let isCorrect = cellType === 'f';
        let message = '';
        
        if (isCorrect) {
            if (currentLatihanData.solusiPanjang) {
                if (commandQueue.length === currentLatihanData.solusiPanjang) {
                    message = "Luar biasa! Kamu menemukan jalur terpendek!";
                } else if (commandQueue.length > currentLatihanData.solusiPanjang) {
                    message = `Berhasil! Tapi, bisakah kamu melakukannya lebih singkat dari ${commandQueue.length} langkah?`;
                    isCorrect = false; // Anggap "salah" jika bukan yang terpendek
                }
            } else {
                message = "Berhasil! Algoritma Anda membawa robot ke tujuan!";
            }
        } else {
            message = "Algoritma selesai, tapi robot belum sampai di tujuan.";
        }
        
        feedbackEl.textContent = message;
        feedbackEl.style.color = isCorrect ? 'var(--success-color)' : 'var(--error-color)';
    }

    init();
});
