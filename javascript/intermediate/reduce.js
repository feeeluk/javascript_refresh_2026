// Reduce
// ////////////////////////////////////////

document.getElementById("code").onclick = () =>
  window.location = "/javascript/intermediate/reduce.js";

// Example 1

  console.log("Example 1 - Add all the items inside an array an return a single value");

  const prices = [5, 30, 10, 25, 15, 20];

  const total = prices.reduce(sum);

  function sum(accumulator, element){
    return accumulator = accumulator + element;
  }

  console.log(total);

// Example 2

  console.log("Example 2 - return the largest value from an array");

  const grade = [75, 50, 90, 80, 65, 95];

  const max = grade.reduce(getMax);

  function getMax(currentElement, nextElement){
    return Math.max(currentElement, nextElement)
  }
  
  console.log(max);

  // Example 2

    console.log("Example 3 - return the smallest value from an array");

    const grade2 = [75, 50, 90, 80, 65, 95];

    const min = grade2.reduce(getMin);

    function getMin(currentElement, nextElement){
      return Math.min(currentElement, nextElement)
    }
    
    console.log(min);

