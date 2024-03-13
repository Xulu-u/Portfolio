//Crear y llamar a una función flecha que recibe un número y muestre su cubo con un console.log.
const cube = (num) => { console.log(num * num * num) };

cube(5);

//Crear y llamar a una función flecha que recibe la velocidad en Km/hora y la devuelva en en metros/hora. Recoger el valor devuelto y mostrarlo con un console.log.

const kmhTomh = (kmh) => { return kmh * 1000 };

console.log(kmhTomh(30));

// Crea y llamar a una función flecha que recibe el ancho y el alto de un rectángulo y devuelva su área.

// Recoger el valor devuelto y mostrarlo con un console.log.

const calculateAreaOfRect = (width, height) => { return width * height };

console.log(calculateAreaOfRect(4, 6));

//Crear y llamar a una función flecha que recibe la base y la altura de un triángulo y devuelva su área.

const calculateAreaOfTri = (width, height) => { return (width * height) / 2 };

console.log(calculateAreaOfTri(4, 6));

// //Crear estas dos funciones flecha:
// calculatePerimeter(radius); 
// Perímetro de la circunferencia = 2 * Math.PI * radio
// calculateArea(radius); 
// Área de la circunferencia = Math.PI * radio * radio
// Recoger los valores devueltos por las funciones y mostrarlos con un console.log.

const calculatePerimeter = (radius) => { return 2 * Math.PI * radius };
const calculateArea = (radius) => { return Math.PI * radius * radius };

console.log(calculatePerimeter(8) + " " + calculateArea(8))