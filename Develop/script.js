// Assignment code here
let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];
let lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let numbers = ["1","2","3","4","5","6","7","8","9","0"];
let symbols = ["!","@","#","$","%","^","&","*","(",")","{","}","|","[","]",";","'",":","<",">","?","/"];
let passCriteria = [];

//Prompts for passoword criteria
function generatePassword () {
  let pass="";
  alert("Please set the criteria for your passoword.");
  let setUpperCase=confirm("Include ~UPPERCASE~ letters?");
  let setLowerCase=confirm("Include ~lowercase~ letter?");
  let setNumbers=confirm("Include numbers?");
  let setSymbols=confirm("Include special character? Eg '!#%^' ");

  //added selected characters to password array
  if (setUpperCase===true){
    passCriteria.push(upperCase);
  }
  if (setLowerCase===true){
    passCriteria.push(lowerCase);
  }
  if (setNumbers===true) {
    passCriteria.push(numbers);
  }
  if (setSymbols===true) {
    passCriteria.push(symbols)
  }


  //Prompt for passowrd length
  let passLength =parseInt(prompt("How many characters will your passoword be? Enter a number betweem 8-128."));
  while(passLength < 8 || passLength > 128) {
    alert("Sorry, your password must be betwen 8-128 characters.");
    passLength = Number(prompt("How many characters will your passoword be? Enter a number betweem 8-128."));
  }

  //
  for(let i=0;i<passLength;i++){

    let randomCharSet       //variable that store random number based on length of passCriteria[]
    let selectedCharSet     //variable that stores selected pass criteria
    let randomCharNumber    //variable that stores random number based on length of pass crit.
    let randomPassword
     
    randomCharSet = parseInt(Math.floor(Math.random()*passCriteria.length));

    selectedCharSet = passCriteria[randomCharSet];

    randomCharNumber = Math.floor(Math.random()*selectedCharSet.length);

    randomPassword = selectedCharSet[randomCharNumber];

    //add to password string
    pass+=randomPassword
  }
  console.log("Password --- " + pass);
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
