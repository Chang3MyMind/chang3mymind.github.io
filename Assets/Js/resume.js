$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1, //garante apenas 1 slide
    loop: false, // sem loop
    margin: 0,
    dots: true, //Bolinhas de navegação
    dotsContainer: ".custom-dots", //Bolinhas personalizadas de navegação
    nav: false, //Tira as setas de navegação
    autoplay: false, //Desativa o autoplay
    smartSpeed: 800, //suaviza a passada de slide
    responsive: {
      //resonsividade
      0: { items: 1 },
      768: { items: 1 },
      1024: { items: 1 },
    },
  });
});
