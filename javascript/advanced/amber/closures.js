// Closures
// ////////////////////////////////////////

document.getElementById("code").onclick = () =>
  window.location = "/javascript/advanced/amber/closures.js";






//  Example of a closure

function outer() { // outer function
  let x = 10; // outer function scope

  function inner() {// inner function
    return x; // inner function returns an item from the outer scope
  }

  return inner; // return the inner function
}

const fn = outer(); // run outer() and assign it's returned value to a constant

console.log(`The initial value of the closure is: ${fn()}`);  // even though outer() has ran and completed, x is STILL available as outer() has been assigned to a variable. Because the variable has been assigned a funtion, we can run that function by calling the variable name then appending '()' just like we would with a function.




// Example of a Closure using a points game

  // Event listeners
  document.getElementById("showScore").addEventListener("click", () => game.showScore());
  document.getElementById("increaseScore").addEventListener("click", () => game.increaseScore(10));
  document.getElementById("decreaseScore").addEventListener("click", () => game.decreaseScore(10));
  document.getElementById("resetScore").addEventListener("click", () => game.resetScore());
          

function createGame(){ // outer function of Closure
  
  const originalScore = 0;
  let score = originalScore;

  function showScore(){
    document.getElementById("points").textContent = score;
  }

  function increaseScore(points){
    score += points;
    console.log(score);
    showScore();
  }

  function decreaseScore(points){
    score -= points;
    console.log(score);
    showScore();
  }

  function resetScore(){
    score = originalScore;
    console.log(score);
    showScore();
  }

  return {showScore, increaseScore, decreaseScore, resetScore};
}

const game = createGame();