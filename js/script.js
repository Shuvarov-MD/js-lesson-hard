'use strict';

let week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let today = new Date();

week.forEach(function(item, index) {
  if (index === today.getDay()) {
    document.write('<strong>' + item + '</strong><br>');
  } else if (index === 0 || index === 6) {
    document.write('<em>' + item + '</em><br>');
  } else {
    document.write(item + '<br>');
  }
});