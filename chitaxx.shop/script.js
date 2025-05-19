const menuIcon = document.getElementById('menu-icon');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');

// Menü ikonuna tıklayınca aç/kapa
menuIcon.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Kapatma butonuna tıklayınca menüyü kapat
closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
});