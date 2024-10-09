document.querySelector('.linkedin-login-button').addEventListener('click', function() {
    // Simular error en inicio de sesión
    let errorMessage = document.getElementById('error-message');
    errorMessage.textContent = "Error: No se pudo iniciar sesión con LinkedIn.";
    errorMessage.style.display = 'block';
});