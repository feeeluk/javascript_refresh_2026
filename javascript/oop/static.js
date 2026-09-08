// Static
// ////////////////////////////////////////

document.getElementById("code").onclick = () =>
  window.location = "/javascript/oop/static.js";

class mathUtils{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }

    static calculateCircumfrence(radius){
        return (2 * this.PI * radius) * 2;
    }
}

// Example 1 - static properties
console.log("Example 1:");
console.log(mathUtils.PI);

// Example 2 - static methods
console.log("Example 2:");
console.log(mathUtils.getDiameter(5));

// Example 3 - using static properties inside static methods
console.log("Example 3:");
console.log(mathUtils.calculateCircumfrence(5));

// Example 4

class User{

    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} users`)
    }

    sayHello(){
        console.log(`Hello, my name is ${this.username}`);
    }
}

const user1 = new User("Phil");
const user2 = new User("Oz");

console.log("Example 4:");
console.log(User.userCount);
User.getUserCount();
user1.sayHello();
user2.sayHello();