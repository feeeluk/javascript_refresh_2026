// Pontoon V2 - Flow (run the game rules) 
// ////////////////////////////////////////
// ////////////////////////////////////////

// Game Mechanics
// ////////////////////////////////////////

    async function startGame()
    {
        createGame();
        await initialDeal();
        await revealDeal();
        // playerActions();
    }

        function createGame()
        {
            reset();
            createDeck();
        }

        async function initialDeal()
        {

            const initialDeal = true;

            await delay(500);

            dealCard("player");
            showCard("player", initialDeal);
            await delay(500);

            dealCard("dealer");
            showCard("dealer", initialDeal);
            await delay(500);

            dealCard("player");
            showCard("player", initialDeal);
            await delay(500);

            dealCard("dealer");
            showCard("dealer", initialDeal);
            await delay(500);
        }

        async function revealDeal()
        {

            // this is not the initial deal
            const initialDeal = false;

            // it is the first time the score is being revealed
            const initialScore = true;

            // show the first card
            showCard("player", initialDeal);
            handleCount("player");
            handleHistory("player");
            handleScore("player", initialScore);
            await delay(500);

            // show the second card
            showCard("player", initialDeal);
            handleCount("player");
            handleHistory("player");
            handleScore("player", initialScore);

            // update and show scores
            // BUT ace values can only be set AFTER both cards have been seen, but set INDIVIDUALLY
            await delay(500);
            await handleAces("player", initialScore);
            handleScore("player", initialScore);

            await handleAces("player", initialScore);
            handleScore("player", initialScore);
        }

        function playerActions()
        {

        }

// Controller Functions
// ////////////////////////////////////////
 
    function handleCount(who)
    {
        calculateCount(who);
        showCount(who);
    }

    function handleHistory(who)
    {
        const numberOfItemsToShow = calculateHistory(who);
        showHistory(who, numberOfItemsToShow);
    }

    function handleScore(who, initialScore)
    {
        calculateScore(who, initialScore);
        showScore(who);
    }

    async function handleAces(who, initialScore)
    {

        // actions only relevant if working with the initially dealt cards
        if(initialScore)
        {

            const pontoon = checkForPontoon(who);

            // if any card within the Player's hand is an ace AND Player HAS Pontoon then mark that ace as value 11
            if( state.player.cards.some(cards => cards.rank.startsWith("A")) 
                &&
                pontoon)
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
            }

            // if any card within the Player's hand is an ace AND Player DOES NOT HAVE Pontoon then allow the Player to chose the value of the ace/s
            else if(state.player.cards.some(cards => cards.rank.startsWith("A")) 
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

                        // calculate the score
                        calculateScore(who, initialScore)

                        // show score
                        showScore(who);

                        break;
                    }
                }
            }                
        }
    }

    // move to 'game machanics' equiv function
    function handlePlayerActions(who)
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

    // twist
        // deal card face up
        // if it is an ace decide on which value (1 or 11)
        // increase score
        // increase count
        // check for bust

    // stick -> dealers turn

    // dealers turn
        // reveal dealer cards one at a time
            // show card (face up)
        // show score
        // show count
        // if there is not an immediate winner, dealer draws cards until there is a winner
            // rank in decending order:
            // dealer pontoon beats everything
            // player pontoon
            // 5 card (or 5 card and highest score if dealer and player both have 5 cards)
            // 4 card (or 4 card and highest score if dealer and player both have 5 cards)
            // highest score

        // show result (win or lose. No draws in Pontoon)
        // show click restart to play again
    
    // game end
