// UI  
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // - display the game
    // - handle input

// Variables
// ////////////////////////////////////////

    const time = 100;

    const play = document.getElementById("play");

    const showUserCards = document.getElementById("uCards");
    const showUserScore = document.getElementById("uScore");
    const showUserCount = document.getElementById("uCount");
    const showUserHistory = document.getElementById("uHistory");

    const userActionTitle = document.getElementById("uActionTitle");
    const userActionTwist = document.getElementById("uActionTwist");
    const userActionStick = document.getElementById("uActionStick");

    const userAceTitle = document.getElementById("uAceTitle");
    const userAceOne = document.getElementById("uAceOne");
    const userAceEleven = document.getElementById("uAceEleven");

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
        showUserCards.innerHTML = "";
        showUserScore.innerHTML = "";
        showUserCount.innerHTML = "";
        showUserHistory.innerHTML = "";

        userActionTitle.style.class = "disabled";
        userActionTwist.disabled = true;
        userActionStick.disabled = true;

        userAceTitle.style.class = "disabled";
        userAceOne.disabled = true;
        userAceEleven.disabled = true;

        showDealerCards.innerHTML = "";
        showDealerScore.innerHTML = "";
        showDealerCount.innerHTML = "";
        showDealerHistory.innerHTML = "";

        showResultBox.style.backgroundColor = "cornflowerblue";
        showResultMessage.innerHTML = "";
        showResultButton.disabled = true;

        console.clear();
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

            // apend the new image to the relevant user
            (who === "user") ? showUserCards.append(newElement) : showDealerCards.append(newElement);
    }

    async function showCard(who)
    {
        // reveal initial cards (face up)
        if(state[who].count <= 2)
        {
            // create a nodeList of the existing image elements
            let nodeList;

            (who === "user") ? nodeList = showUserCards.querySelectorAll("img") : nodeList = showDealerCards.querySelectorAll("img");

            // edit the src of each card
            nodeList[state[who].count].src = "/resources/images/cards/front/" + state[who].cards[state[who].count].rank + state[who].cards[state[who].count].suit + ".png";
        }         
    }

    function showCount(who)
    {
        (who === "user") ? showUserCount.textContent = state.user.count : showDealerCount.textContent = state.dealer.count;
    }

    function showHistory(who, numberOfItemsToShow)
    {
        
        if(numberOfItemsToShow === 1)
        {

            const newElement = document.createElement("li");
            
            let lengthOfHistoryArray = state[who].history.length-1;
            newElement.textContent = state[who].history[lengthOfHistoryArray];

            (who === "user") ? showUserHistory.append(newElement) : showDealerHistory.append(newElement);

        }

        else if(numberOfItemsToShow > 1)
        {
            
            for(let i = 2; i > 0; i--)
            {

                // add li element for each item
                const newElement = document.createElement("li");

                let lengthOfHistoryArray = state[who].history.length;
                newElement.textContent = state[who].history[lengthOfHistoryArray - i];

                (who === "user") ? showUserHistory.append(newElement) : showDealerHistory.append(newElement);
            }
        }
    }

    function createHistoryItem(who)
    {
        // create last history item as a list element
        const newElement = document.createElement("li");
            
        let lengthOfHistoryArray = state[who].history.length-1;
        newElement.textContent = state[who].history[lengthOfHistoryArray];

        (who === "user") ? showUserHistory.append(newElement) : showDealerHistory.append(newElement);

        console.log(`History item for ${who} created`)
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
        userAceTitle.classList.toggle("disabled");
        userAceTitle.classList.toggle("enabled");
        userAceOne.disabled = userAceOne.disabled ? false : true;
        userAceEleven.disabled = userAceEleven.disabled ? false : true;;
    }

    function showScore(who)
    {
        let show;

        (who === "user") ? show = showUserScore : show = showDealerScore;

        show.textContent = state[who].score;
    }

    function showResultOfGame()
    {
        (state.resultWin === true) ? showResultBox.style.backgroundColor = "green" : showResultBox.style.backgroundColor = "red";
        showResultMessage.style.color = "white";

        showResultMessage.textContent = state.resultMessage;
        showResultButton.disabled = false;
    }

// Event Listeners
// ////////////////////////////////////////

    document.getElementById("playButton").addEventListener("click", event => {
        play.style.display = "none";
        startGame();
    })

    document.getElementById("uAceOne").addEventListener("click", event => {

    })

    document.getElementById("uAceEleven").addEventListener("click", event => {
        
    })

    document.getElementById("uActionStick").addEventListener("click", event => {
        
    })

    document.getElementById("playAgain").addEventListener("click", event => {
        startGame();
    })