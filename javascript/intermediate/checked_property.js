// Checked Property
// ////////////////////////////////////////

document.getElementById("code").onclick = () =>
  window.location = "/javascript/intermediate/checked_property.js";

const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subscribed = document.getElementById("subscribed");
const paymentMethod = document.getElementById("paymentMethod");

mySubmit.onclick = function(){
  if(myCheckbox.checked){
    subscribed.textContent = "Subscribed = YES";
  } else {
    subscribed.textContent = "Subscribed = NO";
  }

  if(visaBtn.checked){
    paymentMethod.textContent = "Payment method = VISA";
  } else if(mastercardBtn.checked){
    paymentMethod.textContent = "Payment method = MASTERCARD";
  } else if(paypalBtn.checked){
    paymentMethod.textContent = "Payment method = PAYPAL";
  } else {
    paymentMethod.textContent = "SELECT A PAYMENT METHOD!";
  }
}

// when the submit button is pressed

// check if subscribe is checked

// then change the text

// check which payment method is checked

// then change the text

function isChecked(value){
  if(value.isChecked == true){

  }
}