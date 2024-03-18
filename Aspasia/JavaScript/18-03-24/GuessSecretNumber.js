const randomNumber = Math.floor(Math.random() * 5) + 1;
const chances = 3;

alert(randomNumber);

const userNumber = Number(prompt('Introduce a number please'));
let i = 0;
while (i < 3) {
    if (userNumber === randomNumber) {
        alert('YOU GUESSED IT');
        i = 3;
    } else {
        alert('TRY AGAIN');
    }
    i++;
}
