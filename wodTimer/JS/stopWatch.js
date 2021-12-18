const stopFullRecord = document.getElementById('stop-full-record');
let hour = 00;
let min = 00;
let sec = 00;
let tenMilis = 00;

const hoursText = document.getElementById('hours');
const minutesText = document.getElementById('minutes');
const secondsText = document.getElementById('seconds');
const tenMilisText = document.getElementById('tenMilis');

const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
const recordBtn = document.getElementById('recordBtn');
const recordUl = document.getElementById('testRecordList');

let Interval;

//Click START button then show STOP button
startBtn.addEventListener('click', function() {
  clearInterval(Interval);
  Interval = setInterval(startTimer, 10);
  stopBtn.classList.remove('hidden');
  startBtn.classList.add('hidden');
});

stopBtn.onclick = function() {
  clearInterval(Interval);
  createRecord();
  stopBtn.classList.add('hidden');
  startBtn.classList.remove('hidden');
};

recordBtn.onclick = function() {
  createRecord();
}

resetBtn.onclick = function() {
  hour = 00;
  hoursText.innerHTML = "00";
  min = 00;
  minutesText.innerHTML = "00";
  sec = 00;
  secondsText.innerHTML = "00";
  tenMilis = 00;
  tenMilisText.innerHTML = "00";
  recordUl.innerHTML = "";
  clearInterval(Interval);
};

function createRecord() {
  const node = document.createElement("li");
  const record = stopFullRecord.textContent;
  const textnode = document.createTextNode(record);
  node.appendChild(textnode);
  recordUl.appendChild(node);
}

function startTimer() {
  tenMilis++;
  if(tenMilis < 9) {
    tenMilisText.innerHTML = "0" + tenMilis;
  }
  if(tenMilis > 9) {
    tenMilisText.innerHTML = tenMilis;
  }
  if(tenMilis > 99) {
    sec++;
    secondsText.innerHTML = "0" + sec;
    tenMilis = 0;
    tenMilisText.innerHTML = "0" + tenMilis;
  }
  if(sec < 9) {
    secondsText.innerHTML = "0" + sec;
  }
  if(sec > 9) {
    secondsText.innerHTML = sec;
  }
  if(sec > 59) {
    min++;
    minutesText.innerHTML = "0" + min;
    sec = 0;
    secondsText.innerHTML = "0" + sec;
    tenMilis = 0;
    tenMilisText.innerHTML = "0" + tenMilis;
  }
  if(min < 9) {
    minutesText.innerHTML = "0" + min;
  }
  if(min > 9) {
    minutesText.innerHTML = min;
  }
  if(min > 59) {
    hour++
    hoursText.innerHTML = "0" + hour;
    min++;
    minutesText.innerHTML = "0" + min;
    sec = 0;
    secondsText.innerHTML = "0" + sec;
    tenMilis = 0;
    tenMilisText.innerHTML = "0" + tenMilis;
  }
  if(hour < 9) {
    hoursText.innerHTML = "0" + hour;
  }
  if(hour > 9) {
    hoursText.innerHTML = hour;
  }
}