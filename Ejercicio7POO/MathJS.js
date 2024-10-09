function numAleatorio(min, max){

    return Math.floor(Math.random() * (max - min + 1) + min);
}

numAleatorio(0,100);