// Switches
// ////////////////////////////////////////

document.getElementById("code").onclick = () =>
  window.location = "/javascript/fundamentals/switches.js";

let day = 5;
// using switches, we can execute code based on if the variable 'day' meets a specific case (see example below), or - if no cases match the variable - set a default block of code to execute.

switch(day){
  case 1:
      console.log("it is Monday");
      break;

  case 2:
      console.log("it is Tuesday");
      break;

  case 3:
      console.log("it is Wednesday");
      break;

  case 4:
      console.log("it is Thursday");
      break;

  case 5:
      console.log("it is Friday");
      break;

  case 6:
      console.log("it is Saturday");
      break;

  case 7:
      console.log("it is Sunday");
      break;

  default:
      console.log("what day of the week is it?");
}