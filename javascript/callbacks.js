// Callback functions
// /////////////

hello(goodbye);

function hello(callback){
    console.log(`hello`);
    callback();
}

function goodbye(){
    console.log(`goodbye`);
}

document.getElementById("callbackButton").addEventListener("click", () => getCallbackInputValue(displayCallbackInputValue, consoleLogCallback));

// the function that is invoked and passed as an argument to another function
function getCallbackInputValue(callback1, callback2) {
    let inputValue = document.getElementById("callbackInput").value;
    callback1(inputValue);
    callback2(inputValue);
}

function displayCallbackInputValue(value) {
    document.getElementById("callbackH2").textContent = value;
}

function consoleLogCallback(callbackInputValue) {
    console.log(callbackInputValue);
}