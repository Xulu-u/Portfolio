//Escribe una función nand que tome como parámetros de entrada dos valores booleanos. Si ambos valores son true, debería devolver false. En cualquier otro caso, debería devolver true.

function nand(bool1, bool2) {
    if (bool1 && bool2) return false;
    else return true;
}

console.log(nand(true, true));
console.log(nand(true, false));
console.log(nand(false, true));
console.log(nand(false, false));

//Escribe una función nor que tome como parámetros de entrada dos valores booleanos. Si ambos valores son false, debería devolver true. En cualquier otro caso, el valor devuelto debería ser false.

function nor(bool1, bool2) {
    if (bool1 == false && bool2 == false) return true;
    else return false;
}

console.log(nor(true, true));
console.log(nor(true, false));
console.log(nor(false, true));
console.log(nor(false, false));

//Escribe una función xor que tome dos valores booleanos. Si ambos valores son diferentes, debería devolver true. Si ambos valores son iguales, debería devolver false.

function xor(bool1, bool2) {
    if (bool1 == bool2) return false;
    else return true;
}

console.log(xor(true, true));
console.log(xor(true, false));
console.log(xor(false, true));
console.log(xor(false, false));