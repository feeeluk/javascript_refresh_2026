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
    
    function changeStateOfHand(who, whichProperty, value)
    {
        state[who][whichProperty] = value;
    }

    function calculateGameResult(who)
    {
        console.log("calculateGameResult => start");
        
        // if Player is bust => Dealer wins
        if(state.user.handIsBust === true)
        {
            state.resultWin = false;
            state.resultGameOver = true;
            state.resultMessage = "User is BUST";
        }

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

        console.log(`resultGameOver = ${state.resultGameOver}`);
        console.log(`resultWin = ${state.resultWin}`);
        console.log(`resultMessage = ${state.resultMessage}`);

        showResultOfGame();

        console.log("calculateGameResult => end");
    }