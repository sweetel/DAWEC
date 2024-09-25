function mostrarFecha() {
  
  var dia = document.getElementById("dia").value;
  var mes = document.getElementById("mes").value;
  var año = document.getElementById("año").value;

  if (dia && mes && año) {
    document.getElementById("resultado").innerHTML =
      "Hoy es " + dia + " de " + mes + " de " + año;
  } else {
    document.getElementById("resultado").innerHTML =
      "Por favor, introduce todos los datos";
  }
}
