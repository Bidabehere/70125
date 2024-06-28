function suma(val1, val2)
{
    let suma = val1 + val2;
    return suma;
}

const suma = (val1, val2) => {
    console.log("Entro a la funcion");
    let suma = val1 + val2;
    return suma;
}

const suma = (val1, val2) => val1 + val2;

let resultado = suma(1,2);

//resultado -> 3

//Un solo parametro puede ir sin parentesis
const restoUno = val => val - 1;
const restoUno = (val) => val - 1;



