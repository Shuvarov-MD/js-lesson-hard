'use strict';

document.body.style.backgroundImage = "url('../img/sky.jpg')";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";

const airplane = document.querySelector('#airplane');

let start = document.createElement('button'),
  reset = document.createElement('button');


airplane.style.position = 'relative';

start.classList.add('start');
start.textContent = 'Start';
start.style.display = 'block';

reset.classList.add('reset');
reset.textContent = 'Reset';
reset.style.display = 'none';

airplane.before(start);
start.after(reset);

let count = 0;

let flyInterval;
let pause = false;

const flyAirplane = () => {
  flyInterval = requestAnimationFrame(flyAirplane);
  count++;
  console.log(count);
  airplane.style.top = count + 'px';
  airplane.style.left = (count * 3) + 'px';
  if(count > 500) {
    cancelAnimationFrame(flyInterval);
  }
};


start.addEventListener('click', () => {
  if (!pause) {
    flyInterval = requestAnimationFrame(flyAirplane);
    reset.style.display = 'block';
    pause = true;
  } else {
    cancelAnimationFrame(flyInterval);
    pause = false;
  }

});

reset.addEventListener('click', () => {
  cancelAnimationFrame(flyInterval);
  count = 0;
  airplane.style.top = 0;
  airplane.style.left = 0;
  reset.style.display = 'none';
});