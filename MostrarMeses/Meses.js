function mostrarMesPorNumero() {
    let meses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    // Pedir al usuario un número del 1 al 12
    let numero = parseInt(prompt("Introduce un número del 1 al 12:"));

    // Verificar que el número está en el rango correcto
    if (numero >= 1 && numero <= 12) {
        // Mostrar el mes correspondiente
        document.getElementById("mes").innerHTML = "El mes es: " + meses[numero - 1];
    } else {
        // Mostrar mensaje de error si el número no es válido
        document.getElementById("mes").innerHTML = "Por favor, introduce un número válido entre 1 y 12.";
    }
}
