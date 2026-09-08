// Hide and Show HTML
// ////////////////////////////////////////

document.getElementById("code").addEventListener("click", event => {
  window.location = "/javascript/tasks/hide_and_show_html.js";
});

const button = document.getElementById("myButton");
const image = document.getElementById("myImage");

document.getElementById("myButton").addEventListener("click", event =>{

  if(button.textContent === "Hide"){

    image.style.visibility = "hidden";
    button.textContent = "Show"

  }
  else{

    image.style.visibility = "visible";
    button.textContent = "Hide"

  }
})