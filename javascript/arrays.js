let fruits =["apple", "orange", "banana"];

document.getElementById("arrayPush").addEventListener("click", arrayPush);
document.getElementById("arrayPop").addEventListener("click", arrayPop);
document.getElementById("arrayUnshift").addEventListener("click", arrayUnshift);
document.getElementById("arrayShift").addEventListener("click", arrayShift);
document.getElementById("arraySort").addEventListener("click", arraySort);
document.getElementById("arrayReverseSort").addEventListener("click", arrayReverseSort);

// Accessing elements
console.log(`Elements in the fruits array: ${fruits}`);
console.log(`Get individual elements:`);
console.log(fruits[0]); // Output: apple
console.log(fruits[1]); // Output: orange
console.log(fruits[2]); // Output: banana

function arrayPush(){
    fruits.push("grape"); // Adding an element to the end of the array
    console.log(`After adding grape with push(): ${fruits}`);
}
    
function arrayPop(){
    fruits.pop(); // Removing the last element from the array
    console.log(`After removing last element with pop(): ${fruits}`);
}

function arrayUnshift(){
    fruits.unshift("mango"); // Adding an element to the beginning of the array with unshift()
    console.log(`After adding mango with unshift(): ${fruits}`);
}

function arrayShift(){
    fruits.shift(); // Removing the first element from the array with shift()
    console.log(`After removing first element with shift(): ${fruits}`);
}

function arraySort(){
    fruits.sort(); // Sorting the array
    console.log(`After sorting with sort(): ${fruits}`);
}

function arrayReverseSort(){
    fruits.sort().reverse(); // Reverse sorting the array
    console.log(`After sorting with sort().reverse(): ${fruits}`);
}

// 2D Arrays
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

