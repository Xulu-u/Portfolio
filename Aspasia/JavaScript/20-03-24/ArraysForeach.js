//Crea un array con cinco nombres de persona y recórrelo con un bucle for mostrando el texto «Conozco a alguien llamado «.
const arr = ["juan", "dwada", "svvddv", "odawdo", "poipoi"];

arr.forEach(arrelem => console.log("Conozco a alguien llamado " + arrelem))

//Recorrer la siguiente lista con un bucle imprimiendo el doble de cada número:
const numbers = [1, 9, 3, 8, 5, 7]

numbers.forEach(arrelem => console.log(arrelem * 2))

//Contar el número de elementos positivos, negativos y que valgan cero en un array de 10 enteros. Los valores habrán sido harcodeados en un array. La salida por consola debería ser similar a esta:
const arr2 = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7];

const cantidad = (arr) => {
    let pos = 0;
    let neg = 0;
    let zero = 0;

    arr2.forEach(arrelem => {
        if (arrelem > 0) pos++;
        else if (arrelem < 0) neg++;
        else zero++;
    })

    console.log('Cantidad de positivos: ' + pos + '\nCantidad de negativos: ' + neg + '\nCantidad de zeros: ' + zero);
}

cantidad(arr);
