const jsDate = document.querySelector('#jsDate');
const jsTime = document.querySelector('#jsTime');

function getDate() {
  const today = new Date();
  //연, 월, 일
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  jsDate.innerText = `${year} / ${month} / ${day}`
} 

function getTime() {
  const today = new Date();
  // 시, 분, 초
  const hours = String(today.getHours()).padStart(2, "0");
  const minute = String(today.getMinutes()).padStart(2, "0");
  const seconds = String(today.getSeconds()).padStart(2, "0");
  jsTime.innerText = `${hours} : ${minute} : ${seconds}`
}
getDate();
getTime();
setInterval(getTime, 1000);