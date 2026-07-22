// Sort
// ////////////////////////////////////////

document.getElementById("code").onclick = () =>
  window.location = "/javascript/intermediate/sort.js";

// Example 1

  console.log("Example 1 - No sorting");

  let fruits1 = ["apples", "orange", "banana", "coconut", "pineapple"];

  console.log(fruits1);



// 

  console.log("Example 2 - Basic sorting");

  let fruits2 = ["apples", "orange", "banana", "coconut", "pineapple"];

  fruits2.sort();

  console.log(fruits2);



// when sorting we treat elements as strings



// Example 3

  console.log("Example 3 - Sorting numbers");

  let numbers =[1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

  numbers.sort();

  console.log(numbers);

  // Remember, elements are treated as strings, so the default sort is LEXICOGRAPHICAL



// Example 4

  console.log("Example 4 - Actually sorting numbers");

  let numbers2 =[1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

  numbers2.sort((a, b,) => a - b);

  console.log(numbers2);
  //console.log(1-10, 10-2, 2-9)



// Example 5

  console.log("Example 5 - Sorting objects within an array");

  const people = [
    {name: "Spongbob", age: 30, gpa: 3.0},
    {name: "Patrick", age: 37, gpa: 1.5},
    {name: "Squidward", age: 51, gpa: 2.5},
    {name: "Sandy", age: 27, gpa: 4.0}
  ]

  people.sort((a,b) => a.age - b.age);

  console.log(people);

// Example 6

  console.log("Example 6 - Reverse sorting objects within an array");

  const people2 = [
    {name: "Spongbob", age: 30, gpa: 3.0},
    {name: "Patrick", age: 37, gpa: 1.5},
    {name: "Squidward", age: 51, gpa: 2.5},
    {name: "Sandy", age: 27, gpa: 4.0}
  ]

  people2.sort((a,b) => b.age - a.age);

  console.log(people2);



// Example 7

  console.log("Example 7 - Sorting objects within an array by strings");

  const people3 = [
    {name: "Spongbob", age: 30, gpa: 3.0},
    {name: "Patrick", age: 37, gpa: 1.5},
    {name: "Squidward", age: 51, gpa: 2.5},
    {name: "Sandy", age: 27, gpa: 4.0}
  ]

  people3.sort((a,b) => a.name.localeCompare(b.name));

  console.log(people3);


 
// Example 8

  console.log("Example 8 - Reverse sorting objects within an array by strings");

  const people4 = [
    {name: "Spongbob", age: 30, gpa: 3.0},
    {name: "Patrick", age: 37, gpa: 1.5},
    {name: "Squidward", age: 51, gpa: 2.5},
    {name: "Sandy", age: 27, gpa: 4.0}
  ]

  people4.sort((a,b) => b.name.localeCompare(a.name));

  console.log(people4);