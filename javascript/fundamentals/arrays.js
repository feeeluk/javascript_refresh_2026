// Set up an array of fruits
let fruits =["apple", "orange", "banana"];

// Before we do anything else, access the elements from the array and print them to the console
console.log(`Elements in the fruits array: ${fruits}`);
console.log(`Get individual elements:`);
console.log(fruits[0]); // Output: apple
console.log(fruits[1]); // Output: orange
console.log(fruits[2]); // Output: banana


// Event listeners - listen for button clicks from the page
document.getElementById("code").onclick = () =>
  window.location = "/javascript/fundamentals/arrays.js";
document.getElementById("arrayPush").addEventListener("click", arrayPush);
document.getElementById("arrayPop").addEventListener("click", arrayPop);
document.getElementById("arrayUnshift").addEventListener("click", arrayUnshift);
document.getElementById("arrayShift").addEventListener("click", arrayShift);
document.getElementById("arraySort").addEventListener("click", arraySort);
document.getElementById("arrayReverseSort").addEventListener("click", arrayReverseSort)
document.getElementById("arrayForLoop").addEventListener("click", arrayForLoop);
document.getElementById("arrayAdvancedForLoop").addEventListener("click", arrayAdvancedForLoop);
document.getElementById("arrayIndexOf").addEventListener("click", arrayIndexOf);
document.getElementById("twoDimensionalArrayAdvancedForLoop").addEventListener("click", twoDimensionalArrayWithAdvancedForLoop);
document.getElementById("changeTwoDimensionalArray").addEventListener("click", changeTwoDimensionalArray);
document.getElementById("differentDataTypesTwoDimensionalArray").addEventListener("click", telephonePad);



// Functions (showcasing array methods) triggered by buttons on the page
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

function arrayForLoop(){
    let numOfFruits = fruits.length;

    console.log(`the fruits array has ${numOfFruits} elements`);

    for(let i = 0; i < numOfFruits; i++){
        console.log(fruits[i]);
    }
}

function arrayAdvancedForLoop(){
    let numOfFruits = fruits.length;

    console.log(`the fruits array has ${numOfFruits} elements`);

    for(let fruit of fruits){
        console.log(fruit);
    }
}

function arrayIndexOf(){
    let index = fruits.indexOf("orange");
    console.log(`The index of 'orange' is: ${index}`);
}

// 2D Arrays
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function twoDimensionalArrayWithAdvancedForLoop(){
    for(row of matrix){
        console.log(row)
    }

    for(row of matrix){
        const rowString = row.join(' ');
        console.log(rowString)
    }    
}

function changeTwoDimensionalArray(){
    matrix[0][0] = 'x';
    matrix[0][1] = 'o';
    matrix[0][2] = 'o';
    matrix[1][0] = 'x';
    matrix[1][1] = 'o';
    matrix[1][2] = 'x';
    matrix[2][0] = 'o';
    matrix[2][1] = 'x';
    matrix[2][2] = 'o';
    

    for(row of matrix){
        const rowString = row.join(' ');
        console.log(rowString)
    }
}

function telephonePad(){
    const tel = [[1,2,3],
                 [4,5,6],
                 [7,8,9],
                 ['*', 0, '#']];

    for(let row of tel){
     const rowTel = row.join(' ');
     console.log(rowTel);
    }

}