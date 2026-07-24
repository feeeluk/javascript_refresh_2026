// Promises
// ////////////////////////////////////////

document.getElementById("code").onclick = () =>
  window.location = "/javascript/advanced/green/promises.js";

function walkDog(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      const dogWalked = true;

      if (dogWalked){
        resolve("You walked the dog");
      }
      else {
        reject("You did not walk the dog");
      }

    }, 1000);

  });
}

function cleanKitchen(){
  return new Promise((resolve, reject) => {
    setTimeout(() =>{

      const kitchenCleaned = true;
      
      if(kitchenCleaned){
        resolve("You cleaned the kitchen");
      }
      else {
        reject("You did not clean the kitchen")
      }
    }, 2000)
  })
}

function takeOutTrash(){
  return new Promise((resolve, reject) => {
    setTimeout(() =>{

      const trashTakenOut = true;

      if(trashTakenOut){
        resolve("You took out the trash")
      }
      else {
        reject("You did not take out the trash")
      }
    }, 3000)
  })
}

function emptyDishWasher(){
  return new Promise((resolve, reject) => {
    setTimeout(() =>{

      const dishWasherEmptied = false;

      if(dishWasherEmptied){
        resolve("You emptied the dishwasher")
      }
      else {
        reject("You did not empty the dishwasher")
      }
    }, 1000)
  })
}


// parallel / independent (should take 3 seconds for all to execute as 3 seconds is the longest function)

  document.getElementById("independent").addEventListener("click", () => {
    walkDog()
      .then(console.log)
      .catch(console.error);

    cleanKitchen()
      .then(console.log)
      .catch(console.error);

    takeOutTrash()
      .then(console.log)
      .catch(console.error);
  })



// chained / sequential (should take 6 seconds as that is the total of all 3 combined)

  document.getElementById("sequential").addEventListener("click", () => {

    walkDog()
      .then(value => {console.log(value); return cleanKitchen()})
      .then(value => {console.log(value); return takeOutTrash()})
      .then(value => {console.log(value); console.log("You finished all the chores")})
      .catch(error => console.error(error));
    });



// chained / sequential (should take 7 seconds as that is the total of all 4 combined BUT as the dishwasher was not done the chain will fail!)

  document.getElementById("sequential2").addEventListener("click", () => {

    emptyDishWasher()
      .then(value => {console.log(value); return walkDog()})
      .then(value => {console.log(value); return cleanKitchen()})
      .then(value => {console.log(value); return takeOutTrash()})
      .then(value => {console.log(value); console.log("You finished all the chores")})
      .catch(error => console.error(error));
    });



// parallel / independent (should take 3 seconds for all to execute as 3 seconds is the longest function)

  document.getElementById("independent2").addEventListener("click", () => {
    emptyDishWasher()
      .then(console.log)
      .catch(console.error);
    walkDog()
      .then(console.log)
      .catch(console.error);

    cleanKitchen()
      .then(console.log)
      .catch(console.error);

    takeOutTrash()
      .then(console.log)
      .catch(console.error);
  })