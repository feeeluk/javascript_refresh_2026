// Method Chaining
// ////////////////////////////////////////

document.getElementById("code").onclick = () =>
  window.location = "/javascript/intermediate/method_chaining.js";

  let username = window.prompt("Enter username");
  username2 = username;
  username3 = username;

// Example 1

  console.log("Example 1 - As is");

  console.log(username);




// Example 2

  console.log("Example 2 - No method chaining");

  username2 = username2.trim();
  let firstChar = username2.charAt(0);
  firstChar = firstChar.toUpperCase();
  let otherChars = username2.slice(1);
  otherChars = otherChars.toLowerCase();
  username2 = firstChar + otherChars;

  console.log(username2);




// Example 3

  console.log("Example 3 - Using method chaining");

  username3 = username3.trim().charAt(0).toUpperCase() + username3.trim().slice(1).toLowerCase();

  console.log(username3);

