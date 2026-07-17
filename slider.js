/*!
 * TERASS ECO
 * slider.js v1.0
 */

(function () {
  "use strict";

  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".hero-dot");

  if (!slides.length) return;

  let index = 0;

  function showSlide(i) {

    slides.forEach(slide => slide.classList.remove("active"));

    if (dots.length) {
      dots.forEach(dot => dot.classList.remove("active"));
    }

    slides[i].classList.add("active");

    if (dots.length) {
      dots[i].classList.add("active");
    }

  }

  function nextSlide() {
    index++;
    if (index >= slides.length) index = 0;
    showSlide(index);
  }

  setInterval(nextSlide, 5000);

})();
