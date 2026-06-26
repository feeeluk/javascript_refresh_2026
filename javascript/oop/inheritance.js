class Animal {

    alive = true;

    eat(){
        console.log(`This ${this.animalType} is eatinging`);
    }

    sleep(){
        console.log(`This ${this.animalType} is sleeping`);
    }

    hello(){
        console.log(`Hello! My name is ${this.name}`);
    }
}

class Fish extends Animal{
    
    // constructor(name){
    //     this.name = name;
    // }

    animalType = "Fish";
}

class Dog extends Animal{
    
    // constructor(name){
    //     this.name = name;
    // }

    animalType = "Dog";

    canRun = true;

    run(){
        console.log(`This ${this.animalType} is running.`);
    }
}

class Bird extends Animal{
    
    // constructor(name){
    //     this.name = name;
    // }

    animalType = "Bird";
}

//  Example 1

const ozzy = new Dog();
console.log("Example 1:");
console.log(ozzy.alive);
ozzy.sleep();

// Example 2

const fish1 = new Fish
fish1.alive = false;
console.log("Example 2:");
console.log(fish1);

// Example 3

console.log("Example 3:");
ozzy.run();