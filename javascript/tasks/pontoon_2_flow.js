// FLOW
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // - game mechanics
    // - game rules
    // - running order


//  Variables
// ////////////////////////////////////////


// Game mechanic functions
// ////////////////////////////////////////

    async function startGame()
    {
        createGame(); 
        await initialDeal("player");
        await revealHand("player");
        handleHistory("player");
        
        // calculate Player's hand
        calculateHand("player");
        
        // if game over
        showResultOfGame();

        // if not then give Player options
        // playerActions()       
    }

    function createGame()
    {
        resetState();
        resetUI();
        createDeck();
    }

    async function initialDeal()
    {
        await delayUI(time);

        getCardFromDeck("player");
        dealCard("player");
        await delayUI(time);

        getCardFromDeck("dealer");
        dealCard("dealer");
        await delayUI(time);

        getCardFromDeck("player");
        dealCard("player");
        await delayUI(time);

        getCardFromDeck("dealer");
        dealCard("dealer");
        await delayUI(time);
    }

    async function revealHand(who)
    {
        // show the first card
        showCard(who);
        handleCount(who);
        handleScore(who);
        pushItemToHistory(who, (state[who].cards[0].rank + state[who].cards[0].suit));
        showHistory(who, 1);
        await delayUI(time);

        // show the second card
        showCard(who);
        handleCount(who);
        handleScore(who);
        pushItemToHistory(who, (state[who].cards[1].rank + state[who].cards[1].suit));
        showHistory(who, 1);

        // update and show scores - ace values can only be set AFTER both cards have been seen, but they are set INDIVIDUALLY
        await delayUI(time);
        await handleAce(who);
        await handleAce(who);
    }

    function playerActions(who)
    {

        // don't show any button if bust
        if(state.player.score > 21){
            playerActionTwist.disabled = true; // disable twist
            playerActionStick.disabled = true; // disable stick
        }

        // show twist button if score is lower than 15
        else if(state.player.score < 15){
            playerActionTwist.disabled = false; // enable twist
        }

        // only show 'stick' button if player has Pontoon
        else if(
            state.player.cards.some(cards => cards.rank.startsWith("A")) &&
            (
                state.player.cards.some(cards => cards.rank.startsWith("K")) ||
                state.player.cards.some(cards => cards.rank.startsWith("Q")) ||
                state.player.cards.some(cards => cards.rank.startsWith("J"))
            )){
            
            playerActionStick.disabled = false; // enable stick
        }

        // only show 'stick' button if player has 21
        else if(state.player.score === 21){
            playerActionStick.disabled = false; // enable stick
        }

        // for anything else, show both 
        else {
            playerActionTwist.disabled = false; // enable twist
            playerActionStick.disabled = false; // enable stick
        }
    }

// Grouped functions
// ////////////////////////////////////////

    function handleHistory(who)
    {
        const numberOfItemsToShow = calculateHistory(who);
        showHistory(who, numberOfItemsToShow);
    }

    function handleCount(who)
    {
        calculateCount(who);
        showCount(who);
    }

    function handleScore(who)
    {
        calculateScore(who);
        showScore(who);
    }

    async function handleAce(who)
    {

        // actions only relevant if working with the initially dealt cards
        if(state[who].count <= 2)
        {
            const pontoon = checkForPontoon(who);

            // if any card within the Player's hand is an ace AND Player DOES NOT HAVE Pontoon then allow the Player to chose the value of the ace/s
            if(state.player.cards.some(cards => cards.rank.startsWith("A")) 
                    &&
                    !pontoon)
            {
                const nodelistOfImages = showPlayerCards.querySelectorAll("img");
                const lengthOfArray = state.player.cards.length -1;
                
                for(let i = 0; i <= lengthOfArray; i++)
                {
                    
                    if(state.player.cards[i].value === 0)
                    {
                        // highlight the current card
                        toggleHighlightCard(nodelistOfImages[i]);

                        // enable the choices
                        toggleShowAceChoices();

                        // get the user's input
                        let aceValue = await aceChoice();

                        // assign user's choice to the value of the card
                        setAceValue(state.player.cards[i], aceValue);

                        // remove highlight from the card
                        toggleHighlightCard(nodelistOfImages[i]);

                        // disable the choices
                        toggleShowAceChoices();

                        // calculate and show score new score
                        handleScore(who);

                        // add and show chosen value in history
                        pushItemToHistory(who, `Ace value: ${aceValue}`);
                        showHistory(who, 1);
                        console.log(state[who].history);

                        break;
                    }
                }
            }
        }
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
            && state.player.cards.some(cards => cards.rank.startsWith("A"))
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