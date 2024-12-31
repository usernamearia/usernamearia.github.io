const toggleButton = document.getElementById('mode-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    const isDarkMode = body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode', !isDarkMode);

    if (isDarkMode) {
        toggleButton.innerHTML = `<i class="fas fa-moon"></i>`;
        toggleButton.style.backgroundColor = '#333'; // Dark mode button color
        toggleButton.style.color = '#fff';
    } else {
        toggleButton.innerHTML = `<i class="fas fa-sun"></i>`;
        toggleButton.style.backgroundColor = '#f0f0f0'; // Light mode button color
        toggleButton.style.color = '#121212';
    }
});

function copyEmail() {
    navigator.clipboard.writeText('ariasafaie@gmail.com')
        .then(() => alert('Email copied to clipboard!'))
        .catch(err => console.error('Error copying email: ', err));
}
