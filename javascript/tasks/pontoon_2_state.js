// Pontoon V2 - State  (store the current game data) 
// ////////////////////////////////////////

// Variables
// ////////////////////////////////////////

    const initialState = {
        player: {
            score: 0,
            count: 0,
            cards: [],
            history: [],
            revealedCount: 0,
            stick: false,
        },
        dealer: {
            score: 0,
            count: 0,
            cards: [],
            history: [],
            revealedCount: 0,
            stick: false,
        },

        result: null,
        gameOver: false
    };

    let state = structuredClone(initialState);

// Functions
// ////////////////////////////////////////

    function reset()
    {

        state = structuredClone(initialState);
        originalDeck.length = 0;
        deck = undefined;

        // all the variables are reset but I still need to actually show the changes
    }

    function dealCard(who)
    {
        const card = deck.pop(); // take the last card
        state[who].cards.push(card); // pass it to the relevant array      
    }

    function calculateCount(who)
    {
        state[who].count ++;
    }

    function calculateHistory(who)
    {

        // add last array element to history 
        let numberOfCardsDealt = state[who].cards.length;
        let numberOfCardsRevealed = state[who].revealedCount -1;
        state[who].history.push(state[who].cards[numberOfCardsRevealed].rank + state[who].cards[numberOfCardsRevealed].suit)
        
        // check 'named' hands
        // pontoon
        if(checkForPontoon(who))
        {
            // add "Pontoon!" to state history
            state[who].history.push("Pontoon!");

            return 2;
        }

        // 4 card
        else if(checkForFiveCards(who))
        {
            // add "4 card hand!" to state history
            state[who].history.push("5 card hand!");

            return 2;
        }

        // 5 card
        else if(checkForFourCards(who))
        {
            // add "4 card hand!" to state history
            state[who].history.push("5 card hand!");

            return 2;
        }

        // bust
        else if(checkForBust(who))
        {
            // add "4 card hand!" to state history
            state[who].history.push("5 card hand!");

            return 2;
        }

        else{
            return 1;
        }
    }

    function calculateScore(who, initialScore)
    {
        let revealedCount = state[who].revealedCount;

        if(checkForPontoon)
        {
            state[who].score = 21;
        }

        if(revealedCount === 1)
        {
            state[who].score = state[who].cards[0].value;
        }

        else if(revealedCount === 2)
        {
            state[who].score = state[who].cards[0].value + state[who].cards[1].value;
        }

        else
        {
            const temporaryArray = state[who].cards
                .map(card => card.value)        // extract the value from each object
                .reduce((sum, v) => sum + v, 0); // sum the rest

            // assign the sum of the temporaryArray as the score
            state[who].score = temporaryArray; // NOTE the use of EQUALS not 'plus equals' - very important
        }
            
    }

    function setAceValue(card, value)
    {
        card.value = value;
    }