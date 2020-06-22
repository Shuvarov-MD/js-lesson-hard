'use strict';

const color = document.getElementById('color'),
  change = document.getElementById('change');

  document.body.style.backgroundColor = '#008d3b';
  color.style.textAlign = 'center';
  color.style.color = '#FFF';
  change.style.display = 'block';
  change.style.margin = '0 auto';


//Функция получения 16-ричного числа
let getNumber = function() {
  let redNumber = Math.floor(Math.random() * 256),
    greenNumber = Math.floor(Math.random() * 256),
    blueNumber = Math.floor(Math.random() * 256);

  let redColor = redNumber.toString(16);
  if (redColor.length < 2) {
    redColor = '0' + redColor;
  }

  let greenColor = greenNumber.toString(16);
  if (greenColor.length < 2) {
    greenColor = '0' + greenColor;
  }

  let blueColor = blueNumber.toString(16);
  if (blueColor.length < 2) {
    blueColor = '0' + blueColor;
  }

  return redColor + greenColor + blueColor;
};


//Функция изменения цвета и текста
let render = function() {
  let colorNumber = getNumber();
  document.body.style.backgroundColor = '#' + colorNumber;
  color.textContent = '#' + colorNumber;
};


change.addEventListener('click', render);