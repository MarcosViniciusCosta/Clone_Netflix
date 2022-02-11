$('.owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});


(document.getElementById("botao_info")).addEventListener("click",abrir_info);
(document.getElementById("botao_assistir")).addEventListener("click",assistir);


function abrir_info()
{
    window.open("https://www.themoviedb.org/tv/42009-black-mirror?language=pt-BR");
}

function assistir()
{
    window.open("https://www.netflix.com/br/title/70264888?source=35");
}



