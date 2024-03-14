const n1 = Number(prompt('Introduce the first number'));
const n2 = Number(prompt('Introduce the second number'));
const op = prompt('Introduce the operation');

let result;
if (op === '+') {
    result = n1 + n2;
} else if (op === '-') {
    result = n1 - n2;
} else if (op === '*') {
    result = n1 * n2;
} else if (op === '/') {
    result = n1 / n2;
}

alert(result);