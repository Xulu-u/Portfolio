const panel = document.querySelector('.panel');

const showMenu = () => {
    panel.classList.toggle('active');
}

document.querySelector('.hamburguer').addEventListener('click', showMenu);

window.addEventListener('click', (e) => {
    if (!panel.contains(e.target)) {
        panel.classList.remove('active');
    }
});