// Pontoon V2 - State  (store the current game data)
// ////////////////////////////////////////

    // What this file does:
        // stores playerCards, dealerCards
        // stores totals
        // stores flags like playerSticks, gameOver
        // stores anything that describes “what the game looks like right now”

    // What it must NOT do:
        // manipulate the DOM
        // shuffle or create cards


// Variables
// ////////////////////////////////////////

    const state = {
        player: {
            score: 0,
            cards: [],
            stick: false,
            face: "down"
        },
        dealer: {
            score: 0,
            cards: [],
            stick: false,
            face: "down"
        },

        result: null,
        gameOver: false
    };

// Functions
// ////////////////////////////////////////

    function reset(){
        state.player.score = 0;
        state.player.cards = [];
        state.player.stick = false;
        state.player.face = "down";
        state.dealer.score = 0;
        state.dealer.cards = [];
        state.dealer.stick = false;
        state.dealer.face = "down";
        state.result = null;
        state.result = false;
    }