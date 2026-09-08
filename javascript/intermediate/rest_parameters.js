// Rest Parameters
// ////////////////////////////////////////

document.getElementById("code").onclick = () =>
  window.location = "/javascript/intermediate/rest_parameters.js";

// Rest parameters allow a funtion to work with a variable number of arguments by bundling them into an array

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";

function openFridge(...foods){
    console.log(foods)
}

openFridge(food1, food2, food3, food4)

// we can do the same thing but use 'spread' to seperate the array out
function openFridgeSpread(...foods){
    console.log(...foods) // look at the console to notice the difference - they are no longer in an array

    return foods.join("");
}

console.log(openFridgeSpread(food1, food2, food3, food4));

//

function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }

    return result;
}

console.log(`Add some numbers together: ${sum(1, 2, 5, 13 )}`);

//

function getAverage(...numbers){
    let result = 0;

    for(let number of numbers){
        result += number;
    }

    return result / numbers.length;
}

console.log(`Get the average of some numbers: ${getAverage(1, 2, 5, 10 )}`);

