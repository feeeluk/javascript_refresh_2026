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

    function showCard(who){       
        // add img element
        const newElement = document.createElement("img");
        newElement.classList.add("card");
        newElement.src = "/resources/images/cards/back/back-blue.png";

        // append to div
        switch(who){
            case "player":
                showPlayerCards.append(newElement);
                break;

            case "dealer":
                showDealerCards.append(newElement);
                break;
        }

    }

    function showHistory(who, card){       
        // add li element
        const newElement = document.createElement("li");
        newElement.textContent =  card;

        // append to div
        switch(who){
            case "player":
                showPlayerHistory.append(newElement);
                break;

            case "dealer":
                showDealerHistory.append(newElement);
                break;
        }
    }

    function delay(delayMiliseconds){
        return new Promise((resolve) => { setTimeout(() => { resolve() }, delayMiliseconds)});
    }

    async function revealCards(who, cards){

        let nodeList;
        let showCount;

        // create a nodeList of the image elements within the (WHO's) div
        switch(who){
                case "player":
                    nodeList = showPlayerCards.querySelectorAll("img");
                    showCount = showPlayerCount;
                    break;

                case "dealer":
                    nodeList = showDealerCards.querySelectorAll("img");
                    showCount = showDealerCount;
                    break;
        }

        // how many cards have already been revealed?
        let revealedCount = state[who].revealedCount;

        // reveal only the new card
        for(let i = revealedCount; i < cards.length; i++){
            
            // include a delay before each reveal
            await delay(1000);

            // edit the src of each card
            nodeList[i].src = "/resources/images/cards/front/" + cards[i].rank + cards[i].suit + ".png";

            // increment count
            incrementCount(who);
            
            // show count
            showCount.textContent = state[who].count;
            
            // show history
            showHistory(who, (cards[i].rank + cards[i].suit));

            // calculate score
            // show score
        }

        // // update the revealed count
        // revealedCount = cards.length; // the loop shows all the cards in the array, so we can say the number of cards shown is the same value as the array length
    }


// Event Listeners
// ////////////////////////////////////////

    document.getElementById("playButton").addEventListener("click", event => {
        play.style.display = "none";
        startGame();
    })

    document.getElementById("aceOne").addEventListener("click", event => {

    })

    document.getElementById("aceEleven").addEventListener("click", event => {
        
    })
    
    document.getElementById("twist").addEventListener("click", event => {

    })

    document.getElementById("stick").addEventListener("click", event => {
        
    })

    document.getElementById("playAgain").addEventListener("click", event => {
        
    })