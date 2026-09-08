// Pontoon V1
// ////////////////////////////////////////

  document.getElementById("code").addEventListener("click", event => {
    window.location = "/javascript/tasks/pontoon_1.js";
  });

// Variables
// ////////////////////////////////////////

const playerActions = document.getElementById("playerActions");
const startGameButton = document.getElementById("startGame");
const stickButton = document.getElementById("stick");
const twistButton = document.getElementById("twist");

const playerArea = document.getElementById("playerArea");
const showPlayerScore = document.getElementById("showPlayerScore");
const showPlayerNumberOfCards = document.getElementById("showPlayerNumberOfCards");
const showPlayerCards = document.getElementById("showPlayerCards");
const showPlayerHandHistory = document.getElementById("showPlayerHandHistory");

const computerArea = document.getElementById("computerArea");
const showComputerScore = document.getElementById("showComputerScore");
const showComputerNumberOfCards = document.getElementById("showComputerNumberOfCards");
const showComputerCards = document.getElementById("showComputerCards");
const showComputerHandHistory = document.getElementById("showComputerHandHistory");

const resultArea = document.getElementById("resultArea");
const showResults = document.getElementById("showResults");

let deck = [
              "AH", "KH", "QH", "JH", "10H", "9H", "8H", "7H", "6H", "5H", "4H", "3H", "2H",
              "AD", "KD", "QD", "JD", "10D", "9D", "8D", "7D", "6D", "5D", "4D", "3D", "2D",
              "AC", "KC", "QC", "JC", "10C", "9C", "8C", "7C", "6C", "5C", "4C", "3C", "2C",
              "AS", "KS", "QS", "JS", "10S", "9S", "8S", "7S", "6S", "5S", "4S", "3S", "2S"
            ];

// let deck = ["2H", "3H", "10H", "2S", "3S", "10S", "2D", "3D", "4D", "2C", "3C", "4C"];

let playerScore = 0;
let playerNumberOfCards = 0;
let playerCards = [];

let computerScore = 0;
let computerNumberOfCards = 0;
let computerCards = [];

