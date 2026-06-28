document.getElementById("code").onclick = () =>
  window.location = "/javascript/oop/super.js";

class Animal{

    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type;
    }

    hello(){
        console.log(`Hello! My name is ${this.name}.`)
    }

    howFast(speed){
        console.log(`${this.name} has a top speed of ${speed}mph.`);
    }
}

class Dog extends Animal{    
    
    run(){
        console.log(`${this.name} is running!`);
        super.howFast(this.runSpeed);
    }

    constructor(name, age, runSpeed){
        super(name, age, "dog");
        this.runSpeed = runSpeed;
    }
}

class Bird extends Animal{
    
    fly(){
        console.log(`${this.name} is flying!`);
    }

    constructor(name, age, flySpeed){
        super(name, age, "bird");
        this.flySpeed = flySpeed;
    }
}

class Fish extends Animal{
    
    swim(){
        console.log(`${this.name} is swimming!`);
    }

    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
}

const dog1 = new Dog("Ozzy", 4.5, 10);
const bird1 = new Bird("Percy", 40, 20);
const fish1 = new Fish("Billy", 50, 1);

console.log("Example 1");
dog1.run(); // using a child method
bird1.fly();
fish1.swim();

console.log("Example 2"); // using a parent method
dog1.hello();
bird1.hello();
fish1.hello();

console.log("Example 3"); // using a parent method but passing child arguments (using super)
dog1.run();
// notice that only the Dog has a run() method that calls a parent method
// also notice that we have only needed to send 'speed' as an argument as each child class has a different name for it's speed attribute, whereas things that are universally consistent (e.g. 'name') can simply use 'this'.

console.log("Example 4"); // sending a fixed argument to the superclass via a fixed attribute in the child constructor e.g. 'type = dog'
console.log(dog1);
console.log(bird1);
console.log(fish1); // notice that not sending that parameter to the constructor doesn't KILL the entire thing, the 'type' is simply 'undefined'