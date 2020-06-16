'use strict';

//Функция для вывода полной записи времени
function showTimeFull() {
  let date = new Date(),
    fullDate = document.querySelector('#full-date'),
    days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
    timeFull = {
      dayFull: days[date.getDay()],
      dateFull: date.getDate(),
      monthFull: months[date.getMonth()],
      yearFull: date.getFullYear(),
      hoursFull: date.getHours(),
      minutesFull: date.getMinutes(),
      secondsFull: date.getSeconds()
    },
    hour = (timeFull.hoursFull % 10 === 2 || timeFull.hoursFull % 10 === 3 || timeFull.hoursFull % 10 === 4) ? ' часа ' : (timeFull.hoursFull % 10 === 1 && timeFull.hoursFull !== 11) ? ' час ' : ' часов ',
    minute = (timeFull.minutesFull % 10 === 2 || timeFull.minutesFull % 10 === 3 || timeFull.minutesFull % 10 === 4) ? ' минуты ' : (timeFull.minutesFull % 10 === 1 && timeFull.minutesFull !== 11) ? ' минута ' : ' минут ',
    second = (timeFull.secondsFull % 10 === 2 || timeFull.secondsFull % 10 === 3 || timeFull.secondsFull % 10 === 4) ? ' секунды' : (timeFull.secondsFull % 10 === 1 && timeFull.secondsFull !== 11) ? ' секунда' : ' секунд';

   fullDate.innerHTML = 'Сегодня ' + timeFull.dayFull +', '+ timeFull.dateFull + ' ' + timeFull.monthFull + ' ' + timeFull.yearFull + ' года, ' + timeFull.hoursFull + hour + timeFull.minutesFull + minute + timeFull.secondsFull + second;
}


//Функция для вывода короткой записи времени
function showTimeShort() {
  let date = new Date(),
    shortDate = document.querySelector('#short-date'),
    timeShort = {
      dateFull: date.getDate(),
      monthFull: date.getMonth() + 1,
      yearFull: date.getFullYear(),
      hoursFull: date.getHours(),
      minutesFull: date.getMinutes(),
      secondsFull: date.getSeconds()
    };

  for (let key in timeShort) {
    if (timeShort[key] < 10) {
      timeShort[key] = '0' + timeShort[key];
    }
  }
  shortDate.innerHTML = timeShort.dateFull + '.' + timeShort.monthFull + '.' + timeShort.yearFull + ' - ' + timeShort.hoursFull + ':' + timeShort.minutesFull + ':' + timeShort.secondsFull;
}

setInterval(showTimeFull, 1000);
setInterval(showTimeShort, 1000);