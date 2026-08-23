// Temperature Conversion Program
// ////////////////////////////////////////

document.getElementById("code").addEventListener("click", event => {
  window.location = "/javascript/tasks/temperature_conversion_program.js";
});

// when button is clicked
document.getElementById("convert").addEventListener("click", event => {

  // get input temperature
  const tempInput = document.getElementById("tempInput").value;
  const temptInputNumber = Number(tempInput);
  
  // get type of conversion
  const toFarenheit = document.getElementById("toFarenheit");
  const toCelsius = document.getElementById("toCelsius");

  // display result
  let displayResult = document.getElementById("result");

  // calculate value
  let calculatedValue;

  if(isNaN(temptInputNumber) || tempInput == ""){
    window.alert("Please enter a NUMBER!");
  }
  else if(toFarenheit.checked){
    console.log(toFarenheit.value);
    calculatedValue = (temptInputNumber * 1.8) + 32;
    displayResult.textContent = `${calculatedValue.toFixed(1)} °F`;
  }
  else {
    console.log(toCelsius.value);
    calculatedValue = (temptInputNumber - 32) / 1.8;
    displayResult.textContent = `${calculatedValue.toFixed(1)} °C`;
  }
})