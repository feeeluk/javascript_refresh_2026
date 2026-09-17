// FLOW
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // - game mechanics
    // - game rules
    // - running order


// Game mechanic functions
// ////////////////////////////////////////

    async function startGame()
    {
        createGame(); 
        await initialDeal("user");
        await revealHand("user");
        calculateHand("user");
        calculateGameResult("user");
        userChoosesAction("user");       
    }

        function createGame()
        {
            console.log("createGame => start");
            resetState();
            resetUI();
            createDeck();
            console.log("createGame => end");
        }

        async function initialDeal()
        {
            console.log("initialDeal => start");
            
            await delayUI(time);

            getCardFromDeck("user");
            dealCard("user");
            await delayUI(time);

            getCardFromDeck("dealer");
            dealCard("dealer");
            await delayUI(time);

            getCardFromDeck("user");
            dealCard("user");
            await delayUI(time);

            getCardFromDeck("dealer");
            dealCard("dealer");
            await delayUI(time);

            console.log("initialDeal => end");
        }

        async function revealHand(who)
        {
            console.log("revealHand => start");
            
            // show the first card
            showCard(who);
            incrementCount(who);
            showCount(who);
            updateScore(who);
            showScore(who);
            pushItemToHistory(who, (state[who].cards[0].rank + state[who].cards[0].suit));
            createHistoryItem(who);
            await delayUI(time);

            // show the second card
            showCard(who);
            incrementCount(who);
            showCount(who);
            updateScore(who);
            showScore(who);
            pushItemToHistory(who, (state[who].cards[1].rank + state[who].cards[1].suit));
            createHistoryItem(who);

            // update and show scores - ace values can only be set AFTER both cards have been seen, but they are set INDIVIDUALLY
            await delayUI(time);
            await calculateAceValue(who);

            console.log("revealHand => end");
        }

        async function userChoosesAction(who)
        {
            console.log("userChoosesAction => start");
            
            // if game is still running
            if(!state.resultGameOver)
            {
                // give user options
                if(checkForPontoon(who))
                {
                    console.log("hand is Pontoon so only allow 'stick'");
                    enableStickButton();

                    console.log("userChoosesAction => end");
                    return;

                }

                else if(state[who].score < 15)
                {
                    console.log("hand is less than 15 so only allow 'twist'");
                    enableTwistButton();

                    console.log("userChoosesAction => end");
                    return;
                }

                else if(state[who].score >= 15)
                {
                    console.log("hand is equal to or more than 15 so allow both options");
                    enableTwistButton();
                    enableStickButton();

                    console.log("userChoosesAction => end");
                    return;
                }
            }
        }

