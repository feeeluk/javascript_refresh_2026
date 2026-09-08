// Filter
// ////////////////////////////////////////

document.getElementById("code").onclick = () =>
  window.location = "/javascript/intermediate/filter.js";

// .filter() takes a callback 





// Example 1

  console.log("Example 1 - Even numbers");
  
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let evenNumbers = numbers.filter(isEven);

  function isEven(element){
    return element % 2 === 0;
  }
  
  console.log(evenNumbers);


// Example 2

  console.log("Example 2 - Odd numbers");
  
  let oddNumbers = numbers.filter(isOdd);

  function isOdd(element){
    return element % 2 !== 0;
  }
  
  console.log(oddNumbers);


// Example 3

  console.log("Example 3 - Students aged 18 or over");

  const studentAges = [16, 17, 18, 18, 19, 20, 60];

  const adults = studentAges.filter(isAdult);

  function isAdult(element){
    return element >= 18;
  }

  console.log(adults);

  // Example 4

    console.log("Example 4 - Students aged under 18");

    const children = studentAges.filter(isChild);

    function isChild(element){
      return element < 18;
    }

    console.log(children);

  
  // Example 5

    console.log("Example 5 - Words with a length > 6");

    const words = ["apple", "orange", "banana", "kiwi", "pomengranate", "coconut"];
    const longWords = words.filter(isLongWord);

    function isLongWord(element){
      return element.length > 6;
    }

    console.log(longWords);


  // Example 6

    console.log("Example 6 - Words with a length <= 6");

    const shortWords = words.filter(isShortWord);

    function isShortWord(element){
      return element.length <= 6;
    }

    console.log(shortWords);