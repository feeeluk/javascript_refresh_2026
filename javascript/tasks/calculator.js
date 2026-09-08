// Calculator
// ////////////////////////////////////////

document.getElementById("code").addEventListener("click", event => {
  window.location = "/javascript/tasks/calculator.js";
});

// Variables
// ////////////////////////////////////////

const displayScreen = document.getElementById("display");
let displayString = ["0"];

// Functions
// ////////////////////////////////////////

function showDisplay(){

  displayScreen.innerHTML = displayString.join("");
  
}

function addToDisplayString(char){

  if(
    displayString.length === 1 &&
    displayString[0] === "0" &&
    ["+", "-", "*", "/"].includes(char)
  ){
  }
  
  else if(
    displayString.length === 1 &&
    !["+", "-", "*", "/"].includes(char) &&
    displayString[0] === "0"
  ){
    displayString[0] = char;
  } 

  else if(
    ["+", "-", "*", "/"].includes(char) &&
    (displayString[displayString.length -1] === "+" ||
    displayString[displayString.length -1] === "-" || 
    displayString[displayString.length -1] === "*" || 
    displayString[displayString.length -1] === "/")
  ){
  }

  else if(
    ["."].includes(char) &&
    displayString[displayString.length -1] === "."
  ){
  }

  else {
    displayString.push(char);
  }
}

function calculateResult(){

  displayScreen.innerHTML = eval(displayString.join("")); // evel = evaluates a string equation, .join() adds all the elements of an array into one a single string.
  displayString = ["0"];

}

function clear(){

  displayString = ["0"];
  displayScreen.innerHTML = displayString;

}

function deleteChar(){

  if(
    displayString.length === 1 &&
    displayString[(displayString.length -1)] === "0"
  ){
  }

  else if(
    displayString.length === 1 &&
    displayString[(displayString.length -1)] !== "0"
  ){
    displayString[0] = "0";
  }

  else {
    displayString.pop();
  }

}


// Execution
// ////////////////////////////////////////

showDisplay(displayString);

// Event Listeners
// ////////////////////////////////////////

document.getElementById("add").addEventListener("click", event => {
  addToDisplayString("+");
  showDisplay();
})

document.getElementById("7").addEventListener("click", event => {
  addToDisplayString("7");
  showDisplay();
})

document.getElementById("8").addEventListener("click", event => {
  addToDisplayString("8");
  showDisplay();
})

document.getElementById("9").addEventListener("click", event => {
  addToDisplayString("9");
  showDisplay();
})

document.getElementById("minus").addEventListener("click", event => {
  addToDisplayString("-");
  showDisplay();
})

document.getElementById("4").addEventListener("click", event => {
  addToDisplayString("4");
  showDisplay();
})

document.getElementById("5").addEventListener("click", event => {
  addToDisplayString("5");
  showDisplay();
})

document.getElementById("6").addEventListener("click", event => {
  addToDisplayString("6");
  showDisplay();
})

document.getElementById("multiply").addEventListener("click", event => {
  addToDisplayString("*");
  showDisplay();
})

document.getElementById("1").addEventListener("click", event => {
  addToDisplayString("1");
  showDisplay();
})

document.getElementById("2").addEventListener("click", event => {
  addToDisplayString("2");
  showDisplay();
})

document.getElementById("3").addEventListener("click", event => {
  addToDisplayString("3");
  showDisplay();
})

document.getElementById("divide").addEventListener("click", event => {
  addToDisplayString("/");
  showDisplay();
})

document.getElementById("0").addEventListener("click", event => {
  addToDisplayString("0");
  showDisplay();
})

document.getElementById("period").addEventListener("click", event => {
  addToDisplayString(".");
  showDisplay();
})

document.getElementById("equals").addEventListener("click", event => {
  calculateResult();
})

document.getElementById("clear").addEventListener("click", event => {
  clear();
})

document.getElementById("delete").addEventListener("click", event => {
  deleteChar();
  showDisplay();
})
