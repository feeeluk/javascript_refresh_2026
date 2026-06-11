document.getElementById(`forLoop`).addEventListener(`click`, forLoop);
document.getElementById(`forLoopWithContinue`).addEventListener(`click`, forLoopWithContinue);
document.getElementById(`forLoopWithBreak`).addEventListener(`click`, forLoopWithBreak);
document.getElementById(`whileLoop`).addEventListener(`click`, whileLoop);
document.getElementById(`doWhileLoop`).addEventListener(`click`, doWhileLoop);
document.getElementById(`whileLoopWithIf`).addEventListener(`click`, whileLoopWithIf);

// For Loop
function forLoop(){
    for(let i = 0; i <=2; i++){
        console.log(i);
    }
}

// ++ is the increment operator, it adds 1 to the variable
// += is the addition assignment operator, it adds a specified value to the variable and assigns the result back to the variable
// -- is the decrement operator, it subtracts 1 from the variable
// -= is the subtraction assignment operator, it subtracts a specified value from the variable and assigns the result back to the variable

// For Loop with Continue

function forLoopWithContinue(){
    for(let i = 0; i <= 20; i++){
        
        if(i ==13){
            console.log(`skip`);
            continue;
        }

        else {
            console.log(i);
        }
    }
}

// For Loop with Break
function forLoopWithBreak(){
    for(let i = 0; i <= 20; i++){
        
        if(i ==13){
            break;
        }

        else {
            console.log(i);
        }
    }    
}

// Advanced For Loops with arrays
// see arrays.js

// While Loops

function whileLoop(){

    let username = "";

    while(username == "" || username == null){
        username = prompt(`Please enter a username`);
    }
    console.log(`Hello, ${username}!`);
}

// Do While Loops
function doWhileLoop(){
    
    let username;
    
    do{
        username = prompt(`Please enter a username`);
    }
    
    while(username == "" || username == null);

    console.log(`Hello, ${username}!`);

}

// While example

function whileLoopWithIf(){

    let loggedIn = false;
    let username;
    let password;

    while(!loggedIn){

        username = window.prompt(`Enter username`);
        password = window.prompt(`Enter password`);

        if(username == "phil" && password == "password"){
            loggedIn = true;
            console.log(`Welcome, ${username}!`);
        }

        else{
            console.log(`Incorrect username or password, please try again.`);
            break;
        }
    }
}