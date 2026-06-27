document.getElementById("code").onclick = () =>
  window.location = "/javascript/intermediate/ternary_operator.js";

// a shortcut to if{} and else{} statements.
// Helps to assign a variable based on a condition. E.G. condition ? codeIfTrue : codeIfFalse

let age = 18;

let message = age >= 18 ? "you're an adult" : "you're a minor";

console.log("number - " + message);

// Booleans - same idea just a bit simpler

let adult = true;

message = adult ? "you're an adult" : "you're a minor";

console.log(`boolean - ` + message);