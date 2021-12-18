const clock__menu = document.querySelectorAll('#clock__menu');

const alarmBtn = document.querySelector('.alarm');
const timerBtn = document.querySelector('.timer');
const stopwatchBtn = document.querySelector('.stopwatch');
const tabataBtn = document.querySelector('.tabata__clock');

const alarm = document.querySelector('#alarm__content');
const timer = document.querySelector('#timer__content');
const stopWatch = document.querySelector('#stopwatch__content');
const tabata = document.querySelector('#tabata__clock__content');


function removeClockMenu() {
  alarmBtn.classList.add("hidden");
  timerBtn.classList.add("hidden");
  stopwatchBtn.classList.add("hidden");
  tabataBtn.classList.add("hidden");
}

function showAlarm(event) {
  removeClockMenu();
  alarm.classList.remove("hidden");
}
function showTimer(event) {
  removeClockMenu();
  timer.classList.remove("hidden");
}
function showStopWatch(event) {
  removeClockMenu();
  stopWatch.classList.remove("hidden");
}
function showTabata(event) {
  removeClockMenu();
  tabata.classList.remove("hidden");
}

alarmBtn.addEventListener('click', showAlarm);
timerBtn.addEventListener('click', showTimer);
stopwatchBtn.addEventListener('click', showStopWatch);
tabataBtn.addEventListener('click', showTabata);