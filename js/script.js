// Add pulse animation to all links on hover (Tailwind's animate-pulse class)
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('mouseenter', () => link.classList.add('animate-pulse'));
  link.addEventListener('mouseleave', () => link.classList.remove('animate-pulse'));
});
