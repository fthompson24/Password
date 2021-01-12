// Assignment code here
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "1234567890";
let symbols = "!@#$%^&*_-+=:;><.,/?";

//Prompts for passoword criteria
function generatePassword () {
  let passwordString="";
  alert("Please set the criteria for your passoword.");
  let setUpperCase=confirm("Include ~UPPERCASE~ letters?");
  let setLowerCase=confirm("Include ~lowercase~ letter?");
  let setNumbers=confirm("Include numbers?");
  let useSymbols=confirm("Include special character? Eg '!#%^' ");
}

//Prompt for passowrd length
let passLength = Number(prompt("How many characters will your passoword be? Enter a number betweem 8-128."));
while(passLength < 8 || passLength > 128) {
  alert("Sorry, your password must be betwen 8-128 characters.");
  passLength = Number(prompt("How many characters will your passoword be? Enter a number betweem 8-128."));
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
