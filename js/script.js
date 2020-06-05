'use strict';


let num = 266219;

//Вариант с массивом
let result = 1,
 numArr = String(num).split('');

for(let i = 0; i < numArr.length; i++) {
  result *= numArr[i];
}

console.log(result);

result **= 3;

console.log(result);


//Вариант без массива
let remain;
result = 1;

  while (num) {
    remain = num % 10;
    num = (num - remain) / 10;
    result  *= remain;
  }

console.log(result);

result **= 3;

console.log(result);


console.log(+(String(result).slice(0, 2)));