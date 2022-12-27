// Inicializamos la libreria Glider

window.addEventListener('load', function(){
    new Glider(document.querySelector('.carrusel__lista'),{
        //Aqui agregamos las opciones de Glider
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: '.carrusel__indicadores',
        arrows: {
            prev: '.carrusel__anterior',
            next: '.carrusel__siguiente'
        },
        //Codigo responsive de Glider
        responsive: [
            {
                breakpoint: 500,
                settings:{
                    slidesToShow: '3',
                    slidesToScroll:'3',
                    itemWidth: 150,
                    duration: 0.25,
                }
            },
            {
                breakpoint: 768,
                settings:{
                    slidesToShow: '4',
                    slidesToScroll:'2',

        
                }
            }
        ]
    });
});

