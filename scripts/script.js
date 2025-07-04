'use strict';
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      
    }
  });
});

const box = document.querySelector('.about-description-one');
observer.observe(box);
