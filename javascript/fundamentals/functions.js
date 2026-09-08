// Functions
// ////////////////////////////////////////

document.getElementById("code").onclick = () =>
  window.location = "/javascript/fundamentals/functions.js";



document.getElementById("Button1").addEventListener("click", changeHeading);
document.getElementById("Button2").addEventListener("click", changeHeadingUsingInputValue);
document.getElementById("Button3").onclick = function() {
    document.getElementById("H2").textContent = "This page shows all the different ways to work with functions in JavaScript.";
}


function changeHeading() {
    document.getElementById("H2").textContent = "This page is dedicated to working with functions in JavaScript.";
}

function changeHeadingUsingInputValue() {
    let inputValue = document.getElementById("Input").value;
    console.log(inputValue);
    document.getElementById("H2").textContent = inputValue;
}

// Arguments

 function changeHeadingUsingArguments(testString){
    console.log(`Arguments - ${testString}`);
 }

 changeHeadingUsingArguments("This is an example of using an argument");

 // Return

//  The 'return' keyword returns something.
//  Not all functions need a return, but if you are using your function with other functions then you gennerally will want to.

function isEven(number){
    if(number % 2 === 0){
        return true;
    }

    else{
        return false;
    }
}

console.log(`Return - Is Even? = ` + isEven(9));

// Return with ternary operator

function isEvenTernary(number){
    return number % 2 === 0 ? true : false;
}
console.log(`Return - Is Even? (using ternary operator) = ` + isEvenTernary(22));

function a(){
    return;
}

function b(){
    return 1;
}

const A = a();
const B = b();
let C;
const D = "";
const E = undefined;
const F = 1 * "test";
const G = null;
const H = 0;


console.log(`A = ${A}`);
console.log(`B = ${B}`);
console.log(`C = ${C}`);
console.log(`D = ${D}`);
console.log(`E = ${E}`);
console.log(`F = ${F}`);
console.log(`G = ${G}`);
console.log(`H = ${H}`);

// different tests for different states
    // undefined → accidental emptiness
    // variable === undefined

    // null → intentional emptiness#
    // variable === null

    // empty string → valid string, but no content
    // variable === ""

    // valid string → actual data
    // variable.length > 0

    // NaN → invalid numeric value
    // value !== value

    // 0 → valid number but falsy - even though it is not 'undefined', or 'null', or 'empty', or 'NaN' or even a 'valid string', it is still 'falsy' (boolean false)   
    // variable === 0