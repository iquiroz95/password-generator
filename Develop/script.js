// A
//creating a reference to a "generate button" in HTML with variable name generateBtn
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Button Clicked")
}
// Write password to the #password input
// function called "writePassword"
function writePassword() {
  // creates variable "password" with function caled "generatepassword"
  var password = generatePassword();
  // creates variable "passwordText" with function grabbing "id=password" in html
  var PasswordText = document.querySelector("#password");
  // setting calue to password
  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click" , writePassword);
//Phase 1-creating variable and getting the info we need
//what do we need to do?

// must prompt use for length of word (8-128) (use prompt)
//Confirm user for upper/lower/ case (yes no? USE CONFIRM)
//Confirm user is theyd like to use special characters
//confirm user if theyd like to use numbers
//if they said yes to numbers, add the numbers to availableChars
//create a pooool of available characters
//all are yes/no except for length
//THINK about edge cases for bad length inputs**
//if user types in 6 characters-- tell them what they did wrong/terminate function/restart
//if length is less that 8" tell them it was too small
//if length is more than 128" tell them too big
//if no length indicated and non numerical" tell them incorrect entry
// if user says no to eveery type of character/ tell them to select at least 1 type of character/restart

//Phase 2
//what values do we need to track?
//Create password variable that is an EMPTY STRING
//Create a for loop that runs length number of times based on user's input
// in for loop we need to generate a single random character and uppend this character to  our password
//FOR LOOP STEPS
//Create a random number between 0-length of avaiable pool characters array
//Select 1 element from array of availableChars at index random number we generate
//var newChar = availableChars[randomNum]
//Append this new element to password variable
//RETURN password we just created