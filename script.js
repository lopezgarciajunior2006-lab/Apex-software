
// Esperar a que el DOM cargue
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Funcionalidad del botón "Hablemos"
    const btnHablemos = document.querySelector('.nav-cta');
    btnHablemos.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('#contacto').scrollIntoView({ behavior: 'smooth' });
    });
const btnHablemosMenu = document.querySelector('.nav-cta');
btnHablemosMenu.addEventListener('click', () => {
    // Animación extra para el botón de WhatsApp al hacer clic en Hablemos
    const waButton = document.querySelector('.whatsapp-float');
    waButton.style.transform = 'scale(1.3)';
    setTimeout(() => waButton.style.transform = 'scale(1)', 500);
});
    // 2. Manejo del Formulario
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulación de envío (Aquí conectarás con Firebase luego)
        const btn = form.querySelector('button');
        btn.innerText = 'Enviando...';
        btn.disabled = true;

        setTimeout(() => {
            alert('¡Mensaje recibido! Un consultor de Apex Software Group te contactará en breve.');
            form.reset();
            btn.innerText = 'Enviar Propuesta';
            btn.disabled = false;
        }, 2000);
    });
});