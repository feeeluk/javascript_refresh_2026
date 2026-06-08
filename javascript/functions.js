// Functions
// /////////////

document.getElementById("normalButton").addEventListener("click", normalFunction);
document.getElementById("normalButton2").addEventListener("click", getNormalValue);

function normalFunction() {
    document.getElementById("normalH2").textContent = "Hello World!";
    document.getElementById("normalP").textContent = "This is a paragraph.";
}

function getNormalValue() {
    let inputValue = document.getElementById("normalInput").value;
    console.log(inputValue);
    document.getElementById("normalH2").textContent = inputValue;
    document.getElementById("normalP").textContent = inputValue;
}