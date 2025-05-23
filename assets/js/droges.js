// Referencias a elementos
const buyButton = document.getElementById('buy-button');
const intervention = document.getElementById('intervention');

// Crear audio
const interventionAudio = new Audio('https://cdn.glitch.global/a94d6c8f-712b-44e3-bd1b-82abab2fb302/VAAPIAUD.mp3?v=1748029967890');
interventionAudio.volume = 0.7; // Puedes ajustar el volumen (0.0 a 1.0)

// Al hacer clic en "Comprar"
buyButton.addEventListener('click', () => {
  // Mostrar intervención personalizada
  intervention.classList.remove('hidden');
  intervention.classList.add('show');

  // Reproducir audio
  interventionAudio.play().catch(error => {
    console.error('Error al reproducir el audio:', error);
  });

  // Desactivar botón tras clic
  buyButton.disabled = true;
  buyButton.textContent = "Intervenido por VeluxeGuard";
});
