const dato = 6; // Número del que queremos calcular el factorial
let r = 1;
for (let i = dato; i > 0; i--) {
    r *= i;
}
console.log(r);