let currentSlide = 0;

const slides = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    }); 
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});

function menu() {
    // Ocultar todo el contenido actual
    var contenidoActual = document.getElementById("contenido-uno");
    contenidoActual.style.display = "none";

    var contenidoActual = document.getElementById("contenido-dos");
    contenidoActual.style.display = "none";

    var contenidoActual = document.getElementById("contenido-tres");
    contenidoActual.style.display = "none";

    // Mostrar el nuevo contenido
    var nuevoContenido = document.getElementById("inicio");
    nuevoContenido.style.display = "block";
}

function intro() {
    // Ocultar todo el contenido actual
    var contenidoActual = document.getElementById("inicio");
    contenidoActual.style.display = "none";

    var contenidoActual = document.getElementById("contenido-dos");
    contenidoActual.style.display = "none";

    var contenidoActual = document.getElementById("contenido-tres");
    contenidoActual.style.display = "none";

    // Mostrar el nuevo contenido
    var nuevoContenido = document.getElementById("contenido-uno");
    nuevoContenido.style.display = "block";
}

function actores() {
    // Ocultar todo el contenido actual
    var contenidoActual = document.getElementById("inicio");
    contenidoActual.style.display = "none";

    var contenidoActual = document.getElementById("contenido-uno");
    contenidoActual.style.display = "none";

    var contenidoActual = document.getElementById("contenido-tres");
    contenidoActual.style.display = "none";

    // Mostrar el nuevo contenido
    var nuevoContenido = document.getElementById("contenido-dos");
    nuevoContenido.style.display = "block";
}

function contacto() {
    // Ocultar todo el contenido actual
    var contenidoActual = document.getElementById("inicio");
    contenidoActual.style.display = "none";

    var contenidoActual = document.getElementById("contenido-uno");
    contenidoActual.style.display = "none";

    var contenidoActual = document.getElementById("contenido-dos");
    contenidoActual.style.display = "none";

    // Mostrar el nuevo contenido
    var nuevoContenido = document.getElementById("contenido-tres");
    nuevoContenido.style.display = "block";
}

