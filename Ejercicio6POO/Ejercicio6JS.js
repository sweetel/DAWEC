function mostrarNotas() {

    const input = prompt("introduce notas separadas por coma");

    if(!input) {
        alert("no has introducido ninguna nota");
        return;
    }

      // Dividimos la cadena por el carácter "/"
      let valores = input.split(",");

  

  
      // Unimos los valores ordenados con el carácter "-"
      const resultado = valores.join("");
  
      // Mostramos el resultado en la consola
      console.log("Valores ordenados: " + resultado);
} 
mostrarNotas();