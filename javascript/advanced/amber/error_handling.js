// Error Handling
// ////////////////////////////////////////

document.getElementById("code").onclick = () =>
  window.location = "/javascript/advanced/amber/error_handling.js";

document.getElementById("exampleOne").onclick = () =>
  exampleOne();

document.getElementById("exampleTwo").onclick = () =>
  exampleTwo();

document.getElementById("exampleThree").onclick = () =>
  exampleThree();

document.getElementById("exampleFour").onclick = () =>
  exampleFour();

document.getElementById("exampleFive").onclick = () =>
  exampleFive();


// Example 1

  function exampleOne(){
    console.log("Example 1 - No try / catch without error");

    console.log("test");
    console.log("this is the end of the program");

  }

// Example 2

  function exampleTwo(){
    console.log("Example 2 - No try()/catch() with error");

    console.lag("test");
    console.log("this is the end of the program");
  }


// Example 3

  function exampleThree(){
    console.log("Example 3 - caught error");

    try{
      console.lag("test");
    }

    // notice that 'error' is set as a perameter
    catch(error){
      console.error(error);
    }

    finally{}

    console.log("this is the end of the program");
  }


// Example 4

  function exampleFour(){
    console.log("Example 4 - Throwing errors");

    try{
      const dividend = Number(window.prompt("Enter a dividend: "));
      const divisor = Number(window.prompt("Enter a divisor: "));

      if(divisor == 0){
        throw new Error("You can't divide by zero");
      }

      if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Values must be a number");
      }

      const result = dividend / divisor;

      console.log(result);

    }

    catch(error){
      console.error(error);
      
    }

    console.log("you have reached the end");
  }



// Example 5

  function exampleFive(){
    console.log("Example 5 - ");
  }
