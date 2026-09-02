// Pontoon V2 - Deck
// ////////////////////////////////////////

    // This section handles:
    // - what cards exist
    // - how to shuffle
    // - how to deal

// Variables
// ////////////////////////////////////////

    const suits = ["H", "D", "S", "C"]; 
    const ranks = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"] ;

    const originalDeck = [];

    // create a new object for each suit and rank, and then push it into the deck array
    for(const suit of suits){
        for(const rank of ranks){
            originalDeck.push({rank, suit}) 
        }
    }

    console.log(originalDeck);

    // create copy of originalDeck
    let deck = [...originalDeck]; // clone the original array by using SPREAD

    // randomise the deck
    shuffle(deck);

    console.log(deck);

// Functions
// ////////////////////////////////////////

    function shuffle(array){
        for(let i = array.length -1; i > 1; i--){
            const random = Math.floor(Math.random() * i + 1);

            [array[i], array[random]] = [ array[random], array[i]];
        }
    }

// Event Listeners
// ////////////////////////////////////////

