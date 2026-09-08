// Pontoon V2 - UI (display the game and handle input) 
// ////////////////////////////////////////

// Variables
// ////////////////////////////////////////

    const play = document.getElementById("play");

    const showPlayerCards = document.getElementById("pCards");
    const showPlayerScore = document.getElementById("pScore");
    const showPlayerCount = document.getElementById("pCount");
    const showPlayerHistory = document.getElementById("pHistory");

    const playerActionTitle = document.getElementById("pActionTitle");
    const playerActionTwist = document.getElementById("pActionTwist");
    const playerActionStick = document.getElementById("pActionStick");

    const playerAceTitle = document.getElementById("pAceTitle");
    const playerAceOne = document.getElementById("pAceOne");
    const playerAceEleven = document.getElementById("pAceEleven");

    const showDealerCards = document.getElementById("dCards");
    const showDealerScore = document.getElementById("dScore");
    const showDealerCount = document.getElementById("dCount");
    const showDealerHistory = document.getElementById("dHistory");

// Functions
// ////////////////////////////////////////

    function showDealtCard(who){       
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

    function delay(delayMiliseconds){
        return new Promise((resolve) => { setTimeout(() => { resolve() }, delayMiliseconds)});
    }

    async function showCard(who, whichCard){

        // include a delay based on how many cards have been revealed
        if(state[who].revealedCount >= 1){
            await delay(1000);
        }
        
        // create a nodeList of the image elements within the (WHO's) div
        let nodeList;

        switch(who){
            case "player":
                nodeList = showPlayerCards.querySelectorAll("img");
                break;

            case "dealer":
                nodeList = showDealerCards.querySelectorAll("img");
                break;
        }

        // edit the src of each card
        nodeList[whichCard].src = "/resources/images/cards/front/" + state[who].cards[whichCard].rank + state[who].cards[whichCard].suit + ".png";

        // update the number of cards that have been revealed
        state[who].revealedCount++;
    }

    function showCount(who){

        let showCount;

        switch(who){
            case "player":
                showCount = showPlayerCount;
                break;

            case "dealer":
                showCount = showDealerCount;
                break;
        }

        showCount.textContent = state[who].count;
    }

    function showHistory(who, itemsToShow){
        
        if(itemsToShow ===1){

            const newElement = document.createElement("li");
            
            let lengthOfHistoryArray = state[who].history.length-1;
            newElement.textContent = state[who].history[lengthOfHistoryArray];

            (who === "player") ? showPlayerHistory.append(newElement) : showDealerHistory.append(newElement);

        }

        else if(itemsToShow > 1){
            
            for(let i = 2; i > 0; i--){

                // add li element for each item
                const newElement = document.createElement("li");

                let lengthOfHistoryArray = state[who].history.length;
                newElement.textContent = state[who].history[lengthOfHistoryArray - i];

                (who === "player") ? showPlayerHistory.append(newElement) : showDealerHistory.append(newElement);
            }
        }
    }

    function aceChoice(){

        // return a promise
        return new Promise(resolve => {
            
            // create a nodelist of buttons with the class of "aceChoice"
            const buttons = document.querySelectorAll(".aceChoice");

            // for each button set it's value
            buttons.forEach(button => {
                button.addEventListener("click", () => {
                    
                    // send the value back
                    resolve(Number(button.value));

                });
            });
        });
    }

    function toggleHighlightCard(card){
        card.classList.toggle("highlighted");
    }

    function toggleShowAceChoices(){
        playerAceTitle.classList.toggle("disabled");
        playerAceTitle.classList.toggle("enabled");
        playerAceOne.disabled = playerAceOne.disabled ? false : true;
        playerAceEleven.disabled = playerAceEleven.disabled ? false : true;;
    }

    function showScore(who){

        let show;

        (who === "player") ? show = showPlayerScore : show = showDealerScore;

        show.textContent = state[who].score;
    }

// Event Listeners
// ////////////////////////////////////////

    document.getElementById("playButton").addEventListener("click", event => {
        play.style.display = "none";
        startGame();
    })

    document.getElementById("pAceOne").addEventListener("click", event => {

    })

    document.getElementById("pAceEleven").addEventListener("click", event => {
        
    })

    document.getElementById("pActionStick").addEventListener("click", event => {
        
    })

    document.getElementById("playAgain").addEventListener("click", event => {
        
    })