document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.hero .slides li');
  let currentSlide = 0;

  function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }

  slides.forEach((slide, index) => {
    slide.style.backgroundImage = `url(${slide.getAttribute('data-bg-image')})`;
    if (index === 0) {
      slide.classList.add('active');
    }
  });

  setInterval(showNextSlide, 3000);
});
