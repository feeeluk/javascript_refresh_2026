const person = {
    name: "phil",
    age: 43,
    address: {
        house: 229,
        street: "kingston road",
        town: "willerby",
        city: "hull"
    },
    hobbies: ["dog walking", "music", "dev", "reading", "camping"],
}

console.log(person);
console.log(person.name);
console.log(person.address.city);
console.log(person.hobbies[0]);

for (items in person.address){
    console.log(person.address[items])
}

for (items in person){
    console.log(items)
}


// Example 2 - using a class

class Person{
    constructor(name,age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address)
    }
}

class Address{

    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Phil", 43, "kingston road", "hull", "england");

console.log("Example 2:")
console.log(person1);