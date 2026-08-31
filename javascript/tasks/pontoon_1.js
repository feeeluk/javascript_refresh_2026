// Pontoon V1
// ////////////////////////////////////////

  document.getElementById("code").addEventListener("click", event => {
    window.location = "/javascript/tasks/pontoon_1.js";
  });


// Variables
// ////////////////////////////////////////

const actions = document.getElementById("actions");
const startGameButton = document.getElementById("startGame");
const stickButton = document.getElementById("stick");
const twistButton = document.getElementById("twist");

const details = document.getElementById("details");
const showPlayerScore = document.getElementById("showPlayerScore");
const showPlayerNumberOfCards = document.getElementById("showPlayerNumberOfCards");
const showPlayerCards = document.getElementById("showPlayerCards");
const showComputerScore = document.getElementById("showComputerScore");
const showComputerNumberOfCards = document.getElementById("showComputerNumberOfCards");
const showComputerCards = document.getElementById("showComputerCards");

const results = document.getElementById("results");
const showResults = document.getElementById("showResults");

let deck = [
              "AH", "KH", "QH", "JH", "10H", "9H", "8H", "7H", "6H", "5H", "4H", "3H", "2H",
              "AD", "KD", "QD", "JD", "10D", "9D", "8D", "7D", "6D", "5D", "4D", "3D", "2D",
              "AC", "KC", "QC", "JC", "10C", "9C", "8C", "7C", "6C", "5C", "4C", "3C", "2C",
              "AS", "KS", "QS", "JS", "10S", "9S", "8S", "7S", "6S", "5S", "4S", "3S", "2S"
            ];

// let deck = [
//                 "Hearts-Ace", "Hearts-King", "Hearts-Queen"];

let playerScore = 0;
let playerNumberOfCards = 0;
let playerCards = [];

let computerScore = 0;
let computerNumberOfCards = 0;
let computerCards = [];

// Functions
// ////////////////////////////////////////


  async function startGame(){

    // Hide the 'Start Game' button
    startGameButton.classList.replace("visible", "hidden");

    // Show the 'details' area
    details.classList.replace("hidden", "visible");

    // Draw 2 cards for the player
    await drawCards(2, "player", 1000);

    // Draw 2 cards for the computer
    await drawCards(2, "computer", 1000);

    // Give player options
    playerOptions();
  }

  function playerOptions(){
    
    if(
        playerNumberOfCards === 2 &&
        playerCards.some(card => card.includes("A")) &&
        (
          playerCards.some(card => card.includes("K")) ||
          playerCards.some(card => card.includes("Q")) ||
          playerCards.some(card => card.includes("J"))
        )
    ){
      // showResults = "You have Pontoon!"
      results.classList.replace("hidden", "visible");
      showResults.textContent = "You have PONTOON..";
    }
    
    else if(playerScore < 15){
      // Show the 'actions' area
      actions.classList.replace("hidden", "visible");

      // Show the 'twist' button
      twistButton.classList.replace("hidden", "visible"); 
    }
    
    else if(playerScore >= 15 && playerScore < 21){
      // Show the 'actions' area
      actions.classList.replace("hidden", "visible");

      // Show the 'twist' button
      twistButton.classList.replace("hidden", "visible");

      // Show the 'stick' button
      stickButton.classList.replace("hidden", "visible"); 
    }

    else if(playerScore > 21){
      // Result = "Bust"
      results.classList.replace("hidden", "visible");
      showResults.textContent = "Bust";

      // Hide the 'actions' area
      actions.classList.replace("visible", "hidden");
    }  
      
  }
 
  async function drawCards(numberOfCards, who, time){

    function sleep(time){
      return new Promise(resolve => setTimeout(resolve, time));
    }
        
    for(let i = 0; i < numberOfCards; i++){
      
      const getCard = randomNumber(deck.length); // use the randomNumber function to produce a random number within the size of the deck
      const chosenCard = deck[getCard]; // use that randon number to get a card out of the deck
      let value = calculateCardValue(chosenCard); // calculate that card's value (e.g "King" becomes 10)
        
      deck.splice(getCard, 1); // remove the chosen card from the deck

      switch(who){

        case "player":
          playerScore += value; // assign the value of the chosen card to the playerScore variable
          playerNumberOfCards++; // increase the player's number of cards variable
          playerCards.push(chosenCard); // assign the chosen card to the playerCards array
          showPlayerScore.textContent = playerScore;
          showPlayerNumberOfCards.textContent = playerNumberOfCards;
          const newPlayerCard = document.createElement("img");
          newPlayerCard.style.width = "100px";
          newPlayerCard.src = `/resources/images/cards/front/${chosenCard}.png`;
          showPlayerCards.append(newPlayerCard);
          break;

        case "computer":
          computerScore += value; // assign the value of the chosen card to the computerScore variable
          computerNumberOfCards++; // increase the computer's number of cards variable
          computerCards.push(chosenCard); // assign the chosen card to the computerCards array
          showComputerScore.textContent = computerScore;
          showComputerNumberOfCards.textContent = computerNumberOfCards;
          const newComputerCard = document.createElement("img");
          newComputerCard.style.width = "100px";
          newComputerCard.src = `/resources/images/cards/front/${chosenCard}.png`;
          showComputerCards.append(newComputerCard);
          break;

      }

      // show details


      // only add a delay if there are more cards to come
      if (numberOfCards - i !== 1) {
        await sleep(2000);
      }

    }
  }

  function randomNumber(sizeOfNumber){

    return Math.floor(Math.random() * sizeOfNumber);

  }

  function calculateCardValue(card){
    
    const result = card[0];

    let value;
    switch(result){
      case "A":
      value = 11;
      break;

      case "K":
      value = 10;
      break;

      case "Q":
      value = 10;
      break;

      case "J":
      value = 10;
      break;

      case "1":
      value = 10;
      break;

      case "9":
      value = 9;
      break;

      case "8":
      value = 8;
      break;

      case "7":
      value = 7;
      break;

      case "6":
      value = 6;
      break;

      case "5":
      value = 5;
      break;

      case "4":
      value = 4;
      break;

      case "3":
      value = 3;
      break;

      case "2":
      value = 2;
      break;
    }

    return value;
  }

// Page Execution
// ////////////////////////////////////////


// Event Listeners
// ////////////////////////////////////////

  document.getElementById("startGame").addEventListener("click", event => {

    startGame();
    
  })

  document.getElementById("stick").addEventListener("click", event => {
      
    // Hide player actions
    // Show computer cards

  })

  document.getElementById("twist").addEventListener("click", event => {
    drawCards(1, "player", 0);
    playerOptions();
  })