// Functions
// ////////////////////////////////////////

  function startGame(){

    startGameButton.disabled = true;
    
    setTimeout(() => {dealCards(1, "player")}, 000);
    setTimeout(() => {dealCards(1, "computer")}, 000);
    setTimeout(() => {dealCards(1, "player")}, 000);
    setTimeout(() => {dealCards(1, "computer")}, 000);

    setTimeout(() => {
      showCard(showPlayerCards.firstChild, playerCards[0][1]);
      calculateAndShowValues("player", playerCards[0][1]);
    }, 000);
    
    setTimeout(() => {
      showCard(showPlayerCards.lastChild, playerCards[1][1]);
      calculateAndShowValues("player", playerCards[1][1]);
      playerOptions();
    }, 000);
    
  }

  function dealCards(numberOfCards, who){
        
    for(let i = 0; i < numberOfCards; i++){     
      
      const getCard = randomNumber(deck.length); // use the randomNumber function to produce a random number within the deck size      
      const chosenCard = deck[getCard]; // use that randon number to get a card out of the deck
      
      deck.splice(getCard, 1); // remove the chosen card from the deck

      switch(who){

        case "player":
          playerCards.push(["back", chosenCard]); // assign the chosen card to the array
          createCard(showPlayerCards); 

          break;

        case "computer":   
          computerCards.push(["back", chosenCard]); // assign the chosen card to the array
          createCard(showComputerCards); // create a new img element

          break;
      }
    }
  }

  function handHistory(who, numberOfCards){

    const element = document.createElement("li");

    if(who == "player" && numberOfCards <= 2){
      element.textContent = "deal";
      showPlayerHandHistory.append(element);
    }
    else if(who == "player" && numberOfCards > 2){
      element.textContent = "twist";
      showPlayerHandHistory.append(element);
    }
    else if(who == "computer" && numberOfCards <= 2){
      element.textContent = "deal";
      showComputerHandHistory.append(element);
    }
    else if(who == "computer" && numberOfCards > 2){
      element.textContent = "twist";
      showComputerHandHistory.append(element);
    }
  }

  function calculateAndShowValues(who, card){
    
    let value = calculateCardValue(card); // calculate that card's value (e.g "King" becomes 10)

    switch(who){
      case "player" :
        playerScore += value;
        playerNumberOfCards++;
        handHistory("player", playerNumberOfCards);
        showPlayerScore.textContent = playerScore; // show the score
        showPlayerNumberOfCards.textContent = playerNumberOfCards; // show the number of cards
        break;

      case "computer" :
        computerScore += value;
        computerNumberOfCards++;
        handHistory("computer", computerNumberOfCards);
        showComputerScore.textContent = computerScore; // show the score
        showComputerNumberOfCards.textContent = computerNumberOfCards; // show the number of cards
        break;
    }  
  }

  function createCard(where){
    let newCard = document.createElement("img");
    newCard.style.width = "100px"; // give that img element a width
    newCard.src = `/resources/images/cards/back/back-blue.png`;
    where.append(newCard); // append the new image to the parent
  }

  function showCard(htmlParent, card){
    htmlParent.src = `/resources/images/cards/front/${card}.png`; 
  }

  function sleep(time){
      return new Promise(resolve => setTimeout(resolve, time));
  }

  function playerOptions(){

    twistButton.disabled = true;
    stickButton.disabled = true;
    
    if(
        playerNumberOfCards === 2 &&
        playerCards.some(card => card[1].startsWith("A")) &&
        (
          playerCards.some(card => card[1].startsWith("K")) ||
          playerCards.some(card => card[1].startsWith("Q")) ||
          playerCards.some(card => card[1].startsWith("J"))
        )
    ){
      stickButton.disabled = false; // Enable stick button

      // Add to log
      let playerHandHistory = document.createElement("li");
      playerHandHistory.textContent = "You have PONTOON!";
      showPlayerHandHistory.append(playerHandHistory);
    }

    else if(playerNumberOfCards === 4 && playerScore >= 15 && playerScore <= 21){
      twistButton.disabled = false; // Enable 'twist' button
      stickButton.disabled = false; // Enable the 'stick' button

      // Add to log
      let playerHandHistory = document.createElement("li");
      playerHandHistory.textContent = "You have a 4 card hand!";
      showPlayerHandHistory.append(playerHandHistory);
    }

    else if(playerNumberOfCards === 5 && playerScore >= 15 && playerScore <= 21){
      stickButton.disabled = false; // Enable the 'stick' button

      // Add to log
      let playerHandHistory = document.createElement("li");
      playerHandHistory.textContent = "You have a 5 card hand!";
      showPlayerHandHistory.append(playerHandHistory);
    }
    
    else if(playerScore >= 15 && playerScore < 21){
      twistButton.disabled = false; // Enable 'twist' button
      stickButton.disabled = false; // Enable the 'stick' button
    }

    else if(playerScore < 15){
      twistButton.disabled = false; // Enable 'twist' button
    }

    else if(playerScore === 21){
      stickButton.disabled = false; // Enable 'stick' button
    }

    else if(playerScore > 21){
      showResults.textContent = "YOU HAVE BUSTED!"; // Result = "Bust"
    }      
  }

  function computerOptions(){
    while(computerScore <=17){
      dealCards(1, "computer");
      showCard(showComputerCards.lastChild, computerCards[computerCards.length - 1][1]);
      calculateAndShowValues("computer", computerCards[computerCards.length - 1][1]);
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

  function calculateAndShowResults(){
    if( computerNumberOfCards === 2 &&
        computerCards.some(card => card[1].startsWith("A")) &&
        (
          computerCards.some(card => card[1].startsWith("K")) ||
          computerCards.some(card => card[1].startsWith("Q")) ||
          computerCards.some(card => card[1].startsWith("J"))
        )
    ){
      showResults.textContent = "YOU LOSE!";
    }

    else if(  playerNumberOfCards === 2 &&
              playerCards.some(card => card[1].startsWith("A")) &&
              (
                playerCards.some(card => card[1].startsWith("K")) ||
                playerCards.some(card => card[1].startsWith("Q")) ||
                playerCards.some(card => card[1].startsWith("J"))
              )
    ){
      showResults.textContent = "YOU WIN!";
    }

    else if(  computerScore >= playerScore &&
              computerScore <= 21
    ){
      showResults.textContent = "YOU LOSE!";
    }

    else if(  computerNumberOfCards == 4 &&
              computerNumberOfCards >= playerNumberOfCards &&
              computerScore >= playerScore &&
              computerScore <= 21
    ){
      showResults.textContent = "YOU LOSE!";
    }

    else if(  computerNumberOfCards == 5 &&
      computerNumberOfCards >= playerNumberOfCards &&
      computerScore >= playerScore &&
      computerScore <= 21
    ){
      showResults.textContent = "YOU LOSE!";
    }

    else {
      showResults.textContent = "YOU WIN!";
    }
  }

// Event Listeners
// ////////////////////////////////////////

  document.getElementById("startGame").addEventListener("click", event => {
    startGame();
  })

  document.getElementById("stick").addEventListener("click", event => {

    // Make the player choices buttons inactive
    stickButton.disabled = true;
    twistButton.disabled = true;
    
    // Show computer cards
    setTimeout(() => {
      showCard(showComputerCards.firstChild, computerCards[0][1]);
      calculateAndShowValues("computer", computerCards[0][1]);
    }, 0);
    
    setTimeout(() => {
      showCard(showComputerCards.lastChild, computerCards[1][1]);
      calculateAndShowValues("computer", computerCards[1][1]);
      
      computerOptions();
      calculateAndShowResults();
    }, 1000);
  })

  document.getElementById("twist").addEventListener("click", event => {
    dealCards(1, "player");
    showCard(showPlayerCards.lastChild, playerCards[playerCards.length - 1][1]);
    calculateAndShowValues("player", playerCards[playerCards.length - 1][1]);
    playerOptions();
  })