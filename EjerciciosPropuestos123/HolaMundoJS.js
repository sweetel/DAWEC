alert("Hola mundo 2");

function mostrarVariables() {

    let variable1 = 0;

    alert("variable1: " + variable1);

    variable2 = null;
    alert("variable2; " + variable2);

    variable1 = 34;
    alert('Variable1 después de asignarla: ' + variable1);

    variable3 = 15.9;
    alert('Variable1 * Variable3: ' + (variable1 * variable3));

    variable3 = "ahora soy un texto";
    alert('Variable3 ahora es: ' + variable3);

    alert('Variable3 * 35: ' + (variable3 * 35)); 

}