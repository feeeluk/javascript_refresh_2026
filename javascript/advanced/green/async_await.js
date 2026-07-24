// Async / Await
// ////////////////////////////////////////


document.getElementById("code").onclick = () =>
  window.location = "/javascript/advanced/green/async_await.js";

// Example 1

    console.log("Example 1 - Demonstration of synchronous code")

    console.log("Task 1 - synchronous")
    console.log("Task 2 - synchronous")
    console.log("Task 3 - synchronous")

    
// Example 2
    
    console.log("Example 2 - Demonstration of asynchronous behaviour ('setTimeout()' is natively async)")

    setTimeout(() => console.log("Task 1 - asynchronous"), 1000);
    console.log("Task 2 - synchronous")
    console.log("Task 3 - synchronous")

// Example 3

    setTimeout(() => console.log("Example 3 - demonstration of asynchronous code used alongside synchronous code (via callbacks)"), 1001);
    
    function func1(callback){
        setTimeout(() => {  console.log("Task 1 - asynchronous")
                            callback()},
                            4000);
    }

    function func2(){
        console.log("Task 2 - synchronous");
        console.log("Task 3 - synchronous");
    }
    
    func1(func2);