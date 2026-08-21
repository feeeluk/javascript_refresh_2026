// Random Number Generator
// ////////////////////////////////////////

document.getElementById("code").addEventListener("click", event => {
  window.location = "/javascript/tasks/random_number_generator.js";
});

document.getElementById("buttonGenerateRandomNumber").addEventListener("click", event => {
   generateRandomNumber(); 
})

async function generateRandomNumber(){

    const max = 6;
    const min = 1;
    let randomNumber;
    const label = document.getElementById("labelGenerateRandomNumber");

    label.textContent = "rolling";
    
    await wait(500);

    randomNumber = Math.floor(Math.random() *max) + min;
    label.textContent = randomNumber; 

}

function wait(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}