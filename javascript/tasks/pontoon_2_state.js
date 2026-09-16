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

        resultWin: null,
        resultMessage: null,
        resultGameOver: false,
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
    
    function changeStateOfGame(whichProperty, value)
    {
        state[whichProperty] = value;
    }

    function changeStateOfHand(who, whichProperty, value)
    {
        state[who][whichProperty] = value;
    }

    function updateScore(who)
    {
        console.log("updateScore => start");
        
        const calculateValueOfArray = state[who].cards.map(card => card.value).reduce((sum, v) => sum + v, 0);

        // assign the sum of the array as the score (NOTE the use of EQUALS not 'plus equals')
        state[who].score = calculateValueOfArray;

        console.log("updateScore => end");
    }