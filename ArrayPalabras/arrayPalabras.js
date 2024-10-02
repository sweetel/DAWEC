function Palabras() {
    let arrayPalabras = ["Casa", "Coche", "rio", "alameda"];

    let palabrasCortas = arrayPalabras.filter(palabra => palabra.length < 6);

    console.log(palabrasCortas);
}

Palabras();

function PalabrasO() {
    let arrayPalabras = ["Casa", "Coche", "rio", "alameda", "ortopedocp"];

    let elemento = arrayPalabras.filter(palabra => palabra[palabra.length - 1] === 'o');

    console.log(elemento);
}
PalabrasO();

function mostrarTelefonos() {
    let arrayTlf = [615168722, 689547821, 745893857, 624587596];

    let array3 = arrayTlf.filter(palabra => palabra[palabra.length - 1] == "3");

    console.log(array3);
}

mostrarTelefonos();