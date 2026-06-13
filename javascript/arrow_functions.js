// a consise way to write function expressions. Good for simple functions that you use only once
// (parameters) => some code

// Example 1 - Last example from fuction expressions but using an arrow function

const numbers = [1,2,3,4,5];

const squares = numbers.map((element) => {return Math.pow(element,3)});

console.log(`Example 1: ${squares}`);

//  Example 2

const hello = (name) => console.log(`Example 2: ${name}`);

hello("Phil");

//  Example 3

const hello2 = (name, age) => {
    console.log(`Example 3:`);
    console.log(`${name} is ${age} years old`);
}

hello2("Phil", 43);

// Example 4 - Squares example from fuction expressions but using an arrow function

const numbers2 = [1,2,3,4,5,6];

const squares2 = numbers2.map((element) => {return Math.pow(element,3)});

console.log(`Example 4: ${squares2}`);