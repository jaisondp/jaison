//colores 
const colores = ['#2e3440', '#2e3340', '#2e3240', '#2e3140'];

// funcion de cambiar de color 
function cambiarColor() {
  let i = 0;

  setInterval(function() {
    const color = colores[i];

    document.body.style.backgroundColor = color;

    i = (i + 1) % colores.length;
  }, 5000);
}

// Ejecuta la función "cambiarColor" cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', cambiarColor);

// tomeouts de las anims
setTimeout(function() {
  document.querySelector('.box').style.display = 'block';
}, 3000);

setTimeout(function() {
  document.querySelector('.iconos').style.display = 'block';
}, 6000);
