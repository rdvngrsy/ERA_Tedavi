// Responsive Nav Menu


const navMenu = () => {
    const navbarToggler = document.querySelector('.navbar-toggler')
    const navList = document.querySelector('.nav-list')

    navbarToggler.addEventListener('click', () => {
        navList.classList.toggle('nav-active')
        navbarToggler.classList.toggle('toggle')
    })
}

navMenu()

// Services Slider

const slider = document.querySelector('#services-slider');
const imgSlider = document.querySelector('#services-image');

const prev = document.querySelector('#arrow-left');
const next = document.querySelector('#arrow-right');

let currentSlide = 0;

const slides = document.querySelectorAll('.services-slide');
const imgSlides = document.querySelectorAll('.service-img');


prev.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  updateSlider();
});

next.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide > slides.length - 1) {
    currentSlide = 0;
  }
  updateSlider();
});

const updateSlider = () => {
  slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
    
  });
  imgSlides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
};

updateSlider();




// Scroll Reveal Animation //

ScrollReveal().reveal('.ani-left',{
    origin: 'left',
    distance: '10rem',
    duration: 1000,
    easing: 'ease-in-out'
});

ScrollReveal().reveal('.ani-right',{
    origin: 'right',
    distance: '10rem',
    duration: 1000,
    easing: 'ease-in-out'
});

ScrollReveal().reveal('.ani-bottom',{
    origin: 'bottom',
    distance: '10rem',
    duration: 1000,
    easing: 'ease-in-out'
});

ScrollReveal().reveal('.ani-vertical-left',{
    origin: 'right',
    distance: '10rem',
    duration: 2000,
    easing: 'ease-in-out',
});

ScrollReveal().reveal('.ani-vertical-right',{
    origin: 'left',
    distance: '10rem',
    duration: 2000,
    easing: 'ease-in-out',
});

ScrollReveal().reveal('.ani-fade-up',{
    opacity: 0,
    easing: 'ease-in'
});

ScrollReveal().reveal('.ani-delay',{
    delay: 400
});

ScrollReveal().reveal('.ani-delay-2',{
    delay: 800
});