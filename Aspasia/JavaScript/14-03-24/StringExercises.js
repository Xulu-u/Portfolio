// Escribe una función llamada longitud que reciba como parámetro de entrada una cadena de texto y devuelva el número de letras que tiene.

// Por ejemplo la siguiente llamada a la función:

const length = (str) => str.length;
length("Ana");

// Escribe una función llamada devuelvePrimeraLetra que reciba como parámetro de entrada una cadena de texto y devuelva la primera letra.

const devuelvePrimeraLetra = (str) => str.charAt(0);
console.log(devuelvePrimeraLetra("gfshgejfs"));

//Escribe una función llamada devuelveUltimaLetra que reciba como parámetro de entrada una cadena de texto y devuelva la última letra.

const devuelveUltimaLetra = (str) => str.charAt(str.length-1);
console.log(devuelveUltimaLetra("gfshgejfs"));

//Escribe una función llamada devuelveEnesimaLetra que reciba como parámetro de entrada una cadena de texto y un número y devuelva la letra que ocupe la posición indicada por el número.

const devuelveEnesimaLetra = (str, n) => {if (n < str.length) return str.charAt(n-1)};
console.log(devuelveEnesimaLetra("gfshgejfs", 4));

//Utilizando el método substring imprimir las letras que van desde la posición 3 a la 7 de la cadena «wonderful day», es decir “derf”.

const frase = "wonderful day";
console.log(frase.substring(3,7));

//Hacer una función devuelveMasLarga que reciba como parámetro de entrada dos cadenas de texto y devuelva la más larga. En caso de que ambas cadenas sean igual de largas, devolveremos la correspondiente al primer parámetro de la función.

const devuelveMasLarga = (str1, str2) => {
    if (str1.length >= str2.length) return str1;
    else return str2;
};
console.log(devuelveMasLarga("gfshgejfs", "ihgesaiugfekufgakff"));

//Hacer una función devuelveMasLarga2 que reciba como parámetro de entrada tres cadenas de texto y devuelva la más larga. Si no hay una única cadena más larga, devolveremos el texto No hay una única cadena más larga.

const devuelveMasLarga2 = (str1, str2, str3) => {
    if (str1.length > str2.length && str1.length > str3.length) return str1;
    else if (str2.length > str1.length && str2.length > str3.length) return str2;
    else if (str3.length > str1.length && str3.length > str2.length) return str3;
    else return "No hay una única cadena más larga";
};
console.log(devuelveMasLarga2("gfshgejfs", "ihgesaiugfekufgakff", "ihgesaiugfekufgakff"));

//Hacer una función generarNombre que reciba como parámetros de entrada tres cadenas de texto. Si la longitud de alguna cadena es menor que cinco, la función debe devolver el texto ‘error’. Si ninguna cadena tiene menos de 5 letras, devolver una nueva palabra utilizando las tres primeras letras de cada palabra.

const generarNombre = (str1, str2, str3) => {
    if (str1.length < 5 || str2.length < 5 || str3.length < 5) return "error";
    else return str1.charAt(0)+str2.charAt(0)+str3.charAt(0);
};
console.log(generarNombre("gfshgejfs", "ihgesaiugfekufgakff", "lhgesaiugfekufgakff"));

//Hacer una función generarNombre2 que reciba como parámetros de entrada tres cadenas de texto. Si la longitud de alguna cadena es menor que cinco, la función debe devolver el texto ‘error’. Si ninguna cadena tiene menos de 5 letras, devolver una nueva palabra utilizando la última letra de cada palabra.

const generarNombre2 = (str1, str2, str3) => {
    if (str1.length < 5 || str2.length < 5 || str3.length < 5) return "error";
    else return str1.charAt(str1.length-1)+str2.charAt(str2.length-1)+str3.charAt(str3.length-1);
};
console.log(generarNombre2("gfshgejfp", "ihgesaiugfekufgakfo", "lhgesaiugfekufgakfl"));

//Hacer una función generarNombre3 que reciba como parámetros de entrada tres cadenas de texto. Si la longitud de alguna cadena es menor que cinco, la función debe devolver el texto ‘error’. Si ninguna cadena tiene menos de 5 letras, devolver una nueva palabra utilizando las tres últimas letras de cada palabra.

const generarNombre3 = (str1, str2, str3) => {
    if (str1.length < 5 || str2.length < 5 || str3.length < 5) return "error";
    else return str1.slice(-3)+str2.slice(-3)+str3.slice(-3);
};
console.log(generarNombre3("gfshgeper", "ihgesaiugfekufgarsa", "lhgesaiugfekufgaanch"));

//Hacer una función tieneLetra que reciba como parámetro de entrada una cadena de texto y una letra y devuelva true si la letra esta presente en la palabra y false si no lo esta. Utilizar para ello el método indexOf.

const tieneLetra = (str, letter) => { //str.includes(letter)
    if (str.indexOf(letter) == -1) return false;
    else return true;
};
console.log(tieneLetra("gfshgeper","k"));

//Realizar la evaluación del ejercicio anterior sin tener en cuenta si la letra pasada como parámetro esta en mayúsculas o minúsculas
const tieneLetra2 = (str, letter) => str.includes(letter.toUpperCase()) || str.includes(letter.toLowerCase());
console.log(tieneLetra("gfshgeper","k"));

