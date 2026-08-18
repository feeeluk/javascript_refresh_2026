// Classlist
// ////////////////////////////////////////

document.getElementById("code").onclick = () =>
  window.location = "/javascript/advanced/amber/classlist.js";

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");

button1.classList.add("enabled");

button2.classList.add("enabled");
button2.classList.remove("enabled");

button3.addEventListener("click", event => {
  event.target.classList.toggle("enabled");
})

button4.classList.add("enabled");

button4.addEventListener("mouseover", event => {
  event.target.classList.replace("enabled", "hover");
})

button4.addEventListener("mouseout", event => {
  event.target.classList.replace("hover", "enabled");
})

button5.addEventListener("mouseover", event => {

  if(event.target.classList.contains("none")){
    event.target.textContent += " Y";
  }
  else{
    event.target.textContent += " N";
  }
  
})

button5.addEventListener("mouseout", event => {
    
    let oldString = event.target.textContent;
    let newString = oldString.substring(0, oldString.length -2);

    event.target.textContent = newString;

})

// nodeList and classList together

let buttons = document.querySelectorAll(".disabled");

buttons.forEach(button => {
  button.addEventListener("click", event => {
    event.target.classList.replace("disabled", "enabled");
    console.log("disabled off / enabled on");
  })
  
  button.addEventListener("mouseover", event => {
    event.target.classList.toggle("hover");
    console.log("mouseover");
    console.log(event.target.classList.value);
  })

  button.addEventListener("mouseout", event => {
    event.target.classList.toggle("hover");
    console.log("mouseout");
    console.log(event.target.classList.value);
  })

})