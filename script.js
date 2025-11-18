// Mostrar año actual en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Botón "Ver más" - scroll suave
document.getElementById('ver-mas').addEventListener('click', function(e){
  e.preventDefault();
  document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
});

// Formulario - simular envío
document.getElementById('contact-form').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const msg = `Gracias ${name}, tu mensaje ha sido enviado (simulado).`;
  const out = document.getElementById('msg-output');
  out.textContent = msg;
  out.style.color = 'green';
  this.reset();
});
