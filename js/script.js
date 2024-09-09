// Fetch LinkedIn profile picture dynamically (optional enhancement)
document.addEventListener('DOMContentLoaded', () => {
  const profilePic = document.getElementById('profile-pic');
  if (profilePic) {
      fetchLinkedInPic(profilePic);
  }
});

function fetchLinkedInPic(imgElement) {
  // Example fallback image, replace with proper API if available
  imgElement.src = 'https://media.licdn.com/dms/image/D4E35AQGvB1ZBscLXeQ/profile.jpg';
}

// Add pulse animation to all links on hover
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('mouseenter', () => link.classList.add('animate-pulse'));
  link.addEventListener('mouseleave', () => link.classList.remove('animate-pulse'));
});
