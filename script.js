"use strict";

const fotosSection = document.getElementById('fotos-section');
const btnFotos = document.querySelector('.btn-fotos');

const medaillenSection = document.getElementById('medaillen-section');
const btnMedaillen = document.querySelector('.btn-medaillen');

const testimonialsSection = document.getElementById('testimonials');
const btnTestimonials = document.querySelector('.btn-testimonials');

btnFotos.addEventListener('click', function(e) {
    e.preventDefault();
    fotosSection.scrollIntoView({ behavior: 'smooth'});

}, false);

btnMedaillen.addEventListener('click', function(e) {
    e.preventDefault();
    medaillenSection.scrollIntoView({ behavior: 'smooth'});

}, false);

btnTestimonials.addEventListener('click', function(e) {
    e.preventDefault();
    testimonialsSection.scrollIntoView({ behavior: 'smooth'});

}, false);



// Revealing Sections
const revealSections = document.querySelectorAll('.reveal');


const scrollRevealer = function(entries, observer) {
    const [entry] = entries;
    console.log('entry', entry);
    if (!entry.isIntersecting) return;
  
    entry.target.classList.remove('section--hidden')
    observer.unobserve(entry.target);
  }
  
  const revealerOptions = {
    root: null, 
    threshold: 0.15, // if you set it to 0.15, it will trigger when 15% of page is srolled
    rootMargin: '0px',
  };
  
  const sectionObserver = new IntersectionObserver(scrollRevealer, revealerOptions);
  
  revealSections.forEach( sec => {
    sectionObserver.observe(sec);
    sec.classList.add('section--hidden');
  });
  