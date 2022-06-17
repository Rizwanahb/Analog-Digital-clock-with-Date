/*Display Date*/
const date= new Date();

let days=[  'Sunday',  'Monday',  'Tuesday',  'Wednesday',  'Thursday',  'Friday',  'Saturday'
];

let months=[
  'January',  'February',  'March',  'April',  'May',  'June',  'July',  'August',  'September',  'October',  'November',  'December'
];

document.getElementById("date").innerHTML= date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear() + ' , ' + days[date.getDay()];

/*Analog Clock*/ 

setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()

/****DIGITAL CLOCK********* */

var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var seconds = document.getElementById("seconds");

/*The setInterval() method calls a function at specified intervals (in milliseconds).*/
var clock = setInterval(
    function time(){
      var date_now = new Date();
      var hr = date_now.getHours();
      var min = date_now.getMinutes();
      var sec = date_now.getSeconds();
      
      if(hr < 10){
          hr = "0" + hr;
      } 
      if(min < 10){
          min = "0" + min;
      } 
      if(sec < 10){
          sec = "0" + sec;
      }

      hour.textContent = hr;
      minute.textContent = min;
      seconds.textContent = sec;



    },1000
);
