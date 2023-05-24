const balls = document.getElementsByClassName('ball');

const randomColor = () => {
  const colorsArray = [];
  for (let index = 0; index < balls.length; index += 1) {
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);
    const randomRGB = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
    colorsArray.push((balls[index].style.backgroundColor = randomRGB));
  }
};
randomColor();