
const menuButton = document.querySelector('.header-mid-menu');
const menu = document.querySelector('.menu');

menuButton.addEventListener('click', ()=>{
    menu.classList.toggle('menu-active');
});