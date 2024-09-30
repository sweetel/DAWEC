function mostarArray() {
    
    let array = ["tela", "bies", "hilo", "tijeras", "maquina coser", "boton"];

    array.splice(1, 1);

    console.log("array despues de eliminar " + array);

    array.splice(2,0,"hilo torzal");

    console.log("array despues de insertar " + array);

    array.splice(3, 1, "cuter rotatorio", "mesa de corte");

    console.log("array despues de insertar 2 elementeos " + array);

    array2 = array.slice(0,3);
    array3 = array.slice(3,6);

    console.log("nuevvo array2 " + array2);
    console.log("nuevo array3 " + array3);

    array2.unshift("remalladora");
    array3.splice(-1, 0, "cinta metrica");

    console.log("array1 " + array);
    console.log("nuevvo array2 despues de " + array2);
    console.log("nuevo array3 despues e a " + array3);

    array.sort((a,b) => b.length - a.length);
    console.log("array ordenador por num de caracteres " + array);
} 
mostarArray();