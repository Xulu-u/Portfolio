//A partir de un array con cinco nombres de persona, recórrelo con un map para obtener un nuevo array con el texto «Conozco a alguien llamado » precediendo a cada nombre.
const nombres = ['Juan', 'Roberto', 'Ernesto', 'Miriam', 'Laura'];

const saludos = nombres.map(nombre => 'Conozco a alguien llamado ' + nombre);

console.log(saludos); // 2, 4, 6