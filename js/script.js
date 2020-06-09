'use strict';

function getString(data) {
  if (typeof(data) !== 'string') {
    return (data + ' - не строка. Введите строку.');
  } else {
    if (data !== '' && data !== ' '){
      if (data.length > 30) {
        return data.trim().slice(0, 30) + '...';
      } else {
        return data.trim();
      }
    } else {
      return 'Введите не пустую строку';
    }
  }
}

console.log(getString(123));
console.log(getString(true));
console.log(getString(null));
console.log(getString(undefined));

console.log(getString(' '));
console.log(getString(''));
console.log(getString('   Далеко-далеко  '));
console.log(getString('Далеко-далеко'));
console.log(getString('Далеко-далеко, за словесными горами в стране гласных и согласных живут рыбные тексты.'));
console.log(getString('  Далеко-далеко, за словесными горами в стране гласных и согласных живут рыбные тексты.  '));
