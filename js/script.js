document.addEventListener('DOMContentLoaded', function() {
  console.log('Portfolio website loaded');

  // Example: Add a scroll effect
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      nav.classList.add('bg-blue-700');
    } else {
      nav.classList.remove('bg-blue-700');
    }
  });

  // Example hover effect for project cards
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.05)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)';
    });
  });
});
