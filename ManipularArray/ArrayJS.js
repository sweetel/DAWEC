function Aprobados() {

    let arrayIni = [7, 3, 9, 5.5, 8, 2, 10, 6, 4, 1, 8, 7, 6, 5.5, 9];

    let arrayApro = arrayIni.filter(nota => nota >= 5);

    console.log("Aprobados: " + arrayApro);

    let array5 = arrayIni.filter(nota => nota === 5.5);
    
    console.log("aprobados con 5.5: " + array5);
    }
    Aprobados();


