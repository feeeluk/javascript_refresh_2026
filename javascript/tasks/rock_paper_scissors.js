// Rock, Paper, Scissors
// ////////////////////////////////////////

document.getElementById("code").addEventListener("click", event => {
  window.location = "/javascript/tasks/rock_paper_scissors.js";
});

// Variables
// ////////////////////////////////////////

  const playingArea = document.getElementById("playingArea");
  const resultArea = document.getElementById("resultArea");
  const playAgainButton = document.getElementById("playAgainButton");

  let usersChoiceString;
  let computersChoiceString;
  let result;

// Functions 
// ////////////////////////////////////////block

  function usersChoice(){
    document.getElementById("startNewGame").style.display = "none";
    playingArea.querySelectorAll(".userChoice").forEach(button => button.style.display = "inline")
  }

  function runGame(){

    computersChoice();
    compareChoices();

  }

  function computersChoice(){
    const random = Math.floor(Math.random() * 3);
    const choice = ["Rock", "Paper", "Scissors"]
    computersChoiceString = choice[random];
    
    console.log(`Computer chose: "${computersChoiceString}"`);
  }

  function compareChoices(){

    // both players match then it is a draw
    if(usersChoiceString === computersChoiceString){
      result = "DRAW!";
      console.log(result);
      hidePlayingArea();
      showResult(result);
      showPlayAgainButton();
    }

    // rock: beats scissors, loses to paper
    else if(
      usersChoiceString === "Rock" &&
      computersChoiceString === "Scissors"
    ){
      result = "You WIN!";
      console.log(result);
      hidePlayingArea();
      showResult(result);
      showPlayAgainButton();
    }

    // paper: beats rock, loses to scissors
    else if(
      usersChoiceString === "Paper" &&
      computersChoiceString === "Rock"
    ){
      result = "You WIN!";
      console.log(result);
      hidePlayingArea();
      showResult(result);
      showPlayAgainButton();
    }

    // scissors: beats paper, loses to rock
    else if(
        usersChoiceString === "Scissors" &&
        computersChoiceString === "Paper"
    ){
      result = "You WIN!";
      console.log(result);
      hidePlayingArea();
      showResult(result);
      showPlayAgainButton();
    }

    else {
      result = "You LOSE!";
      console.log(result);
      hidePlayingArea();
      showResult(result);
      showPlayAgainButton();
    }

  }

  function hidePlayingArea(){

    playingArea.querySelectorAll(".userChoice").forEach(button => button.style.display = "none");

  }

  function showResult(string){

    resultArea.style.display = "block";
    resultArea.innerHTML = string;

  }

  function hideResult(){

    resultArea.style.display = "none";

  }

  function showPlayAgainButton(){

    playAgainButton.style.display = "block";

  }

  function hidePlayAgainButton(){

    playAgainButton.style.display = "none";

  }

// Execution
// ////////////////////////////////////////


// Event Listeners
// ////////////////////////////////////////

  document.getElementById("startNewGame").addEventListener("click", event => {
    
    console.log("Game started");
    usersChoice();

  })

  document.getElementById("rock").addEventListener("click", event => {

    usersChoiceString = "Rock";
    console.log(`User chose: "${usersChoiceString}"`);  
    runGame();

  })

  document.getElementById("paper").addEventListener("click", event => {

    usersChoiceString = "Paper";
    console.log(`User chose: "${usersChoiceString}"`);
    runGame();

  })

  document.getElementById("scissors").addEventListener("click", event => {

    usersChoiceString = "Scissors";
    console.log(`User chose: "${usersChoiceString}"`);
    runGame();
    
  })

  document.getElementById("playAgainButton").addEventListener("click", event => {

      console.clear();
      console.log("new game");
      usersChoiceString = "";
      computersChoiceString = "";
      result = "";
      usersChoice();
      hideResult();
      hidePlayAgainButton();

    })

 

  