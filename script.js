///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//
// * For this assignment, you will not be changing the HTML and CSS at all.
//
// * You will need a generatePassword function is called when the user
//   clicks the Generate Password button.
//
// * You can create other functions that are called from within
//   generatePassword
//
// * Gather user input with prompt's and confirm's

///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
//

var generateBtn = document.querySelector("#generate");

 //my code here

var length = Number(prompt("How many characters should your password be?"));
while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be between 8-128 characters"));

var upper = confirm("Would you like to include uppercase letters?");
var lower = confirm("Would you like to include lowercase letters?");
var numeric = confirm("Would you like to include numbers?");
var special = confirm("Would you like to include special characters?");

while (!upper && !lower && !numeric && !special) {
    alert("Must select at least one character type");
    upper = confirm("Would you like to include uppercase letters?");
    lower = confirm("Would you like to include lowercase letters?");
    numeric = confirm("Would you like to include numbers?");
    special = confirm("Would you like to include special characters?");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var numeric = "1234567890";
  var specialpassword = "!@#$%^&*();?/+[]{}<>";

  var length = document.getElementById("length");
  var upper = document.getElementById("upper");
  var lower = document.getElementById("lower");
  var numeric = document.getElementById("numeric");
  var special = document.getElementById("special");

  var passwordText = document.querySelector("#password");

  passwordText.value = password;


};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

    var length = length;
    if (upper = true) length += upper = "";
    if (lower = true) length += lower = "";
    if (numeric = true) length += numeric = "";
    if (special = true) length += special = "";


;

//////////////////////////////////////////////////////////////////////

