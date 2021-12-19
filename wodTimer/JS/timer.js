const timerForm = document.querySelector('#timer__content');
const timerSetting = document.querySelector('#timer-setting');

let timerHourText = document.querySelector('#timer-hours');
let timerMinText = document.querySelector('#timer-min');
let timerSecText = document.querySelector('#timer-sec');

const timerStartBtn = document.querySelector('#timer-startBtn');
const timerStopBtn = document.querySelector('#timer-stopBtn');
const timerResetBtn = document.querySelector('#timer-resetBtn');

const TimerAudio = new Audio();
TimerAudio.src = "/wodTimer/audio/alarm.mp3";

let timerInterval;

//셋팅 버튼 로직
function TimersetTimer() {
  //입력값 가져오기, 전역변수 사용
  setHour = document.getElementById('setting-hour').value;
  setMin = document.getElementById('setting-minute').value;
  setSec = document.getElementById('setting-seconds').value;
  //정수로 반환, 전역변수 사용
  numberSetHour = parseInt(setHour);
  numberSetMin = parseInt(setMin);
  numberSetSec = parseInt(setSec);
  timerStartBtn.classList.remove('hidden');
  timerSetting.classList.add('hidden');
  //출력
  TimerPrint();
  // 셋팅후 start부분
  timerStartBtn.addEventListener('click', function() {
    clearInterval(timerInterval);
    timerInterval = setInterval(TimerstartTimer, 1000);
  });
}

//타이머 시작 로직
function TimerstartTimer() {
  numberSetSec--;
  if(numberSetSec < 10) {
    timerSecText.innerHTML = "0" + numberSetSec;
  } else {
    timerSecText.innerHTML = numberSetSec;
  }
  if(numberSetSec  < 0) {
    numberSetSec = 59;
    timerSecText.innerHTML = numberSetSec;
    numberSetMin--;
    timerMinText.innerHTML = numberSetMin;
  }
  if(numberSetMin < 10) {
    timerMinText.innerHTML = "0" + numberSetMin;
  } else {
    timerMinText.innerHTML = numberSetMin;
  }
  if(numberSetMin < 0) {
    numberSetMin = 59;
    timerMinText.innerHTML = numberSetSec;
    numberSetHour--;
    timerHourText.innerHTML = numberSetHour;
  }
  if(numberSetHour < 10) {
    timerHourText.innerHTML = "0" + numberSetHour;
  } else {
    timerHourText.innerHTML = numberSetHour;
  }
  timerStopBtn.classList.remove('hidden');
  timerStartBtn.classList.add('hidden');

  function TimerFinish() {
    clearInterval(timerInterval);
    numberSetHour = 0;
    numberSetMin = 0;
    numberSetSec = 0;
    timerSecText.innerHTML = "0" + numberSetSec;
    timerMinText.innerHTML = "0" + numberSetMin;
    timerHourText.innerHTML = "0" + numberSetHour;
    TimerAudio.play();
    timerStopBtn.classList.add('hidden');
    timerStartBtn.classList.add('hidden');
    timerSetting.classList.remove('hidden');
  }
  if(numberSetHour <1 && numberSetMin <1 && numberSetSec < 1) {
    TimerFinish();
  }
}


//stop 버튼 로직
function TimerstopTimer() {
  clearInterval(timerInterval);
  timerStopBtn.classList.add('hidden');
  timerStartBtn.classList.remove('hidden');
}



//리셋 버튼 로직
function TimerresetTimer() {
    numberSetHour = 0;
    numberSetMin = 0;
    numberSetSec = 0;
    TimerPrint();
    clearInterval(timerInterval);
    timerStopBtn.classList.add('hidden');
    timerStartBtn.classList.add('hidden');
    timerSetting.classList.remove('hidden');
}


//기타함수
//출력함수
function TimerPrint() {
  if(numberSetHour < 10) {
    timerHourText.innerHTML = "0" + numberSetHour;
  } else {
    timerHourText.innerHTML = numberSetHour;
  }
  if(numberSetMin < 10) {
    timerMinText.innerHTML = "0" + numberSetMin;
  } else {
    timerMinText.innerHTML = numberSetMin;
  }
  if(numberSetSec < 10) {
    timerSecText.innerHTML = "0" + numberSetSec;
  } else {
    timerSecText.innerHTML = numberSetSec;
  }
}

//이벤트 발생 부분

timerSetting.addEventListener('click', TimersetTimer);

timerStartBtn.addEventListener('click', function() {
  timerStopBtn.classList.remove('hidden');
  timerStartBtn.classList.add('hidden');
  clearInterval(timerInterval);
  timerInterval = setInterval(TimerstartTimer, 1000);
});

timerStopBtn.addEventListener('click', function() {
  timerStopBtn.classList.add('hidden');
  timerStartBtn.classList.remove('hidden');
  clearInterval(timerInterval);
})

timerResetBtn.addEventListener('click', TimerresetTimer);