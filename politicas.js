document.addEventListener('DOMContentLoaded', function () {
    // Script para manejar el enlace de cierre
    document.querySelector('.btn-cerrar').addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = 'index.html#suscripcion'; // Navegar a la sección de suscripción
    });
});