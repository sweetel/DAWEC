function anadirArray() {

    let array = [];

    while(true) {

        let input = prompt("introduce un numero ");
        if (input === "") break;
        array.push(Number(input));
    }

    array.sort();

    console.log("array ordenador " + array);
}

anadirArray();