// Mapeo de colores con tonos claro, intermedio y oscuro
const colores = {
    rosa: {
        claro: '#f8bbd0',  // Rosa claro
        intermedio: '#ec407a',  // Rosa intermedio
        oscuro: '#880e4f'  // Rosa oscuro
    },
    verde: {
        claro: '#a5d6a7',  // Verde claro
        intermedio: '#66bb6a',  // Verde intermedio
        oscuro: '#2e7d32'  // Verde oscuro
    },
    azul: {
        claro: '#90caf9',  // Azul claro
        intermedio: '#42a5f5',  // Azul intermedio
        oscuro: '#0d47a1'  // Azul oscuro
    }
};

// Capturamos los divs
const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');

// Función para cambiar los colores
function cambiarColores(colorSeleccionado) {
    const coloresSeleccionados = colores[colorSeleccionado];
    div1.style.backgroundColor = coloresSeleccionados.claro;
    div1.textContent = 'Div 1 (' + colorSeleccionado + ' intermedio)'; // Cambiamos el texto del primer div al tono intermedio
    div2.style.backgroundColor = coloresSeleccionados.intermedio;
    div3.style.backgroundColor = coloresSeleccionados.oscuro;
}

// Añadimos evento a los radio buttons
document.querySelectorAll('input[name="color"]').forEach(radio => {
    radio.addEventListener('change', function() {
        cambiarColores(this.value);
    });
});