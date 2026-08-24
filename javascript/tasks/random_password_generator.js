// Random Password Generator
// ////////////////////////////////////////

document.getElementById("code").addEventListener("click", event => {
  window.location = "/javascript/tasks/random_password_generator.js";
});

// ////////////////////////////////////////

let passwordLength;
let includeLower;
let includeUpper;
let includeNumber;
let includeSymbol;

function generatePassword(){

    passwordLength = document.getElementById("passwordLength");
    console.log(passwordLength.value);

    includeLower = document.getElementById("includeLowercase");
    if(includeLower.checked){
        console.log(includeLower.value);
    }
    else{
        console.log("Lowercase = No")
    }

    includeUpper = document.getElementById("includeUppercase");
        if(includeUpper.checked){
        console.log(includeUpper.value);
    }
    else{
        console.log("Uppercase = No")
    }

    includeNumber = document.getElementById("includeNumbers");
        if(includeNumber.checked){
        console.log(includeLower.value);
    }
    else{
        console.log("Numbers = No")
    }

    includeSymbol = document.getElementById("includeSymbols");
        if(includeSymbol.checked){
        console.log(includeSymbol.value);
    }
    else{
        console.log("Symbol = No")
    }
}

document.getElementById("generatePassword").addEventListener("click", event => {
    generatePassword();
})