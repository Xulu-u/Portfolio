const box = document.querySelector('.box');

const animate = () => {
    box.classList.add('animate__animated', 'animate__bounce');
}

box.addEventListener('animationend', () => {
    box.classList.remove('animate__animated', 'animate__bounce');
});

document.querySelector('button').addEventListener('click', animate);