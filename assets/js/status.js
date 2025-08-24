const refreshButton = document.getElementById('refresh-status');

const services = {
  roblox: {
    el: document.getElementById('roblox-status'),
    countdownEl: document.getElementById('roblox-countdown'),
    bannedDate: new Date('2025-08-10T15:31:00'),
    banDurationMonths: 6
  },
  discord: { el: document.getElementById('discord-status') },
  minecraft: { el: document.getElementById('minecraft-status') },
  central: { el: document.getElementById('central-status') }
};

// Contador de baneo Roblox
function updateRobloxCountdown() {
  const now = new Date();
  const banEnd = new Date(services.roblox.bannedDate);
  banEnd.setMonth(banEnd.getMonth() + services.roblox.banDurationMonths);

  let diff = banEnd - now;
  if (diff < 0) diff = 0;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  services.roblox.countdownEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Animación de iconos
function blinkIcon(el) {
  el.setAttribute("data-blink", "true");
}

// Inicializa
function updateServices() {
  updateRobloxCountdown();
  blinkIcon(services.roblox.el);
  // Iconos de otros servicios
  blinkIcon(services.central.el);
}

// Actualiza cada segundo
setInterval(updateServices, 1000);

// Botón de refresco
refreshButton.addEventListener('click', updateServices);


const collapseCountdownEl = document.getElementById('collapse-countdown');

function updateCollapseCountdown() {
  const now = new Date();
  const christmas = new Date(now.getFullYear(), 11, 25, 0, 0, 0); // 25 de diciembre del año actual
  let diff = christmas - now;

  if (diff < 0) {
    // Si ya pasó Navidad, se pasa al próximo año
    const nextChristmas = new Date(now.getFullYear() + 1, 11, 25, 0, 0, 0);
    diff = nextChristmas - now;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  collapseCountdownEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Actualiza cada segundo
setInterval(updateCollapseCountdown, 1000);
updateCollapseCountdown();
