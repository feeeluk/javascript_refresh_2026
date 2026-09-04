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
            count: 0,
            cards: [],
            revealedCount: 0,
            stick: false,
        },
        dealer: {
            score: 0,
            count: 0,
            cards: [],
            revealedCount: 0,
            stick: false,
        },

        result: null,
        gameOver: false
    };

// Functions
// ////////////////////////////////////////

    function reset(){
        state.player.score = 0;
        state.player.count = 0;
        state.player.cards = [];
        state.player.revealedCount = 0,
        state.player.stick = false;
        
        state.dealer.score = 0;
        state.dealer.count = 0;
        state.dealer.cards = [];
        state.dealer.revealedCount = 0,
        state.dealer.stick = false;
        
        state.result = null;
        state.result = false;

        // all the variables are reset but I still need to actually show the changes.s
    }