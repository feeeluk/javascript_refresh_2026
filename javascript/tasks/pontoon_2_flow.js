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
        userDetermineAvailableActions("user");       
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
        console.log(`revealHand(${who}) => start`);

        const firstCard = state[who].cards[0];
        const secondCard = state[who].cards[1]
        
        // show the first card
        showCard(who);
        incrementCount(who);
        showCount(who);
        updateScore(who);
        showScore(who);
        pushItemToHistory(who, (firstCard.rank + firstCard.suit));
        createHistoryItem(who);
        await delayUI(time);

        // show the second card
        showCard(who);
        incrementCount(who);
        showCount(who);
        updateScore(who);
        showScore(who);
        pushItemToHistory(who, (secondCard.rank + secondCard.suit));
        createHistoryItem(who);

        // update and show scores
        // ace values can only be set AFTER both cards have been seen
        await delayUI(time);

        if(who === "user")
        {
            await userCalculateAceValue(who);
        }

        else if(who === "dealer")
        {
            dealerCalculateAceValue(who);
        }

        console.log(`revealHand(${who}) => end`);
    }

    async function userDetermineAvailableActions(who)
    {
        console.log("userDetermineAvailableActions => start");
        
        // if game is still running give user options
        if(state.resultGameOver) return;

        // if Pontoon then only show stick
        if(checkForPontoon(who))
        {
            console.log("User has Pontoon, so only show Stick button");
            enableStickButton();

            console.log("userDetermineAvailableActions => end");
            return;
        }

        // five card hand - stick only
        if(checkForFiveCards(who))
        {
            console.log("User has Five Card Hand, so only show Stick button");
            enableStickButton();

            console.log("userDetermineAvailableActions => end");
            return;
        }

        // score is 21 - stick only
        if(checkForTwentyOne(who))
        {
            console.log("User has21, so only show Stick button");
            enableStickButton();

            console.log("userDetermineAvailableActions => end");
            return;
        }

        // if less than 15 only show twist
        if(state[who].score < 15)
        {
            console.log("User hand is less than 15 so only show Twist button'");
            enableTwistButton();

            console.log("userDetermineAvailableActions => end");
            return;
        }

        // for all other scenarios show both
      
            console.log("No criteria met, show both Twist and Stick buttons");
            
            enableTwistButton();
            enableStickButton();

            console.log("userDetermineAvailableActions => end");
    }

    function dealerDetermineAction()
    {
        console.log("dealerDetermineAction => start");
        
        
        while(state.resultGameOver === false)
        {
            twist("user");
        }

        console.log("dealerDetermineAction => end");
    }
    

