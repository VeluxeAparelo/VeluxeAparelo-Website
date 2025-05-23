// Referencias a elementos
const buyButton = document.getElementById('buy-button');
const intervention = document.getElementById('intervention');

// Al hacer clic en "Comprar"
buyButton.addEventListener('click', () => {
  // Mostrar intervención personalizada
  intervention.classList.remove('hidden');
  intervention.classList.add('show');
  
  // Opcional: desactivar botón tras clic
  buyButton.disabled = true;
  buyButton.textContent = "Intervenido por VeluxeGuard";
});
