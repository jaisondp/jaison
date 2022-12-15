function cambiarColor() {
    var body = document.body;
    var colores = ['#2e3540', '#2e3440', '#2e3340', '#2e3240', '#2e3140', '#2e3040'];
    var colorIndex = 0;
    var colorHex = colores[colorIndex];
    colorIndex = (colorIndex + 1) % colores.length;

    body.classList.add("transition");
    body.style.backgroundColor = colorHex;
  
    setTimeout(function() {
      body.classList.remove("transition");
    }, 500);
  }
  
  setInterval(cambiarColor, 5000);
