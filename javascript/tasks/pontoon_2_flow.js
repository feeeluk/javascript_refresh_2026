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
        await initialDeal("user");
        await revealHand("user");
        calculateHand("user");
        calculateGameResult("user");
        // userActions()       
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
            calculateScore(who);
            showScore(who);
            pushItemToHistory(who, (state[who].cards[0].rank + state[who].cards[0].suit));
            createHistoryItem(who);
            await delayUI(time);

            // show the second card
            showCard(who);
            incrementCount(who);
            showCount(who);
            calculateScore(who);
            showScore(who);
            pushItemToHistory(who, (state[who].cards[1].rank + state[who].cards[1].suit));
            createHistoryItem(who);

            // update and show scores - ace values can only be set AFTER both cards have been seen, but they are set INDIVIDUALLY
            await delayUI(time);
            await giveAceValue(who);
            await giveAceValue(who);

            console.log("revealHand => end");
        }

        function userActions(who)
        {

            // don't show any button if bust
            if(state.user.score > 21){
                userActionTwist.disabled = true; // disable twist
                userActionStick.disabled = true; // disable stick
            }

            // show twist button if score is lower than 15
            else if(state.user.score < 15){
                userActionTwist.disabled = false; // enable twist
            }

            // only show 'stick' button if user has Pontoon
            else if(
                state.user.cards.some(cards => cards.rank.startsWith("A")) &&
                (
                    state.user.cards.some(cards => cards.rank.startsWith("K")) ||
                    state.user.cards.some(cards => cards.rank.startsWith("Q")) ||
                    state.user.cards.some(cards => cards.rank.startsWith("J"))
                )){
                
                userActionStick.disabled = false; // enable stick
            }

            // only show 'stick' button if user has 21
            else if(state.user.score === 21){
                userActionStick.disabled = false; // enable stick
            }

            // for anything else, show both 
            else {
                userActionTwist.disabled = false; // enable twist
                userActionStick.disabled = false; // enable stick
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

    async function giveAceValue(who)
    {

        // actions only relevant if working with the initially dealt cards
        if(state[who].count <= 2)
        {
            const pontoon = checkForPontoon(who);

            // if any card within the User's hand is an ace AND User DOES NOT HAVE Pontoon then allow the User to chose the value of the ace/s
            if(state.user.cards.some(cards => cards.rank.startsWith("A")) 
                    &&
                    !pontoon)
            {
                const nodelistOfImages = showUserCards.querySelectorAll("img");
                const lengthOfArray = state.user.cards.length -1;
                
                for(let i = 0; i <= lengthOfArray; i++)
                {
                    
                    if(state.user.cards[i].value === 0)
                    {
                        // highlight the current card
                        toggleHighlightCard(nodelistOfImages[i]);

                        // enable the choices
                        toggleShowAceChoices();

                        // get the user's input
                        let aceValue = await aceChoice();

                        // assign user's choice to the value of the card
                        setAceValue(state.user.cards[i], aceValue);

                        // remove highlight from the card
                        toggleHighlightCard(nodelistOfImages[i]);

                        // disable the choices
                        toggleShowAceChoices();

                        // calculate and show score new score
                        calculateScore(who);
                        showScore(who);

                        // add and show chosen value in history
                        pushItemToHistory(who, `Ace value: ${aceValue}`);
                        createHistoryItem(who);

                        break;
                    }
                }
            }
        }
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

        // else if(checkForPontoon(who) === true)
        // {
        //     changeStateOfHand(who, "handIsPontoon", true);
            
        //     pushItemToHistory(who, "PONTOON!");

        //     console.log(`${who}: handIsPontoon = ${state[who].handIsPontoon}`);
        // }

        createHistoryItem(who);

        console.log("calculateHand => end");
    }

    function twist()
    {
        // deal a card
        // reveal the card
        // calculateHand("user"); // will eventually replace calculate history and make showHistory() redundant
        // calculateGameResult()
        // userActions()
    }