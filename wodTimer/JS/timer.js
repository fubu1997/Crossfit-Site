const timerForm = document.querySelector('#timer__content');
const timerSetting = document.querySelector('#timer-setting');

let timerHourText = document.querySelector('#timer-hours');
let timerMinText = document.querySelector('#timer-min');
let timerSecText = document.querySelector('#timer-sec');

const timerStartBtn = document.querySelector('#timer-startBtn');
const timerStopBtn = document.querySelector('#timer-stopBtn');

function setTimer() {
  //입력값 가져오기
  const setHour = document.getElementById('setting-hour').value;
  const setMin = document.getElementById('setting-minute').value;
  const setSec = document.getElementById('setting-seconds').value;
  //정수로 반환
  const numberSetHour = parseInt(setHour);
  const numberSetMin = parseInt(setMin);
  const numberSetSec = parseInt(setSec);
  //출력
  if(numberSetHour < 10) {
    timerHourText.innerHTML = "0" + numberSetHour;
  } else {
    numberSetHour;
  }
  if(numberSetMin < 10) {
    timerMinText.innerHTML = "0" + numberSetMin;
  } else {
    numberSetMin;
  }
  if(numberSetSec < 10) {
    timerSecText.innerHTML = "0" + numberSetSec;
  }

  timerStartBtn.addEventListener('click', startTimer);
}












function startTimer() {
  timerStopBtn.classList.remove('hidden');
  timerStartBtn.classList.add('hidden');
}

timerSetting.addEventListener('click', setTimer);
timerStartBtn.addEventListener('click', startTimer);
