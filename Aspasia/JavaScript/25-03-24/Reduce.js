//Dado el siguiente array de datos: [1, 2, 3].Calcular el valor medio utilizando la instrucción reduce.

const numbers = [1, 2, 3];

const average = numbers.reduce((acc, n) => acc + n / numbers.length, 0);

console.log(average);