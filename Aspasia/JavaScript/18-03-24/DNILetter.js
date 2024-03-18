const dniNumber = "41527564";//prompt('Introduce a number please');
//const dniLetters = "TRWAMYFPDXBNJZSQVHLCKE"
const dniLetter = (num) => {

    if (num.length === 8 && !isNaN(Number(num)))//This works too: /^\d+$/.test(num)) 
    {
        let dni = Number(num);
        let dniLetters = "TRWAMYFPDXBNJZSQVHLCKE"
        dni = dni % 23;
        return dniLetters.charAt(dni - 1);
    }
    else return null;
}

console.log(dniLetter(dniNumber))