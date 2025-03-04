function copyEmail() {
    navigator.clipboard.writeText('ariasafaie@gmail.com')
        .then(() => {
            const notification = document.createElement('div');
            notification.innerHTML = `
                <div class="notification-content">
                    🚀 Email copied to clipboard!
                    <div class="progress-bar"></div>
                </div>
            `;
            
            notification.style.cssText = `
                position: fixed;
                bottom: -50px;
                left: 50%;
                transform: translateX(-50%);
                padding: 15px 30px;
                background: rgba(33, 150, 243, 0.9);
                color: white;
                border-radius: 8px;
                font-weight: 600;
                backdrop-filter: blur(5px);
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
                opacity: 0;
                transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            `;

            document.body.appendChild(notification);

            requestAnimationFrame(() => {
                notification.style.bottom = '30px';
                notification.style.opacity = '1';
            });

            const progressBar = notification.querySelector('.progress-bar');
            progressBar.style.cssText = `
                height: 3px;
                background: rgba(255, 255, 255, 0.5);
                width: 100%;
                margin-top: 10px;
                border-radius: 2px;
                transform-origin: left;
                animation: progress 2s linear;
            `;

            setTimeout(() => {
                notification.style.bottom = '-50px';
                notification.style.opacity = '0';
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 400);
            }, 2000);
        })
        .catch(err => {
            console.error('Error copying email: ', err);
            alert('Failed to copy email. Please manually select and copy it. | ariasafaie@gmail.com');
        });
}