// Calculate Functions
// ////////////////////////////////////////      

    function evaluateHand(who)
    {
        console.log("evaluateHand => start");
        
        if(checkForBust(who) === true)
        {
            console.log(`${who} is bust!`);

            changeStateOfHand(who, "handIsBust", true);
            pushItemToHistory(who, "BUST");
            createHistoryItem(who);
        }

        if(checkForPontoon(who) === true)
        {
            console.log(`${who} has Pontoon`);
            
            changeStateOfHand(who, "handIsPontoon", true);
            pushItemToHistory(who, "PONTOON");
            createHistoryItem(who);
        }

        if(checkForFiveCards(who))
        {
            console.log(`${who} has Fiver Card Hand`);

            changeStateOfHand(who, "handIsFiveCard", true);
            pushItemToHistory(who, "Five Card Hand");
            createHistoryItem(who);
        }

        if(checkForTwentyOne(who))
        {
            console.log(`${who} has TWENTY ONE`);

            changeStateOfHand(who, "handIsTwentyOne", true);
            pushItemToHistory(who, "TWENTY ONE");
            createHistoryItem(who);
        }

        console.log("evaluateHand => end");
    }

    function calculateGameResult(who)
    {
        console.log("calculateGameResult => start");
        
        // // if Player is bust => Dealer wins
        if(state.user.handIsBust === true)
        {
            changeStateOfGame("resultGameOver", true);
            changeStateOfGame("resultWin", false);
            changeStateOfGame("resultMessage", "Dealer wins - User is BUST");
        }

        // if Dealer is bust => Player wins
        else if(state.dealer.handIsBust === true)
        {
            changeStateOfGame("resultGameOver", true);
            changeStateOfGame("resultWin", true);
            changeStateOfGame("resultMessage", "Player wins - Dealer is BUST");
        }

        // if Dealer has Pontoon => Dealer wins
        else if(state.dealer.count === 2
            &&
            checkForPontoon("dealer") === true)
        {
            changeStateOfGame("resultGameOver", true);
            changeStateOfGame("resultWin", false);
            changeStateOfGame("resultMessage", "Dealer wins - Dealer has Pontoon");
        }

        // if Player has Pontoon and Dealer does not => Player wins
        else if(checkForPontoon("user") === true
            &&
            (state.dealer.count === 2
            &&
            checkForPontoon("dealer") === false))
        {
            changeStateOfGame("resultGameOver", true);
            changeStateOfGame("resultWin", true);
            changeStateOfGame("resultMessage", "Player wins - Player has Pontoon");
        }

        // if Player has 5 card hand and Dealer does not have Pontoon => Player wins
        else if(checkForFiveCards("user") === true
            &&
            checkForPontoon("dealer") === false)
        {
            changeStateOfGame("resultGameOver", true);
            changeStateOfGame("resultWin", true);
            changeStateOfGame("resultMessage", "Player wins - Player has Five Card Hand");
        }

        // Player has a higher score than dealer => Player wins
        else if(state.user.stick === true
            &&
            state.dealer.score >= 17
            &&
            state.user.score > state.dealer.score)
        {
            changeStateOfGame("resultGameOver", true);
            changeStateOfGame("resultWin", true);
            changeStateOfGame("resultMessage", "Player wins - Player has better score");
        }

        // Dealer has an equal score  => Dealer wins
        else if(state.user.stick === true
            &&
            state.dealer.score >= 17
            &&
            state.dealer.score === state.user.score)
        {
            changeStateOfGame("resultGameOver", true);
            changeStateOfGame("resultWin", false);
            changeStateOfGame("resultMessage", "Dealer wins - Dealer has the same score");
        }

        // Dealer has a higher score  => Dealer wins
        else if(state.user.stick === true
            &&
            state.dealer.score >= 17
            &&
            state.dealer.score > state.user.score)
        {
            changeStateOfGame("resultGameOver", true);
            changeStateOfGame("resultWin", false);
            changeStateOfGame("resultMessage", "Dealer wins - Dealer has higher score");
        }

        if(state.resultGameOver === true)
        {
            showResultOfGame();
        }
    
        console.log("calculateGameResult => end");
    }


