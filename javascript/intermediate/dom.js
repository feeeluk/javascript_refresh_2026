// DOM
// ////////////////////////////////////////

document.getElementById("code").onclick = () =>
  window.location = "/javascript/intermediate/dom.js";


// Example 1
// Access an element by its ID, load that into a constant, then access that constant and use a ternary operator to check its value
  
  console.log("Example 1 - Accessing an element via ID");

  const username1 = "Phil";
  const username2 = "";
  const welcomeMessage1 = document.getElementById("welcomeMsg1");
  const welcomeMessage2 = document.getElementById("welcomeMsg2");

  welcomeMessage1.textContent += username1 === "" ? `Guest` : username1;
  welcomeMessage2.textContent += username2 === "" ? `Guest` : username2;


// Example 2
// Access an element by it's ID then use 'firstElementChild' and .style.background to change the styling of it's children  
  console.log("Example 2 - Accessing an element via ID and its 'firstElementChild'");

  const element01 = document.getElementById("fruits01");
  const firstChild01 = element01.firstElementChild;
  firstChild01.style.backgroundColor = "yellow";


// Example 3
// Access multiple elements by using querySelectorAll, then use forEach() and 'firstElementChild' with .style.background to change the styling of it's children  
  
  console.log("Example 3 - Accessing an element using querySelectorAll(with a specific search) and changing all the 'firstElementChild' elements via forEach() with an arrow function");

  const ulElements = document.querySelectorAll("ul[id*='02']"); // returns a Nodelist. Notice the formula inside the querySelectorAll() - this selects only ul elements that have an id that includes the characters '02'

  ulElements.forEach(ulElement =>{
    ulElement.firstElementChild.style.backgroundColor = "red";
  })


// Example 4
// Access multiple elements by using querySelectorAll, then use forEach() and 'lastElementChild' with .style.background to change the styling of it's children 

  console.log("Example 4 - Same as 'Example 3' just using .lastElementChild selector");

  const ulElements02 = document.querySelectorAll("ul[id*='03']");

  ulElements02.forEach(ulElement => {
    ulElement.lastElementChild.style.backgroundColor = "purple";
  });


// Example 5
// Access an element by it's ID then use 'nextElementSibling' and .style.background to change the styling of it's next sibling

  console.log("Example 5 - Using .nextElementSibling");

  const element02 = document.getElementById("fruits04");
  const firstChild02 = element02.firstElementChild;
  const middleElement = firstChild02.nextElementSibling;
  middleElement.style.backgroundColor = "green";


// Example 6
// Access multiple elements by using querySelectorAll, then use forEach() and 'nextElementSibling' with .style.background to change the styling of it's children

  console.log("Example 6 - Using .nextElementSibling on multiple elements");

  const ulElements03 = document.querySelectorAll("ul[id*='05']");

  ulElements03.forEach(ulElement => {
    ulElement.firstElementChild.nextElementSibling.style.backgroundColor = "pink";
  });


// Example 7
// Access an element by it's ID then use 'nextElementSibling' and .style.background to change the styling of it's next sibling

  console.log("Example 7 - Using .nextElementSibling at a parent element");

  const element03 = document.getElementById("fruits06");

  element03.nextElementSibling.style.backgroundColor = "brown";


// No Example 8
// previousElementSibling works exactly the same way

  console.log("NO Example 8 AS .previousElementSibiling works in exactly the same way");


// Example 9
// .parentElement

  console.log("Example 9 - Using .parentElement");

  const element04 = document.getElementById("apple07");
  element04.parentElement.style.backgroundColor = "orange";


// Example 10
// .children

console.log("Example 10 - Using .children");

const element05 = document.getElementById("fruits08");  
const children = element05.children; // this does not return a Nodelist like the others, therefore we have to use something else to put all the elements inside (an array).

Array.from(children).forEach(child => {
  child.style.backgroundColor = "grey";
})
