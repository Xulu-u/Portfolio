//Obtener un número aleatorio entre 5 y 7.

//Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
console.log(Math.floor(Math.random() * (5-7+1)) + 7);

// Ejercicio generador de letras aleatorias.

// Partiremos de una constante que almacene tu nombre. Luego, crearemos un número al azar dentro del rango de letras que contiene tu nombre. Ese número será la posición de la letra aleatoria de tu nombre que queremos obtener.

const nombre = "POL";
const v1 = nombre.charAt(Math.floor(Math.random() * nombre.length))
console.log(v1);