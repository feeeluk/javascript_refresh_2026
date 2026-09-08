// Counter
// ////////////////////////////////////////

document.getElementById("code").addEventListener("click", event => {
  window.location = "/javascript/tasks/counter.js";
});

const counterOriginalValue = 0;
let counter = counterOriginalValue;
let counterLabel = document.getElementById("counterLabel");

document.getElementById("increaseButton").addEventListener("click", event => {
  increase();
})

document.getElementById("decreaseButton").addEventListener("click", event => {
  decrease();
})

document.getElementById("resetButton").addEventListener("click", event => {
  reset();
})

function increase(){
  counter++;
  counterLabel.textContent = counter;
}

function decrease(){
  counter--;
  counterLabel.textContent = counter;
}

function reset(){
  counter = counterOriginalValue;
  counterLabel.textContent = counter;
}
