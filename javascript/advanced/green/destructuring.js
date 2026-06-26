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

// Example 5
    console.log("Example 5");

// Example 6
    console.log("Example 6");

// Example 7
    console.log("Example 7");