//Hacer una función crearPalabra que reciba como parámetro de entrada una letra y un número y genere una nueva palabra que tenga la letra introducida repetida tantas veces como indique el número.

const crearPalabra = (letter, num) => {
    let palabra = '';
    for (let i = 0; i < num; i++)
    {
        palabra += letter; //YIKES
        //console.log(palabra);
    }
    return palabra;
};
console.log(crearPalabra('a', 7));

//Completar el ejercicio anterior haciendo que en la nueva palabra generada las letras esten en mayúsculas.

const crearPalabraUpper = (letter, num) => {
    let palabra = '';
    for (let i = 0; i < num; i++)
    {
        palabra += letter.toUpperCase(); //YIKES
        //console.log(palabra);
    }
    return palabra;
};
console.log(crearPalabraUpper('a', 7));

//Hacer una función addGuiones que reciba como parámetro de entrada una cadena texto y devuelva una nueva cadena que tendrá un guion medio detrás de cada letra. Utilizar para ello un bucle for.

const addGuiones = (str) => {
    let palabra = '';
    for (let i = 0; i < str.length; i++)
    {
        palabra += str.charAt(i) + "-";
        //console.log(palabra);
    }
    return palabra;
};
console.log(addGuiones("jhghagdkjgwfa", 7));

//Hacer una función contadorDeLetras que reciba como parámetro de entrada una cadena de texto y una letra y devuelva el número de veces que esa letra esta presente en la palabra. Utilizar para ello un bucle for.
const contadorDeLetras = (str, letter) => {
    let count = 0;
    for (let i = 0; i < str.length; i++)
    {
        if (str.charAt(i) == letter) count++;
        //console.log(palabra);
    }
    return count;
};
console.log(contadorDeLetras("jhghagdkjgwfa", "g"));

//Realizar la evolución del ejercicio anterior sin tener en cuenta si la letra pasada como parámetro esta en mayúsculas o minúsculas

const contadorDeLetras2 = (str, letter) => {
    let count = 0;
    for (let i = 0; i < str.length; i++)
    {
        if (str.charAt(i) == letter.toUpperCase() || str.charAt(i) == letter.toLowerCase()) count++;
        //console.log(palabra);
    }
    return count;
};
console.log(contadorDeLetras2("jhghagdkjgwfa", "g"));

//Hacer una función contadorDeLetras3 que reciba como parámetro de entrada dos cadenas de texto y una letra y devuelva la cadena de texto en la que dicha letra esta más presente. Utilizar para ello un bucle for. No tener en cuenta si la letra pasada como parámetro esta en mayúsculas o minúsculas.
const contadorDeLetras3 = (str1, str2, letter) => {
    let count1 = 0;
    for (let i = 0; i < str1.length; i++)
    {
        if (str1.charAt(i) == letter.toUpperCase() || str1.charAt(i) == letter.toLowerCase()) count1++;
        //console.log(palabra);
    }
    let count2 = 0;
    for (let i = 0; i < str2.length; i++)
    {
        if (str2.charAt(i) == letter.toUpperCase() || str2.charAt(i) == letter.toLowerCase()) count2++;
        //console.log(palabra);
    }
    if (count2 > count1) return str2;
    else return str1;
};
console.log(contadorDeLetras3("jhghagdkjggggggggggggggggwfa","jahdkajgdfkgdfefgd", "g"));

// Escribe una función llamada toCase que reciba como parámetro de entrada una cadena de texto y devuelva esa misma cadena de texto en minúsculas, un guión medio y de nuevo esa misma cadena de texto en mayúsculas.

const toCase = (str) => str.toLowerCase() + "-" + str.toUpperCase();

console.log(toCase("Pablo"));

//Escribe una función llamada shortcut que tome dos cadenas de texto y devuelva la inicial de cada una de las dos cadenas.

const shortCut = (str1,str2) => str1.charAt(0)+str2.charAt(0);

console.log(shortCut("Pablo","pablo"));

// Escribe una función llamada firstChar que recibe como parámetro de entrada una cadena de texto y devuelva la primera letra que no sea un espacio.

const firstChar = (str) => {
    for (let i = 0; i < str.length; i++)
    {
        if (str.charAt(i) != " ") return str.charAt(i);
        //console.log(palabra);
    }
};
console.log(firstChar("     j hghagdkjgwfa"));

//Escribe una función llamada indexOfIgnoreCase que reciba dos cadenas de texto y devuelva la posición de la primera ocurrencia de la segunda cadena de texto en la primera. La función no debería tener en cuenta mayúsculas y minúsculas.

const indexOfIgnoreCase = (str1, str2) => str1.indexOf(str2.toLowerCase()) || str1.indexOf(str2.toUpperCase());
console.log(indexOfIgnoreCase("     j hghagdkjgwfa", "hgh"));

//Escribe una función llamada firstWord que reciba como parámetro de entrada una cadena de texto y devuelva la primera palabra de esa cadena. La primera palaba de la cadena serán todos los caracteres que hay hasta el primer espacio.

const firstWord = (str) => {
    let palabra = "";
    for (let i = 0; i < str.length; i++)
    {
        if (str.charAt(i) != " ") palabra += str.charAt(i);
        else if (str.charAt(i) == " ") return palabra;
        //console.log(palabra);
    };
    return palabra;
};
console.log(firstWord("holaaaa khsvkj"));




