'use strict';

//Задание 1
let lang = prompt('Введите "ru", чтобы увидеть дни недели на русском языке, или "en", чтобы увидеть дни недели на английском языке');

//Вариант через if-else
if (lang === 'ru') {
  console.log('Понедельник');
  console.log('Вторник');
  console.log('Среда');
  console.log('Четверг');
  console.log('Пятница');
  console.log('Суббота');
  console.log('Воскресенье');
} else if (lang === 'en') {
  console.log('Monday');
  console.log('Tuesday');
  console.log('Wednesday');
  console.log('Thursday');
  console.log('Friday');
  console.log('Saturday');
  console.log('Sunday');
}

//Вариант через switch-case
switch (lang){
  case 'ru':
    console.log('Понедельник');
    console.log('Вторник');
    console.log('Среда');
    console.log('Четверг');
    console.log('Пятница');
    console.log('Суббота');
    console.log('Воскресенье');
    break;
  case 'en':
    console.log('Monday');
    console.log('Tuesday');
    console.log('Wednesday');
    console.log('Thursday');
    console.log('Friday');
    console.log('Saturday');
    console.log('Sunday');
    break;
}

//Вариант с массивом
let arrDays = [['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'], ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']];

for (let i = 0; lang === 'ru' && i < arrDays[0].length; i++) {
  console.log(arrDays[0][i]);
}

for (let i = 0; lang === 'en' && i < arrDays[1].length; i++) {
  console.log(arrDays[1][i]);
}



//Задание 2
let namePerson = prompt('Введите имя: ', '');

let result = (namePerson === 'Артем') ? console.log('директор') : (namePerson === 'Максим') ? console.log('преподаватель') : console.log('студент');