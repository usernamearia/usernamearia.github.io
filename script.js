document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Form submitted! Thank you for reaching out.');
        form.reset();
    });
});
