// Referencias a los elementos del DOM
const vehiculoSi = document.getElementById('vehiculoSi');
const vehiculoNo = document.getElementById('vehiculoNo');
const coche = document.getElementById('coche');
const moto = document.getElementById('moto');
const ambos = document.getElementById('ambos');
const tablaContainer = document.getElementById('tablaContainer');

// Evento para habilitar o deshabilitar las opciones de tipo de vehículo
vehiculoSi.addEventListener('change', function() {
  coche.disabled = false;
  moto.disabled = false;
  ambos.disabled = false;
  eliminarTabla();  // Eliminamos cualquier tabla previa al cambiar la opción
});

vehiculoNo.addEventListener('change', function() {
  coche.disabled = true;
  moto.disabled = true;
  ambos.disabled = true;
  coche.checked = false;
  moto.checked = false;
  ambos.checked = false;
  eliminarTabla();  // Si el usuario selecciona "No", eliminamos la tabla
});

// Evento para detectar qué tipo de vehículo se selecciona y generar la tabla
coche.addEventListener('change', function() {
  mostrarTablaCoches();
});

moto.addEventListener('change', function() {
  mostrarTablaMotos();
});

ambos.addEventListener('change', function() {
  mostrarTablaCoches();
  mostrarTablaMotos();
});

// Función para mostrar la tabla de coches
function mostrarTablaCoches() {
  eliminarTabla();  // Eliminamos cualquier tabla previa
  const tablaCoches = `
    <table>
      <thead>
        <tr>
          <th>Tipo de Coche</th>
          <th>Número de Plazas</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Sedan</td><td>5</td></tr>
        <tr><td>SUV</td><td>7</td></tr>
        <tr><td>Hatchback</td><td>4</td></tr>
      </tbody>
    </table>
  `;
  tablaContainer.innerHTML += tablaCoches;
}

// Función para mostrar la tabla de motos
function mostrarTablaMotos() {
  eliminarTabla();  // Eliminamos cualquier tabla previa
  const tablaMotos = `
    <table>
      <thead>
        <tr>
          <th>Tipo de Moto</th>
          <th>Cilindrada</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Deportiva</td><td>600cc</td></tr>
        <tr><td>Cruiser</td><td>1200cc</td></tr>
        <tr><td>Scooter</td><td>125cc</td></tr>
      </tbody>
    </table>
  `;
  tablaContainer.innerHTML += tablaMotos;
}

// Función para eliminar la tabla existente
function eliminarTabla() {
  tablaContainer.innerHTML = '';
}