// Pontoon V2 - State  (store the current game data) 
// ////////////////////////////////////////

// Variables
// ////////////////////////////////////////

    const state = {
        player: {
            score: 0,
            count: 0,
            cards: [],
            history: [],
            revealedCount: 0,
            stick: false,
        },
        dealer: {
            score: 0,
            count: 0,
            cards: [],
            history: [],
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
        state.player.history = [];
        state.player.revealedCount = 0,
        state.player.stick = false;
        
        state.dealer.score = 0;
        state.dealer.count = 0;
        state.dealer.cards = [];
        state.dealer.history = [];
        state.dealer.revealedCount = 0,
        state.dealer.stick = false;
        
        state.result = null;
        state.result = false;

        // all the variables are reset but I still need to actually show the changes.s
    }

    function calculateCount(who){
        state[who].count ++;
    }

    function calculateHistory(who){

        // add last array element to history 
        let numberOfCardsDealt = state[who].cards.length;
        let numberOfCardsRevealed = state[who].revealedCount -1;
        state[who].history.push(state[who].cards[numberOfCardsRevealed].rank + state[who].cards[numberOfCardsRevealed].suit)
        
        // check 'named' hands
        // pontoon
        if(checkForPontoon(who)){
            
            // add "Pontoon!" to state history
            state[who].history.push("Pontoon!");

            return 2;
        }

        // 4 card
        else if(checkForFiveCards(who)){
            // add "4 card hand!" to state history
            state[who].history.push("5 card hand!");

            return 2;
        }

        // 5 card
        else if(checkForFourCards(who)){
            // add "4 card hand!" to state history
            state[who].history.push("5 card hand!");

            return 2;
        }

        // bust
        else if(checkForBust(who)){
            // add "4 card hand!" to state history
            state[who].history.push("5 card hand!");

            return 2;
        }

        else{
            return 1;
        }
    }

    function calculateScore(who){

        const revealedCount = state[who].revealedCount;
        
        // add the values of each of the cards
        if(state[who].revealedCount === 2){

            for(let i = 0; i < revealedCount; i++){
                state[who].score += state[who].cards[i].value;
                // console.log(`${i}: ${state[who].score}`);
            }
        }

        else{
            state[who].score += state[who].cards[revealedCount-1].value;
        }
    }

    function setAceValue(card, value){
        card.value = value;
    }