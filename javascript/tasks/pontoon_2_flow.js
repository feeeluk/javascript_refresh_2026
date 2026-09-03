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
        reset();
        createDeck();
    }   
    
    function playerTwist(){
        
    }

    function playerStick(){
        
    }
    
    function dealerTurn(){
        
    }
    
    function determineWinner(){
        
    }

    function initialDeal(){
        
    }
    
    function dealCard(deck, targetArray){
        const card = deck.pop(); // take the last card
        targetArray.push(card); // pass it to the player's or computer's relevant array      
    }



    // click start game
        // initialise deck
        // deal 2 cards (face down) to the dealer
        // deal 2 cards (face down) to the player
        // reveal player cards one at a time
            // show card card (face up)
        // show player score
        // show player count        

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
    

