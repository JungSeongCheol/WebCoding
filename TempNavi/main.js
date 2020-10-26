const toggleBtn = document.querySelector('.navbar__toogleBtn');
const menu = document.querySelector('.nav_Menu');
const icons = document.querySelector('nav_icon');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});