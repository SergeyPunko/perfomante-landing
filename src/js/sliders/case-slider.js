
// import 'swiper/css';

function caseSlider() {
  const cs = document.querySelector('.case__slider');
  if (cs) {
    const swiper = new Swiper('.case__slider', {
      loop: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        spaceBetween: 20,
      },
    });
  }
}

export default caseSlider;