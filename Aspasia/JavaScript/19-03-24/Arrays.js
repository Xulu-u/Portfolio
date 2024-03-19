//Crea un array con cinco nombres de persona y recórrelo con un bucle for mostrando el texto «Conozco a alguien llamado «.
const arr = ["juan", "dwada", "svvddv", "odawdo", "poipoi"];

for (let i = 0; i < arr.length; i++) {
    console.log("Conozco a alguien llamado " + arr[i]);
}

//Crea una función toArray que reciba dos valores y devuelva un array con estos dos valores.
const toArray = (num1, num2) => arr[num1, num2];
toArray(5, 9);

//Recorrer la siguiente lista con un bucle imprimiendo el doble de cada número:
const numbers = [1, 9, 3, 8, 5, 7]
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] * 2);
}

//Escribe una función llamada getFirstElement que reciba un array y devuelva el primer elemento.

const getFirstElement = (arr) => arr[0]
console.log(getFirstElement([1, 2]));

//Escribe una función llamada setFirstElement que reciba como parámetro de entrada un array y un valor cualquiera.El valor recibido debería reemplazar lo que haya en la primera posición del array.El array debería ser devuelto.

const setFirstElement = (arr, num) => {
    arr.shift();
    arr.unshift(num); return arr;
}

console.log(setFirstElement([1, 2], 3));

//Escribe una función getLastElement que reciba un array como parámetro de entrada y devuelva el último elemento del array.
const getLastElement = (arr) => arr[arr.length - 1]
console.log(getLastElement([1, 2]));

//Contar el número de elementos positivos, negativos y que valgan cero en un array de 10 enteros. Los valores habrán sido harcodeados en un array. La salida por consola debería ser similar a esta:
const arr2 = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7];
