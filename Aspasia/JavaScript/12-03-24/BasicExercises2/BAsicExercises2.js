// Declare una constante numérica ‘b’ y asignale un valor. Mostrar una traza indicando si el valor de ‘b’ es positivo o negativo.Consideraremos el 0 como positivo.Utiliza el operador condicional(? : ) dentro del console.log para resolverlo.
{
    const b = 11;
    console.log(b >= 0 ? "b es mayor que 0" : "b es menor que 0");
}

//Declarar una constante numérica ‘i’ y asignale un valor.Muestra un mensaje indicando si ‘i’ es par o impar.Utiliza el operador condicional( ? : ) dentro del console.log para resolverlo.
{
    const i = 6;
    console.log(i % 2 === 0 ? "i es par" : "i es impar");
}

// Switch modificando el case

// Inserta el código necesario para que esta estructura de control Switch funcione también con el amarillo.

const color = 'amarillo';
switch (color) {
    case 'rojo':
        console.log('Has escogido rojo');
        break;
    case 'azul':
        console.log('Has escogido azul');
        break;
    //Inserta tu código aquí
    case 'amarillo':
        console.log('Has escogido amarillo');
        break;
    default:
        console.log('No has escogido ningún color de la lista!');
}

// Switch modificando el default

// Añadir el caso por defecto(default ):

const golosina = 'nubes';

switch (golosina) {
    case 'chicle':
        console.log('Has escogido un chicle');
        break;
    case 'gominola':
        console.log('Has escogido una gominola');
        break;
    case 'regaliz':
        console.log('Has escogido un regaliz');
        break;
    //Inserta tu código aquí
    default:
        console.log('Has escogido golosina');
}

//FOR LOOP
// Imprimir los números pares que hay dentro de los 100 primeros números enteros.No utilizar la estructura de control if para resolver este ejercicio.

for (let i = 1; i <= 100; i++) {
    i++
    console.log(i);
}

// Imprimir los números pares que hay dentro de los 100 primeros números enteros.
// El bucle avanzará de uno en uno; no de dos en dos como en el ejercicio anterior.
// Utilizaremos el operador % para separar los pares de los impares.
//     Nota: El operador «%» nos da el resto de dividir un número entre otro.

// Imprimir los números del 1 al 20.

// Para números divisibles por 3, imprimir “Fizz”.
// Para números divisibles por 5, imprimir “Buzz”.
// Para números divisibles por 3 y 5, imprimir “FizzBuzz”.
// En cualquier otro caso, imprimir el número.

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizzbuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz")
    }
    else if (i % 5 === 0) {
        console.log("Buzz")
    }
    else console.log(i);
}


// Suma los números del 5 al 0(inclusive), en orden descendente usando un bucle de tipo for.
let sum = 0;
for (let i = 5; i >= 0; i--) {
    sum += i;
    console.log(sum);
}

//Utilizando el bucle for, mostrar la tabla de multiplicar del número 7.

for (let i = 0; i <= 10; i++) {
    console.log("7 x " + i + " = " + 7 * i);
}

// Mostrar la tabla de multiplicar que va del 1 al 9. Usaremos dos bucles anidados.

// Paso para resolver el ejercicio:

// 1. Utilizando un bucle for, hacer la tabla de multiplicar del número 1.

// 2. Anidar la tabla de multiplicar hecha en el paso anterior, dentro de otro bucle for, que muestre las tablas de multiplicar de los números que van del 1 al 10.
for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        console.log(j + " x " + i + " = " + j * i);
    }
}

//WHILE LOOP
// Suma los números del 5 al 0(inclusive), en orden descendente usando un bucle de while.
{
    let i = 5;
    let sum = 0;
    while (i >= 0) {
        sum += i;
        console.log(sum);
        --i;
    }
}

//FUNCTIONS

// Crear y llamar a una función que reciba como parámetro de entrada un valor booleano y muestre «Sí, eso es cierto» si el valor es true, y «No, eso es falso» si el valor es false.

function detectorDeMentiras(booleano) {
    if (booleano) console.log("Yes, it iss true.");
    else console.log("No, it is false.");
}

detectorDeMentiras(true);

// Crear una función llamada «hoyQuieroComer» que recibe un parámetro “comida” cuyo valor será «garbanzos».
// Cuando llamemos a la función se mostrará un log indicándonos lo que deseamos comer.

function todayIwannaEat(food) {
    console.log("Toda I wanna eat " + food);
}

let whatIwannaEat = "garbanzos";
todayIwannaEat(whatIwannaEat);

//Crear una función llamada calcularCubo que recibe un número, calcule su cubo y muestre el resultado por consola.Llamar a la función pasándole el valor 3.

function calculateCube(num) {
    console.log(num * num * num);
}

let number = 3;
calculateCube(number);

// Crear una función llamada calcularVelocidad que recibirá la velocidad en Km / hora y la mostrará en metros / hora.
function calculateVelocity(kmhour) {
    console.log(kmhour / 3.6);
}

calculateVelocity(100);

// Crear una función llamada calcularArea que recibirá el ancho y el alto de un rectángulo y calculará su area.
function calculateAreaOfRect(width, height) {
    console.log("The area is " + width * height);
}

calculateAreaOfRect(4, 5);

// Crear y llamar a una función que recibe la base y la altura de un triángulo y calcula su área.
function calculateAreaOfTri(width, height) {
    console.log("The area is " + (width * height) / 2);
}

calculateAreaOfTri(4, 5);

// Crear estas dos funciones:
function calculaPerimetro(radius) {
    console.log("The perimeter is " + 2 * Math.PI * radius);
}
function calculaArea(radius) {
    console.log("The area is " + Math.PI * radius * radius);
}

let radio = 7
calculaPerimetro(radio);
calculaArea(radio); 