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

    }, 2000);

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
    }, 4000)
  })
}

function takeOutTrash(){
  return new Promise((resolve, reject) => {
    setTimeout(() =>{

      const trashTakenOut = false;

      if(trashTakenOut){
        resolve("You took out the trash")
      }
      else {
        reject("You did not take out the trash")
      }
    }, 6000)
  })
}

// chained / sequential

  walkDog().then(value => {console.log(value); return cleanKitchen()})
           .then(value => {console.log(value); return takeOutTrash()})
           .then(value => {console.log(value); console.log("You finished all the chores")}).catch(error => console.error(error));



// parallel / independent

walkDog()
  .then(value => console.log("2 - ",value))
  .catch(err => console.error("2 - ", err));

cleanKitchen()
  .then(value => console.log("2 - ",value))
  .catch(err => console.error("2 - ", err));

takeOutTrash()
  .then(value => console.log("2 - ",value))
  .catch(err => console.error("2 - ", err));