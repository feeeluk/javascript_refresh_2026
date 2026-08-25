// Digital Clock
// ////////////////////////////////////////

document.getElementById("code").addEventListener("click", event => {
  window.location = "/javascript/tasks/digital_clock.js";
});

// Variables
// ////////////////////////////////////////

const clock = document.getElementById("clock");

let time;

// Functions
// ////////////////////////////////////////

function reset(){
  console.clear();
}

function getTime(){
  time = new Date();
}

function displayTime(){
  console.log(time);
  clock.innerHTML = time;
}

function updateClock(){
  reset();
  getTime();
  displayTime();
}


// Execution
// ////////////////////////////////////////

updateClock();

setInterval(() => {
  updateClock();
}, 1000)

