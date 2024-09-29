function recomendar() {
    let edad = document.getElementById("edad").value;
    let resultado = document.getElementById("resultado");

    if (edad === "" || isNaN(edad)) {
        resultado.textContent = "Por favor, introduce un número válido.";
        return;
    }

    edad = parseInt(edad);

    if (edad < 7) {
        resultado.textContent = "Recomendación: Patrulla Canina.";
    } else if (edad >= 7 && edad < 14) {
        resultado.textContent = "Recomendación: Alexa y Katie.";
    } else if (edad >= 14 && edad < 19) {
        resultado.textContent = "Recomendación: Anne with an E.";
    } else if (edad >= 19 && edad < 36) {
        resultado.textContent = "Recomendación: Stranger Things.";
    } else if (edad >= 36) {
        resultado.textContent = "Recomendación: Sherlock.";
    }

    // Bucle hasta que el usuario meta un número entre 45 y 72
    if (edad >= 45 && edad <= 72) {
        resultado.textContent += " ¡Número aceptado! Saliendo del bucle.";
    }
}
