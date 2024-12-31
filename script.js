const nameElement = document.getElementById('mode-toggle');
const body = document.body;

nameElement.addEventListener('click', () => {
    const isDarkMode = body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode', !isDarkMode);
});

function copyEmail() {
    navigator.clipboard.writeText('ariasafaie@gmail.com')
        .then(() => alert('Email copied to clipboard!'))
        .catch(err => console.error('Error copying email: ', err));
}
