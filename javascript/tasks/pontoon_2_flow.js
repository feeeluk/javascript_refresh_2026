// Pontoon V2 - Flow (run the game rules)
// ////////////////////////////////////////

    // What this file does:
        // dealCards()
        // calculateCardValue()
        // startGame()
        // playerHit()
        // playerStick()
        // dealer logic
        // win/lose checks

    // What it must NOT do:
        // create the deck
        // store long‑term state
        // update the UI directly

// Variables
// ////////////////////////////////////////


// Functions
// ////////////////////////////////////////

    function startGame(){
        
        createGame();

        initialDeal();

        revealCards("player", state.player.cards);
        // revealCard("player", state.player.cards);

    }   
    
    function createGame(){
        reset();
        createDeck();
    }

    function initialDeal(){
        dealCard(state.player.cards);
        showCard("player");

        dealCard(state.dealer.cards);
        showCard("dealer");

        dealCard(state.player.cards);
        showCard("player");

        dealCard(state.dealer.cards);
        showCard("dealer");

        console.log("player cards: ", state.player.cards);
        console.log("dealer cards: ", state.dealer.cards);
    }
    
    function dealCard(targetArray){
        const card = deck.pop(); // take the last card
        targetArray.push(card); // pass it to the player's or computer's relevant array      
    }

    function calculateScore(){
    }

    function playerTwist(){
        
    }

    function playerStick(){
        
    }
    
    function dealerTurn(){
        
    }
    
    function determineWinner(){
        
    }
    




    // click start game
        // reset game
        // initialise deck
        // deal a card to the player
        // deal a card to the dealer
        // deal a card to the player
        // deal a card to the dealer

        // reveal card/change state 
            // change score
            // change count
            // change face from down to up        

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
    
    // game ends
    

