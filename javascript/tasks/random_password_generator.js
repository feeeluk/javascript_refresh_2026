// Random Password Generator
// ////////////////////////////////////////

document.getElementById("code").addEventListener("click", event => {
  window.location = "/javascript/tasks/random_password_generator.js";
});

// ////////////////////////////////////////



let passwordLength;
let includeLowercase;
let includeUppercase;
let includeNumbers;
let includeSymbols;
let options = true;

let allowedChars;
let password;

let show;

const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!£$%&*@+-";

function reset(){
    
    allowedChars = "";
    password = "";
    show = document.getElementById("showPassword").style.display = "none";
    options = true;
        
}

function getOptions(){

    console.log("Options:");
    
    passwordLength = document.getElementById("passwordLength").value;
        console.log(`Password length (chars): ${passwordLength.value}`);

        if(passwordLength === "" || passwordLength < 8){
            window.alert("A password must contain 8 or more characters!");
            options = false;
        }

    includeLowercase = document.getElementById("includeLowercase").checked;
        if(includeLowercase == true){
            console.log("Lowercase = Yes");
        }

        else {
            console.log("Lowercase = No");
        }

    includeUppercase = document.getElementById("includeUppercase").checked;
        if(includeUppercase == true){
            console.log("Uppercase = Yes");
        }
        
        else {
            console.log("Uppercase = No");
        }

    includeNumbers = document.getElementById("includeNumbers").checked;
        if(includeNumbers == true){
            console.log("Numbers = Yes");
        }
        
        else {
            console.log("Numbers = No");
        }

    includeSymbols = document.getElementById("includeSymbols").checked;
        if(includeSymbols == true){
            console.log("Symbol = Yes");
        }

        else {
            console.log("Symbol = No");
        }

    if(!includeLowercase && !includeUppercase && !includeNumbers && !includeSymbols){
        window.alert("You must choose 1 or more options!");
        options = false;
    }

}

function generatePassword(){
    
    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    // console.log(allowedChars);
    let length = allowedChars.length;

    for(let i = 0; i < passwordLength; i++){
        let random = Math.floor(Math.random() * length);
        password += allowedChars[random];
    }
}

function showPassword(){
    show = document.getElementById("showPassword");
    show.style.display = "block";
    show.innerHTML = `Password = ${password}`;
    console.log(`Generated Password = ${password}`);
}

document.getElementById("generatePassword").addEventListener("click", event => {
    console.clear();
    reset();
    setTimeout(() => {
        getOptions();

        if(options){
            generatePassword();
            showPassword(); 
        }
        else{
            return;
        }
    }, 0);
})