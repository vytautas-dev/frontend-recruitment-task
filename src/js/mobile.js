// adding active class to hamurger bar and ul container

const hamburgerMenu = document.querySelector('.navbar__toggle');
const menuList = document.querySelector('.navbar__list');

const mobileMenu = () => {
    hamburgerMenu.classList.toggle('is-active');
    menuList.classList.toggle('active');
}

hamburgerMenu.addEventListener('click', mobileMenu);