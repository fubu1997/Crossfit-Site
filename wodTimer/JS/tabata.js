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

// content box
const tabataContentBox = document.querySelector('.tabata__content');
const tabataFisrtStartBox = document.querySelector('#tabata__firstStart');
const tabataBreakBox = document.querySelector('.tabata__break');
const tabataTimeLeftBox = document.querySelector('.tabata__timeleft');
const tabataRoundBox = document.querySelector('.tabata__round');

//clock content
const taFirstStartH2 = document.querySelector('#tabata__firstStart h2');
const taTimeLeftClock = document.querySelector('.tabata__timeleft p');
const taTimeBreakClock = document.querySelector('.tabata__break p');
const taCurrentRound = document.querySelector('.currentRound');
const taAllRound = document.querySelector('.AllRound');

//interval var
let tabataInterval;

//반복 글자
//Content Hidden All
function tabataHiddenContentAll() {
  tabataBreakBox.classList.add('hidden');
  tabataTimeLeftBox.classList.add('hidden');
  tabataRoundBox.classList.add('hidden');
}
//Content Show All
function tabataShowContentAll() {
  tabataBreakBox.classList.remove('hidden');
  tabataTimeLeftBox.classList.remove('hidden');
  tabataRoundBox.classList.remove('hidden');
}
//Print Time
function tabataPrintTime() {
  taTimeLeftClock.innerHTML = `${setTimeOnMin<10?`0${setTimeOnMin}`:setTimeOnMin} : ${setTimeOnSec<10?`0${setTimeOnSec}`:setTimeOnSec}`
  taTimeBreakClock.innerHTML = `${setTimeOffMin<10?`0${setTimeOffMin}`:setTimeOnMin} : ${setTimeOffSec<10?`0${setTimeOffSec}`:setTimeOffSec}`
  taCurrentRound.innerHTML = "0"+ 0;
  taAllRound.innerHTML = `${setRound<10?`0${setRound}`:setRound}`
}


// logic
// setClock
function setTabataClock() {
  stringTimeOnMin = tabataTimeOnMin.value;
  stringTimeOnSec = tabataTimeOnSec.value;
  stringTimeOffMin = tabataTimOffMin.value;
  stringTimeOffSec = tabataTimeOffSec.value;
  stringRound = tabataSetRound.value;
  
  // setClock - transfomation string to number
  setTimeOnMin = parseInt(stringTimeOnMin);
  setTimeOnSec = parseInt(stringTimeOnSec);
  setTimeOffMin = parseInt(stringTimeOffMin);
  setTimeOffSec = parseInt(stringTimeOffSec);
  setRound = parseInt(stringRound);

  tabataPrintTime();
}


function tabataStart() {
  tabataStartText();
}

function tabataStop() {
  tabataStopLogic();
}

function tabataReset() {
  setTimeOnMin = 0;
  setTimeOnSec = 0;
  setTimeOffMin = 0;
  setTimeOffSec = 0;
  setRound = 0;

  tabataPrintTime();
  clearInterval();
}



//타바타 타이머 시작 로직

function tabataStartText() {
  tabataHiddenContentAll();
  tabataFisrtStartBox.classList.remove('hidden');
  let tabataStartNumber = 5;
  taStartNumber = parseInt(tabataStartNumber);

  var tabataStartTextInterval = setInterval(function() {
    taStartNumber--;
    taFirstStartH2.innerHTML = `${taStartNumber}`;

    if(taStartNumber <= 0) {
      clearInterval(tabataStartTextInterval);
      tabataTimeLeft();
    }
  }, 1000);
}


function tabataTimeLeft() {
  tabataShowContentAll();
  tabataFisrtStartBox.classList.add('hidden');
  let tabataTimeLeftStart = setInterval(function(){
    setTimeOnSec--;
    tabataPrintTime();
    if(setTimeOnSec < 0) {
      setTimeOnSec = 59;
      setTimeOnMin--;
      tabataPrintTime();
    }
    if(setTimeOnMin <= 0 && setTimeOnSec <= 0) {
      clearInterval(tabataTimeLeftStart);
      tabataBreak();
    }
  }, 1000)
}


// --------------------------------------------
function tabataBreak() {
  let tabataBreakStart = setInterval(function() {
    setTimeOffSec--;
    tabataPrintTime();
    if(setTimeOffSec < 0) {
      setTimeOffSec = 59;
      setTimeOffMin--;
      tabataPrintTime();
    }
    if(setTimeOffMin <= 0 && setTimeOffSec <= 0) {
      console.log('hhh');
      clearInterval(tabataBreakStart);
    }
  }, 1000)
}
// -------------------------------------------------

function tabataStopLogic() {
  
}