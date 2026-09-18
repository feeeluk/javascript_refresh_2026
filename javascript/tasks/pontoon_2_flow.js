// FLOW
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // - game mechanics
    // - game rules
    // - running order


// Game mechanics functions
// ////////////////////////////////////////

    async function startGame()
    {
        createGame(); 
        await initialDeal("user");
        await revealHand("user");
        evaluateHand("user");
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
        
        // if game is still running give user options
        if(state.resultGameOver) return;

        // if Pontoon then only show stick
        if(checkForPontoon(who))
        {
            console.log("Pontoon, so only show 'stick'");
            enableStickButton();

            console.log("userChoosesAction => end");
            return;
        }

        // five card hand - stick only
        if(checkForFiveCards(who))
        {
            console.log("Five Card Hand, so only show 'stick'");
            enableStickButton();

            console.log("userChoosesAction => end");
            return;
        }

        // score is 21 - stick only
        if(checkForTwentyOne(who))
        {
            console.log("21, so only show 'stick'");
            enableStickButton();

            console.log("userChoosesAction => end");
            return;
        }

        // if less than 15 only show twist
        if(state[who].score < 15)
        {
            console.log("hand is less than 15 so only allow 'twist'");
            enableTwistButton();

            console.log("userChoosesAction => end");
            return;
        }

        // for all other scenarios show both
      
            console.log("show both options");
            
            enableTwistButton();
            enableStickButton();

            console.log("userChoosesAction => end");
    }
    

// Calculate Functions
// ////////////////////////////////////////    

    async function calculateAceValue(who)
    {
        console.log("calculateAceValue => start");

        // if the hand does not contain an ace then end
        if(!hasAce(who))
        {
            console.log("Hand does not contain an ace.");
            console.log("calculateAceValue => end");
            return;
        }

        // has an ace, but hand is Pontoon
        if(checkForPontoon(who))
        {
            handlePontoonAce(who);
            updateScore(who);
            showScore(who);

            console.log("calculateAceValue => end");
            return;
        }

        // has an ace, hand is NOT Pontoon but only 2 cards
        if(state[who].count === 2)
        {
            await handleTwoCardAce(who);

            console.log("calculateAceValue => end");
            return;
        }

        // twist ace
        await handleTwistAce(who);

        console.log("calculateAceValue => end");
        return;
    }

    function evaluateHand(who)
    {
        console.log("evaluateHand => start");
        
        if(checkForBust(who) === true)
        {
            changeStateOfHand(who, "handIsBust", true);
            
            pushItemToHistory(who, "BUST");

            console.log(`${who} is bust!`);
        }

        if(checkForPontoon(who) === true)
        {
            changeStateOfHand(who, "handIsPontoon", true);
            
            pushItemToHistory(who, "PONTOON");

            console.log(`${who} has Pontoon`);
        }

        if(checkForFourCards(who))
        {
            changeStateOfHand(who, "handIsFourCard", true);
            
            pushItemToHistory(who, "Four Card Hand");

            console.log(`${who} has Four Card Hand`);
        }

        if(checkForFiveCards(who))
        {
            changeStateOfHand(who, "handIsFiveCard", true);
            
            pushItemToHistory(who, "Five Card Hand");

            console.log(`${who} has Fiver Card Hand`);
        }

        if(checkForTwentyOne(who))
        {
            changeStateOfHand(who, "handIsTwentyOne", true);
            
            pushItemToHistory(who, "TWENTY ONE");

            console.log(`${who} has TWENTY ONE`);
        }

        // if any of the named hands are present then add it the history
        if(checkForBust(who)
            ||
            checkForPontoon(who)
            ||
            checkForFourCards(who)
            ||
            checkForFiveCards(who)
            ||
            checkForTwentyOne(who))
        {
            createHistoryItem(who);
        }

        console.log("evaluateHand => end");
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


// Calculate Ace Related Functions
// ////////////////////////////////////////

    function hasAce(who)
    {
        return state[who].cards.some(card => card.rank.startsWith("A"));
    }

    function handlePontoonAce(who)
    {
        console.log("Pontoon Ace value = 11");

        (state[who].cards[0].value === 0) ?  setAceValue(state[who].cards[0], 11) : setAceValue(state[who].cards[1], 11);
    }

    async function handleTwoCardAce(who)
    {
    // both cards are aces
        if(state[who].cards[0].value === 0
            &&
            state[who].cards[1].value === 0)
        {
            console.log(`Both cards are aces`);
            console.log("User to choose ace value");

            for(let i = 0; i <= (state[who].cards.length -1); i++)
            {
                await aceActions(i);
            }
        }

        // the first card is an ace
        else if(state[who].cards[0].value === 0)
        {
            console.log("The first card is an ace");
            console.log("User to choose ace value");
            await aceActions(0);
        }

        // the second card is an ace
        else if(state[who].cards[1].value === 0)
        {
            console.log("The second card is an ace");
            console.log("User to choose ace value");
            await aceActions(1);
        }
    }

    async function handleTwistAce(who)
    {
        if(state[who].count > 2
            &&
            state[who].cards[state[who].count-1].value === 0
        )
        {
            console.log("Twisted ace");
            console.log("User to choose ace value");

            await aceActions(state[who].cards.length -1);

            console.log(`Ace value = ${state.user.cards[state[who].cards.length -1].value}`);
        }

        else
        {
            console.log("Twisted card is not an ace");
        }
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

        // disable actions buttons
        disableTwistButton();
        disableStickButton();
        
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
        pushItemToHistory(
            who,
            state[who].cards[state[who].cards.length - 1].rank + state[who].cards[state[who].cards.length - 1].suit
        );
        createHistoryItem(who);

        // calculate the value of any aces
        await calculateAceValue(who);

        evaluateHand(who);
        calculateGameResult(who);
        userChoosesAction(who);

        console.log("twist => end");
    }


// Check Functions
// ////////////////////////////////////////
        
    function checkForBust(who)
    {
        return state[who].score > 21;
    }
    
    function checkForPontoon(who)
    {
        return state[who].count === 2
                &&
                state.user.cards.some(cards => cards.rank.startsWith("A"))
                && 
                (
                state[who].cards.some(cards => cards.rank.startsWith("K")) ||
                state[who].cards.some(cards => cards.rank.startsWith("Q")) ||
                state[who].cards.some(cards => cards.rank.startsWith("J"))
                );
    }

    function checkForFourCards(who)
    {
       return   state[who].count === 4
                &&
                state[who].score <= 21;        
    }

    function checkForFiveCards(who)
    {
        return  state[who].count === 5
                &&
                state[who].score <= 21;         
    }

    function checkForTwentyOne(who)
    {
        return state[who].score === 21;
    }