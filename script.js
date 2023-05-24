const balls = document.getElementsByClassName('ball');
const rgbText = document.getElementById('rgb-color');
const resetBtn = document.getElementById('reset-game');
const answer = document.getElementById('answer');
const allBalls = document.getElementById('allBalls');
const score = document.getElementById('score');

const randomColor = () => {
  const colorsArray = [];
  for (let index = 0; index < balls.length; index += 1) {
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);
    const randomRGB = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
    colorsArray.push((balls[index].style.backgroundColor = randomRGB));
    rgbText.innerText = colorsArray[0];
  }
};
let contador = 0;

allBalls.addEventListener('click', (event) => {
  if (event.target.style.backgroundColor === rgbText.innerText) {
    answer.innerText = 'Acertou!';
    contador += 3;
    score.innerText = contador;
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }
});

resetBtn.addEventListener('click', () => {
  randomColor();
  answer.innerText = 'Escolha uma cor';
});

randomColor();
