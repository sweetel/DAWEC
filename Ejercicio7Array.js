
const notas = [8, 9, 7, 6, 10, 5, 8, 9, 7, 6, 10, 5, 8, 9, 6];

function media() {
const media = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
console.log(`La media de la clase es: ${media.toFixed(2)}`);
}
media();