'use strict';


//Задание 1
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let arr = [];

for (let i = 0; i < 7; i++) {
  do {
    arr[i] = prompt('Введите многозначное число:', '').trim();
  } while (!isNumber(arr[i]) || arr[i].length < 2);
}

console.log(arr);

for (let i = 0; i < 7; i++) {
  if (arr[i][0] === '2') {
    console.log('Числа, начинающиеся с цифры 2: ' + arr[i]);
  } else if (arr[i][0] === '4') {
    console.log('Числа, начинающиеся с цифры 4: ' + arr[i]);
  }
}


//Задание 2
outer: for (let i = 1; i <= 100; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      continue outer;
    }
  }
  console.log('Делители этого числа: ' + 1 + ' и ' + i);
}