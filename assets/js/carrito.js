cruzCarrito = document.querySelector('.carrito-cruz');
carrito = document.querySelector('.carrito');
carritoIcon = document.querySelector('.header-mid-cart');
const carrito_bg_overlay = document.querySelector('.carrito-overlay');


function toggleMenu(){
    carrito.classList.toggle('carrito-active');
    carrito_bg_overlay.classList.toggle('carrito-overlay-active');
    // Bloquear o desbloquear el scroll de la página
    if (carrito.classList.contains('carrito-active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

carritoIcon.addEventListener('click', toggleMenu);
cruzCarrito.addEventListener('click', toggleMenu);
carrito_bg_overlay.addEventListener('click',toggleMenu);
