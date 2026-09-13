// STATE
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //   game data 
    

// Variables
// ////////////////////////////////////////

    const initialState = {
        user: {
            score: 0,
            count: 0,
            cards: [],
            history: [],
            stick: null,
            bust: false,
            pontoon: false,
            fourCard: false,
            fiveCard: false,
            result: null,
        },
        dealer: {
            score: 0,
            count: 0,
            cards: [],
            history: [],
            bust: false,
            pontoon: false,
            fourCard: false,
            fiveCard: false,
            result: null,
        },

        resultMessage: null,
        gameOver: false
    };

    let state = structuredClone(initialState);

// Functions
// ////////////////////////////////////////

    function resetState()
    {
        state = structuredClone(initialState);
        originalDeck.length = 0;
        deck = undefined;
    }

    function incrementCount(who)
    {
        state[who].count++;
    }

    function pushItemToHistory(who, what)
    {
        // add item to history
        state[who].history.push(what);
    }

    function setAceValue(card, value)
    {
        card.value = value;
    }

    
// NEW FUNCTIONS / IDEAS

    function calculateGameResult()
    {
        // if Player is bust => Dealer wins
        // if Dealer is bust => Player wins
        // if Player has Pontoon and Dealer does not => Player wins
        // if Dealer has Pontoon and Player does not => Dealer wins
        // if both Player and Dealer have Pontoon => Dealer wins
        // if Player has 5 card hand and Dealer does not => Player wins
        // if Dealer has 5 card hand and Player does not => Dealer wins
        // if both Player and Dealer have 5 card hand, and Player has a higher score => Player wins
        // if both Dealer and Player have 5 card hand, and Dealer has a higher score => Dealer wins
        // if both Dealer and Player have 5 card hand, and they have the same score => Dealer wins
        // if Player has 4 card hand and Dealer does not => Player wins
        // if Dealer has 4 card hand and Player does not => Dealer wins
        // if both Player and Dealer have 4 card hand, and Player has a higher score => Player wins
        // if both Dealer and Player have 4 card hand, and Dealer has a higher score => Dealer wins
        // if both Dealer and Player have 4 card hand, and they have the same score => Dealer wins
        // Player has a higher score => Player wins
        // Dealer has a higher score => Dealer wins
        // both have the same score => Dealer wins

        // set gameOver boolean => create function in state
        // set resultMessage string => create function in state
    }

    function toggleGameStatus()
    {

    }