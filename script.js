const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('nav');

menuIcon.onclick = () => {
    menuIcon.querySelector('i').classList.toggle('fa-bars');
    menuIcon.querySelector('i').classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    navbar.classList.remove('active');
    menuIcon.querySelector('i').classList.remove('fa-xmark');
    menuIcon.querySelector('i').classList.add('fa-bars');
};