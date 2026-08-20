// JSON
// ////////////////////////////////////////

document.getElementById("code").onclick = () =>
  window.location = "/javascript/advanced/green/json.js";

let buttons = document.querySelectorAll("p button");

console.log(buttons);

buttons.forEach(button => {
  button.classList.add("enabled");
  button.textContent = `Button ${button.id} - ${button.textContent}`;
})

document.getElementById("1").addEventListener("click", event => {
  console.log(names);
})

document.getElementById("2").addEventListener("click", event => {
  console.log(people);
})

document.getElementById("3").addEventListener("click", event => {
  console.log(person);
})

document.getElementById("4").addEventListener("click", event => {
  console.log(JSON.stringify(names));
})

document.getElementById("5").addEventListener("click", event => {
  console.log(JSON.stringify(people));
})

document.getElementById("6").addEventListener("click", event => {
  console.log(JSON.stringify(person));
})

document.getElementById("7").addEventListener("click", async event => {
  console.log(await fetchNames());
})

document.getElementById("8").addEventListener("click", async event => {
  console.log(await fetchPeople());
})

document.getElementById("9").addEventListener("click", async event => {
  console.log(await fetchPerson());
})

const names = ["Spongebob", "Squidward", "Patrick", "Sandy"];
const people = [
    {
        "name": "Spongebob",
        "age": 30,
        "isEmployed": true
    },

    {
        "name": "Patrick",
        "age": 34,
        "isEmployed": false
    },

    {
        "name": "Squidward",
        "age": 50,
        "isEmployed": true
    },

    {
        "name": "Sandy",
        "age": 27,
        "isEmployed": false
    }
];
const person = {
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["Jellyfishing", "Karate", "cooking"]
};

async function fetchNames(){
  const response = await fetch("/resources/json/names.json");
  const names = await response.json();

  return names;
};

async function fetchPeople(){
  const response = await fetch("/resources/json/people.json");
  const people = await response.json();

  return people;
};

async function fetchPerson(){
  const response = await fetch("/resources/json/person.json");
  const person = await response.json();

  return person;
};