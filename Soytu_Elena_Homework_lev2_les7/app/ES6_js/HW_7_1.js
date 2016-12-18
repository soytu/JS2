
  'use strict'
  class Clock {
  constructor (element){
    let scoreboard; // табло для часов
   
    function render() {  // геренирую часы  
      let elem = document.createElement('div'); //добавляю блок для часов..
      elem.className = 'clock';
      element.appendChild(elem);
  
      scoreboard = document.createElement('div'); // добавляю табло
      scoreboard.className = 'scoreboard';
      elem.appendChild(scoreboard);
           
      function addButton(name) {    // функция добавления кнопок
        let button = document.createElement('button');
        button.name = name;
        button.innerText = name;
        button.className = 'button';
        elem.appendChild(button);
        return button;
        }
  
      elem.start = addButton('Старт'); // добавление кнопок
      elem.stop = addButton('Стoп');
      elem.alert = addButton('Алерт');
      return elem;
    };
  
    let elem=render();
      
    function time(){                                                           // возвращает текущее время в формате 00:00:00
      let date = new Date();
      let hours = date.getHours()>9?date.getHours():'0'+date.getHours();
      let minutes = date.getMinutes()>9?date.getMinutes():'0'+date.getMinutes();
      let seconds = date.getSeconds()>9?date.getSeconds():'0'+date.getSeconds();
      return hours+':'+minutes+':'+seconds;
    }
  
    let timer;                           //вывод времени
    function start () {
      timer=setInterval(function() {
      scoreboard.innerText = time()}, 1000);
    }  
   
    function stop() {
      setTimeout(function() {clearInterval(timer)})
    }
   
    elem.onclick = function(event) {
      if (event.target==elem.start) start();  
      if (event.target==elem.stop) stop();
      if (event.target==elem.alert) alert('проверка');
    } 
    this.start=start;
    this.stop=stop; 
  }
}
document.addEventListener("DOMContentLoaded", addClock);

function addClock(){
  let elem = document.getElementById('now1');
  let clock = new Clock(elem);
  
  clock.start();
  clock.stop();
}  