// Calculate Functions
// ////////////////////////////////////////    

    async function calculateAceValue(who)
    {
        console.log("calculateAceValue => start");

        const lengthOfArray = state.user.cards.length -1;

        // does the hand contain an ace?
        if(state[who].cards.some(card => card.rank.startsWith("A")))
        {
            console.log(`Hand contains an ace? True`);

            // has an ace, but hand is Pontoon
            if(checkForPontoon(who))
            {
                console.log(`Hand contains pontoon? True`);

                (state[who].cards[0].value === 0) ?  setAceValue(state[who].cards[0], 11) : setAceValue(state[who].cards[1], 11);

                console.log(`value of card 1: ${state[who].cards[0].value}`);
                console.log(`value of card 1: ${state[who].cards[1].value}`);

                updateScore(who);
                showScore(who);
            }

            // has an ace, but hand is NOT Pontoon
            else
            {
                console.log(`Hand contains pontoon? False`);

                // the number of cards revealed (count) is 2
                if(state[who].count === 2)
                {
                    // both cards are aces
                    if(state[who].cards[0].value === 0
                        &&
                        state[who].cards[1].value === 0)
                    {
                        console.log(`Both cards are aces`);

                        for(let i = 0; i <= lengthOfArray; i++)
                        {
                            await aceActions(i);
                            console.log(`Ace ${i + 1 } = ${state.user.cards[i].value}`);
                        }
                    }

                    // the first card is an ace
                    else if(state[who].cards[0].value === 0
                        &&
                        state[who].cards[1].value !== 0)
                    {
                        console.log("The first card is an ace");
                        await aceActions(0);
                        console.log(`Ace ${0 + 1 } = ${state.user.cards[0].value}`);
                    }

                    // the second card is an ace
                    else if(state[who].cards[0].value !== 0
                        &&
                        state[who].cards[1].value === 0)
                    {
                        console.log("The second card is an ace");
                        await aceActions(1);
                        console.log(`Ace ${1 + 1 } = ${state.user.cards[1].value}`);
                    }
                }

                // count is greater than 2 (a Twist card) and the new card has a value of 0
                else if(state[who].count > 2
                        &&
                        state[who].cards[lengthOfArray].value === 0
                )
                {
                    console.log("Twisted ace");
                    await aceActions(lengthOfArray);
                    console.log(lengthOfArray);
                    console.log(`Ace = ${state.user.cards[lengthOfArray].value}`);
                }
            }
        }

        // hand does not contain an ace
        else
        {
            console.log(`Hand contains an ace? False`)
        }

        console.log("calculateAceValue => end");
    }

    function calculateHand(who)
    {
        console.log("calculateHand => start");
        
        if(checkForBust(who) === true)
        {
            changeStateOfHand(who, "handIsBust", true);
            
            pushItemToHistory(who, "BUST!");

            console.log(`${who}: handIsBust = ${state[who].handIsBust}`);
        }

        else if(checkForPontoon(who) === true)
        {
            changeStateOfHand(who, "handIsPontoon", true);
            
            pushItemToHistory(who, "PONTOON!");

            console.log(`${who}: handIsPontoon = ${state[who].handIsPontoon}`);
        }

        if(checkForBust(who)
            ||
            checkForPontoon(who)
            ||
            checkForFourCards(who)
            ||
            checkForFiveCards(who))
        {
            createHistoryItem(who);
        }

        console.log("calculateHand => end");
    }

    function calculateGameResult(who)
    {
        console.log("calculateGameResult => start");
        
        // if Player is bust => Dealer wins
        if(state.user.handIsBust === true)
        {
            changeStateOfGame("resultGameOver", true);
            changeStateOfGame("resultWin", false);
            changeStateOfGame("resultMessage", "User is BUST");
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

        if(state.resultGameOver === true)
        {
            showResultOfGame();
        }
    
        console.log("calculateGameResult => end");
    }

// Action Functions
// ////////////////////////////////////////

    function stick()
    {
        console.log("stick => start");

        console.log("user chose to STICK");
        disableTwistButton();
        disableStickButton();

        console.log("stick => end");
    }
    
    async function twist(who)
    {
        console.log("twist => start");

        console.log("user chose to TWIST");
        
        // deal a card
        getCardFromDeck(who);
        dealCard(who);
        await delayUI(time);
        
        // reveal the card
        showCard(who);
        incrementCount(who);
        showCount(who);
        updateScore(who);
        showScore(who);
        const lastIndex = state[who].cards.length - 1
        pushItemToHistory(
            who,
            state[who].cards[lastIndex].rank + state[who].cards[lastIndex].suit
        );
        createHistoryItem(who);

        // calculate the value of any aces
        await calculateAceValue(who);

        // calculateHand()
        // calculateGameResult()
        // userActions()

        console.log("twist => end");
    }

// Helper Functions
// ////////////////////////////////////////
        
    function checkForBust(who)
    {
        if( state[who].score > 21){
            return true;
        }

        else{
            return false;
        }
    }
    
    function checkForPontoon(who)
    {
        if( state[who].count === 2
            && state.user.cards.some(cards => cards.rank.startsWith("A"))
            && (
                state[who].cards.some(cards => cards.rank.startsWith("K")) ||
                state[who].cards.some(cards => cards.rank.startsWith("Q")) ||
                state[who].cards.some(cards => cards.rank.startsWith("J"))
              ))
        {
            return true;
        }

        else{
            return false;
        }
    }

    function checkForFourCards(who)
    {
        if( state[who].count === 4
            && state[who].score <= 21)
        {
            return true;
        }

        else{
            return false;
        }        
    }

    function checkForFiveCards(who)
    {
        if( state[who].count === 5
            && state[who].score <= 21)
        {
            return true;
        }

        else{
            return false;
        }         
    }