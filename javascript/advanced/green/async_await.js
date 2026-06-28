document.getElementById("code").onclick = () =>
  window.location = "/javascript/advanced/green/async_await.js";

// Example 1

    console.log("Example 1:")
    console.log("Task 1")
    console.log("Task 2")
    console.log("Task 3")

    
// Example 2 - Demonstration of async ('setTimeout()' is natively async)
    
    console.log("Example 2:")
    setTimeout(() => console.log("Task 1"), 1000);
    console.log("Task 2")
    console.log("Task 3")

// Example 3 - using Callbacks

    function func1(callback){
        setTimeout(() => {  console.log("Task 1")
                            callback()},
                            1000);
    }


    function func2(){
        console.log("Task 2");
        console.log("Task 3");
    }

    setTimeout(() => console.log("Example 3:"),2000);
    setTimeout(() => func1(func2), 2001);