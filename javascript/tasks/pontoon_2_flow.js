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

        // Handle aces

        if(who === "User")
        {
            // ace values can only be set AFTER both cards have been seen
            await delayUI(time);
            await userCalculateAceValue();
        }

        else if(who === "Dealer")
        {
            dealerCalculateAceValue(who);
        }
    }

    async function userDetermineAvailableActions()
    {
        console.log(`userDetermineAvailableActions()`);

        const who = "User";
        
        // if game is still running give User options
        if(state.resultGameOver) return;

        // if Pontoon then only show stick
        if(isHandPontoon(who))
        {
            console.log(`User has Pontoon, so only show Stick button`);
            enableStickButton();

            return;
        }

        // five card hand - stick only
        if(isHandFiveCards(who))
        {
            console.log(`User has a Five Card Hand, so only show Stick button`);
            enableStickButton();

            return;
        }

        // score is 21 - stick only
        if(isHandTwentyOne(who))
        {
            console.log(`User has a score of 21, so only show 'stick' button`);
            enableStickButton();

            return;
        }

        // if less than 15 only show twist
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
        if(who === "User")
        {
            await userCalculateAceValue(who);
        }

        else
        {
            dealerCalculateAceValue();
        }

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
        evaluateHand("Dealer");
        calculateGameResult();
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

        if(isHandPontoon(who) === true)
        {
            console.log(`${who} has Pontoon`);
            
            changeStateOfHand(who, "handIsPontoon", true);
            pushItemToHistory(who, "PONTOON");
            createHistoryItem(who);

            return;
        }

        if(isHandFiveCards())
        {
            const wo = "User";
            
            console.log(`${who} has Five Card Hand`);

            changeStateOfHand(who, "handIsFiveCard", true);
            pushItemToHistory(who, "Five Card Hand");
            createHistoryItem(who);
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
        
        // // if Player is bust => Dealer wins
        if(state.User.handIsBust === true)
        {
            changeStateOfGame("resultGameOver", true);
            changeStateOfGame("resultWin", false);
            changeStateOfGame("resultMessage", "Dealer wins - User is BUST");
            console.log(`Dealer wins - User is BUST`);
        }

        // if Dealer is bust => Player wins
        else if(state.Dealer.handIsBust === true)
        {
            changeStateOfGame("resultGameOver", true);
            changeStateOfGame("resultWin", true);
            changeStateOfGame("resultMessage", "Player wins - Dealer is BUST");
            console.log(`Player wins - Dealer is BUST`);
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

        // if Player has Pontoon and Dealer does not => Player wins
        else if(isHandPontoon("User") === true
            &&
            (state.Dealer.count === 2
            &&
            isHandPontoon("Dealer") === false))
        {
            changeStateOfGame("resultGameOver", true);
            changeStateOfGame("resultWin", true);
            changeStateOfGame("resultMessage", "Player wins - Player has Pontoon");
            console.log(`Player wins - Player has Pontoon`);
        }

        // if Player has 5 card hand and Dealer does not have Pontoon => Player wins
        else if(isHandFiveCards("User") === true
            &&
            isHandPontoon("Dealer") === false)
        {
            changeStateOfGame("resultGameOver", true);
            changeStateOfGame("resultWin", true);
            changeStateOfGame("resultMessage", "Player wins - Player has Five Card Hand");
            console.log(`Player wins - Player has Five Card Hand`);
        }

        // Player has a higher score than Dealer => Player wins
        else if(state.User.stick === true
            &&
            state.Dealer.score >= 17
            &&
            state.User.score > state.Dealer.score)
        {
            changeStateOfGame("resultGameOver", true);
            changeStateOfGame("resultWin", true);
            changeStateOfGame("resultMessage", "Player wins - Player has better score");
            console.log(`Player wins - Player has better score`);
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

    // USER

    async function userCalculateAceValue()
    {
        console.log(`userCalculateAceValue()`);

        const who = "User";

        // if the hand does not contain an ace then end
        if(!doesHandContainAce(who))
        {
            console.log(`User's hand does not contain an ace.`);
            return;
        }

        // otherwise

        // has an ace, hand is Pontoon
        if(isHandPontoon(who))
        {
            userHandlePontoonAce();
            updateScore(who);
            showScore(who);

            return;
        }

        // has an ace, hand is NOT Pontoon, only 2 cards
        if(state[who].count === 2)
        {
            await userHandleTwoCardAce();

            return;
        }

        // twist ace
        await userHandleTwistAce();

        return;
    }

    function userHandlePontoonAce()
    {
        console.log(`userHandlePontoonAce()`);

        (state.user.cards[0].value === 0) ?  setAceValue(state.user.cards[0], 11) : setAceValue(state.user.cards[1], 11);
    }

    async function userHandleTwoCardAce()
    {
        console.log(`userHandleTwoCardAce()`);

        if(state.User.cards[0].value === 0
            &&
            state.User.cards[1].value === 0)
        {
            console.log(`both User's cards are aces`);
            console.log(`User to choose ace values:`);

            for(let i = 0; i <= (state.User.cards.length -1); i++)
            {
                await resolveAceValue(i);
            }
        }

        // the first card is an ace
        else if(state.User.cards[0].value === 0)
        {
            console.log(`User's first card is an ace`);
            console.log(`User to choose ace value:`);
            await resolveAceValue(0);
        }

        // the second card is an ace
        else if(state.User.cards[1].value === 0)
        {
            console.log(`User's second card is an ace`);
            console.log(`User to choose ace value:`);
            await resolveAceValue(1);
        }
    }

    async function userHandleTwistAce()
    {
        console.log(`userHandleTwistAce()`);

        const who = "User";

        if(state[who].count > 2
            &&
            state[who].cards[state[who].count-1].value === 0
        )
        {
            console.log(`${who} - Twisted ace`);
            console.log(`${who} - User to choose ace value:`);

            await resolveAceValue(state[who].cards.length -1);
        }

        else
        {
            console.log(`${who} - twisted card is not an ace`);
        }
    }

    function userAddHighlightToAce(element)
    {
        setHighlight(element, true);
    }

    function userRemoveHighlightFromAce(element)
    {
        setHighlight(element, false);
    }

    function userEnableAceChoices(state)
    {
        setAceChoices(state);
    }

    function userDisableAceChoices(state)
    {
        setAceChoices(state);
    }

    // DEALER

    function dealerCalculateAceValue()
    {
        console.log(`dealerCalculateAceValue()`);

        const who = "Dealer";

        // if the hand does not contain an ace then end
        if(!doesHandContainAce(who))
        {
            console.log(`Dealer's hand does not contain an ace`);
            return;
        }

        // if the initial hand contains two aces
        if(state.Dealer.score === 0)
        {
            dealerHandleTwoAces();
            console.log(`Dealer's hand has two aces`);
        }

        // all other situations with aces
        else
        {
            dealerHandleSingleAce();
        }        

        updateScore(who);
        showScore(who);
        console.log(state.Dealer.cards);
    }

    function dealerHandleSingleAce()
    {
        //  this function is called if an ace is detected ANYWHERE within the Dealer's hand
        
        console.log(`dealerHandleSingleAce()`);

        const indexOfAce = state.Dealer.cards.findIndex(item => item.rank.startsWith("A"));
        const theAce = state.Dealer.cards[indexOfAce];
        const lengthOfArray = state.Dealer.cards.length -1;
        const theLastCard = state.Dealer.cards[lengthOfArray];

        // if the initial deal only contains one ace then give that ace a value of 11
        if(state.Dealer.count <= 2)
        {
            console.log(`Dealer's hand has an ace in the intitial deal`);
            setAceValue(theAce, 11);
            console.log(indexOfAce, theAce);
        }

        // if a twisted ace, and a value of 11 will bust the hand then give it a value of 1
        else if(state.Dealer.count > 2
                &&
                state.Dealer.cards[lengthOfArray].value === 0
                &&
                state.Dealer.cards.map(card => card.value).reduce((sum, v) => sum + v, 0) + 11 > 21)
        {
            console.log(`Dealer twist ace - 1`);

            setAceValue(theLastCard, 1);
        }

        // if a twisted ace, and a value of 11 will not bust the hand then give it a value of 11
        else if(state.Dealer.count > 2
                &&
                state.Dealer.cards[lengthOfArray].value === 0
                &&
                state.Dealer.cards.map(card => card.value).reduce((sum, v) => sum + v, 0) + 11 < 22)
        {
            console.log(`Dealer twist ace - 11`);

            setAceValue(theLastCard, 11);
        }
    }

    function dealerHandleTwoAces()
    {
        console.log(`dealerHandleTwoAces()`);

        const theFirstAce = state.Dealer.cards[0];
        const theSecondAce = state.Dealer.cards[1];
        
        setAceValue(theFirstAce, 1);
        setAceValue(theSecondAce, 11);
    }

    // OTHER ACE FUNCTIONS

    function calculateAceValue(who)
    {
        if(!doesHandContainAce(who))
        {
            console.log(`${who}'s hand does not contain an ace.`);
            return;
        }

        if(state[who].count <= 2)
        {
            console.log(`${who}'s hand contains one or more aces in the 'initial deal'.`);
            // handleInitialDealAces(who);
        }

        else
        {
            console.log(`${who}'s has twisted an ace.`);
            // handleTwistedAce(who);
        }
    }

    function handleInitialDealAces(who)
    {

    }

        function handleInitialDealPontoonAce(who)
        {

        }

        function handleInitialDealSingleAce(who)
        {

        }

        function handleInitialDealDoubleAces(who)
        {

        }

    function handleTwistedAce(who)
    {

    }
    
    function doesHandContainAce(who)
    {
        return state[who].cards.some(card => card.rank.startsWith("A"));
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