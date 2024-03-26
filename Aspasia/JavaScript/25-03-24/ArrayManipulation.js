let characters;
let collectedCharacters = [];
let collectedCharacters2 = [];



fetch('https://swapi.py4e.com/api/people')
    .then(res => res.json())
    .then(data => {
        characters = data.results;
        // Aquí ejecutaremos las llamadas a las funciones que definiremos más arriba
        console.log(characters);
        getWomansName();
        getSmallerPeople();
        sumaDePeso();
        mediaDeAltura();
        collectByIndex(2);
        collectByName('R2-D2')
        removeByName('R2-D2')
        getCharacterFilms('R2-D2');
        collectByName2('R2-D2');
        mediaDeAltura2();
        removeByName2('R2-D2')
    });

//Crear un método llamado getWomansName() que muestre los nombres de todos los personajes femeninos de la película de starwars. Usaremos el método filter y el map.

const getWomansName = () => {
    const womansName = characters.filter(character => character.gender === 'female').map(character => character.name);
    console.log('getWomansName(): ', womansName);
}

// Crear un método getSmallerPeople() que devuelva un array con los personajes de StarWars restando a cada uno de ellos diez centímetros de altura.Utilizaremos un map para recorrer el array de personajes y el spread operator para conservar las propiedades del objeto original.

const getSmallerPeople = () => {
    const smallerPeople = characters.map(character => ({ ...character, height: character.height - 10 }));
    console.log('getSmallerPeople(): ', smallerPeople);
}

//Crear un método llamado sumaDePeso() que utilizando reduce, calcule la suma del peso de los personajes de starwars.
const sumaDePeso = () => {
    const suma = characters.reduce((acc, n) => acc + Number(n.mass), 0);
    console.log('sumaDePeso(): ', suma);
}

//Crear un método llamado mediaDeAltura() que utilizando reduce, calcule la media de altura de los personajes de starwars.
const mediaDeAltura = () => {
    const media = characters.reduce((acc, n) => acc + Number(n.height) / characters.length, 0);
    console.log('mediaDeALture(): ', media);
}

// Crear un método llamado collectByIndex(index) que recibirá como parámetro de entrada la posición del personaje que queremos seleccionar en el array characters.Este personaje seleccionado lo añadiremos a un array declarado globalmente llamado collectedCharacters.Para esta última parte utilizaremos el método push().

const collectByIndex = (charArrPos) => {
    collectedCharacters.push(characters[charArrPos]);
    console.log(collectedCharacters);
}

//Crear un método llamado collectByName(characterName) que recibirá como parámetro de entrada el nombre del personaje que queremos coleccionar y lo añadirá a un array declarado globalmente llamado collectedCharacters. Utilizaremos los métodos push() y find().

const collectByName = (name) => {
    collectedCharacters.push(characters.find(character => character.name === name));
    console.log(collectedCharacters);
}

//Crear un método llamado removeByName(characterName) que elimine del array collectedCharacters los personajes cuyo nombre sea characterName.Para ello, utilizando filter, extraeremos del array collectedCharacters los personajes cuyo nombre no coincide con el parámetro recibido.

const removeByName = (name) => {
    collectedCharacters.filter(character => character.name !== name)
    console.log(collectedCharacters);
}

//Crear un método llamado getCharacterFilms(characterName) que reciba como parámetro el nombre de un personaje y muestra las urls de las películas en las que ha intervenido.

const getCharacterFilms = (characterName) => {
    const filmsarr = characters.find(character => character.name === characterName).films;
    console.log(filmsarr);
}

//Crear un método llamado collectByName2(characterName) que recibirá como parámetro de entrada el nombre del personaje que queremos coleccionar y lo añadirá a un array declarado globalmente llamado collectedCharacters2. Cada objeto añadido a este array tendrá una propiedad llamada amount, de tal forma que si añadimos varias veces el mismo objeto, en lugar de que ese objeto aparezca varias veces, aparecerá una sola vez, pero con la propiedad amount aumentada el número de veces que fue añadido. Utilizaremos los métodos push() y find().

const collectByName2 = (characterName) => {
    const char = characters.find(character => character.name === characterName);
    if (char) {
        char.amount++;
    }
    else collectedCharacters2.push(...char, amount = 1,);

    console.log(collectedCharacters2)
}

//Crear un método llamado mediaDeAltura2() que utilizando reduce, calcule altura media de los personajes que hay en el array collectedCharacters2.
const mediaDeAltura2 = () => {
    const media = collectedCharacters2.reduce((acc, n) => acc + Number(n.height) / collectedCharacters2.length, 0);
    console.log('mediaDeALtura2(): ', media);
};

//Crear un método llamado removeByName2(charactersName) que utilizando filter, obtenga a partir del array collectedCharacters2 los personajes cuyo nombre no coincide con el parámetro recibido.
const removeByName2 = (name) => {
    collectedCharacters2 = collectedCharacters2.filter(character => character.name !== name)
    console.log(collectedCharacters2);
}