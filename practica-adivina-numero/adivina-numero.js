const startBtn = document.getElementById('startBtn');
const guessContainer = document.getElementById('guessContainer');
const guessNumber = document.getElementById('guessNumber');
const higherBtn = document.getElementById('higherBtn');
const lowerBtn = document.getElementById('lowerBtn');
const correctBtn = document.getElementById('correctBtn');

let min = 1;
let max = 100;

startBtn.addEventListener('click', () => {
    startGame();
});

higherBtn.addEventListener('click', () => {
    min = parseInt(guessNumber.textContent) + 1;
    makeGuess();
});

lowerBtn.addEventListener('click', () => {
    max = parseInt(guessNumber.textContent) - 1;
    makeGuess();
});

correctBtn.addEventListener('click', () => {
    guessContainer.classList.add('d-none');
    alert(`¡Tu número es el ${guessNumber.textContent}! ¡Excelente decisión!`);
    startGame();
});

function startGame() {
    min = 1;
    max = 100;
    guessContainer.classList.remove('d-none');
    makeGuess();
}

function makeGuess() {
    const guess = Math.floor((min + max) / 2);
    guessNumber.textContent = guess;
}