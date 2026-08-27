// Rock, Paper, Scissors
// ////////////////////////////////////////

document.getElementById("code").addEventListener("click", event => {
  window.location = "/javascript/tasks/rock_paper_scissors.js";
});

// Variables
// ////////////////////////////////////////

  const playingArea = document.getElementById("playingArea");
  const resultArea = document.getElementById("resultArea");

  let userChoice;

// Functions 
// ////////////////////////////////////////

  function gameStarted(){
    console.log("Game started");
  }

  function giveUserChoice(){
    playingArea.innerHTML = `
                            <button id='rock'>Rock</button>
                            <button id='paper'>Paper</button>
                            <button id='scissors'>Scissors</button>
                            `;
  }

  function listenForChoice(){
    document.getElementById("rock").addEventListener("click", event => {
      userChoice = "Rock";
      console.log(`User chose "${userChoice}"`);  
      display(`You chose "${userChoice}"`);
    })

    document.getElementById("paper").addEventListener("click", event => {
      userChoice = "Paper";
      console.log(`User chose "${userChoice}"`);
      display(`You chose "${userChoice}"`);
    })

    document.getElementById("scissors").addEventListener("click", event => {
      userChoice = "Scissors";
      console.log(`User chose "${userChoice}"`);
      display(`You chose "${userChoice}"`);
    })
    return;
  }

  function computerChoice(){
    const random = Math.floor(Math.random() * 3);
    const choice = ["Rock", "Paper", "Siccors"]
    
    console.log(`Computer: ${choice[random]}`);
  }

  function display(string){
    playingArea.innerHTML = string;
  }

  function gameOver(){
    console.log("Game ended");
  }

  // game needs to randomly select an option for 'the computer'

  // game needs to compare the two choices and decide if the player has won, lost, or drawn.

  function startNewGame(){
    
    gameStarted();
    giveUserChoice();
    listenForChoice(); // asynchronous
    computerChoice();
    gameOver();

  }


// Execution
// ////////////////////////////////////////


// Event Listeners
// ////////////////////////////////////////

  document.getElementById("startNewGame").addEventListener("click", event => {
    startNewGame();
  })

  