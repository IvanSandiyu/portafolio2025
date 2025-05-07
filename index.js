const carousel = document.getElementById("carousel");
const slides = carousel.children;
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;

// Actualiza la posición del carrusel
function updateCarousel() {
  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

// Ir al siguiente slide
nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});

// Ir al slide anterior
prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});

// Indicadores (opcional)
const indicators = document.querySelectorAll(".absolute > button");
indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    currentIndex = index;
    updateCarousel();
  });
});
