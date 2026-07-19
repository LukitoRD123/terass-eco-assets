(function () {
  "use strict";

  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".hero-dot");
  const nextBtn = document.querySelector(".hero-next");
  const prevBtn = document.querySelector(".hero-prev");

  if (!slides.length) return;

  let index = 0;
  let timer;

  function showSlide(i) {

    slides.forEach(slide => {
      slide.classList.remove("active");
    });

    dots.forEach(dot => {
      dot.classList.remove("active");
    });

    slides[i].classList.add("active");

    if (dots[i]) {
      dots[i].classList.add("active");
    }

    index = i;
  }


  function nextSlide() {
    index++;
    if (index >= slides.length) {
      index = 0;
    }

    showSlide(index);
  }


  function prevSlide() {
    index--;
    if (index < 0) {
      index = slides.length - 1;
    }

    showSlide(index);
  }


  function startSlider(){
    timer = setInterval(nextSlide,5000);
  }


  function stopSlider(){
    clearInterval(timer);
  }


  // tombol next prev
  if(nextBtn){
    nextBtn.onclick = nextSlide;
  }

  if(prevBtn){
    prevBtn.onclick = prevSlide;
  }


  // klik dot
  dots.forEach((dot,i)=>{
    dot.onclick=function(){
      showSlide(i);
      stopSlider();
      startSlider();
    };
  });


  showSlide(0);
  startSlider();


})();
