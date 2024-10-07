document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item');
    const finalizarPedidoBtn = document.getElementById('finalizar-pedido');
    const resumenPedido = document.getElementById('resumen-pedido');
    const productosSeleccionados = document.getElementById('productos-seleccionados');
    const precioTotalElement = document.getElementById('precio-total');
    const precioMedioElement = document.getElementById('precio-medio');

    let carrito = {}; // Para almacenar los kilos por fruta
    let totalPrecio = 0; // Precio total acumulado
    let totalKilos = 0; // Kilos totales acumulados
    let pedidoFinalizado = false; // Bandera para saber si el pedido se ha finalizado

    // Función para añadir frutas al carrito
    items.forEach(item => {
        const img = item.querySelector('img');
        img.addEventListener('click', function() {
            const nombre = item.getAttribute('data-name');
            const precio = parseFloat(item.getAttribute('data-price'));

            // Si el pedido ha sido finalizado, empezamos una nueva compra
            if (pedidoFinalizado) {
                carrito = {};
                totalPrecio = 0;
                totalKilos = 0;
                resumenPedido.classList.add('hidden'); // Ocultar el resumen
                pedidoFinalizado = false; // Restablecer el estado de finalización
            }

            // Si ya existe la fruta en el carrito, añadimos más kilos
            if (carrito[nombre]) {
                carrito[nombre].kilos += 1;
            } else {
                // Si no, la añadimos por primera vez
                carrito[nombre] = { kilos: 1, precioPorKilo: precio };
            }

            // Sumar al total
            totalPrecio += precio;
            totalKilos += 1;
        });
    });

    // Mostrar el resumen del pedido al finalizar
    finalizarPedidoBtn.addEventListener('click', function() {
        // Limpiar el contenido del resumen
        productosSeleccionados.innerHTML = '';

        if (totalKilos === 0) {
            alert('No has añadido ninguna fruta al carrito.');
            return;
        }

        // Ordenar las frutas por nombre en orden alfabético inverso
        const frutasOrdenadas = Object.keys(carrito).sort().reverse();

        // Mostrar cada fruta con los kilos
        frutasOrdenadas.forEach(nombre => {
            const li = document.createElement('li');
            li.textContent = `${nombre} ---- ${carrito[nombre].kilos} kilos`;
            productosSeleccionados.appendChild(li);
        });

        // Mostrar el precio total y el precio medio por kilo
        precioTotalElement.textContent = `Precio total: ${totalPrecio}€`;
        const precioMedio = (totalPrecio / totalKilos).toFixed(2);
        precioMedioElement.textContent = `Precio medio: ${precioMedio} €/kg`;

        // Mostrar el resumen (quitar la clase hidden)
        resumenPedido.classList.remove('hidden');

        // Marcar el pedido como finalizado para comenzar uno nuevo
        pedidoFinalizado = true;
    });
});
