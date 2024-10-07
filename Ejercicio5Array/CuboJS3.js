
const cubo = function(num) {
    return num * num * num;
};

function calcularCubo() {
    // Obtenemos el valor ingresado por el usuario
    const numero = document.getElementById("numero").value;

    // Convertimos el valor a número y calculamos el cubo
    const resultado = cubo(Number(numero));

    // Mostramos el resultado en el párrafo correspondiente
    document.getElementById("resultado").innerText = `El cubo de ${numero} es: ${resultado}`;
}