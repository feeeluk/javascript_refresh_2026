// Map
// ////////////////////////////////////////

document.getElementById("code").onclick = () =>
  window.location = "/javascript/intermediate/map.js";

// .map() = Creates a new array. Accepts a callback as a parameter and applies that function to each element of an array, then returns a new array

// Example - Dates

const dates = ["2026-01-01","2026-01-14","2026-05-14"];

// split dates into section, so we need a function to do that
// call the function using the .map() to work on each item in the array
// display the results in the console

const formattedDates = dates.map(splitDates);
console.log(formattedDates);

function splitDates(element){
    const parts = element.split("-");
    // let day = parts[2];
    // let month = parts[1];
    // let year = parts[0];

    // alternatively, a quicker way to do this is to use return

    return `${parts[2]}/${parts[1]}/${parts[0]}`
}