/*Carrosel*/

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1, //garante apenas 1 slide
    loop: false, // sem loop
    margin: 0,
    dots: true, //Bolinhas de navegação
    dotsContainer: ".custom-dots", //Bolinhas personalizadas de navegação
    nav: false, //Tira as setas de navegação
    autoplay: false, //Desativa o autoplay
    smartSpeed: 1000, //suaviza a passada de slide
    responsive: {
      //resonsividade
      0: { items: 1 },
      768: { items: 1 },
      1024: { items: 1 },
    },
  });
});

/*show and hide skills section*/

const btncollapse1 = document.getElementById("btn-collapse1");
const divcollapse1 = document.getElementById("collapse1");
const btncollapse2 = document.getElementById("btn-collapse2");
const divcollapse2 = document.getElementById("collapse2");

btncollapse1.addEventListener("click", function () {
  if (divcollapse1.classList.contains("hidden")) {
    divcollapse1.classList.remove("hidden");
    divcollapse1.classList.add("show");
  } else {
    divcollapse1.classList.remove("show");
    divcollapse1.classList.add("hidden");
  }

  if (divcollapse2.classList.contains("show")) {
    divcollapse2.classList.remove("show");
    divcollapse2.classList.add("hidden");
  }
});

btncollapse2.addEventListener("click", function () {
  if (divcollapse2.classList.contains("hidden")) {
    divcollapse2.classList.remove("hidden");
    divcollapse2.classList.add("show");
  } else {
    divcollapse2.classList.remove("show");
    divcollapse2.classList.add("hidden");
  }

  if (divcollapse1.classList.contains("show")) {
    divcollapse1.classList.remove("show");
    divcollapse1.classList.add("hidden");
  }
});
