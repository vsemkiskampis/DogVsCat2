let clicks = 0;

const TIMEOUT = 7000;

const display = document.querySelector('#display');
const button = document.querySelector('#button');
const counter = document.querySelector('#counter');


button.onclick = start;

function start() {
    const startTime = Date.now();
   

   display.textContent = formatTime(TIMEOUT);
   button.onclick = () => counter.textContent = ++clicks;
   const interval = setInterval(() => {
       document.getElementById('lis').className = 'listen2';
        const delta = Date.now() - startTime;
        display.textContent = formatTime(TIMEOUT - delta);   
   },100);
   
   setTimeout(() =>{
       button.onclick = null;
       
       if(counter.textContent < 50){
        display.textContent = 'Cat Win';
        
      }else{
        display.textContent = 'Corgi Win';
        button.style.backgroundImage = 'url("../dog/img/Dead.png")';
       
    }
       listen();
       clearInterval(interval);
       clearTimeout(TIMEOUT);
       rebut();
       
   }, TIMEOUT);
}


function listen(){
    document.getElementById('lis2').textContent = 'Чтобы начать сначала нажмите на кнопку ниже';
    document.getElementById('lis2').className = 'listen';
}

function rebut(){
   document.getElementById('rebut').className = 'newClass';
}

function formatTime(ms) {
    return Number.parseFloat(ms / 1000).toFixed(2);
}



