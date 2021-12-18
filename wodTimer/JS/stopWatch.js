let minutes = 0;
let seconds = 0;
let tenMilis = 0;
const appenTens = document.querySelector('.tenMilis');
const appenSeconds = document.querySelector('.seconds');
const appenMinutes = document.querySelector('.minutes');
const buttonStart = document.querySelector('#startBtn');
const buttonStop = document.querySelector('#stopBtn');
const buttonReset = document.querySelector('#resetBtn');
let intervalId;

buttonStart.onclick = function() {
  clearInterval(intervalId);
  intervalId = setInterval(operateTimer, 10);
}

buttonStop.onclick = function() {
  clearInterval(intervalId);
}

buttonReset.onclick = function() {
  clearInterval(intervalId);
  tenMilis = 0; seconds = 0; minutes = 0;
  appenTens.textContent = "00";
  appenSeconds.textContent = "00"
  appenMinutes.textContent = "00"
}

function operateTimer() {
  tenMilis++;
  appenTens.textContent = tenMilis > 9 ? tenMilis : '0' + tenMilis
  if(tenMilis > 99) {
    seconds++;
    appenSeconds.textContent = seconds > 9 ? seconds : '0' + seconds
    tenMilis = 0
    appenTens.textContent = "00"
  }
  if(seconds > 59) {
    minutes++;
    appenMinutes.textContent = minutes > 9 ? minutes : '0' + minutes
    seconds = 0;
    appenSeconds.textContent = "00"
  }
}


// 일정한 시간 간격에 따라 함수를 반복 실행
// setInterval(반복실행할함수, 10)

// 정해진 시간이 지나면 함수 실행
// setTimeout(실행할함수, 1000)

// setInterval 메소드 호출되어 반복 실행할 함수 타이머를 들고 후 타이머는 0이 아닌 숫자를 반환
// clearInterval의 메소드에 전달하면 해당 타이머의 반복실행이 취소된다.