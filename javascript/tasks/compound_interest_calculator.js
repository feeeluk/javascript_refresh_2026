// Compound Interest Calculator
// ////////////////////////////////////////

document.getElementById("code").addEventListener("click", event => {
  window.location = "/javascript/tasks/compound_interest_calculator.js";
});

// ////////////////////////////////////////

let principalAmount;
let interestRate;
let years;
let result;
let showResults;
let show;

function reset(){
  console.clear();
  principalAmount = 0;
  interestRate = 0;
  years = 0;
  result = 0;
  document.getElementById("result").style.display = "none";
  document.getElementById("result").innerHTML = ``;
  show = true;
}

function getInput(){

  principalAmount = document.getElementById("principalAmount").value;
  interestRate = document.getElementById("interestRate").value;
  years = document.getElementById("years").value;

}

function displayInputs(){

  console.log(`Principal Amount: £${principalAmount}`);
  interestRate = ((interestRate/100)+1);
  console.log(`Interest Rate: ${interestRate}`);
  console.log(`Years: ${years}`);

}

function calculate(){

  result = principalAmount;

  if(principalAmount == "" || principalAmount <= 1){
    window.alert("Enter a Principal Amount value of 1 or more.");
    show = false;
  }
  else if(interestRate == "" || interestRate < 0 ){
    window.alert("Enter an Interest Rate greater than 0.");
    show = false;
  }
  else if(years == "" || years < 1 ){
    window.alert("Enter a valid amount of time in years (1 or more).");
    show = false;
  }

  for(let i = 1; i <= years; i++){
    result = Math.floor(result * interestRate);
  }

}

function displayResults(){

  console.log(`Final amount: £${result}`);

  if(show){
    showResults = document.getElementById("result");
    showResults.style.display = "block";
    showResults.innerHTML = `<br>£${result}`;
  }
  else{
    return;
  }

  

}

document.getElementById("calculate").addEventListener("click", event => {

  reset();
  getInput();
  displayInputs();

  // hack to redraw the page when using window.prompt/window.alert
  setTimeout(() => {
    
    calculate();
    displayResults();
    
  }, 0);

})