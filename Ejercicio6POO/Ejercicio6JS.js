function calcularNotaMedia() {
    // Pedir al usuario que introduzca las notas separadas por comas
    let entrada = prompt("Introduce las notas separadas por comas:");
    
    // Convertir la cadena de texto en un array de números
    let notas = entrada.split(",").map(Number);

    // Calcular la suma de las notas
    let suma = notas.reduce((total, nota) => total + nota, 0);

    // Calcular la media
    let media = suma / notas.length;

    // Mostrar la media por consola
    console.log("La nota media es: " + media.toFixed(2));
}

// Llamar a la función
calcularNotaMedia();
 