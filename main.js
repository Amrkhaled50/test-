window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

const navMenuItems = document.querySelectorAll('.nav-menu li');

navMenuItems.forEach(item => {
    item.addEventListener('click', () => {
        item.querySelector('ul').classList.toggle('show-submenu');
    });
});

const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('.nav-menu');

menuIcon.addEventListener('click', () => {
    console.log('Menu icon clicked!');
    navMenu.classList.toggle('show-menu');
});