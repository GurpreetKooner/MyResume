const image = document.querySelector('.my-image');

image.addEventListener('click', () => {
    image.classList.add('rotate');
    image.addEventListener('animationend', () => {
        image.classList.remove('rotate');
    }, { once: true });
});