let fruits =["apple", "banana", "orange"];

document.getElementById("arrayPush").addEventListener("click", push);
document.getElementById("arrayPop").addEventListener("click", pop);
document.getElementById("arrayUnshift").addEventListener("click", unshift);
document.getElementById("arrayShift").addEventListener("click", shift);

// Accessing elements
console.log(`Elements in the fruits array: ${fruits}`);
console.log(`Get individual elements:`);
console.log(fruits[0]); // Output: apple
console.log(fruits[1]); // Output: banana
console.log(fruits[2]); // Output: orange

function push(){
    fruits.push("grape"); // Adding an element to the end of the array
    console.log(`After adding grape with push(): ${fruits}`);
}
    
function pop(){
    fruits.pop(); // Removing the last element from the array
    console.log(`After removing last element with pop(): ${fruits}`);
}

function unshift(){
    fruits.unshift("mango"); // Adding an element to the beginning of the array with unshift()
    console.log(`After adding mango with unshift(): ${fruits}`);
}

function shift(){
    fruits.shift(); // Removing the first element from the array with shift()
    console.log(`After removing first element with shift(): ${fruits}`);
}