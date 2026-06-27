document.getElementById("code").onclick = () =>
  window.location = "/javascript/intermediate/spread.js";


// Show an array of numbers
console.log("1:");
let numbers = [1,2,3,4,5];
console.log(numbers);

// What if we wanted to find the highest number in that array?
console.log("2:");
let max = Math.max(numbers);
console.log(max);

// EXAMPLE
// What if we wanted to find the highest number in that array?
console.log("Example 3:");
let maxWithSpread = Math.max(...numbers);
console.log(maxWithSpread);

// EXAMPLE
// an example of method chaining
console.log("Example 4:");
let username = "Phil";
let letters = [...username].join("-"); 

console.log(letters);

// EXAMPLE
// Spread can be used to join two arrays. Well, it lists the individual items, but that can be used to create a new array.

console.log("Example 5:");

let fruits = ["apples", "oranges", "pears"];
let vegetables = ["potatos", "carrots", "mushrooms"];
let foods = [...fruits, ...vegetables];

console.log(foods);