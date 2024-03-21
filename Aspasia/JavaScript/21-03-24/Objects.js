//Escribe un objeto llamado miPerro que tenga las siguientes propiedades: piernas, colas, amigos.Dale valor a estas propiedades y haz tres console.log(), uno por cada una de las tres propiedades.

const miPerro = {
    piernas: 4,
    colas: 1,
    amigos: 2
};

console.log(miPerro.piernas);
console.log(miPerro.colas);
console.log(miPerro.amigos);


//La constante ojos debe valer la propiedad ojos del objeto testObj.Además, la constante nombre debe valer la propiedad nombre del objeto testObj.

const testObj = {
    "ojos": 2,
    "nombre": "Pablo",
    "piernas": 2
};

// Sólo hay que hacer modificaciones por debajo de esta línea 
const ojos = testObj.ojos;      // Cambiar esta línea
const nombre = testObj.nombre;    // Cambia esta línea

console.log(ojos); // Debería mostrar: 2
console.log(nombre); // Debería mostrar: "Pablo"

//Utilizar la constante playerNumber para acceder a la propiedad correspondiente del objeto testObj.
const testObj2 = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

const playerNumber = 19;
const player = testObj2[playerNumber];   // Cambia esta línea

console.log(player); // Debería mostrar: "Unitas"

//Accede a la propiedad nombre para cambiar su valor de Coder a HappyCoder.

const myDog = {
    "nombre": "Coder",
    "piernas": 4,
    "colas": 1,
};

// Modifica esta línea con el código necesario
console.log(myDog.nombre = "Happy coder"); // Debería mostrar: "HappyCoder"

//Convierte el bloque switch-case en un objeto llamado lookup.
function phoneticLookup(val) {

    // Sólo cambia el código por debajo de esta línea
    const lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    }

    // Sólo cambia el código por encima de esta línea
    return lookup[val];
}

const value = phoneticLookup("charlie")
console.log(value); // Chicago

//Añade un nuevo album al array myMusic.Deberá tener las mismas propiedades, pero con valores diferentes que el primer objeto del array.
//Después, añadir un console.log para mostrar el valor del nombre del artista y otro console.log para mostrar el valor del primer elemento del array de formatos del album recien añadido.
const myMusic = [
    {
        "artista": "Shakira",
        "titulo": "Piano Man",
        "formatos": [
            "CD",
            "8T",
            "LP"
        ],
        "premios": true
    },
    {
        "artista": "Ozuna",
        "titulo": "Tu Foto",
        "formatos": [
            "Spotify",
            "mp3",
            "CD"
        ],
        "premios": false
    },
];

console.log(myMusic[0]["artista"]);
console.log(myMusic[0]["formatos"][0]);

//Asigna a la constante gloveBoxContents el valor de la propiedad glovebox.

const myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

const gloveBoxContents = myStorage["car"]["inside"]["glove box"]; // Cambia esta línea
console.log(gloveBoxContents); // Debería valer: "maps"

//Asigna a la constante secondTree el valor de la propiedad list del segundo objeto del array myPlants.

const myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

const secondTree = myPlants[1].list;
console.log(secondTree); // Debería mostrar: ["fir", "pine", "birch"]

//Utilizando el método find, busca el usuario cuyo nombre es Juan y muestra su edad.

const users = [
    {
        "name": "Paco",
        "isActive": false,
        "age": 18
    },
    {
        "name": "Laura",
        "isActive": false,
        "age": 21
    },
    {
        "name": "Raquel",
        "isActive": false,
        "age": 15
    },
    {
        "name": "Juan",
        "isActive": true,
        "age": 17
    },
    {
        "name": "Alberto",
        "isActive": false,
        "age": 50
    },
    {
        "name": "Rodolfo",
        "isActive": true,
        "age": 7
    },
];

const choosedUser = users.find(user => user.name === "Juan").age; // Modifica esta línea para resolver el ejercicio

console.log(choosedUser); // Debería mostrar: 17