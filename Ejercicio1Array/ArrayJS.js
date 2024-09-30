function gestionarArray() {
    const array = [];
    
    while (true) {
        const inputNumero = prompt("Introduce un número (o una cadena para salir):");
        
        // Si la entrada no es un número, salimos de la función
        if (isNaN(inputNumero)) {
            console.log("Saliendo de la función.");
            break;
        }

        const numero = parseInt(inputNumero, 10);
        const nombre = prompt("Introduce un nombre:");

        const confirmar = confirm(`¿Quieres añadir el valor ${numero} y el nombre ${nombre}?`);

        if (confirmar) {
            if (numero >= 0) {
                // Añadir el nombre en la posición indicada
                array[numero] = nombre; // Asigna el nombre a la posición correspondiente
            } else {
                // Añadir al final si es negativo
                array.push(nombre);
            }
        } else {
            if (numero >= 0) {
                // Eliminar en la posición indicada
                delete array[numero]; // Eliminar el valor en la posición
            } else {
                // Eliminar el primero si es negativo
                array.shift(); // Elimina el primer elemento del array
            }
        }

        console.log("Estado actual del array:", array);
    }
}

// Llamada a la función
gestionarArray();
