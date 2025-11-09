// Script para el flujo de autenticación simulada con TikTok

document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');
    
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            // Simular redirección a TikTok OAuth
            // En producción, esto sería la URL real de TikTok
            const mockAuthCode = 'mockAuth123';
            const callbackUrl = `callback.html?code=${mockAuthCode}`;
            
            // Agregar un pequeño delay para simular el proceso de autenticación
            loginBtn.disabled = true;
            loginBtn.textContent = 'Redirecting...';
            loginBtn.classList.add('opacity-75', 'cursor-not-allowed');
            
            setTimeout(() => {
                window.location.href = callbackUrl;
            }, 500);
        });
    }
});

