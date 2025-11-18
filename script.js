// ============================
//  Navegación Responsive
// ============================
const menuBtn = document.querySelector("#menu-btn");
const nav = document.querySelector("nav");

menuBtn?.addEventListener("click", () => {
    nav.classList.toggle("open");
});

// Cerrar menú al hacer click en un enlace
nav?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => nav.classList.remove("open"));
});


// ============================
//  Animaciones al hacer scroll
// ============================
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, 
    { threshold: 0.2 }
);

// Agregar animación a secciones
document.querySelectorAll(".section").forEach(section => observer.observe(section));


// ============================
//  Botón "Volver arriba"
// ============================
const backToTop = document.querySelector("#backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        backToTop?.classList.add("visible");
    } else {
        backToTop?.classList.remove("visible");
    }
});

backToTop?.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// ============================
//  Modo Oscuro / Claro
// ============================
const themeBtn = document.querySelector("#theme-btn");
const body = document.body;

// Cargar modo desde localStorage
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
}

themeBtn?.addEventListener("click", () => {
    body.classList.toggle("dark");
    
    if (body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});
