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
            handIsBust: false,
            handIsPontoon: false,
            handIsFourCard: false,
            handIsFiveCard: false,
        },
        dealer: {
            score: 0,
            count: 0,
            cards: [],
            history: [],
            handIsBust: false,
            handIsPontoon: false,
            handIsFourCard: false,
            handIsFiveCard: false,
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

    function addResult(who, result)
    {
        state[who].result = result;
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

    function changeStateOfHand(who, whichProperty, value)
    {
        state[who][whichProperty] = value;

        console.log(`${whichProperty} = ${value}`);
    }