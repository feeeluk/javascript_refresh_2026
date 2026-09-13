// UI  
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // - display the game
    // - handle input

// Variables
// ////////////////////////////////////////

    const time = 100;

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

    const showResultBox = document.getElementById("resultBox");
    const showResultMessage = document.getElementById("resultMessage");
    const showResultButton = document.getElementById("playAgain");

// Functions
// ////////////////////////////////////////

    function resetUI()
    {
        showPlayerCards.innerHTML = "";
        showPlayerScore.innerHTML = "";
        showPlayerCount.innerHTML = "";
        showPlayerHistory.innerHTML = "";

        playerActionTitle.style.class = "disabled";
        playerActionTwist.disabled = true;
        playerActionStick.disabled = true;

        playerAceTitle.style.class = "disabled";
        playerAceOne.disabled = true;
        playerAceEleven.disabled = true;

        showDealerCards.innerHTML = "";
        showDealerScore.innerHTML = "";
        showDealerCount.innerHTML = "";
        showDealerHistory.innerHTML = "";

        showResultBox.style.backgroundColor = "cornflowerblue";
        showResultMessage.innerHTML = "";
        showResultButton.disabled = true;
    }

    function delayUI(delayMiliseconds)
    {
        return new Promise((resolve) => { setTimeout(() => { resolve() }, delayMiliseconds)});
    }

    function dealCard(who)
    {
            // add img element
            const newElement = document.createElement("img");
            
            // add the class
            newElement.classList.add("card");

            // change the src to show the back of the card
            newElement.src = "/resources/images/cards/back/back-blue.png";

            // apend the new image to the relevant player
            (who === "player") ? showPlayerCards.append(newElement) : showDealerCards.append(newElement);
    }

    async function showCard(who)
    {
        // reveal initial cards (face up)
        if(state[who].count <= 2)
        {
            // create a nodeList of the existing image elements
            let nodeList;

            (who === "player") ? nodeList = showPlayerCards.querySelectorAll("img") : nodeList = showDealerCards.querySelectorAll("img");

            // edit the src of each card
            nodeList[state[who].count].src = "/resources/images/cards/front/" + state[who].cards[state[who].count].rank + state[who].cards[state[who].count].suit + ".png";
        }         
    }

    function showCount(who)
    {
        (who === "player") ? showPlayerCount.textContent = state.player.count : showDealerCount.textContent = state.dealer.count;
    }

    function showHistory(who, numberOfItemsToShow)
    {
        
        if(numberOfItemsToShow === 1)
        {

            const newElement = document.createElement("li");
            
            let lengthOfHistoryArray = state[who].history.length-1;
            newElement.textContent = state[who].history[lengthOfHistoryArray];

            (who === "player") ? showPlayerHistory.append(newElement) : showDealerHistory.append(newElement);

        }

        else if(numberOfItemsToShow > 1)
        {
            
            for(let i = 2; i > 0; i--)
            {

                // add li element for each item
                const newElement = document.createElement("li");

                let lengthOfHistoryArray = state[who].history.length;
                newElement.textContent = state[who].history[lengthOfHistoryArray - i];

                (who === "player") ? showPlayerHistory.append(newElement) : showDealerHistory.append(newElement);
            }
        }
    }

    function aceChoice()
    {
        // return a promise
        return new Promise(resolve =>
        {
            // create a nodelist of buttons with the class of "aceChoice"
            const buttons = document.querySelectorAll(".aceChoice");

            // for each button set it's value
            buttons.forEach(button =>
            {
                button.addEventListener("click", () =>
                {
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

    function showScore(who)
    {
        let show;

        (who === "player") ? show = showPlayerScore : show = showDealerScore;

        show.textContent = state[who].score;
    }

    function showResultOfGame()
    {
        
        if(state.player.result === "BUST")
        {
            showResultBox.style.backgroundColor = "red";
            showResultMessage.style.color = "white";
        }

        showResultButton.disabled = false;
        showResultMessage.textContent = state.result;
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
        startGame();
    })