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

    function calculateScore(who)
    {
        const pontoon = checkForPontoon(who);
        let revealedCount = state[who].count;
        
        // if the Player has Pontoon then give the ace a value of 11, and set score as 21
        if(checkForPontoon(who)
                &&
                revealedCount === 2)
        {
            const lengthOfArray = state.player.cards.length;

            for(let i = 0; i < lengthOfArray; i++)
            {
                
                if( state.player.cards[i].rank.startsWith("A")
                    &&
                    state.player.cards[i].value === 0)
                {
                    let aceValue = 11;

                    // assign the value of the card
                    setAceValue(state.player.cards[i], aceValue);
                }
            }

            state[who].score = 21;
        }

        // if two cards have been revealed then set the score as card 1 + card 2
        else if(revealedCount === 2)
        {
            state[who].score = state[who].cards[0].value + state[who].cards[1].value;
        }
        
        // if only one card has been revealed then set the score as that card's value (even if it is an ace)
        else if(revealedCount === 1)
        {
            state[who].score = state[who].cards[0].value;
        }

        // else none of the above apply - a 'twist' - then calculate the sum of all cards in the array
        else
        {
            const temporaryArray = state[who].cards
                .map(card => card.value)        // extract the value from each object
                .reduce((sum, v) => sum + v, 0); // sum them

            // assign the sum of the temporaryArray as the score
            state[who].score = temporaryArray; // NOTE the use of EQUALS not 'plus equals' - very important
        }
    }

    function setAceValue(card, value)
    {
        card.value = value;
    }

    
// NEW FUNCTIONS / IDEAS
    
    function calculateHand(who)
    {
        if(checkForBust(who) === true)
        {
            state[who].result = "BUST";
        }
    }

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