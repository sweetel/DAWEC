function mostrarValores() {
    // Pedimos al usuario que introduzca los valores separados por "/"
    const input = prompt("Introduce valores separados por /");

    if (!input) {
        alert("Por favor, introduce algunos valores.");
        return;
    }

    // Dividimos la cadena por el carácter "/"
    let valores = input.split("/");

  

    // Ordenamos el array de menor a mayor (numéricamente)
    valores.sort((a, b) => a - b);

    // Unimos los valores ordenados con el carácter "-"
    const resultado = valores.join("-");

    // Mostramos el resultado en la consola
    console.log("Valores ordenados: " + resultado);

    // Mostramos el resultado en la página HTML
    document.getElementById("resultado").textContent = "Valores ordenados: " + resultado;
}
