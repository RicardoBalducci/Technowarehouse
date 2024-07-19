const imagenes = document.querySelectorAll('.slider li');
let pos = 1; // Comenzamos con la segunda imagen (slide2)

function cambiarImagen() {
    imagenes.forEach((img) => {
        img.style.opacity = '0'; // Ocultamos todas las imágenes
    });
    imagenes[pos - 1].style.opacity = '1'; // Mostramos la imagen actual
    pos = (pos % imagenes.length) + 1; // Avanzamos al siguiente slide
}

setInterval(cambiarImagen, 5000); // Cambia la imagen cada 5 segundos