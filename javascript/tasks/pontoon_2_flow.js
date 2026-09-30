// FLOW
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // - game mechanics
    // - game rules
    // - running order


// Game Mechanics Functions
// ////////////////////////////////////////

    async function startGame()
    {
        resetUI();
        resetState();

        console.log(`startGame()`);

        await createDeck();
        await initialDeal();
        await revealHand("User");
        await evaluateHand("User");
        await calculateGameResult("User");
        userDetermineAvailableActions("User");       
    }

    async function initialDeal()
    {
        console.log(`initialDeal()`);
        
        await delayUI(time);

        getCardFromDeck("User");
        dealCard("User");
        await delayUI(time);

        getCardFromDeck("Dealer");
        dealCard("Dealer");
        await delayUI(time);

        getCardFromDeck("User");
        dealCard("User");
        await delayUI(time);

        getCardFromDeck("Dealer");
        dealCard("Dealer");
        await delayUI(time);
    }

    async function revealHand(who)
    {
        console.log(`${who} - revealHand()`);

        const firstCard = state[who].cards[0];
        const secondCard = state[who].cards[1]
        
        // show the first card
        console.log(`${who} - Reveal the first card`);
        showCard(who);
        incrementCount(who);
        showCount(who);
        updateScore(who);
        showScore(who);
        pushItemToHistory(who, (firstCard.rank + firstCard.suit));
        createHistoryItem(who);
        await delayUI(time);

        // show the second card
        console.log(`${who} - Reveal the second card`);
        showCard(who);
        incrementCount(who);
        showCount(who);
        updateScore(who);
        showScore(who);
        pushItemToHistory(who, (secondCard.rank + secondCard.suit));
        createHistoryItem(who);

        // Handle ace/s
        await delayUI(time);
        await calculateAceValue(who);

        calculateGameResult();
    }

    async function userDetermineAvailableActions()
    {
        console.log(`userDetermineAvailableActions()`);

        const who = "User";
        
        // if game is over do not show any buttons
        if(state.resultGameOver) return;

        // if any card within User's hand has a value of 0 do not show any buttons  
        if(state[who].cards.some(card => card.value === 0)) return;

        // if User has Pontoon show 'stick' button and end the function
        if(isHandPontoon(who))
        {
            console.log(`User has Pontoon, so only show 'stick' button`);
            enableStickButton();
            return;
        }

        // if User has Five Card Hand show the 'stick' button
        if(isHandFiveCards(who))
        {
            console.log(`User has a Five Card Hand, so only show 'stick' button`);
            enableStickButton();
            return;
        }

        // if User's score is 21 show the 'stick' button
        if(isHandTwentyOne(who))
        {
            console.log(`User has a score of 21, so only show 'stick' button`);
            enableStickButton();
            return;
        }

        // if User's score is less than 15 show the 'twist' button
        if(state[who].score < 15)
        {
            console.log(`User's hand is less than 15, so only show 'twist' button`);
            enableTwistButton();
            return;
        }

        // for all other scenarios show both
      
            console.log(`User's score is 15 or more, show both 'twist' and 'stick' buttons`);
            
            enableTwistButton();
            enableStickButton();
    }

    async function dealerDetermineActions()
    {
        console.log(`DealerDetermineActions()`);
        
        while(state.resultGameOver === false)
        {
            await twist("Dealer"); // Must be async because twist() performs asynchronous work.
        }
    }

    async function twist(who)
    {
        console.log(`${who} - twist()`);
        
        if(who === "User")
        {
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
        await calculateAceValue(who);

        evaluateHand(who);
        calculateGameResult();

        if(who === "User")
        {
           userDetermineAvailableActions();
        }
    }

    async function stick()
    {
        console.log(`stick()`);

        disableTwistButton();
        disableStickButton();
        state.User.stick = true;

        await revealHand("Dealer");
        // evaluateHand("Dealer");
        // calculateGameResult();
        if(state.resultGameOver === false)
        {
            dealerDetermineActions();
        }
    }
    

// Calculate Functions
// ////////////////////////////////////////      

    function evaluateHand(who)
    {
        console.log(`${who} - evaluateHand()`);
        
        if(isHandBust(who) === true)
        {
            console.log(`${who} is bust!`);

            changeStateOfHand(who, "handIsBust", true);
            pushItemToHistory(who, "BUST");
            createHistoryItem(who);

            return;
        }

        if(isHandPontoon("who") === true)
        {
            console.log(`${who} has Pontoon`);
            
            changeStateOfHand(who, "handIsPontoon", true);
            pushItemToHistory(who, "PONTOON");
            createHistoryItem(who);

            return;
        }

        if(isHandFiveCards())
        {
            console.log(`User has Five Card Hand`);

            changeStateOfHand("User", "handIsFiveCard", true);
            pushItemToHistory("User", "Five Card Hand");
            createHistoryItem("User");
        }

        if(isHandTwentyOne(who))
        {
            console.log(`${who} has TWENTY ONE`);

            changeStateOfHand(who, "handIsTwentyOne", true);
            pushItemToHistory(who, "TWENTY ONE");
            createHistoryItem(who);
        }

        else
        {
            console.log(`${who} does not have a named hand`);
        }
    }

    function calculateGameResult()
    {
        console.log(`calculateGameResult()`);
        
        // // if User is bust => Dealer wins
        if(state.User.handIsBust === true)
        {
            changeStateOfGame("resultGameOver", true);
            changeStateOfGame("resultWin", false);
            changeStateOfGame("resultMessage", "Dealer wins - User is BUST");
            console.log(`Dealer wins - User is BUST`);
        }

        // if Dealer is bust => User wins
        else if(state.Dealer.handIsBust === true)
        {
            changeStateOfGame("resultGameOver", true);
            changeStateOfGame("resultWin", true);
            changeStateOfGame("resultMessage", "User wins - Dealer is BUST");
            console.log(`User wins - Dealer is BUST`);
        }

        // if Dealer has Pontoon => Dealer wins
        else if(state.Dealer.count === 2
            &&
            isHandPontoon("Dealer") === true)
        {
            changeStateOfGame("resultGameOver", true);
            changeStateOfGame("resultWin", false);
            changeStateOfGame("resultMessage", "Dealer wins - Dealer has Pontoon");
            console.log(`Dealer wins - Dealer has Pontoon`);
        }

        // if User has Pontoon and Dealer does not => User wins
        else if(isHandPontoon("User") === true
            &&
            (state.Dealer.count === 2
            &&
            isHandPontoon("Dealer") === false))
        {
            changeStateOfGame("resultGameOver", true);
            changeStateOfGame("resultWin", true);
            changeStateOfGame("resultMessage", "User wins - User has Pontoon");
            console.log(`User wins - User has Pontoon`);
        }

        // if User has 5 card hand and Dealer does not have Pontoon => User wins
        else if(isHandFiveCards("User") === true
            &&
            state.Dealer.count === 2
            &&
            isHandPontoon("Dealer") === false)
        {
            changeStateOfGame("resultGameOver", true);
            changeStateOfGame("resultWin", true);
            changeStateOfGame("resultMessage", "User wins - User has Five Card Hand");
            console.log(`User wins - User has Five Card Hand`);
        }

        // User has a higher score than Dealer => User wins
        else if(state.User.stick === true
            &&
            state.Dealer.score >= 17
            &&
            state.User.score > state.Dealer.score)
        {
            changeStateOfGame("resultGameOver", true);
            changeStateOfGame("resultWin", true);
            changeStateOfGame("resultMessage", "User wins - User has better score");
            console.log(`User wins - User has better score`);
        }

        // Dealer has an equal score  => Dealer wins
        else if(state.User.stick === true
            &&
            state.Dealer.score >= 17
            &&
            state.Dealer.score === state.User.score)
        {
            changeStateOfGame("resultGameOver", true);
            changeStateOfGame("resultWin", false);
            changeStateOfGame("resultMessage", "Dealer wins - Dealer has the same score");
            console.log(`Dealer wins - Dealer has the same score`);
        }

        // Dealer has a higher score  => Dealer wins
        else if(state.User.stick === true
            &&
            state.Dealer.score >= 17
            &&
            state.Dealer.score > state.User.score)
        {
            changeStateOfGame("resultGameOver", true);
            changeStateOfGame("resultWin", false);
            changeStateOfGame("resultMessage", "Dealer wins - Dealer has higher score");
            console.log(`Dealer wins - Dealer has higher score`);
        }

        else
        {
            console.log(`no result - game still running`);
        }

        if(state.resultGameOver === true)
        {
            showResultOfGame();
        }
    }


// Ace Related Functions
// ////////////////////////////////////////   

    async function calculateAceValue(who)
    {
        console.log(`${who} - calculateAceValue()`);

        // if the hand does not contain an ace then exit
        if(!doesHandContainAce(who))
        {
            console.log(`${who}'s hand does not contain an ace`);
            return;
        }

        // if 'initial deal' has an ace
        if(state[who].count <= 2)
        {
            console.log(`${who}'s hand contains one or more aces in the 'initial deal'`);
            await handleInitialDealAces(who);
        }

        // if a twisted card. is it an ace?
        else if(doesCardContainAce(who, state[who].cards.length -1))
        {
            console.log(`${who} has twisted an ace`);
            await handleTwistedAce(who);
        }

        updateScore(who);
        showScore(who);
    }

        async function handleInitialDealAces(who)
        {
            console.log(`${who} - handleInitialDealAces()`);

            // if initial deal is Pontoon
            if(isHandPontoon(who))
            {
                console.log(`${who}'s 'initial deal' is Pontoon`);
                handleInitialDealPontoonAce(who);
                return;
            }

            // if initial deal contains double aces
            if(state[who].score === 0)
            {
                console.log(`${who}'s 'initial deal' is double aces`);
                await handleInitialDealDoubleAces(who);
            }

            // if initial deal contains a single ace
            else
            {
                console.log(`${who}'s 'initial deal' includes a single ace`);
                await handleInitialDealSingleAce(who);
            }

        }

            function handleInitialDealPontoonAce(who)
            {
                console.log(`${who} - handleInitialDealPontoonAce()`);

                (state[who].cards[0].value === 0) ?  setAceValue(state[who].cards[0], 11) : setAceValue(state[who].cards[1], 11);
            }

            async function handleInitialDealDoubleAces(who)
            {
                console.log(`${who} - handleInitialDealDoubleAces()`);
                if(who === "User")
                {
                    for(let i = 0; i <= (state.User.cards.length -1); i++)
                    {
                        await selectAceValue(i);
                    }
                }

                else if(who === "Dealer")
                {
                    const theFirstAce = state.Dealer.cards[0];
                    const theSecondAce = state.Dealer.cards[1];
                    
                    setAceValue(theFirstAce, 1);
                    setAceValue(theSecondAce, 11);
                }
            }

            async function handleInitialDealSingleAce(who)
            {
                console.log(`${who} - handleInitialDealSingleAce()`);

                {
                    if(state[who].cards[0].value === 0)
                    {
                        console.log(`${who}'s first card is an ace`);
                        (who === "User") ? await selectAceValue(0) : setAceValue(state[who].cards[0], 11);
                    }

                    else if(state[who].cards[1].value === 0)
                    {
                        console.log(`${who}'s second card is an ace`);
                        (who === "User") ? await selectAceValue(1) : setAceValue(state[who].cards[1], 11);
                    }
                }
            }      

        async function handleTwistedAce(who)
        {
            console.log(`${who} - handleTwistedAce()`);

            const lastCardIndex = state[who].cards.length -1;
            const lastCard = state[who].cards[lastCardIndex];

            if(who === "User")
            {
                await selectAceValue(lastCardIndex);
            }
            
            else if(who === "Dealer")
            {
                if(state.Dealer.cards.map(card => card.value).reduce((sum, v) => sum + v, 0) + 11 > 21)
                {
                    console.log(`Dealer twist ace - ace value = 1`);

                    setAceValue(lastCard, 1);
                }

                else if(state.Dealer.cards.map(card => card.value).reduce((sum, v) => sum + v, 0) + 11 < 22)
                {
                    console.log(`Dealer twist ace - ace value = 11`);

                    setAceValue(lastCard, 11);
                }
            }
        }
    
    function doesHandContainAce(who)
    {
        return state[who].cards.some(card => card.rank.startsWith("A"));
    }

    function doesCardContainAce(who, cardsIndex)
    {
        return state[who].cards[cardsIndex].rank.startsWith("A");
    }

    function addHighlightToAce(element)
    {
        setHighlight(element, true);
    }

    function removeHighlightFromAce(element)
    {
        setHighlight(element, false);
    }

    function enableAceChoices(enableButtons)
    {
        setAceChoices(enableButtons);
    }

    function disableAceChoices(state)
    {
        setAceChoices(state);
    }

// Action Related Functions
// ////////////////////////////////////////
    
    function enableTwistButton()
    {
        setActionButtons("twist", true);
    }

    function disableTwistButton()
    {
        setActionButtons("twist", false);
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
        
    function isHandBust(who)
    {
        return state[who].score > 21;
    }
    
    function isHandPontoon(who)
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

    function isHandFiveCards()
    {
        return  state.User.count === 5
                &&
                state.User.score <= 21;         
    }

    function isHandTwentyOne(who)
    {
        return state[who].score === 21;
    }    