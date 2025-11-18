/* ============================
   AÑO AUTOMÁTICO EN EL FOOTER
============================ */
document.getElementById("year").textContent = new Date().getFullYear();

/* ============================
   SCROLL SUAVE AL HACER CLICK EN "VER MÁS"
============================ */
document.getElementById("ver-mas").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("#info").scrollIntoView({
    behavior: "smooth"
  });
});

/* ============================
   ANIMACIÓN AL HACER SCROLL (APARECER SUAVE)
============================ */
const elementos = document.querySelectorAll(".card");

function animarScroll() {
  elementos.forEach(el => {
    const posicion = el.getBoundingClientRect().top;
    const alturaPantalla = window.innerHeight - 100;

    if (posicion < alturaPantalla) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", animarScroll);
window.addEventListener("load", animarScroll);

/* ============================
   VALIDACIÓN Y MENSAJE DEL FORMULARIO
============================ */
const form = document.getElementById("contact-form");
const msgOutput = document.getElementById("msg-output");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Evita recargar la página

  const nombre = document.getElementById("name").value.trim();
  const correo = document.getElementById("email").value.trim();

  if (nombre === "" || correo === "") {
    msgOutput.textContent = "Por favor completa todos los campos obligatorios.";
    msgOutput.style.color = "red";
    return;
  }

  msgOutput.textContent = "¡Gracias por tu mensaje! Te responderé pronto 😊";
  msgOutput.style.color = "green";

  form.reset(); // Limpia el formulario
});

/* ============================
   EFECTO HOVER CON SONIDO (OPCIONAL)
============================ */
// Puedes activar esto si quieres un sonido al pasar sobre los botones
// Solo descomenta estas líneas y coloca un sonido en assets/hover.mp3

/*
const hoverSound = new Audio("assets/hover.mp3");
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mouseenter", () => hoverSound.play());
});
*/
