const person1 = {
    name: "Phil",
    favFood: "Pizza",
    sayHello(){ console.log(`Hello, my name is ${name}`),           // Invalid
                console.log(`Hello, my name is ${person1.name}`),   // Incorrect - While using the Function name / Object name as the prefix would work, when creating a Function that will be invoked multiple times, the convention is to use 'this' as that way there is no ambiguity - 'this' is clearly referencing the current Function / Object, and there is no need to remember what it is called, either.}
                console.log(`Hello, my name is ${this.name}`)}      // Correct
}

person1.sayHello();