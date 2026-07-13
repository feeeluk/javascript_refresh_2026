// Element Selectors
// ////////////////////////////////////////

document.getElementById("code").onclick = () => window.location = "/javascript/intermediate/element_selectors.js";

// Example 1
  console.log("Example 1 - getElementById()");

  const exampleOne = document.getElementById("example1Header");

  console.log(exampleOne);
  exampleOne.style.backgroundColor = "lightgrey";



// Example 2
  console.log("Example 2 - getElementsByClassName()");
  
  const exampleTwo = document.getElementsByClassName("fruits");
  console.log(exampleTwo);

  exampleTwo[0].style.backgroundColor = "lightgreen";

  

// Example 3
  console.log("Example 3 - getElementsByClassName() with For Loop");
  // Alternatively, we could use an 'enhanced loop' to iterate through each of these

  const exampleThree = document.getElementsByClassName("fruits1");
  console.log(exampleThree);

  for(let fruit of exampleThree){
    fruit.style.backgroundColor = "lightyellow";
  }



// Example 4
  console.log("Example 4 - getElementsByClassName() with forEach()::");
  // Because getElementByClassName returns a HTML collection, it doesn't have the same available utility methods as standard JavaScript. So if we want to use those methods we first have to load the results into a JavaScript element (e.g. an array)

  const exampleFour = document.getElementsByClassName("fruits2");
  console.log(exampleFour);

  Array.from(exampleFour).forEach(fruit => {
    fruit.style.backgroundColor = "yellow";
  })



// Example 5
  console.log("Example 5 - getElementByTagName():");

  const exampleFive = document.getElementsByTagName("li");
  console.log(exampleFive);

  exampleFive[5].style.backgroundColor = "yellow";



// Example 6
  console.log("Example 6 - getElementByTagName() with for loop:");

  const exampleSix = document.getElementsByTagName("li");
  console.log(exampleSix);

  for(let i = 8; i < 11; i++){
    exampleSix[i].style.backgroundColor = "red";
  }



// Example 7
  console.log("Example 7 - getElementByTagName() with forEach()");

  const exampleSeven = document.getElementsByTagName("li");
  console.log(exampleSeven);

  Array.from(exampleSeven).slice(11,14).forEach(item =>{
    item.style.backgroundColor = "pink";
  })



// Example 8 - querySelector() returns the FIRST matching element. You can use class (".className"), tag ("h1")
  console.log("Example 8 - querySelector():");

  const exampleEight = document.querySelector(".box");
  console.log(exampleEight);

  exampleEight.style.backgroundColor = "purple";
  exampleEight.style.width = "50px";
  exampleEight.style.height = "50px";
  exampleEight.style.textAlign = "center";

 

// Example 9
  console.log("Example 9 - querySelectorAll():");

  const exampleNine = document.querySelectorAll(".box2");
  console.log(exampleNine);

  exampleNine[0].style.backgroundColor = "red";
  exampleNine[0].style.width = "50px";
  exampleNine[0].style.height = "50px";
  exampleNine[0].style.textAlign = "center";



// Example 10
  console.log("Example 10 - querySelectorAll() with forEach():");

  const exampleTen = document.querySelectorAll(".box3");
  console.log(exampleTen);

  exampleTen.forEach(element => {
    element.style.backgroundColor = "blue";
    element.style.width = "50px";
    element.style.height = "50px";
    element.style.textAlign = "center";
    element.style.marginBottom = "2px";
  })