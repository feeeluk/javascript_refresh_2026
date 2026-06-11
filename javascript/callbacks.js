// Callback functions
// a function that is passed as an argument to another function

// Example 1

hello(goodbye);

function hello(callback){
    console.log(`Example 1:`);
    console.log(`hello`);
    callback();
}

function goodbye(){
    console.log(`goodbye`);
}

// Example 2

sum(displayToConsole, 3, 9);

function sum(callback, x, y){
    let result = x * y;
    callback(result);
}

function displayToConsole(result){
    console.log(`Example 2: ${result}`);
}


// Example 3

sum(displayToPage, 3, 9);

function displayToPage(result){
    document.getElementById("h2One").textContent = `Example 3: ${result}`;
}

// ////////////////////////////////////////////////////////////////////

document.getElementById("callbackButton").addEventListener("click", () => getCallbackInputValue(displayCallbackInputValue, consoleLogCallback)); // () => is an arrow function

// the function that is invoked and passed as an argument to another function
function getCallbackInputValue(callback1, callback2) {
    let inputValue = document.getElementById("callbackInput").value;
    callback1(inputValue);
    callback2(inputValue);
}

function displayCallbackInputValue(value) {
    document.getElementById("h2Two").textContent = value;
}

function consoleLogCallback(callbackInputValue) {
    console.log(callbackInputValue);
}