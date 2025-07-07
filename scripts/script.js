'use strict';
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      
    }
  });
});

const box = document.querySelector('.about-description-one');
const box2 = document.querySelector('.about-description-two');
const box3 = document.querySelector('.rules-description');
const box4 = document.querySelector('.join-description');
const box5 = document.querySelector('.join-heading');
observer.observe(box);
observer.observe(box2);
observer.observe(box3);
observer.observe(box4);
observer.observe(box5);