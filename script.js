// Toast notification system
function showToast(message, duration = 2500) {
  const toastContainer = document.getElementById('toast-container');

  // Create toast element
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.setAttribute('role', 'alert');

  // Create toast content
  const toastContent = document.createElement('div');
  toastContent.className = 'toast-content';

  // Create message
  const toastMessage = document.createElement('div');
  toastMessage.className = 'toast-message';
  toastMessage.textContent = message;

  // Create progress bar container
  const progressBarContainer = document.createElement('div');
  progressBarContainer.className = 'progress-bar-container';

  // Create progress bar
  const progressBar = document.createElement('div');
  progressBar.className = 'progress-bar';
  progressBarContainer.appendChild(progressBar);

  // Create close button
  const closeButton = document.createElement('button');
  closeButton.className = 'toast-close';
  closeButton.innerHTML = '&times;';
  closeButton.setAttribute('aria-label', 'Close notification');

  // Add event listener to close button
  closeButton.addEventListener('click', () => {
    closeToast(toast);
  });

  // Append elements to toast
  toastContent.appendChild(toastMessage);
  toastContent.appendChild(progressBarContainer);
  toast.appendChild(toastContent);
  toast.appendChild(closeButton);

  // Append toast to container
  toastContainer.appendChild(toast);

  // Make toast visible after a short delay (for animation)
  setTimeout(() => {
    toast.classList.add('visible');
  }, 10);

  // Auto close toast after duration
  const timeoutId = setTimeout(() => {
    closeToast(toast);
  }, duration);

  // Store timeout ID on the toast element
  toast.timeoutId = timeoutId;

  // Return toast element for potential external manipulation
  return toast;
}

function closeToast(toast) {
  // Clear auto close timeout
  clearTimeout(toast.timeoutId);

  // Start removal animation
  toast.classList.remove('visible');

  // Remove from DOM after animation completes
  setTimeout(() => {
    if (toast.parentNode) {
      toast.parentNode.removeChild(toast);
    }
  }, 400);
}

function copyEmail() {
  navigator.clipboard
    .writeText('ariasafaie@gmail.com')
    .then(() => {
      showToast('🚀 Email copied to clipboard!');
    })
    .catch((err) => {
      console.error('Error copying email: ', err);
      showToast(
        '⚠️ Failed to copy email. Please manually use: ariasafaie@gmail.com'
      );
    });
}

// Toggle content visibility
function toggleContent() {
  const contentSections = document.getElementById('content-sections');
  const ctaButton = document.querySelector('.cta-button');

  if (contentSections.classList.contains('hidden')) {
    // Show content
    contentSections.classList.remove('hidden');
    contentSections.classList.add('visible');
    ctaButton.innerHTML =
      '<i class="fas fa-chevron-up" aria-hidden="true"></i> Hide Content';

    // Scroll to the experience section with offset for more comfortable spacing
    const experienceSection = document.querySelector('.experience');
    const headerHeight = 80; // Add some extra space (adjust this value as needed)

    // Calculate position with offset
    const offsetPosition =
      experienceSection.getBoundingClientRect().top +
      window.pageYOffset -
      headerHeight;

    // Scroll to the calculated position
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  } else {
    // Hide content
    contentSections.classList.remove('visible');
    contentSections.classList.add('hidden');
    ctaButton.innerHTML =
      '<i class="fas fa-folder-open" aria-hidden="true"></i> Explore My Work';

    // Scroll back to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
  // Add skip to content link for keyboard users
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.className = 'skip-to-content';
  skipLink.textContent = 'Skip to main content';
  document.body.insertBefore(skipLink, document.body.firstChild);

  // Hide content sections initially
  const contentSections = document.getElementById('content-sections');
  contentSections.classList.add('hidden');

  // Add click event listener to CTA button
  const ctaButton = document.querySelector('.cta-button');
  ctaButton.addEventListener('click', function (e) {
    e.preventDefault();
    toggleContent();
  });

  // Make cards keyboard focusable
  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    card.addEventListener('keydown', function (e) {
      // If Enter or Space is pressed, simulate hover effect
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        // Toggle a class that mimics hover
        this.classList.toggle('card-focus');
      }
    });
  });
});
