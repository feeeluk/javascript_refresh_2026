// JSON
// ////////////////////////////////////////

document.getElementById("code").onclick = () =>
  window.location = "/javascript/advanced/green/json.js";

//////////////////////////////////////////////////////////////////////////////////////////////////

let buttons = document.querySelectorAll("p button");

// console.log(buttons);

const stateOriginal = false;
let state = stateOriginal;

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


//////////////////////////////////////////////////////////////////////////////////////////////////

buttons.forEach(button => {

  button.classList.add("enabled");

  if(button.id != 13){
    button.textContent = `Button ${button.id} - ${button.textContent}`;
  }
  else{
    renameButton();
  }
    
})

//////////////////////////////////////////////////////////////////////////////////////////////////

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

document.getElementById("10").addEventListener("click", event => {
  const stringifyNames = JSON.stringify(names);
  const parseNames = JSON.parse(stringifyNames);
  console.log(parseNames);
})

document.getElementById("11").addEventListener("click", event => {
  const stringifyPeople = JSON.stringify(people);
  const parsePeople = JSON.parse(stringifyPeople);
  console.log(parsePeople);
})

document.getElementById("12").addEventListener("click", event => {
  const stringifyPerson = JSON.stringify(person);
  const parsePerson = JSON.parse(stringifyPerson);
  console.log(parsePerson);
})

//////////////////////////////////////////////////////////////////////////////////////////////////

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

// Make a button that toggles between parsing and stringifying JSON.

// - toggle the class (event listener and classlist)
// - use if / else to determine state (doesn't necessarily have to detect JSON state, can use a boolean to act as a toggle for true/false)
// - change name of button depending on the state
// - display result in the console



function renameButton(){

  if(state){
    document.getElementById("13").textContent = "Parse() - turn into JS";
  }
  else
  {
    document.getElementById("13").textContent = "Stringify() - Turn into a string";
  }

}

function changeState(){
  state = !state;
}

function showState(){
  console.log(state);
}

function toggleClass(){
  document.getElementById("13").classList.toggle("false");
}

function toggle(data){
  
  function parse(data){
    console.log(JSON.parse(data));
    toggleClass()
    // showState()
    changeState()
    renameButton();
  }

  function stringify(data){
    console.log(JSON.stringify(data));
    toggleClass()
    // showState()
    changeState()
    renameButton();
  }

  if(state){
    parse(JSON.stringify(data));
  }
  else
  {
    stringify(data);
  }
  
}

document.getElementById("13").addEventListener("click", event => {
  toggle(people);
})
