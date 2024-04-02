const img = document.querySelector('img');
let i = 0;

const changeImg = () => {
    i++;
    img.setAttribute('src', i % 2 === 0 ? './img/PinguLinux_Ying_Yang.png' : './img/PinguLinux_Yoda.jpg');
}

img.addEventListener('click', changeImg);