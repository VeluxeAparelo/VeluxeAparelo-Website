// Referencias a elementos
const buyButton = document.getElementById('buy-button');
const intervention = document.getElementById('intervention');

// Crear audios
const voiceAudio = new Audio('https://cdn.glitch.global/a94d6c8f-712b-44e3-bd1b-82abab2fb302/ATJ.mp3?v=1748030601724');
const backgroundMusic = new Audio('https://cdn.glitch.global/a94d6c8f-712b-44e3-bd1b-82abab2fb302/VAAPIAUD.mp3?v=1748029967890'); // ← Reemplaza con la URL de la música

voiceAudio.volume = 1.0;         // Voz clara
backgroundMusic.volume = 0.4;    // Música suave
backgroundMusic.loop = true;     // Que la música se repita

// Al hacer clic en "Comprar"
buyButton.addEventListener('click', () => {
  // Mostrar intervención personalizada
  intervention.classList.remove('hidden');
  intervention.classList.add('show');

  // Reproducir ambos audios
  voiceAudio.play().catch(err => console.error('Error al reproducir voz:', err));
  backgroundMusic.play().catch(err => console.error('Error al reproducir música:', err));

  // Desactivar botón tras clic
  buyButton.disabled = true;
  buyButton.textContent = "Intervenido por VeluxeGuard";
});
