// Strict Equality
// ////////////////////////////////////////

document.getElementById("code").onclick = () =>
  window.location = "/javascript/fundamentals/strict_equality.js";

const PI = 3.14;

console.log("Example 1 - standard equality check");

if(PI == "3.14"){
  console.log("I can't tell the difference between a string and a number, so even though you said a number and then checked it against a string, I still evaluate it as TRUE!");
}
else {
  console.log("That is not PI!");
}

console.log("Example 2 - strict equality check");

if(PI === "3.14"){
  console.log("I can now tell the difference between a string and a number, so given that you have checked a string against a number, I can now evaluate it as FALSE!");
}
else {
  console.log("I can now tell the difference between a string and a number, so given that you have checked a string against a number, I can now evaluate it as FALSE! That is not PI!");
}