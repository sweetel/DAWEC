// Función para generar la historia
function crearHistoria() {
    const personaje = document.getElementById('personaje').value;
    const adjetivo = document.getElementById('adjetivo').value;
    const ciudad = document.getElementById('ciudad').value;
    const transporte = document.getElementById('transporte').value;
    const aficion = document.getElementById('aficion').value;
    const momento = document.querySelector('input[name="hora"]:checked') ? document.querySelector('input[name="hora"]:checked').value : '';

    // Comprobamos que todos los campos estén completos
    if (personaje && adjetivo && ciudad && transporte && aficion && momento) {
        const historia = `${personaje}, un ${adjetivo} habitante de ${ciudad}, decidió un día viajar en ${transporte} al ${momento} mientras disfrutaba de su afición favorita: ${aficion}.`;
        document.getElementById('divHistoria').textContent = historia;
    } else {
        alert('Por favor, rellena todos los campos.');
    }
}

// Cambiar el fondo de los inputs al obtener y perder el foco
const inputs = document.querySelectorAll('input[type="text"]');
inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.style.backgroundColor = 'lightblue';
    });
    input.addEventListener('blur', function() {
        this.style.backgroundColor = '';
    });
});

// Cambiar el color del fondo del div al pasar el ratón por encima del h1
let historiaGenerada = false; // Bandera para controlar si la historia se ha generado
document.getElementById('tituloHistoria').addEventListener('mouseover', function() {
    const divHistoria = document.getElementById('divHistoria');
    if (divHistoria.textContent !== 'Aquí tu historia') {
        historiaGenerada = true; // La historia se ha generado
    }
    if (historiaGenerada) {
        if (divHistoria.style.backgroundColor === 'yellow') {
            divHistoria.style.backgroundColor = 'pink';
        } else {
            divHistoria.style.backgroundColor = 'yellow';
        }
    }
});