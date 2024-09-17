function comprobarNumero() {
    // Obtener el valor del campo de texto
    let numero = document.getElementById("numero").value;

    // Convertir la entrada a un número
    numero = parseFloat(numero);

    // Referencia al párrafo donde se mostrará el resultado
    let resultado = document.getElementById("resultado");

    // Comprobar si es un número válido
    if (isNaN(numero)) {
        resultado.innerHTML = "Por favor, introduce un número válido.";
    } else {
        // Comprobar si el número es positivo, negativo o nulo
        if (numero > 0) {
            resultado.innerHTML = "El número es positivo";
        } else if (numero < 0) {
            resultado.innerHTML = "El número es negativo";
        } else {
            resultado.innerHTML = "El número es nulo";
        }
    }
}