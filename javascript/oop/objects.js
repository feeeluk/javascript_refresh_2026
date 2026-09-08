// Object
// //////////////////////////////////////// 

document.getElementById("code").onclick = () =>
  window.location = "/javascript/oop/objects.js";

// Example 1

const person = {
    firstname: "Phil",
    lastname: "Henning",
    age: 43,
    isEmployed: false,
}

console.log("Example 1:");
console.log(person.firstname);
console.log(person.lastname);
console.log(person.age);
console.log(person.isEmployed);

// Example 2

const animal = {
    name: "Ozzy",
    type: "dog",
    age: 4,
    sound: "woof",
    makeSound: (sound) => console.log(sound),
    makeAnotherSound: () => console.log("bark"),
}

animal.makeSound(animal.sound);
animal.makeAnotherSound();