// UI  
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // - display the game
    // - handle input

// Variables
// ////////////////////////////////////////

    const time = 200;

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

    function toggleHighlightCard(card){
        card.classList.toggle("highlighted");
    }

    function toggleShowAceChoices(){
        userAceTitle.classList.toggle("disabled");
        userAceTitle.classList.toggle("enabled");
        userAceOne.disabled = userAceOne.disabled ? false : true;
        userAceOne.disabled ? userAceOne.classList.remove("active") : userAceOne.classList.add("active");
        userAceEleven.disabled = userAceEleven.disabled ? false : true;
        userAceEleven.disabled ? userAceEleven.classList.remove("active") : userAceEleven.classList.add("active");
    }

    function enableTwistButton()
    {
        userActionTitle.classList.add("enabled");
        userActionTitle.classList.remove("disabled");
        userActionTwist.disabled = false;
        userActionTwist.classList.add("active");
    }

    function disableTwistButton()
    {
        userActionTitle.classList.add("disabled");
        userActionTitle.classList.remove("enabled");
        userActionTwist.disabled = true;
        userActionTwist.classList.remove("active");
    }

    function enableStickButton()
    {
        userActionTitle.classList.add("enabled");
        userActionTitle.classList.remove("disabled");
        userActionStick.disabled = false;
        userActionStick.classList.add("active");
    }

    function disableStickButton()
    {
        userActionTitle.classList.add("disabled");
        userActionTitle.classList.remove("enabled");
        userActionStick.disabled = true;
        userActionStick.classList.remove("active");
    }

    async function aceActions(card)
    {
        const nodelistOfImages = showUserCards.querySelectorAll("img");
        
        // enable the choices
        toggleShowAceChoices();

        // highlight the current card
        toggleHighlightCard(nodelistOfImages[card]);

        // get the user's input
        let aceValue = await getAceChoice();

        // assign user's choice to the value of the card
        setAceValue(state.user.cards[card], aceValue);

        // remove highlight from the card
        toggleHighlightCard(nodelistOfImages[card]);

        // disable the choices
        toggleShowAceChoices();

        // calculate and show score new score
        updateScore("user");
        showScore("user");

        // add and show chosen value in history
        pushItemToHistory("user", `Ace value: ${aceValue}`);
        createHistoryItem("user");
    }

    function getAceChoice()
    {
        // return a promise
        return new Promise(resolve =>
        {
            // create a nodelist of the ace related buttons
            const buttons = document.querySelectorAll(".aceChoice");

            // get the value of each button
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

    async function getActionChoice()
    {
        return new Promise(resolve => {

            // create a nodelist of the choice related buttons
            const buttons = document.querySelectorAll(".actionChoice");

            // get the value of each button
            buttons.forEach(button =>
            {
                button.addEventListener("click", () =>
                {
                    // send the value back
                    resolve(button.value);
                });
            });
        })
    }

    function showScore(who)
    {
        (who === "user") ? showUserScore.textContent = state[who].score : showDealerScore.textContent = state[who].score;
    }

    async function showCard(who)
    {
        console.log("showCard() => start");

        // reveal initial cards
        if(state[who].count <= 2)
        {
            // create a nodeList of the existing image elements
            let nodeList;

            (who === "user") ? nodeList = showUserCards.querySelectorAll("img") : nodeList = showDealerCards.querySelectorAll("img");

            // edit the src of each card
            nodeList[state[who].count].src = "/resources/images/cards/front/" + state[who].cards[state[who].count].rank + state[who].cards[state[who].count].suit + ".png";
        }

        // reveal twisted cards
        else (state[who].cards.length > 2)
        {
            // create a nodeList of the existing image elements
            let nodeList;

            // create variable of array length
            let lengthOfArray = state[who].cards.length -1; 

            (who === "user") ? nodeList = showUserCards.querySelectorAll("img") : nodeList = showDealerCards.querySelectorAll("img");

            // edit the src of each card
            nodeList[lengthOfArray].src = "/resources/images/cards/front/" + state[who].cards[lengthOfArray].rank + state[who].cards[lengthOfArray].suit + ".png";
        }

        console.log("showCard() => end");        
    }

    function showCount(who)
    {
        (who === "user") ? showUserCount.textContent = state.user.count : showDealerCount.textContent = state.dealer.count;
    }

    function showResultOfGame()
    {
        (state.resultWin === true) ? showResultBox.style.backgroundColor = "green" : showResultBox.style.backgroundColor = "red";
        showResultMessage.style.color = "white";

        showResultMessage.textContent = state.resultMessage;
        showResultButton.disabled = false;
    }

    function createHistoryItem(who)
    {
        console.log("createHistoryItem => start");
        
        // create last history item as a list element
        const newElement = document.createElement("li");
            
        let lengthOfHistoryArray = state[who].history.length-1;
        newElement.textContent = state[who].history[lengthOfHistoryArray];

        (who === "user") ? showUserHistory.append(newElement) : showDealerHistory.append(newElement);

        console.log("createHistoryItem => end");
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
        stick();
    })

    document.getElementById("uActionTwist").addEventListener("click", event => {
        twist("user");
    })

    document.getElementById("playAgain").addEventListener("click", event => {
        startGame();
    })