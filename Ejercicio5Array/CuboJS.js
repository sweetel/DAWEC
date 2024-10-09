// Definimos la función cubo utilizando una arrow function con retorno implícito
const cubo = num => num * num * num;

function calcularCubo() {
    // Obtenemos el valor ingresado por el usuario
    const numero = document.getElementById("numero").value;

    if (!numero || !Number.isInteger(numero)) {
        alert("Por favor, introduce un numero entero.");
        return;
    }

    // Convertimos el valor a número y calculamos el cubo
    const resultado = cubo(Number(numero));

    // Mostramos el resultado en el párrafo correspondiente
    document.getElementById("resultado").innerText = `El cubo de ${numero} es: ${resultado}`;
}
