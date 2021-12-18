const startBtn = document.querySelector('#startBtn');
const stopBtn = document.querySelector('#stopBtn');
const resetBtn = document.querySelector('#resetBtn');
const h1 = document.getElementsByTagName('h1');
let hrs = 0;
let min = 0;
let sec = 0;
let milisec = 0;
var t;

function SWcount() {
  milisec++;
  if (milisec >= 1000) {
    milisec = 0;
    sec++
    if(sec >= 60) {
      sec = 0;
      min++;
      if(min >= 60) {
        min = 0;
        hrs++;
      }
    }
  }
}

function add() {
  SWcount();
  h1.textContent = (hrs > 9 ? hrs : "0" + hrs) 
          + ":" + (min > 9 ? min : "0" + min)
          + ":" + (sec > 9 ? sec : "0" + sec);
  timer();
}

function timer() {
  t = setTimeout(add, 10);
}

timer();
startBtn.addEventListener('click',timer);
stopBtn.addEventListener('click', () => {
  clearTimeout(t);
});

resetBtn.addEventListener('click', () => {
  h1.textContent = "00:00:00";
  seconds = 0; minutes = 0; hours = 0;
});

// //일정한 시간 간격에 따라 함수를 반복 실행
// setInterval(반복실행할함수, 10)

// // 정해진 시간이 지나면 함수 실행
// setTimeout(실행할함수, 1000)

//setInterval 메소드 호출되어 반복 실행할 함수 타이머를 들고 후 타이머는 0이 아닌 숫자를 반환
//clearInterval의 메소드에 전달하면 해당 타이머의 반복실행이 취소된다.