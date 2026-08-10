// Asynchrnous code
// ////////////////////////////////////////


document.getElementById("code").onclick = () =>
  window.location = "/javascript/intermediate/asynchronous_code.js";

document.getElementById("exampleOne").addEventListener("click", () => exampleOne());
document.getElementById("exampleTwo").addEventListener("click", () => exampleTwo());
document.getElementById("exampleThree").addEventListener("click", () => exampleThree());
document.getElementById("exampleFour").addEventListener("click", () => exampleFour());


// Example 1 - Demonstration of synchronous code

    function exampleOne(){
        console.log("Example 1 - Demonstration of synchronous code")

        // synchronous
        console.log("Task 1 - synchronous")
        console.log("Task 2 - synchronous")
        console.log("Task 3 - synchronous")
    }

    
// Example 2 - Demonstration of asynchronous code

    //  *note ('setTimeout()' is natively async)
    
    function exampleTwo(){
        console.log("Example 2 - Demonstration of asynchronous code")

        // asynchronous
        setTimeout(() => console.log("Task 1 - asynchronous"), 1000);

        // synchronous
        console.log("Task 2 - synchronous")
        console.log("Task 3 - synchronous")
    }

// Example 3 - Demonstration of asynchronous code used alongside synchronous code (via callbacks)

function exampleThree(){
    
    function func1(callback){
        // asynchronous
        setTimeout(() => {  console.log("Task 1 - asynchronous")
                            callback()},
                            2000);
    }

    function func2(){
        // synchronous
        console.log("Task 2 - synchronous");
        console.log("Task 3 - synchronous");
    }
    
    console.log("Example 3 - demonstration of asynchronous code used alongside synchronous code (via callbacks)");

    func1(func2);

}


// Example 4 - Demonstration of multiple async functions running at the same time

    // Multiple asynch functions can run at the same time. In this example it is simply a race to the finish... whichever function finishes first appears first. Otherwise known as a 'race condition'. This doesn't have to be the case, and we can use controls to overcome this.


    function exampleFour(){

        console.log("Example 4 - Demonstration of multiple async functions running at the same time");

        // asynchronous
        setTimeout(() => console.log("Task 1"), 1000);
        setTimeout(() => console.log("Task 2"), 500);
        setTimeout(() => console.log("Task 3"), 100);

    }
