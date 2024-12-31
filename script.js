function copyEmail() {
    navigator.clipboard.writeText('ariasafaie@gmail.com')
        .then(() => alert('Email copied to clipboard!'))
        .catch(err => console.error('Error copying email: ', err));
}
