// DECK 
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // - create deck
    // - work with the deck

    
// Variables
// ////////////////////////////////////////

    const originalDeck = [];
    let deck;

// Functions
// ////////////////////////////////////////

    function createDeck()
    {
        const suits = ["H", "D", "S", "C"];
        const ranks = ["A"];
        // const ranks = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
        const values = {
            "A": 0,
            "K": 10,
            "Q": 10,
            "J": 10,
            "10": 10,
            "9": 9,
            "8": 8,
            "7": 7,
            "6": 6,
            "5": 5,
            "4": 4,
            "3": 3,
            "2": 2 
        };

        // create a new object for each suit, rank and then push it into the deck array
        for(const suit of suits)
        {
            for(const rank of ranks)
            {
                originalDeck.push({rank, suit, value: values[rank],})
            }
        }

        // create copy of originalDeck - cannot use 'const' as it is a NEW assignment not simply changing the contents of the array
        deck = [...originalDeck]; // clone the original array by using SPREAD

        // randomise the deck
        shuffle(deck);

        console.log(deck);
    }

    function shuffle(array)
    {
        for(let i = array.length -1; i > 1; i--)
        {
            const random = Math.floor(Math.random() * i + 1);

            [array[i], array[random]] = [ array[random], array[i]];
        }
    }

    function getCardFromDeck(who)
    {
        const card = deck.pop(); // take the last card
        state[who].cards.push(card); // pass it to the relevant array      
    }