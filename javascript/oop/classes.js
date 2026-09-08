// Classes
// ////////////////////////////////////////

document.getElementById("code").onclick = () =>
  window.location = "/javascript/oop/classes.js";

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log("Example 1:");
        console.log(`Product: ${this.name}`);
        console.log(`Price: £${this.price}`);
    }

    calculateTax(taxRate){
        let tax = 1 + (taxRate / 100);
        let totalWithTax = this.price * tax;
        console.log("Example 2:");
        console.log(`Price: £${this.price}`);
        console.log(`Tax: £${taxRate}`);
        console.log(`Total price: £${totalWithTax}`);
    }

    calculateTax2(taxArgs){
        return this.price + (this.price * taxArgs);
    }
}


const prod1 = new Product("toy", 100);

// Example 1
prod1.displayProduct();

// Example 2 - add new method (calculateTax)
prod1.calculateTax(20);

// Example 3 - different way of calculating tax
const tax = .2;
const total = prod1.calculateTax2(tax);
console.log("Example 3:");
console.log(`Total price (with tax): £${total}`);
