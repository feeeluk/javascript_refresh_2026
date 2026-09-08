// NodeList
// ////////////////////////////////////////

document.getElementById("code").onclick = () =>
  window.location = "/javascript/advanced/amber/nodelist.js";


// Example 1

let buttons = document.querySelectorAll(".nodeListButton"); // create NodeList
console.log(buttons);

buttons.forEach(button => {

  let clicks = createCounter(); // create a counter for each button

  button.addEventListener("click", event => {
   
    clicks.incrementClicks();
    
    if(clicks.isEven()){
      event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
    }
    else{
      event.target.style.backgroundColor = "tomato";
    }

    console.log(`Button ${button.textContent} - # clicks = ${clicks.getClicks()}`);
    console.log(`Button ${button.textContent} - ${clicks.isEven()}`);
  })

})

// Use a Closure to keep count of the number of clicks per button

function createCounter(){
  
  let numberOfClicks = 0;

  function incrementClicks(){
    numberOfClicks++;
  }

  function getClicks(){
    return numberOfClicks;
  }

  function isEven(){
    return numberOfClicks % 2 === 0; // using the strict comparison makes this return a boolean value
  }

  return {incrementClicks, getClicks, isEven};
}

