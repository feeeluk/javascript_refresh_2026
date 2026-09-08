// Splice
// ////////////////////////////////////////

document.getElementById("code").onclick = () =>
  window.location = "/javascript/intermediate/splice.js";

// Example 1

  console.log("Example 1 - Removing items");

  let numbers = [0, 1, 2, 3, 4, 5];
  numbers.splice(2, 2);   // starting at index 2, remove 2 items 
  console.log(numbers);

  numbers = [0, 1, 2, 3, 4, 5];
  numbers.splice(1, 2);   // starting at index 1, remove 2 items 
  console.log(numbers);



// Example 2

  console.log("Example 2 - Inserting items");

  numbers = [0, 1, 2, 3, 4, 5];
  numbers.splice(1, 2);   // starting at index 1, remove 2 items 
  console.log(numbers);


// Example 3

  console.log("Example 3 - Replace items");

  numbers = [0, 1, 2, 3, 4, 5];
  numbers.splice(3, 2, 8, 9);   // starting at index 3, replace 2 with 8 and 3 with 9 
  console.log(numbers);


// Example 4

  console.log("Example 4 - Remove everything from a point forwards");

  numbers = [0, 1, 2, 3, 4, 5];
  numbers.splice(2);   // remove everything after the second index
  console.log(numbers);







