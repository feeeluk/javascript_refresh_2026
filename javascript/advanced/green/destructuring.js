// Destructuring
// ////////////////////////////////////////

document.getElementById("code").onclick = () =>
  window.location = "/javascript/advanced/green/destructuring.js";


// Example 1 - using destructuring on variables (swapping them)
console.log("Example 1");

    let a = 1;
    let b = 2;
    console.log(a + " " + b);

    [a,b] = [b,a];
    console.log(a + " " + b);

// Example 2 - using destructuring on arrays (swapping them)
    console.log("Example 2");

    const colours = ["red", "Green", "Blue", "Black", "White"];
    console.log(colours);

    [colours[0], colours[4]] = [colours[4], colours[0]];
    console.log(colours);

// Example 3
    console.log("Example 3");

    const [first, second, third] = colours;
    console.log(first);
    console.log(second);
    console.log(third);

// Example 4 - combining Destructuring with Rest Parameters
    console.log("Example 4");

    const [firstElement, secondElement, thirdElement, ...otherElements] = colours;
        console.log(firstElement);
        console.log(secondElement);
        console.log(thirdElement);
        console.log(otherElements);

// Example 5 - Using destructuring with Objects
    console.log("Example 5 - using destructuring with objects");

    const person1 = {
        firstName: "Spongebob",
        lastName: "Squarepants",
        age: 30,
        job: "Fry cook",
    }

    const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
    }

    // const {firstName, lastName, age, job} = person2;

    // console.log(firstName);
    // console.log(lastName);
    // console.log(age);
    // console.log(job);

// Example 6 - Setting default values
    console.log("Example 6 - setting default values");

    // const {firstName, lastName, age, job="TEST"} = person2;

    // console.log(firstName);
    // console.log(lastName);
    // console.log(age);
    // console.log(job);



// Example 7 - Destructure in function parameters
    console.log("Example 7 - using destructuring in function arguments");

    function displayPerson({firstName, lastName, age, job="TEST"}){
        console.log(`Name: ` + firstName + ` ` + lastName);
        console.log(`Age: ` + age);
        console.log(`Occupation: ` + job);
    }

    displayPerson(person1);
    displayPerson(person2);


