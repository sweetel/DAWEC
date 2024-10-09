function comprobarDNI(dni) {

    let cadenaLetras = "TRWAGMYFPDXBNJZSQVHLCKE";

    let letra = dni.charAt(8);
    let parteNumerica = parseInt(dni);
    let posLetra = parteNumerica % 23;

    console.log(cadenaLetras[posLetra]);

    return cadenaLetras[posLetra] === letra;
    
}
console.log(comprobarDNI("70894130"));