// Event Listeners
// ////////////////////////////////////////

document.getElementById("code").onclick = () =>
  window.location = "/javascript/advanced/green/event_listeners.js";


// Mouse events

const boxOne = document.getElementById("boxOne");

boxOne.addEventListener("mouseover", event => {
  console.log(event);
  event.target.style.backgroundColor = "yellow";
  event.target.textContent = "WARNING! ⚠️";
});

boxOne.addEventListener("mouseout", event => {
  console.log(event);
  event.target.style.backgroundColor = "lightgreen";
  event.target.textContent = "Click me 😊";
});

boxOne.addEventListener("click", event => {
  console.log(event);
  event.target.style.backgroundColor = "tomato";
  event.target.textContent = "OUCH 🤕";
});

// Keyboard events

document.addEventListener("keydown", event => {
  console.log(`keydown  = ${event.key}`);
})

document.addEventListener("keyup", event => {
  console.log(`keyup  = ${event.key}`);
})

const image = document.getElementById("boxThree");
const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
  if(event.key.startsWith("Arrow")){
    
      switch(event.key){
        case "ArrowUp":
          y -= moveAmount;
          break;

        case "ArrowDown":
          y += moveAmount;
          break;

        case "ArrowLeft":
          x -= moveAmount;
          break;

        case "ArrowRight":
          x += moveAmount;
          break;
      }

    image.style.top = `${y}px`;
    image.style.left = `${x}px`;

  }
});

document.addEventListener("keydown", event => {
  console.log(event);
  image.style.backgroundColor = "tomato";
  image.textContent = "😧";
});

document.addEventListener("keyup", event => {
  console.log(event);
  image.style.backgroundColor = "lightblue";
  image.textContent = "😊";
});

