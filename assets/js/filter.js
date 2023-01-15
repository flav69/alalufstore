filterButton = document.querySelector('.filter-button');
filterPage = document.querySelector('.filter-desplegable');
filterBackButton = document.querySelector('.filter-back-button');
function toggleMenu(){
    filterPage.classList.toggle('filter-desplegable-active');
    // carrito_bg_overlay.classList.toggle('carrito-overlay-active');
    // Bloquear o desbloquear el scroll de la página
    if (filterPage.classList.contains('filter-desplegable-active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
        filterPage.style.position = "fixed"; //para que ocupe toda la pantalla
    }
}

filterButton.addEventListener('click', toggleMenu);
filterBackButton.addEventListener('click', toggleMenu);
// carrito_bg_overlay.addEventListener('click',toggleMenu);