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
let taCurrentRoundFisrt = 1;

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
  taCurrentRound.innerHTML = `${taCurrentRoundFisrt<10?`0${taCurrentRoundFisrt}`:taCurrentRoundFisrt}`
  taAllRound.innerHTML = `${setRound<10?`0${setRound}`:setRound}`
}


// button Logic
// setClock
function setTabataClock() {
  tabataSettingBtn.classList.add('hidden');
  tabataStartBtn.classList.remove('hidden');
  tabataStopBtn.classList.add('hidden');
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
  tabataStartBtn.classList.add('hidden');
  tabataStopBtn.classList.remove('hidden');
  if(tabataContentBox.classList.contains('tabataActive')) {
    clearInterval(tabataStartTextInterval);
    tabataStartText();
  }
  if(tabataFisrtStartBox.classList.contains('tabataActive')) {
    clearInterval(tabataStartTextInterval);
    tabataStartTextInterval = setInterval(function() {
      taStartNumber--;
      taFirstStartH2.innerHTML = `${taStartNumber}`;
  
      if(taStartNumber <= 0) {
        clearInterval(tabataStartTextInterval);
        tabataFisrtStartBox.classList.remove('tabataActive');
        tabataTimeLeft();
      }
    }, 1000)
  }
  if(tabataTimeLeftBox.classList.contains('tabataActive')) {
    clearInterval(tabataTimeLeftStart);
    tabataTimeLeftStart = setInterval(function(){
      setTimeOnSec--;
      tabataPrintTime();
      if(setTimeOnSec < 0) {
        setTimeOnSec = 59;
        setTimeOnMin--;
        tabataPrintTime();
      }
      if(setTimeOnMin <= 0 && setTimeOnSec <= 0) {
        clearInterval(tabataTimeLeftStart);
        tabataTimeLeftBox.classList.remove('tabataActive');
        tabataBreak();
      }
    }, 1000)
  }
  if(tabataBreakBox.classList.contains('tabataActive')) {
    clearInterval(tabataBreakStart);
    tabataBreakStart = setInterval(function() {
      setTimeOffSec--;
      tabataPrintTime();
      if(setTimeOffSec < 0) {
        setTimeOffSec = 59;
        setTimeOffMin--;
        tabataPrintTime();
      }
      if(setTimeOffMin <= 0 && setTimeOffSec <= 0) {
        clearInterval(tabataBreakStart);
        tabataBreakBox.classList.remove('tabataActive');
        tabataRoundUp();
      }
    }, 1000)
  }
}

function tabataStop() {
  tabataStartBtn.classList.remove('hidden');
  tabataStopBtn.classList.add('hidden');
  clearInterval(tabataStartTextInterval)
  clearInterval(tabataTimeLeftStart);
  clearInterval(tabataBreakStart);
}

function tabataReset() {
  tabataContentBox.classList.add('tabataActive');
  tabataFisrtStartBox.classList.remove('tabataActive');
  tabataTimeLeftBox.classList.remove('tabataActive');
  tabataBreakBox.classList.remove('tabataActive');


  tabataSettingBtn.classList.remove('hidden');
  tabataStartBtn.classList.add('hidden');
  tabataStopBtn.classList.add('hidden');
  setTimeOnMin = 0;
  setTimeOnSec = 0;
  setTimeOffMin = 0;
  setTimeOffSec = 0;
  taCurrentRoundFisrt = 0;
  setRound = 0;

  tabataFisrtStartBox.classList.add('hidden');
  tabataBreakBox.classList.remove('hidden');
  tabataTimeLeftBox.classList.remove('hidden');
  tabataRoundBox.classList.remove('hidden');

  clearInterval(tabataStartTextInterval);
  clearInterval(tabataTimeLeftStart);
  clearInterval(tabataBreakStart);
  tabataPrintTime();
}


//Tabata Timer Start Logic
let tabataStartTextInterval;
let tabataTimeLeftStart;
let tabataBreakStart;

//N1. print 5,4,3,2,1 in Content
function tabataStartText() {
  tabataHiddenContentAll();
  tabataContentBox.classList.remove('tabataActive');
  tabataFisrtStartBox.classList.add('tabataActive');
  tabataFisrtStartBox.classList.remove('hidden');
  let tabataStartNumber = 5;
  taStartNumber = parseInt(tabataStartNumber);

    tabataStartTextInterval = setInterval(function() {
    taStartNumber--;
    taFirstStartH2.innerHTML = `${taStartNumber}`;

    if(taStartNumber <= 0) {
      clearInterval(tabataStartTextInterval);
      tabataFisrtStartBox.classList.remove('tabataActive');
      tabataTimeLeft();
    }
  }, 1000)
}
//N2. Print Time Left Show the Content
function tabataTimeLeft() {
  tabataShowContentAll();
  tabataTimeLeftBox.classList.add('tabataActive');
  tabataFisrtStartBox.classList.add('hidden');
    tabataTimeLeftStart = setInterval(function(){
    setTimeOnSec--;
    tabataPrintTime();
    if(setTimeOnSec < 0) {
      setTimeOnSec = 59;
      setTimeOnMin--;
      tabataPrintTime();
    }
    if(setTimeOnMin <= 0 && setTimeOnSec <= 0) {
      clearInterval(tabataTimeLeftStart);
      tabataTimeLeftBox.classList.remove('tabataActive');
      tabataBreak();
    }
  }, 1000)
  setTabataClock();
}
//N3. Print Break Show the Content
function tabataBreak() {
    tabataBreakBox.classList.add('tabataActive');
    tabataBreakStart = setInterval(function() {
    setTimeOffSec--;
    tabataPrintTime();
    if(setTimeOffSec < 0) {
      setTimeOffSec = 59;
      setTimeOffMin--;
      tabataPrintTime();
    }
    if(setTimeOffMin <= 0 && setTimeOffSec <= 0) {
      clearInterval(tabataBreakStart);
      tabataBreakBox.classList.remove('tabataActive');
      tabataRoundUp();
    }
  }, 1000)
}
//N4. Round Up or End logic
function tabataRoundUp() {
  if(taCurrentRoundFisrt == setRound) {
    tabataReset();
  } else {
    taCurrentRoundFisrt++;
    tabataPrintTime();
    tabataTimeLeft();
  }
}