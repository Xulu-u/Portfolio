const words = ['casa', 'arbol', 'golosina', 'concubinas'];

//Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
const secretWord = words[Math.floor(Math.random() * words.length)]
let hiddenWord = secretWord.replace(/./g, "_ ");

const printHanged = () => alert('Try to guess the hidden word: ' + hiddenWord);

let wordGuessed = false;

const replaceAt = (string, character, index) => {
    return string.substring(0, index) + character + string.substring(index + character.length);
}

while (!wordGuessed) {
    printHanged();

    const letter = prompt('Introduce a letter:');
    let miss = true;
    let repeat = false;
    for (let i = 0; i < secretWord.length; i++) {
        if (secretWord.charAt(i) === letter.toLowerCase()) {
            if (hiddenWord.charAt(i) !== letter.toUpperCase()) {
                hiddenWord = hiddenWord.substring(0, i * 2) + letter.toUpperCase() + hiddenWord.substring(i * 2 + letter.length);
                miss = false;
            }
            else {
                repeat = true;
            }
        }
    }

    if (miss) alert('You missed :(');
    else if (repeat) alert('You already guessed this letter :/');
    else alert('Nice you guessed a letter!!!')

    if (!hiddenWord.includes("_")) {
        wordGuessed = true;
        alert('Congratulatoins you won!!! The word was: ' + hiddenWord);
    }

}