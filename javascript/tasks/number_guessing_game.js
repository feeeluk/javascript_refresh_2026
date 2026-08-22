// Number Guessing Game
// ////////////////////////////////////////

document.getElementById("code").addEventListener("click", event => {
  window.location = "/javascript/tasks/number_guessing_game.js";
});

let randomNumber;
let numberOfGuesses;
let min;
let max;
let cancel = false;

document.getElementById("start").addEventListener("click", event => {
  min = Number(document.getElementById("min").value);
  max = Number(document.getElementById("max").value);
  
  if(min > max){
    window.alert("Min cannot be greater than Max!");
    return;
  }
  
  reset();
  console.log("game started");
  console.log(`Min: ${min}`);
  console.log(`Max: ${max}`);
  generate_random_number();
  console.log(`Random number: ${randomNumber}`);

  // Let the browser repaint, then start the game
  setTimeout(() => {
    guess();
    if (cancel) {
      window.alert("Game cancelled.");
    } else {
      window.alert("YOU WIN!");
      document.getElementById("guesses").style.display = "block";
      document.getElementById("countOfGuesses").textContent = numberOfGuesses;
    }
  }, 0);
});


function reset(){
  numberOfGuesses = 0;
  document.getElementById("guesses").style.display = "none";
  cancel = false;
}

function generate_random_number(){
  randomNumber = Math.floor(Math.random() * max) + min;
}

function guess(){
  
  let guess = 0;

  while(guess !== randomNumber){

    let raw; 

    if(guess === 0){
      raw = window.prompt(`Please enter a value between ${min} and ${max}`);
    }

    else if(guess < randomNumber){
      raw = window.prompt(`Try again with a higher value`);
    }

    else if(guess > randomNumber){
      raw = window.prompt(`Try again with a lower value`);
    }

    if(raw === null){
      cancel = true;
      return;
    }

    guess = Number(raw);

    numberOfGuesses ++;
    
  }
 
}

// ////////////////////////////// Bro Code solution

document.getElementById("broCodeGame").addEventListener("click", event =>{
  
  const minNum = 1;
  const maxNum = 10;
  const answer = Number(Math.floor(Math.random() * maxNum) + minNum);
  
  let attempts = 0;
  let raw;
  let guess;
  let running = true;
  
  console.log("start game");
  console.log(`Answer: ${answer}`);

  while(running){

    // prompt for guess
    raw = window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
    guess = Number(raw);

    // increment attempts
    attempts++;

    // Check user input/actions and respond 
    if(raw == null){
      return; // exit game by pressing 'cancel'
    }
    else if(isNaN(guess)){
      window.alert(`Enter a NUMBER!`);
    }
    else if(raw == "" || guess < minNum || guess > maxNum){
      window.alert(`Guess a number between ${minNum} and ${maxNum}`);
    }
    else if(guess > answer){
      window.alert(`Too high! Guess again!`);
    }
    else if(guess < answer){
      window.alert(`Too low! Guess again!`);
    }
    else {
      // end game
      running = false;

      // win
      window.alert(`You win! The answer was ${answer}, and it took you ${attempts} attempts.`);
    }    
  }
 
})