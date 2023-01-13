
const menuButton = document.querySelector('.header-mid-menu');
const menu = document.querySelector('.menu');
const cruz = document.querySelector('.menu-container-cruz i');



function toggleMenu(){
    menu.classList.toggle('menu-active');
    nav_bg_overlay.classList.toggle('bg-overlay-active');
    // Bloquear o desbloquear el scroll de la página
    if (menu.classList.contains('menu-active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

menuButton.addEventListener('click',toggleMenu);
cruz.addEventListener('click',toggleMenu);