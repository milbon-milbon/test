'use strict'
let timer1, timer2, timer3;
function start() {
  timer1 = setTimeout(function() {
    document.querySelector("#circle1").style.backgroundColor = "blue";
    timer2 = setTimeout(function() {
      document.querySelector("#circle1").style.backgroundColor = "white";
      document.querySelector("#circle2").style.backgroundColor = "yellow";
      timer3 = setTimeout(function() {
        document.querySelector("#circle2").style.backgroundColor = "white";
        document.querySelector("#circle3").style.backgroundColor = "red";
      }, 2000);
    }, 2000);
  }, 2000);
}
function stop() {
  clearTimeout(timer1);
  clearTimeout(timer2);
  clearTimeout(timer3);
  document.querySelector("#circle1").style.backgroundColor = "red";
  document.querySelector("#circle2").style.backgroundColor = "red";
  document.querySelector("#circle3").style.backgroundColor = "red";
}