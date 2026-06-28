// Array of Objects
// ////////////////////////////////////////

document.getElementById("code").onclick = () =>
  window.location = "/javascript/advanced/green/array_of_objects.js";

const fruits = [{name: "apple", colour: "red", calories: 95},
                {name: "orange", colour: "orange", calories: 45},
                {name: "banana", colour: "yellow", calories: 105},
                {name: "coconut", colour: "white", calories: 159},
                {name: "pineapple", colour: "yellow", calories: 37}]

// Example 1 - accessing an elements (Object's) properties from within an Array
// //////////////////////////
console.log("Example 1 - accessing properties");
// console.log(fruits[0].colour);

// Example 2 - using 'push()' to add an element to the end of an Array
// //////////////////////////
console.log("Example 2 - push()");
fruits.push({ID: "test"}); // remember that an array can contain different data types, and even similar data types (e.g. Objects) don't have to be the same. They often WILL be the same, but they don't HAVE to be.
fruits.push({name: "grapes", colour: "purple", calories: 62});
// console.log(fruits);


// Example 3 - using 'pop()' to remove an element from the end of an Array
// //////////////////////////
console.log("Example 3 - pop()");
// fruits.pop();
// console.log(fruits);


// Example 4 - using 'splice()' to remove elements at given locations
// //////////////////////////
console.log("Example 4 - splice()");
// console.log(fruits);
// fruits.splice(1,2);


// Example 5 - using 'forEach()'
// //////////////////////////
// console.log("Example 5 - forEach()");
// fruits.forEach(fruit => {
//     console.log(fruit.name)
//     });


// Example 6 - using 'map()' to access each element
// //////////////////////////
// create a new array (of the same length as the original), but each element in the new array will be (something from the original - either a subset or an identical clone)
console.log("Example 6 - map()");
// const fruitNames1 = fruits.map(fruit => {return fruit.name});
// console.log(fruitNames1);

// const fruitNames2 = fruits.map(fruit => {return fruit});
// console.log(fruitNames2);


// Comeback after completing Filter() and Reduce()

// Example 7
// //////////////////////////
console.log("Example 7");

// Example 8
// //////////////////////////
console.log("Example 8");

// Example 9
// //////////////////////////
console.log("Example 9");

// Example 10
// //////////////////////////
console.log("Example 10");

// Example 11
// //////////////////////////
console.log("Example 11");