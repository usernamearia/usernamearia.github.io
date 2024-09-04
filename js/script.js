document.addEventListener('DOMContentLoaded', function() {
  console.log('Portfolio website loaded');
  
  // Scroll effect to change the navbar background color
  const nav = document.querySelector('nav');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      nav.classList.add('bg-blue-700');
    } else {
      nav.classList.remove('bg-blue-700');
    }
  });
});
