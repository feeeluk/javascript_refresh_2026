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

   function dealCard(deck, targetArray){
        const card = deck.pop(); // take the last card
        targetArray.push(card); // pass it to the player's or computer's relevant array
    }

// Event Listeners
// ////////////////////////////////////////

