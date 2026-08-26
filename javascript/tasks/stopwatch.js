// Stopwatch
// ////////////////////////////////////////

  document.getElementById("code").addEventListener("click", event => {
    window.location = "/javascript/tasks/stopwatch.js";
  });


// Variables
// ////////////////////////////////////////

  const stopwatch = document.getElementById("stopwatch");

  let running = false;
  let timer = null;
  let startTime = 0;
  let elapsedTime = 0;


// Functions
// ////////////////////////////////////////

  function start(){
    if(!running){
      running = true;
      startTime = Date.now() - elapsedTime;
      timer = setInterval(displayTime, 10);   
    }
  }

  function stop(){
    if(running){
      running = false;
      clearInterval(timer);
    }
  }

  function reset(){
    running = false;
    clearInterval(timer);
    stopwatch.innerHTML = "00:00:00:00";
    
  }

  function displayTime(){

    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let miliSeconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2,0);
    minutes = String(minutes).padStart(2,0);
    seconds = String(seconds).padStart(2,0);
    miliSeconds = String(miliSeconds).padStart(2,0);

    stopwatch.innerHTML = `${hours}:${minutes}:${seconds}:${miliSeconds}`;
  }


// Execution
// ////////////////////////////////////////

  stopwatch.innerHTML = "00:00:00:00";


// Event listeners
// ////////////////////////////////////////

  document.getElementById("start").addEventListener("click", event => {
    start();
  });

  document.getElementById("stop").addEventListener("click", event => {
    stop();
  });

  document.getElementById("reset").addEventListener("click", event => {
    reset();
  });