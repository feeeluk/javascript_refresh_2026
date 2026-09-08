// Pontoon V2 - Deck (create and prepare the deck)
// ////////////////////////////////////////

// Variables
// ////////////////////////////////////////

    const originalDeck = [];
    let deck = [];

// Functions
// ////////////////////////////////////////

    function createDeck(){

        const suits = ["H", "D", "S", "C"];
        const ranks = ["A", "2"];
        // const ranks = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
        const values = {
            "A": null,
            // "K": 10,
            // "Q": 10,
            // "J": 10,
            // "10": 10,
            // "9": 9,
            // "8": 8,
            // "7": 7,
            // "6": 6,
            // "5": 5,
            // "4": 4,
            // "3": 3,
            "2": 2 
        };

        // create a new object for each suit, rank and then push it into the deck array
        for(const suit of suits){
            for(const rank of ranks){
                originalDeck.push({rank, suit, value: values[rank]})
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