// Ace Related Functions
// ////////////////////////////////////////

    async function userCalculateAceValue(who)
    {
        console.log("userCalculateAceValue => start");

        // if the hand does not contain an ace then end
        if(!hasAce(who))
        {
            console.log("Hand does not contain an ace.");
            console.log("userCalculateAceValue => end");
            return;
        }

        // has an ace, but hand is Pontoon
        if(checkForPontoon(who))
        {
            handlePontoonAce(who);
            updateScore(who);
            showScore(who);

            console.log("userCalculateAceValue => end");
            return;
        }

        // has an ace, hand is NOT Pontoon but only 2 cards
        if(state[who].count === 2)
        {
            await handleTwoCardAce(who);

            console.log("userCalculateAceValue => end");
            return;
        }

        // twist ace
        await handleTwistAce(who);

        console.log("userCalculateAceValue => end");
        return;
    }

    function dealerCalculateAceValue(who)
    {
        console.log("dealerCalculateAceValue => start");

        // if the hand does not contain an ace then end
        if(!hasAce(who))
        {
            console.log("Hand does not contain an ace.");
            console.log("dealerCalculateAceValue => end");
            return;
        }

        if(state[who].score === 0)
        {
            dealerHandleTwoAces(who);
        }

        else
        {
            dealerHandleSingleAce(who);
        }        

        updateScore(who);
        showScore(who);

        console.log("dealerCalculateAceValue => end");
    }

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
                await resolveAceValue(i);
            }
        }

        // the first card is an ace
        else if(state[who].cards[0].value === 0)
        {
            console.log("The first card is an ace");
            console.log("User to choose ace value");
            await resolveAceValue(0);
        }

        // the second card is an ace
        else if(state[who].cards[1].value === 0)
        {
            console.log("The second card is an ace");
            console.log("User to choose ace value");
            await resolveAceValue(1);
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

            await resolveAceValue(state[who].cards.length -1);

            console.log(`Ace value = ${state.user.cards[state[who].cards.length -1].value}`);
        }

        else
        {
            console.log("Twisted card is not an ace");
        }
    }

    function addHighlight(element)
    {
        setHighlight(element, true);
    }

    function removeHighlight(element)
    {
        setHighlight(element, false);
    }

    function enableAceChoices(state)
    {
        setAceChoices(state);
    }

    function disableAceChoices(state)
    {
        setAceChoices(state);
    }

    function dealerHandleSingleAce(who)
    {
        const indexOfAce = state[who].cards.findIndex(item => item.rank.startsWith("A"));
        const theAceCard = state[who].cards[indexOfAce];

        (state[who].cards.map(card => card.value).reduce((sum, v) => sum + v, 0) + 11 > 22) ? setAceValue(theAceCard, 1) : setAceValue(theAceCard, 11);
    }

    function dealerHandleTwoAces(who)
    {
        const theFirstAce = state[who].cards[0];
        const theSecondAce = state[who].cards[1];
        
        setAceValue(theFirstAce, 1);
        setAceValue(theSecondAce, 11);
    }


// Action Related Functions
// ////////////////////////////////////////
    
    async function twist(who)
    {
        console.log("twist => start");
        
        if(who === "user")
        {
            console.log("user chose to TWIST");

            disableTwistButton();
            disableStickButton();
        } 
        
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
        const latestCard = state[who].cards.length - 1;
        pushItemToHistory(who, state[who].cards[latestCard].rank + state[who].cards[latestCard].suit);
        createHistoryItem(who);

        // calculate the value of any aces
        if(who === "user")
        {
            await userCalculateAceValue(who);
        }

        else
        {
            dealerCalculateAceValue(who);
        }

        evaluateHand(who);
        calculateGameResult(who);

        if(who === "user")
        {
            userDetermineAvailableActions(who);
        }

        console.log("twist => end");
    }

    function enableTwistButton()
    {
        setActionButtons("twist", true);
    }

    function disableTwistButton()
    {
        setActionButtons("twist", false);
    }

    async function stick()
    {
        console.log("stick => start");

        console.log("user chose to STICK");
        disableTwistButton();
        disableStickButton();
        state.user.stick = true;

        revealHand("dealer");
        // evaluateHand("dealer");
        // calculateGameResult();
        // dealerDetermineActions()

        console.log("stick => end");
    }

    function enableStickButton()
    {
        setActionButtons("stick", true);
    }

    function disableStickButton()
    {
        setActionButtons("stick", false);
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
                state[who].cards.some(cards => cards.rank.startsWith("A"))
                && 
                (
                state[who].cards.some(cards => cards.rank.startsWith("K")) ||
                state[who].cards.some(cards => cards.rank.startsWith("Q")) ||
                state[who].cards.some(cards => cards.rank.startsWith("J")) ||
                state[who].cards.some(cards => cards.rank.startsWith("10"))
                );
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