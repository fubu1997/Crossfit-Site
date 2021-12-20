const tabataTimeOnMin = document.querySelector('#tabata__timeOnMin');
const tabataTimeOnSec = document.querySelector('#tabata__timeOnSec');
const tabataTimOffMin = document.querySelector('#tabata__timeOffMin');
const tabataTimeOffSec = document.querySelector('#tabata__timeOffSec');
const tabataSetRound = document.querySelector('#tabata__setRound');
// Set Btn
const tabataSettingBtn = document.querySelector('#tabata__setting');
const tabataStartBtn = document.querySelector('#tabata__start');
const tabataStopBtn = document.querySelector('#tabata__stop');
const tabataResetBtn = document.querySelector('#tabata__reset');

//clock content
const taTimeLeftClock = document.querySelector('.tabata__timeleft p');
const taTimeBreakClock = document.querySelector('.tabata__break p');
const taCurrentRound = document.querySelector('.currentRound');
const taAllRound = document.querySelector('.AllRound');

//interval var
let firstFive = 5;
let tabataInterval;

function setTabataClock() {
  stringTimeOnMin = tabataTimeOnMin.value;
  stringTimeOnSec = tabataTimeOnSec.value;
  stringTimeOffMin = tabataTimOffMin.value;
  stringTimeOffSec = tabataTimeOffSec.value;
  stringRound = tabataSetRound.value;
  
  setTimeOnMin = parseInt(stringTimeOnMin);
  setTimeOnSec = parseInt(stringTimeOnSec);
  setTimeOffMin = parseInt(stringTimeOffMin);
  setTimeOffSec = parseInt(stringTimeOffSec);
  setRound = parseInt(stringRound);


  taTimeLeftClock.innerHTML = `${setTimeOnMin<10?`0${setTimeOnMin}`:setTimeOnMin} : ${setTimeOnSec<10?`0${setTimeOnSec}`:setTimeOnSec}`
  taTimeBreakClock.innerHTML = `${setTimeOffMin<10?`0${setTimeOffMin}`:setTimeOnMin} : ${setTimeOffSec<10?`0${setTimeOffSec}`:setTimeOffSec}`
  taCurrentRound.innerHTML = 1;
  taAllRound.innerHTML = `${setRound<10?`0${setRound}`:setRound}`
}