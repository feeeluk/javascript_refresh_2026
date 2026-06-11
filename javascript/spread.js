// ... allows an iterable such as an array or a string to be expanded into seperate elements. Very useful for when passing array variables as parameters to functions.

let numbers = [1,2,3,4,5];

console.log(numbers);

let max = Math.max(...numbers);
console.log(max);

let username = "Phil";
let letters = [...username].join("-"); // an example of method chaining

console.log(letters);

// Spread can be used to join two arrays. Well, it lists the individual items, but that can be used to create a new array.

let fruits = ["apples", "oranges", "pears"];
let vegetables = ["potatos", "carrots", "mushrooms"];

console.log(fruits);
console.log(vegetables);

let foods = [...fruits, ...vegetables];

console.log(foods);