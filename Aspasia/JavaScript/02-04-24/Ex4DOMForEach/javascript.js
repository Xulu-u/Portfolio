
//EX1
const paintRed = () => {
    document.querySelectorAll('.red').forEach(obj => {
        obj.style.backgroundColor = 'red';
    });
}

document.querySelector('.button1').addEventListener('click', paintRed);

//EX2
const calculate = () => {
    let sum = 0;
    document.querySelectorAll('.n').forEach((input) => {
        sum += Number(input.value);
        document.querySelector('.p2').innerHTML = sum;
    });
};

document.querySelector('.button2').addEventListener('click', calculate);

//EX3
const addListeners = obj => {
    obj.addEventListener('click', () => {
        obj.closest('div').style.background = 'red';
    })
}

document.querySelectorAll('.button3').forEach(addListeners);