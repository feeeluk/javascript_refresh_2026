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

    const UserActionTitle = document.getElementById("uActionTitle");
    const UserActionTwist = document.getElementById("uActionTwist");
    const UserActionStick = document.getElementById("uActionStick");
    const actionButtons = {
        twist: UserActionTwist,
        stick: UserActionStick
        };

    const UserAceTitle = document.getElementById("uAceTitle");
    const UserAceOne = document.getElementById("uAceOne");
    const UserAceEleven = document.getElementById("uAceEleven");

    const showDealerCards = document.getElementById("dCards");
    const showDealerScore = document.getElementById("dScore");
    const showDealerCount = document.getElementById("dCount");
    const showDealerHistory = document.getElementById("dHistory");

    const showResultBox = document.getElementById("resultBox");
    const showResultMessage = document.getElementById("resultMessage");
    const showResultButton = document.getElementById("playAgain");


// Create Game Functions
// ////////////////////////////////////////

    function resetUI()
    {
        console.clear();

        console.log(`resetUI()`);

        showUserCards.innerHTML = "";
        showUserScore.innerHTML = "";
        showUserCount.innerHTML = "";
        showUserHistory.innerHTML = "";

        UserActionTitle.style.class = "disabled";
        UserActionTwist.disabled = true;
        UserActionStick.disabled = true;

        UserAceTitle.style.class = "disabled";
        UserAceOne.disabled = true;
        UserAceEleven.disabled = true;

        showDealerCards.innerHTML = "";
        showDealerScore.innerHTML = "";
        showDealerCount.innerHTML = "";
        showDealerHistory.innerHTML = "";

        showResultBox.style.backgroundColor = "cornflowerblue";
        showResultMessage.innerHTML = "";
        showResultButton.disabled = true;
    }


// Initial Deal Functions
// ////////////////////////////////////////

    function delayUI(delayMiliseconds)
    {
        console.log(`DELAY (${delayMiliseconds})`);

        return new Promise((resolve) => { setTimeout(() => { resolve() }, delayMiliseconds)});
    }

    function dealCard(who)
    {
        console.log(`${who} - dealCard()`);
        // add img element
        const newElement = document.createElement("img");
        
        // add the class
        newElement.classList.add("card");

        // change the src to show the back of the card
        newElement.src = "/resources/images/cards/back/back-blue.png";

        // apend the new image to the relevant User
        (who === "User") ? showUserCards.append(newElement) : showDealerCards.append(newElement);
    }


// Reveal Hand Functions
// //////////////////////////////////////// 

    function showCard(who)
    {
        console.log(`${who} - showCard()`);

        // reveal initial cards
        if(state[who].count <= 1)
        {
            // create a nodeList of the existing image elements
            let nodeList;

            (who === "User") ? nodeList = showUserCards.querySelectorAll("img") : nodeList = showDealerCards.querySelectorAll("img");

            // edit the src of each card
            nodeList[state[who].count].src = "/resources/images/cards/front/" + state[who].cards[state[who].count].rank + state[who].cards[state[who].count].suit + ".png";
        }

        // reveal twisted cards
        else if(state[who].cards.length > 2)
        {
            // create a nodeList of the existing image elements
            let nodeList;

            // create variable of array length
            let lengthOfArray = state[who].cards.length -1; 

            (who === "User") ? nodeList = showUserCards.querySelectorAll("img") : nodeList = showDealerCards.querySelectorAll("img");

            // edit the src of each card
            nodeList[lengthOfArray].src = "/resources/images/cards/front/" + state[who].cards[lengthOfArray].rank + state[who].cards[lengthOfArray].suit + ".png";
        }        
    }

    function showCount(who)
    {
        console.log(`${who} - showCount()`);
        
        (who === "User") ? showUserCount.textContent = state.User.count : showDealerCount.textContent = state.Dealer.count;
    }

    function showScore(who)
    {
        console.log(`${who} - showScore()`);

        (who === "User") ? showUserScore.textContent = state[who].score : showDealerScore.textContent = state[who].score;
    }  

    function showResultOfGame()
    {
        console.log(`showResultOfGame()`);

        (state.resultWin === true) ? showResultBox.style.backgroundColor = "green" : showResultBox.style.backgroundColor = "red";
        showResultMessage.style.color = "white";

        showResultMessage.textContent = state.resultMessage;
        showResultButton.disabled = false;
    }

    function createHistoryItem(who)
    {
        console.log(`${who} - createHistoryItem()`);

        // create last history item as a list element
        const newElement = document.createElement("li");
            
        let lengthOfHistoryArray = state[who].history.length-1;
        newElement.textContent = state[who].history[lengthOfHistoryArray];

        (who === "User") ? showUserHistory.append(newElement) : showDealerHistory.append(newElement);
    }


// Ace Related Functions
// ////////////////////////////////////////

    async function selectAceValue(card)
    {

        console.log(`selectAceValue()`);

        const nodelistOfImages = showUserCards.querySelectorAll("img");
        
        // enable the choices
        userEnableAceChoices(true);

        userAddHighlightToAce(nodelistOfImages[card], true);

        // get the User's input
        let aceValue = await getAceChoice();

        // assign User's choice to the value of the card
        setAceValue(state.User.cards[card], aceValue);

        // log User's choice
        console.log(`Ace value = ${aceValue}`);

        userRemoveHighlightFromAce(nodelistOfImages[card], false);

        // disable the choices
        userDisableAceChoices(false);

        // calculate and show score new score
        updateScore("User");
        showScore("User");

        // add and show chosen value in history
        pushItemToHistory("User", `Ace value: ${aceValue}`);
        createHistoryItem("User");
    }

    function setHighlight(element, shouldItBeHighlighted)
    {
        element.classList.toggle("highlighted", shouldItBeHighlighted);
    }

    function setAceChoices(shouldTheyBeActive)
    {
        UserAceTitle.classList.toggle("enabled", shouldTheyBeActive);
        UserAceOne.disabled = !shouldTheyBeActive;
        shouldTheyBeActive ? UserAceOne.classList.add("active") : UserAceOne.classList.remove("active");
        UserAceEleven.disabled = !shouldTheyBeActive;
        shouldTheyBeActive ? UserAceEleven.classList.add("active") : UserAceEleven.classList.remove("active");
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


// User Action Related Functions
// ////////////////////////////////////////

    function setActionButtons(whichButton, shouldItBeActive)
    {
        const button = actionButtons[whichButton];

        button.classList.toggle("enabled", shouldItBeActive);
        button.disabled = !shouldItBeActive;
        button.classList.toggle("active", shouldItBeActive);
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
    

// Event Listeners
// ////////////////////////////////////////

    document.getElementById("playButton").addEventListener("click", event => {
        play.style.display = "none";
        startGame();
    })

    document.getElementById("uActionStick").addEventListener("click", event => {
        stick();
    })

    document.getElementById("uActionTwist").addEventListener("click", event => {
        twist("User");
    })

    document.getElementById("playAgain").addEventListener("click", event => {
        startGame();
    })