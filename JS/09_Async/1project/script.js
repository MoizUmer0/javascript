// generate colors
const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let start;
const startchangingcolor = function () {
  start = setInterval(changebgcolor, 100);
  function changebgcolor() {
    document.querySelector('body').style.backgroundColor = randomColor();
  }
};

const stopchangingcolor = function () {
  clearInterval(start);
};

document.querySelector('#start').addEventListener('click', startchangingcolor);

document.querySelector('#stop').addEventListener('click', stopchangingcolor);
