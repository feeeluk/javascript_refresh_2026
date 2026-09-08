// Dice Roller Program


document.getElementById("code").addEventListener("click", event => {
  window.location = "/javascript/tasks/dice_roller_program.js";
});

// ////////////////////////////////////////

let numberOfDice;
let results;
let images;
let values = [];
let diceImages = [];


document.getElementById("roll").addEventListener("click", event => {
  reset();
  rollDice();
})


function rollDice(){

  numberOfDice = document.getElementById("numberOfDice").value;
  results = document.getElementById("results");
  images = document.getElementById("images");

    for(let i = 0; i < numberOfDice; i++){

    // console.log(i);
    // console.log(numberOfDice);
    const random = Math.floor(Math.random()*6)+1;
    // console.log(random);
    values.push(`<br>${random}`);
    diceImages.push(`<img src="/resources/images/dice/dice_${random}.svg" style="height: 100px; width: 100px">`)
    
  }

  results.innerHTML = `dice: ${values.join(' ')}`;
  images.innerHTML = diceImages.join(' ');

}

function reset(){
  values = [];
  diceImages = [];
}