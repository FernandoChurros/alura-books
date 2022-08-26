const btnMobile = document.querySelector('.header__menu-mobile');
const sectionMenuMobile = document.querySelector('.section__menu_active-mobile');

const btnDesktop = document.querySelector('.header__menu-desktop');
const sectionMenuDesktop = document.querySelector('.section__menu_active-desktop');

btnMobile.addEventListener('click', () => {
   sectionMenuMobile.classList.toggle('show-mobile');
   btnMobile.classList.toggle('header__menu-color');
});

btnDesktop.addEventListener('click', () => {
   sectionMenuDesktop.classList.toggle('show-desktop');
   btnDesktop.classList.toggle('header__menu-color');
});