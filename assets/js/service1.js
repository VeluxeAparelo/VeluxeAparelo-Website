import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCV-kkU74FYsUMhDgWXhUekc_rdDS8_o4U",
  authDomain: "veluxeaparelo-d96f0.firebaseapp.com",
  databaseURL: "https://veluxeaparelo-d96f0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "veluxeaparelo-d96f0",
  storageBucket: "veluxeaparelo-d96f0.firebasestorage.app",
  messagingSenderId: "23135435409",
  appId: "1:23135435409:web:63ba7191aa328f61659d30",
  measurementId: "G-8SNYZGTSZL"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const CODIGO_VALIDACION = "VELUXE2025";

document.getElementById("add-org-btn").addEventListener("click", () => {
  const codigo = prompt("Introduce el código de validación:");
  if (codigo === CODIGO_VALIDACION) {
    mostrarFormulario();
  } else {
    alert("Código incorrecto. No tienes permiso para añadir organizaciones.");
  }
});

function mostrarFormulario() {
  const container = document.createElement("div");
  container.innerHTML = `
    <div class="org-form-modal">
      <h2>Añadir Organización</h2>
      <input type="text" id="org-nombre" placeholder="Nombre" />
      <input type="text" id="org-descripcion" placeholder="Descripción" />
      <input type="url" id="org-imagen" placeholder="URL de la imagen" />
      <input type="url" id="org-enlace" placeholder="Enlace (opcional)" />
      <button id="org-submit">Guardar</button>
      <button id="org-cancel">Cancelar</button>
    </div>
  `;
  document.body.appendChild(container);

  document.getElementById("org-submit").addEventListener("click", async () => {
    const nombre = document.getElementById("org-nombre").value.trim();
    const descripcion = document.getElementById("org-descripcion").value.trim();
    const imagen = document.getElementById("org-imagen").value.trim();
    const enlace = document.getElementById("org-enlace").value.trim();

    if (!nombre || !descripcion || !imagen) {
      alert("Por favor completa todos los campos obligatorios.");
      return;
    }

    try {
      await addDoc(collection(db, "organizaciones"), {
        nombre,
        descripcion,
        imagen,
        enlace,
        fecha: new Date()
      });
      alert("Organización añadida correctamente.");
      location.reload();
    } catch (e) {
      console.error("Error al guardar:", e);
      alert("Hubo un error al guardar.");
    }
  });

  document.getElementById("org-cancel").addEventListener("click", () => {
    container.remove();
  });
}


import { getDocs, collection } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";

async function mostrarOrganizaciones() {
  const contenedor = document.getElementById("org-container");
  const querySnapshot = await getDocs(collection(db, "organizaciones"));

  querySnapshot.forEach((doc) => {
    const data = doc.data();

    const card = document.createElement("div");
    card.style.width = "300px";
    card.style.border = "1px solid #ccc";
    card.style.borderRadius = "10px";
    card.style.padding = "15px";
    card.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
    card.style.background = "#fff";

    card.innerHTML = `
      <img src="${data.imagen}" alt="${data.nombre}" style="width:100%; border-radius: 8px;">
      <h3>${data.nombre}</h3>
      <p>${data.descripcion}</p>
      ${data.enlace ? `<a href="${data.enlace}" target="_blank">Visitar</a>` : ""}
    `;

    contenedor.appendChild(card);
  });
}

// Llama a la función al cargar la página
mostrarOrganizaciones();

