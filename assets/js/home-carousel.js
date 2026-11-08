const carousel = document.querySelector('.home-project-carousel');

if (carousel) {
  const slidesContainer = carousel.querySelector('.selected-projects');
  const slides = [...slidesContainer.children];
  const position = carousel.querySelector('.home-carousel-position');
  const buttons = carousel.querySelectorAll('[data-carousel-direction]');
  let activeIndex = 0;
  let scrollFrame;

  function updatePosition() {
    const containerCenter = slidesContainer.getBoundingClientRect().left + slidesContainer.clientWidth / 2;
    activeIndex = slides.reduce((closestIndex, slide, index) => {
      const distance = Math.abs(slide.getBoundingClientRect().left + slide.offsetWidth / 2 - containerCenter);
      const closestDistance = Math.abs(slides[closestIndex].getBoundingClientRect().left + slides[closestIndex].offsetWidth / 2 - containerCenter);
      return distance < closestDistance ? index : closestIndex;
    }, 0);
    position.textContent = `Project ${activeIndex + 1} of ${slides.length}`;
  }

  slidesContainer.addEventListener('scroll', () => {
    cancelAnimationFrame(scrollFrame);
    scrollFrame = requestAnimationFrame(updatePosition);
  }, { passive: true });

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const direction = Number(button.dataset.carouselDirection);
      const nextIndex = (activeIndex + direction + slides.length) % slides.length;
      const left = slidesContainer.scrollLeft + slides[nextIndex].getBoundingClientRect().left - slidesContainer.getBoundingClientRect().left;
      slidesContainer.scrollTo({
        left,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
      });
    });
  });
}
