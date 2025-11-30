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

// Roblox Ban Countdown
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

  if (services.roblox.countdownEl) {
    services.roblox.countdownEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
}

// Icon Animation
function blinkIcon(el) {
  if (el) {
    el.setAttribute("data-blink", "true");
  }
}

// Initialize
function updateServices() {
  updateRobloxCountdown();
  
  // Make icons blink (pulsing effect)
  blinkIcon(services.roblox.el);
  blinkIcon(services.central.el);
  blinkIcon(services.discord.el);
  blinkIcon(services.minecraft.el);
}

// Update every second
setInterval(updateServices, 1000);

// Refresh button functionality
if (refreshButton) {
  refreshButton.addEventListener('click', () => {
    updateServices();
    // Optional: Reload page to simulate a full check
    window.location.reload(); 
  });
}

// Run immediately on load
updateServices();