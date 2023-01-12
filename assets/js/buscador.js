const buscador = document.querySelector('.buscador');
const carrusel = document.querySelector('.carrusel');
const lupa = document.querySelector('.header-mid-search');

function toggleBuscador(){
    buscador.classList.toggle('buscador-active');
    if (buscador.classList.contains('buscador-active')){
        carrusel.style.marginTop = '0';
    }else{
        carrusel.style.marginTop = '3rem';
    }
}

lupa.addEventListener('click',toggleBuscador);