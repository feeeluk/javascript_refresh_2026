// For Each

// A method used to iterate over the elements of an array and apply a callback function to each element.
// array.forEach(callback)

// element, index, array are provided automatically


// Example 1

console.log(`Example 1:`);
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(display);

function display(element){
    console.log(element)
}

// Example 2

console.log(`Example 2`);
numbers.forEach(double);
numbers.forEach(display);

function double(element, index, array){
    array[index] = element * 2;
}

// Example 3
console.log(`Example 3:`);
let fruits = ["Apples", "Bananas", "Pears"];

fruits.forEach(upperCase);
display(fruits);

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}

// Example 4
console.log(`Example 4:`);
let fruits2 = ["apples", "bananas", "pears"];

fruits2.forEach(properCase);
display(fruits2);

function properCase(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}