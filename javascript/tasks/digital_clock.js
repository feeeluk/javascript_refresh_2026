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
  console.log(time.getHours().toString().padStart(2,0));
  console.log(time.getMinutes().toString().padStart(2,0));
  console.log(time.getSeconds().toString().padStart(2,0));
  clock.innerHTML = time;
  clock.innerHTML = time + `<br>${time.getHours().toString().padStart(2,0)}:${time.getMinutes().toString().padStart(2,0)}:${time.getSeconds().toString().padStart(2,0)}`;
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

