// Rock, Paper, Scissors V2
// ////////////////////////////////////////

document.getElementById("code").addEventListener("click", event => {
  window.location = "/javascript/tasks/rock_paper_scissors_2.js";
});

// Variables
// ////////////////////////////////////////

  const displayPlayerChoice = document.getElementById("playerChoice");
  const displayComputerChoice = document.getElementById("computerChoice");
  const displayResult = document.getElementById("result");
  const displayPlayerScore = document.getElementById("playerScore");
  const displayComputerScore = document.getElementById("computerScore");
  const options = ["Rock", "Paper", "Scissors"];


  let playerChoice;
  let computerChoice;
  let result;
  let playerScore = 0;
  let computerScore = 0;

// Functions 
// ////////////////////////////////////////block

  function playGame(choice){
    
    // Reset console
    console.clear();

    // Display Player's choice
    console.log(`User's choice: "${choice}"`);
    display(displayPlayerChoice, choice);

    // Display Computer's choice
    computerChoice = options[Math.floor(Math.random() * 3)];
    console.log(`Computer's choice: "${computerChoice}"`);
    display(displayComputerChoice, computerChoice);

    // Calculate result
    calculate();

    // Keep score
    keepScore();
  }

  function display(field, value){
    field.textContent = value;
  }

  function calculate(){

    if(playerChoice === computerChoice){

      result = "TIED";

    }
    
    else {
        switch(playerChoice){

          case "Rock":
            result = (computerChoice === "Scissors") ? "You WIN!" : "You LOSE!";
            break;

            case "Paper":
            result = (computerChoice === "Rock") ? "You WIN!" : "You LOSE!";
            break;

            case "Scissors":
            result = (computerChoice === "Paper") ? "You WIN!" : "You LOSE!";
            break;
        }
    }

    console.log(result);
    display(displayResult, result);

  }

  function keepScore(){
    switch(result){
      case "You WIN!":
        playerScore++;
        display(displayPlayerScore, playerScore);
        break;

      case "You LOSE!":
        computerScore++;
        display(displayComputerScore, computerScore);
        break;
    }
  }

  function reset(){
    
    console.clear();

    playerChoice = "";
    computerChoice ="";
    result = "";
    playerScore = 0;
    computerScore = 0;

    display(displayPlayerChoice, playerChoice);
    display(displayComputerChoice, computerChoice);
    display(displayResult, result);
    display(displayPlayerScore, playerScore);
    display(displayComputerScore, computerScore);
  }

// Event Listeners
// ////////////////////////////////////////

  document.getElementById("rock").addEventListener("click", event => {
    playerChoice = "Rock";
    playGame(playerChoice);
    
  })

  document.getElementById("paper").addEventListener("click", event => {
    playerChoice = "Paper";
    playGame(playerChoice);
  })

  document.getElementById("scissors").addEventListener("click", event => {
    playerChoice = "Scissors";
    playGame(playerChoice);
  })

  document.getElementById("reset").addEventListener("click", event => {
    reset();
  })