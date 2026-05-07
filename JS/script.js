// =============================================
// JOSEPH ASSEFA PORTFOLIO — script.js
// =============================================
 
// Fade-up scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });
 
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
 
// Shrink nav on scroll
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navigation');
  if (window.scrollY > 50) {
    nav.style.padding = '1rem 4rem';
  } else {
    nav.style.padding = '1.5rem 4rem';
  }
});
 
// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Adjust hero image position based on screen size
function adjustHeroImage() {
  const img = document.querySelector('.hero-image img');
  if (!img) return;
  
  const width = window.innerWidth;
  const height = window.innerHeight;
  const ratio = width / height;

  if (ratio > 3) {
    // Super ultrawide
    img.style.objectPosition = '50% 40%';
  } else if (ratio > 2) {
    // Ultrawide
    img.style.objectPosition = '50% 45%';
  } else if (ratio > 1.5) {
    // Standard widescreen
    img.style.objectPosition = '50% 30%';
  } else {
    // Narrow / mobile
    img.style.objectPosition = '50% 20%';
  }
}

adjustHeroImage();
window.addEventListener('resize', adjustHeroImage);