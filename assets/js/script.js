// JavaScript para mostrar y ocultar respuestas al hacer clic
document.querySelectorAll('.faq-item h3').forEach(item => {
  item.addEventListener('click', () => {
    item.parentElement.classList.toggle('active');
  });
});

// Selecciona todas las casillas de rol y añade un listener para el click
document.querySelectorAll('.rol').forEach(rol => {
  rol.addEventListener('click', () => {
    rol.classList.toggle('active');
  });
});
