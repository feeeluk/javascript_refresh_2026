// Pontoon V2 - Flow (run the game rules)
// ////////////////////////////////////////

// Functions
// ////////////////////////////////////////

    async function startGame(){
        createGame();
        await initialDeal();
        await turnCardOver("player", 0);
        await turnCardOver("player", 1);
        handleScore("player");
        // playerActions();
    }   
    
    function createGame(){
        reset();
        createDeck();
    }

    async function initialDeal(){
        await delay(500);

        dealCard(state.player.cards);
        showDealtCard("player");
        await delay(500);

        dealCard(state.dealer.cards);
        showDealtCard("dealer");
        await delay(500);

        dealCard(state.player.cards);
        showDealtCard("player");
        await delay(500);

        dealCard(state.dealer.cards);
        showDealtCard("dealer");
        await delay(500);
    }
    
    function dealCard(targetArray){
        const card = deck.pop(); // take the last card
        targetArray.push(card); // pass it to the player's or computer's relevant array      
    }

    async function turnCardOver(who, whichCard){
        await showCard(who, whichCard);
        handleCount(who);
        handleHistory(who);
    }

    function handleCount(who){
        calculateCount(who);
        showCount(who);
    }

    function handleHistory(who){
        const numberOfItemsToShow = calculateHistory(who);
        showHistory(who, numberOfItemsToShow);
    }

    async function handleScore(who){
        await handleAces(who);
        calculateScore(who);;
        showScore(who);
    }

    async function handleAces(who){

        const pontoon = checkForPontoon(who);

        // if any card within the Player's hand is an ace AND Player HAS Pontoon
        if( state.player.cards.some(cards => cards.rank.startsWith("A")) 
            && pontoon)
        {
            const lengthOfArray = state.player.cards.length;;

            for(let i = 0; i < lengthOfArray; i++){
                
                if( state.player.cards[i].rank.startsWith("A") &&
                    state.player.cards[i].value === null){

                    let aceValue = 11;

                    // assign the value of the card
                    setAceValue(state.player.cards[i], aceValue);
                }
            }
        }

        // if any card within the Player's hand is an ace AND Player DOES NOT HAVE Pontoon
        else if( state.player.cards.some(cards => cards.rank.startsWith("A")) 
            && !pontoon)
        {
        
            const lengthOfArray = state.player.cards.length;
            const nodelistOfImages = showPlayerCards.querySelectorAll("img");

            for(let i = 0; i < lengthOfArray; i++){
                
                if( state.player.cards[i].rank.startsWith("A") &&
                    state.player.cards[i].value === null){

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
                }
            }
        }
    }

    function handlePlayerActions(who){

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

    function checkForBust(who){
        if( state[who].score > 21){

            return true;
        }

        else{
            return false;
        }
    }
    
    function checkForPontoon(who){
        if( state[who].count === 2
            && state.player.cards.some(cards => cards.rank.startsWith("A"))
            && (
                state[who].cards.some(cards => cards.rank.startsWith("K")) ||
                state[who].cards.some(cards => cards.rank.startsWith("Q")) ||
                state[who].cards.some(cards => cards.rank.startsWith("J"))
              )){

            return true;
        }

        else{
            return false;
        }
    }

    function checkForFourCards(who){
        if( state[who].count === 4
            && state[who].score <= 21
        ){

            return true;
        }

        else{
            return false;
        }        
    }

    function checkForFiveCards(who){
        if( state[who].count === 5
            && state[who].score <= 21
        ){

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
