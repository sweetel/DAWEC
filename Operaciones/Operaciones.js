function operaciones() {
    let num1 = parseFloat(prompt("Introduce el primer número:"));
    let num2 = parseFloat(prompt("Introduce el segundo número:"));
    
    // Variable para almacenar los resultados
    let resultado = "";

    // Multiplicación
    let multiplicacion = num1 * num2;
    resultado += "i. El resultado de multiplicarlos es: " + multiplicacion + "<br>";

    // División (si el segundo número no es cero)
    if (num2 !== 0) {
        let division = num1 / num2;
        resultado += "El resultado de dividir el primero entre el segundo es: " + division + "<br>";
    } else {
        resultado += "No se puede dividir entre cero. <br>";
    }

    // Resta del primero al segundo
    let resta = num2 - num1;
    resultado += "El resultado de restar el primero al segundo es: " + resta + "<br>";

    // Resta del cuadrado del primero al cuadrado del segundo
    let restaCuadrados = (num1 * num1) - (num2 * num2);
    resultado += "El resultado de restar el cuadrado del primero al cuadrado del segundo es: " + restaCuadrados + "<br>";

    // Mostrar solo el que sea positivo
    if (multiplicacion > 0) {
        resultado += "El resultado positivo es la multiplicación: " + multiplicacion + "<br>";
    }
    if (num2 !== 0 && num1 / num2 > 0) {
        resultado += "El resultado positivo es la división: " + num1 / num2 + "<br>";
    }
    if (resta > 0) {
        resultado += "El resultado positivo es la resta: " + resta + "<br>";
    }
    if (restaCuadrados > 0) {
        resultado += "El resultado positivo es la resta de cuadrados: " + restaCuadrados + "<br>";
    }

    // Mostrar el resultado en el div con id 'resultado'
    document.getElementById("resultado").innerHTML = resultado;
}
