document.addEventListener('keydown', moveCar);

const car = document.querySelector('.car');
const gameContainer = document.querySelector('.game-container');
const carWidth = 50;
const gameContainerWidth = 300;

function moveCar(event) {
    const left = parseInt(window.getComputedStyle(car).getPropertyValue('left'));

    if (event.key === 'ArrowLeft' && left > 0) {
        car.style.left = left - 10 + 'px';
    }

    if (event.key === 'ArrowRight' && left < gameContainerWidth - carWidth) {
        car.style.left = left + 10 + 'px';
    }
}