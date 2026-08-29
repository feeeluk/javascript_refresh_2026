// Pontoon V1
// ////////////////////////////////////////

  document.getElementById("code").addEventListener("click", event => {
    window.location = "/javascript/tasks/pontoon_1.js";
  });


// Variables
// ////////////////////////////////////////

// const cardSuits = ["hearts", "spades", "diamonds", "clubs"];
let deck = ["Ace", "King", "Queen", "Jack", "10", "9", "8", "7", "6", "5", "4", "3", "2"];


let playerCards = [];
let playerScore = 0;

let computerCards = [];

// Functions
// ////////////////////////////////////////

  function drawCards(numberOfCards, score, cards, showScore, showCards){

    for(let i = 0; i < numberOfCards; i++){
      const getCard = randomNumber(deck.length);
      const chosenCard = deck[getCard];

      let value = calculateCardValue(chosenCard);
      // console.log(`${i} ${value}`);
      score += value;

      deck.splice(getCard, 1);
      cards.push(chosenCard);

      document.getElementById(showScore).textContent = score;
      document.getElementById(showCards).textContent += `${chosenCard}, `;
    }

  }

  function randomNumber(sizeOfNumber){

    return Math.floor(Math.random() * sizeOfNumber);

  }

  function calculateCardValue(card){
    let value;
    switch(card){
      case "Ace":
      value = 1;
      break;

      case "King":
      value = 10;
      break;

      case "Queen":
      value = 10;
      break;

      case "Jack":
      value = 10;
      break;

      case "10":
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

    // Deal two cards to the player
    drawCards(2, playerScore, playerCards, "showPlayerScore", "showPlayerCards");
    console.log(playerCards);
    console.log(deck);

  })