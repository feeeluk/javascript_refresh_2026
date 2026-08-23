// Temperature Conversion Program


document.getElementById("code").addEventListener("click", event => {
  window.location = "/javascript/tasks/temperature_conversion_program.js";
});

// ////////////////////////////////////////

  // get input temperature
  let tempInput;
  let tempInputNumber;
  
  // get type of conversion
  const toFarenheit = document.getElementById("toFarenheit");
  const toCelsius = document.getElementById("toCelsius");

  // display result
  const displayResult = document.getElementById("result");

  // calculate value
  let calculatedValue;

// when button is clicked
document.getElementById("convert").addEventListener("click", event => {
  
  tempInput = document.getElementById("tempInput").value;
  tempInputNumber = Number(tempInput);

  if(isNaN(tempInputNumber) || tempInput == ""){
    window.alert("Please enter a NUMBER!");
  }
  else if(toFarenheit.checked){
    calculatedValue = (tempInputNumber * 1.8) + 32;

    displayResult.style.display = "block";
    displayResult.textContent = `${calculatedValue.toFixed(1)} °F`;
  }
  else {
    calculatedValue = (tempInputNumber - 32) / 1.8;
    
    displayResult.style.display = "block";
    displayResult.textContent = `${calculatedValue.toFixed(1)} °C`;
  }
})

// when input is changed to empty
document.getElementById("tempInput").addEventListener("input", event => {
  if(event.target.value == ""){
    displayResult.style.display = "none";
    tempInput = "";
    console.log(tempInput);
  }
})