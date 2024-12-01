// Toggle Sidebar
const sidebar = document.getElementById('sidebar');
const navbarToggle = document.getElementById('navbar-toggle');
const overlay = document.getElementById('overlay');

// Show sidebar when navbar toggle is clicked
navbarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
});

// Hide sidebar when clicking outside the sidebar
overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});




// Whatsapp
let lastScrollTop = 0; // Untuk melacak posisi scroll sebelumnya
const whatsappIcon = document.getElementById('whatsapp-icon');

// Fungsi untuk mendeteksi scroll ke bawah atau ke atas
window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Jika scroll ke bawah, tampilkan ikon WhatsApp
        whatsappIcon.classList.add('visible');
    } else {
        // Jika scroll ke atas, sembunyikan ikon WhatsApp
        whatsappIcon.classList.remove('visible');
    }

    // Update posisi scroll terakhir
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Untuk menghindari nilai negatif
});





// Menambahkan animasi ketika elemen ter-scroll ke bawah
window.addEventListener('scroll', function() {
    const boxes = document.querySelectorAll('.box');
    const windowHeight = window.innerHeight;

    boxes.forEach(function(box) {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < windowHeight - 100) {
            box.style.transform = 'translateX(0)';
            box.style.opacity = '1';
        }
    });
});



























