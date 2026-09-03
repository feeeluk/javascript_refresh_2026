// Pontoon V2 - Deck (create and prepare the deck)
// ////////////////////////////////////////

    // What this file does:
        // creates originalDeck (sorted, constant)
        // creates deck (working copy)
        // shuffles the deck
        // resets the deck when starting a new game

    // What it must NOT do:
        // deal cards
        // calculate values
        // update UI
        // run game logic

// Variables
// ////////////////////////////////////////

    const originalDeck = [];
    let deck = [];

// Functions
// ////////////////////////////////////////

    function createDeck(){

        const suits = ["H", "D", "S", "C"]; 
        const ranks = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];

        // create a new object for each suit and rank, and then push it into the deck array
        for(const suit of suits){
            for(const rank of ranks){
                originalDeck.push({rank, suit}) 
            }
        }

        // create copy of originalDeck
        deck = [...originalDeck]; // clone the original array by using SPREAD

        // randomise the deck
        shuffle(deck);

        console.log(originalDeck);
        console.log(deck);
    }

    function shuffle(array){
        for(let i = array.length -1; i > 1; i--){
            const random = Math.floor(Math.random() * i + 1);

            [array[i], array[random]] = [ array[random], array[i]];
        }
    }
