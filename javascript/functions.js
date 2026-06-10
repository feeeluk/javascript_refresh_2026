// Functions
// /////////////

document.getElementById("Button1").addEventListener("click", changeText);
document.getElementById("Button2").addEventListener("click", getValue);
document.getElementById("Button3").onclick = function() {
    document.getElementById("H2").textContent = "This page shows all the different ways to work with functions in JavaScript.";
}

function changeText() {
    document.getElementById("H2").textContent = "This page is dedicated to working with functions in JavaScript.";
}

function getValue() {
    let inputValue = document.getElementById("Input").value;
    console.log(inputValue);
    document.getElementById("H2").textContent = inputValue;
}