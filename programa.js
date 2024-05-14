

function escribir(){
    document.write()
}
function mostrarNumeros() {
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = ""; // Limpiar el contenido anterior
    
    for (var i = 1; i <= 1000; i++) {
      resultadoDiv.innerHTML += i + "<br>";
    }
  }