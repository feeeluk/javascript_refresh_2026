// Async / Await
// ////////////////////////////////////////


document.getElementById("code").onclick = () =>
  window.location = "/javascript/advanced/green/async_await.js";

document.getElementById("exampleOne").addEventListener("click", () => doChoresOne());
document.getElementById("exampleTwo").addEventListener("click", () => doChoresTwo());
document.getElementById("exampleThree").addEventListener("click", () => doChoresThree());
document.getElementById("exampleFour").addEventListener("click", () => doChoresFour());
document.getElementById("exampleFive").addEventListener("click", () => doChoresFive());
document.getElementById("exampleSix").addEventListener("click", () => doChoresSix());
document.getElementById("exampleSeven").addEventListener("click", () => doChoresSeven());

   

    function walkDog(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {

            const dogWalked = true;

            if (dogWalked){
                resolve("You walked the dog");
            }
            else {
                reject("You did not walk the dog");
            }

            }, 1000);

        });
        }

    function cleanKitchen(){
        return new Promise((resolve, reject) => {
        setTimeout(() =>{

        const kitchenCleaned = false;
        
        if(kitchenCleaned){
            resolve("You cleaned the kitchen");
        }
        else {
            reject("You did not clean the kitchen")
        }
        }, 2000)
    })
    }

    function takeOutTrash(){
        return new Promise((resolve, reject) => {
        setTimeout(() =>{

        const trashTakenOut = true;

        if(trashTakenOut){
            resolve("You took out the trash")
        }
        else {
            reject("You did not take out the trash")
        }
        }, 3000)
    })
    }

    function emptyDishWasher(){
        return new Promise((resolve, reject) => {
        setTimeout(() =>{

        const dishWasherEmptied = true;

        if(dishWasherEmptied){
            resolve("You emptied the dishwasher")
        }
        else {
            reject("You did not empty the dishwasher")
        }
        }, 1000)
    })
    }

// Example 1 - Single call to an async function

    async function doChoresOne() {
        console.log("Example 1 - Single call to an async function")
        
        const walkDogResult = await walkDog();
        console.log(walkDogResult);
    }

// Example 2 - Two calls to async functions

    async function doChoresTwo() {
        console.log("Example 2 - Two calls to async functions");
        
        const walkDogResult = await walkDog();
        console.log(walkDogResult);
        
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
        
    }

// Example 3 - Three calls to async functions

    async function doChoresThree() {
        console.log("Example 3 - Three calls to async functions")
        
        const walkDogResult = await walkDog();
        console.log(walkDogResult);
        
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
        
        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);
        
    }


// Example 4 - Four calls to async functions

    async function doChoresFour() {
        console.log("Example 4 - Four calls to async functions")
        
        const walkDogResult = await walkDog();
        console.log(walkDogResult);
        
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
        
        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        const emptyDishWasherResult = await emptyDishWasher();
        console.log(emptyDishWasherResult);
        
    }

// Example 5 - Four calls to async functions inside try/catch blocks

    async function doChoresFive() {
        console.log("Example 5 - Four calls to async functions inside try/catch blocks")
        
        try{
            const walkDogResult = await walkDog();
            console.log(walkDogResult);
            
            const cleanKitchenResult = await cleanKitchen();
            console.log(cleanKitchenResult);
            
            const takeOutTrashResult = await takeOutTrash();
            console.log(takeOutTrashResult);

            const emptyDishWasherResult = await emptyDishWasher();
            console.log(emptyDishWasherResult);
        }
        
        catch(error){
            console.error(error);
        }
        
    }



    // Example 6 - Four calls to async functions inside individual try/catch blocks

    async function doChoresSix() {
        console.log("Example 6 - Four calls to async functions inside individual try/catch blocks");
        
        try{
            const walkDogResult = await walkDog();
            console.log(walkDogResult);
        }
        
        catch(error){
            console.error(error);
        }
        
        //////////////////

        try{
            const cleanKitchenResult = await cleanKitchen();
            console.log(cleanKitchenResult);
        }
        
        catch(error){
            console.error(error);
        }
        
        //////////////////

        try{
            const takeOutTrashResult = await takeOutTrash();
            console.log(takeOutTrashResult);
        }
        
        catch(error){
            console.error(error);
        }
        
        //////////////////
        
        try{
            const emptyDishWasherResult = await emptyDishWasher();
            console.log(emptyDishWasherResult);
        }
        
        catch(error){
            console.error(error);
        }
    }

// Example 7 - playing around with something from 'promises'... parallel 

    async function doChoresSeven(){

        console.log("Example 7 - Four calls to async functions in parallel");

            walkDog()
                .then(console.log)
                .catch(console.error);

            cleanKitchen()
                .then(console.log)
                .catch(console.error);

            takeOutTrash()
                .then(console.log)
                .catch(console.error);

            emptyDishWasher()
                .then(console.log)
                .catch(console.error);
    
            // because they run in parallel, the emptyDishWasher function takes less time to complete than cleanKitchen or takeOutTrash, and so it appears 2nd in the console, not last. BUT we are not using AWAIT!
    }


