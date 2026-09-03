// Pontoon V2 - UI (display the game and handle input)
// ////////////////////////////////////////

    // What this file does:
        // showCard()
        // updateTotals()
        // button event listeners
        // DOM manipulation
        // card image rendering

    // What it must NOT do:
        // create or shuffle the deck
        // decide game rules
        // store game state

// Variables
// ////////////////////////////////////////

    const play = document.getElementById("play");

    const showPlayerCards = document.getElementById("pCards");
    const showPlayerScore = document.getElementById("pScore");
    const showPlayerCount = document.getElementById("pCount");
    const showPlayerHistory = document.getElementById("pHistory");

    const showDealerCards = document.getElementById("dCards");
    const showDealerScore = document.getElementById("dScore");
    const showDealerCount = document.getElementById("dCount");
    const showDealerHistory = document.getElementById("dHistory");

// Functions
// ////////////////////////////////////////


// Event Listeners
// ////////////////////////////////////////

    document.getElementById("playButton").addEventListener("click", event => {
        play.style.display = "none";
        startGame();
    })

    document.getElementById("twist").addEventListener("click", event => {

    })

    document.getElementById("stick").addEventListener("click", event => {
        
    })

    document.getElementById("playAgain").addEventListener("click", event => {
        
    })