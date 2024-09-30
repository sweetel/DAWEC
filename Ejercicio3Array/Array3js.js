function mostrarSplit() {
    
    const input = prompt("introduce valores separados por /");

    let valores = input.split("/");

    valores.sort();

    const resultado = valores.join("-");
    
    console.log("valores ordenadores " + resultado);
}

mostrarSplit();
