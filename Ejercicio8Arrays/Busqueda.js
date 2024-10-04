function buscarTr() {
    let parrafos =  document.getElementsByClassName("titular");
    let parrafosArray = Array.from(parrafos);

    parrafosArray.forEach(elemento => {

        let dato = elemento.textContent

        if(!dato.includes("tr")){
        alert(dato);
        }
    })
}

function cambiarColor(elemento) {
    console.log(elemento)
}