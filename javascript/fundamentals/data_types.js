// Data Types
// ////////////////////////////////////////

document.getElementById("code").onclick = () =>
  window.location = "/javascript/data_types.js";

// Data Types in JavaScript

let a = "pizza";
let b = "pizza";
let c = "pizza";

let d = "1";
let e = "1";
let f = "1";

let g = "";
let h = "";
let i = "";

let j;
let k;
let l;

a = Number(a);
b = String(b);
c = Boolean(c);

d = Number(d);
e = String(e);
f = Boolean(f);

g = Number(g);
h = String(h);
i = Boolean(i);

j = Number(j);
k = String(k);
l = Boolean(l);

console.log(a); // NaN
console.log(b); // "pizza"
console.log(c); // true

console.log(d); // 1
console.log(e); // "1"
console.log(f); // true

console.log(g); // 0
console.log(h); // ""
console.log(i); // false

console.log(j); // NaN
console.log(k); // "undefined"
console.log(l); // false

// **********************************************************************************************

// let age = window.prompt("What is your age?");

document.getElementById("Age").addEventListener("change", age);

function age(){

    let ageString = document.getElementById("Age").value;

    ageNumber = Number(ageString);

    ageString+= 1
    ageNumber+= 1;

    console.log(ageString);
    console.log(ageNumber);

}

