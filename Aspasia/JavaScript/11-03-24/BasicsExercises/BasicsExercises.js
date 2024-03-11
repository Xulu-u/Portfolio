//VARIABLES

// Declara una variable de tipo entero, asígnale un valor y muéstralo por consola.
let num = 7;
console.log(num);

// Declara una variable de tipo texto, asígnale un valor y muéstralo por consola.
let txt = "textooo"
console.log(txt)

// Intercambiar el contenido de dos variables
let a = 5;
let b = 7;
// ... aquí y sólo aquí añadiremos las líneas de codigo
let c = a;
a = b;
b = c;

console.log('a: ', a); //Debería mostrar 7
console.log('b: ', b); //Debería mostrar 5

//OPERATORS

// Pasos a realizar:
// 1. Declara una constante llamada txt1 que contenga el texto «Este es el principio».
// 2. Declara otra constante llamada txt2 que contenga el texto «Este es el final».
// 3. Declara otra constante llamada txt3 que contenga la concatenación de ambas cadenas, colocando un espacio en blanco entre medias.
// 4. Muestra en un console.log el resultado de la concatenación.

let txt1 = "This is the Start";
let txt2 = "This is the end";
let txt3 = txt1 + " " + txt2;
console.log(txt3)

// Hacer un conversor de euros a dólares.Tendremos una constante llamada euros en la que el valor estará inicializado con valor 7. Debemos calcular ese valor en dólares.Supondremos que un euro son dos dólares.

const euros = 7;
const dolares = euros * 2;// Modificar sólo esta línea
console.log(dolares); // Debería mostrar 14

// El IVA para ciertos artículos es del 21 %.Realiza un programa que a partir de una constante precio inicializada con valor 100, calcule el precio con IVA.

const precio = 100;
const precioConIva = precio + (precio * 0.21)// Modificar sólo esta línea
console.log(precioConIva); // Debería mostrar 121

// Realiza un programa que a partir de los valores constantes, ancho = 4 y alto = 7, calcule el área de un rectángulo.Recuerda que el area de un rectángulo es ancho por alto dividido entre dos.

const width = 4;
const height = 7;
let area = (width + height) / 2;
console.log(area)

//Hacer un conversor de grados centígrados a grados Fahrenheit. Para ello deberé multiplicar los grados centígrados por 9/5 y sumar 32. Para comprobar que hemos hecho los cálculos correctamente, partiremos de una constante llamada centigrados que valdrá 20. En este caso, los grados fahrenheit deberían ser 68.

const centigrados = 20;
const fahrenheit = centigrados * (9 / 5) + 32;// Modificar sólo esta línea
console.log(fahrenheit); // Debería mostrar 68

// Vamos a mandar al usuario la caja de sus sueños. Para ello, partiremos de los siguientes valores:

const nombre = 'Juan';
const material = 'madera';
const dimensiones = 'diminutas';
const comentario = 'Que sea bonita, pero de una belleza estraña, indómita';
//y los concatenaremos para obtener por consola el siguiente mensaje:
// «[nombre] ha pedido una caja de[material] con unas dimensiones[dimensiones]. [comentario].

// El anterior mensaje, una vez montado, debería haber quedado así:

// Juan ha pedido una caja de Madera con unas dimensiones diminutas.Que sea muy bonita, pero de una belleza extraña, indómita.

let mensaje = nombre + " ha pedido una caja de " + material + " con unas dimensiones " + dimensiones + ". " + comentario + "."

console.log(mensaje);

//SUGAR SYNTAX

//Haz un código equivalente al siguiente utilizando el operador unario de suma (++).
let myVar = 87;
myVar++; // Modificar esta línea
console.log(myVar); // 88

//Haz un código equivalente al siguiente utilizando el operador unario de resta(- -);

let myVar2 = 11;
myVar2--; // Modificar esta línea
console.log(myVar2); // 10

//¿Qué valor tendrá x después de la ejecución del siguiente código ?

let x = 3;
x++;
x = x * 2;
x--;
console.log(x); // ¿Cuánto valdrá x?

//IF CONDITIONAL
//Modificar SÓLO EL OPERADOR BOOLEANO para lograr que se imprima el mensaje.

const dato1 = 10;
const dato2 = 10;
if (dato1 === dato2) {
    console.log('exito');
}

//Corrige los errores que hay en este código:

if (10 == 10) {
    console.log('You got a true!')
}
else {
    console.log('You got a false!')
}

// Dada una constante que contiene la nota de un examen que va de 0 a 10…

// Si es mayor que cinco mostrar el texto «Aprobado».
// Si es igual a cinco, mostrar el texto «Aprobado por los pelos»
// Si es menor que cinco, mostrar el texto «Suspenso».

const nota = 8;

if (nota > 5) {
    console.log('Aproved')
}
else if (nota < 5) {
    console.log('Suspended')
}
if (nota === 5) {
    console.log('Aprobado por los pelos')
}

// Declara una constante ‘i’ de tipo entero y asígnale un valor.Mostrar un mensaje indicando si el valor de ‘i’ es positivo o negativo, si es par o impar, si es múltiplo de 5, si es múltiplo de 10 y si es mayor o menor que 100. Consideraremos el 0 como positivo.

const i = 46;

if (i >= 0) {
    console.log('positive')
}
else {
    console.log('negative')
}

if (i % 2 === 0) {
    console.log('par')
}

else {
    console.log('par')
}

if (i % 5 === 0) {
    console.log('multiple of 5')
}

else {
    console.log('not multiple of 5')
}

if (i > 100) {
    console.log('Bigger than 100')
}
else {
    console.log('Less than 100')
}

