// Insertar año actual en el footer
document.getElementById("year").textContent = new Date().getFullYear();

// Scroll suave al hacer clic en "Ver más"
document.getElementById("ver-mas").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("#info").scrollIntoView({
    behavior: "smooth",
  });
});

// Manejo del formulario
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const output = document.getElementById("msg-output");

  if (!name || !email) {
    output.textContent = "Por favor llena el nombre y el correo.";
    output.style.color = "red";
    return;
  }

  output.textContent = `Gracias ${name}, tu mensaje ha sido enviado correctamente.`;
  output.style.color = "green";

  this.reset();
});
