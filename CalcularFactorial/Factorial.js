function calcularFactorial() {
    // Pedir al usuario que introduzca un número
    let numero = parseInt(prompt("Introduce un número entero positivo:"));

    // Verificar que el número es válido
    if (numero >= 0) {
        let factorial = 1;

        // Calcular el factorial
        for (let i = 1; i <= numero; i++) {
            factorial *= i;  // Multiplicar el número por el factorial acumulado
        }

        // Mostrar el resultado en el div con id 'resultado'
        document.getElementById("resultado").innerHTML = "El factorial de " + numero + " es: " + factorial;
    } else {
        // Mostrar mensaje de error si el número no es válido
        document.getElementById("resultado").innerHTML = "Por favor, introduce un número entero positivo.";
    }
}
