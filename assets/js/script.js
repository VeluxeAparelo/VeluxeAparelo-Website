// JavaScript para mostrar y ocultar respuestas al hacer clic
document.querySelectorAll('.faq-item h3').forEach(item => {
  item.addEventListener('click', () => {
    item.parentElement.classList.toggle('active');
  });
});
