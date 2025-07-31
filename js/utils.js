// js/utils.js

/**
 * File Utilitas Bersama
 * Berisi fungsi-fungsi yang dapat digunakan kembali di berbagai modul latihan.
 * Gunakan 'export' agar bisa di-import oleh file lain.
 */

// Fungsi untuk menangani semua interaksi drag and drop.
export function setupDragDropListeners() {
    const draggables = document.querySelectorAll('.draggable-item');
    const dropZones = document.querySelectorAll('.drop-zone');
    
    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', () => draggable.classList.add('dragging'));
        draggable.addEventListener('dragend', () => draggable.classList.remove('dragging'));
    });

    dropZones.forEach(zone => {
        zone.addEventListener('dragover', e => {
            e.preventDefault(); // Memungkinkan drop
            zone.style.backgroundColor = '#e9ecef'; // Feedback visual saat hover
        });
        zone.addEventListener('dragleave', () => {
            zone.style.backgroundColor = ''; // Kembali normal saat keluar
        });
        zone.addEventListener('drop', e => {
            e.preventDefault();
            zone.style.backgroundColor = '';
            const draggable = document.querySelector('.dragging');
            if (draggable) {
                zone.appendChild(draggable);
            }
        });
    });
}

// Fungsi untuk menangani interaksi klik dan seleksi.
export function setupSeleksiKlikListeners() {
    document.querySelectorAll('.selectable-item').forEach(item => {
        item.addEventListener('click', () => item.classList.toggle('selected'));
    });
}
