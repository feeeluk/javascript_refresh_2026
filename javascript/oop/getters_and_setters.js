// Example 1 - no getters and no setters, but an instance of a class with values that make no sense

class Rectangle{
    constructor (width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth; // a variable with a '_' prefix is how we refer to the variable within the class. Outside the class there is no prefix. Getters and setters are like bodyguards for the variables. They don't guard you in your house because you don't need it, but they guard you everywhere else.  If you tried to set a setter with the same name as the setter then it will cause an infinite loop. Using the '_'prefix avoids that. 
        }

        else
        {
            console.error("Width must be a positive number")
        }

    }

    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }

        else
        {
            console.error("Height must be a positive number")
        }
    }

    get width(){
        return this._width.toFixed(1);
    }

    get height(){
        return this._height.toFixed(1);
    }

    get area(){
        return `The area of the rectangle is ${(this._height * this._width)}cm2`;
    }

}

const rectangle1 = new Rectangle(10, 20);
// rectangle1.height = 5;
console.log("Example 1");
console.log(rectangle1.width);
console.log(rectangle1.height);
console.log(rectangle1.area);

// Example 2

class Person{

    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if (typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }
        else {
            console.error("The first name needs to be a string")
        }
    }

    set lastName(newLastName){
            if (typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName;
        }
        else {
            console.error("The last name needs to be a string")
        }
    }

    set age(newAge){
        if(newAge > 0){
            this._age = newAge;
        }
        else{
            console.error("Age needs to be a number greater than 0")
        }
    }

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    get age(){
        return this._age;
    }

    get fullName(){
        return this._firstName + " " + this._lastName;
    }
}

const person1 = new Person("Phil", "Henning", 43);
console.log("Example 2");
console.log(person1);
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.fullName);

