// Add and Change HTML
// ////////////////////////////////////////

document.getElementById("code").addEventListener("click", event => {
  window.location = "/javascript/tasks/add_and_change_html.js";
});

// Variables
// ////////////////////////////////////////

  const newH2 = document.createElement("h2");
    newH2.textContent = "I like pizza";

  const remove = document.createElement("button");
    remove.textContent = "Remove";
    remove.id = "remove";

// Functions
// ////////////////////////////////////////

  function reset(){
    window.location.reload();
  }

// Event Listeners
// ////////////////////////////////////////

  document.getElementById("button1").addEventListener("click", event => {

    document.body.append(newH2); // append goes AFTER

  })

  document.getElementById("button2").addEventListener("click", event => {

    document.body.prepend(newH2); // prepend gooes BEFORE

  })

  document.getElementById("button3").addEventListener("click", event => {

    document.getElementById("box3").append(newH2); // it can be used with any level of the DOM

  })

  document.getElementById("button4").addEventListener("click", event => {

    document.getElementById("box4").prepend(newH2); // it can be used with any level of the DOM
    newH2.id = "myH2"; // it is possible to add additional attributes, e.g. ID
    newH2.style.color = "red"; // it is possible to add additional attributes, e.g. CSS

  })

  document.getElementById("button5").addEventListener("click", event => {

    const box5 = document.getElementById("box5");
    document.getElementById("main").insertBefore(newH2, box5); // insertBefore(newElement, targertAsLongAsItIsAChild)

  })

  document.getElementById("button6").addEventListener("click", event => {

    const boxes = document.querySelectorAll(".box");
    document.getElementById("main").insertBefore(newH2, boxes[5]);


  })

  document.getElementById("button7").addEventListener("click", event => {

    document.getElementById("box7").prepend(newH2); // Prepend the title for demo purposes

    const resetBtns = document.querySelectorAll(".reset"); // for demo purposes create a NodeList of reset buttons
    document.getElementById("box7").insertBefore(remove, resetBtns[6]); // then insert a Remove button within the 7th NodeList of reset buttons

    remove.addEventListener("click", event => {
      document.getElementById("box7").removeChild(newH2); // Remove the newH2 element
      document.getElementById("box7").removeChild(remove); // Remove itself (Remove button)
    })

  })

  

  document.querySelectorAll(".reset").forEach(button => {
    button.addEventListener("click", event => reset());
  })   
