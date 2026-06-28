// Function Expressions
// ////////////////////////////////////////

document.getElementById("code").onclick = () =>
  window.location = "/javascript/intermediate/function_expressions.js";

// a way to define functions as values or variables


// Example 1

const hello = function(){
    console.log("Example 1");
}

hello();

// in JavaScript you can also pass an entire function as an argument!

// Example 2

setTimeout(function(){
    console.log("Example 2")
}, 2000);

// Example 3 - Using function declarations (what we already know)

const numbers = [1,2,3,4,5,6];
const squares = numbers.map(square);

console.log(`Example 3: ${squares}`);

function square(element){
    return Math.pow(element, 2)
}

// Example 4 (using function expressions - new)

const numbers2 = [1,2,3,4,5,6];
const squares2 = numbers2.map(function(element){
    return Math.pow(element, 2)
});

console.log(`Example 4: ${squares2}`);

// Example 5 - same idea, repetition :-)

const numbers3 = [1,2,3,4,5];

const squares3 = numbers3.map(function(element){
    return Math.pow(element,3);
})

console.log(`Example 5: ${squares3}`);

