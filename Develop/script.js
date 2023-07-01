// A
//creating a reference to a "generate button" in HTML with variable name generateBtn
var userWantsUppercase = confirm("Do you want uppercase characters?");
var userWantsLowercase = confirm("Do you want lower case characters?");
var userWantsSpecialChars = confirm("Do you want special characters?");
var userNumbers = confirm("Do you want numbers?");
var userLength = prompt("How many characters?");

while(userLength > 128)
{
  alert("Exceeded maximum characters");
  userLength = prompt("How many characters?");
}

var generateBtn = document.querySelector("#generate");
// Write password to the #password input
// function called "writePassword"
// creates variable "password" with function caled "generatepassword"

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var specialChars = ["!", "@", "*", "%", "#", "&"];

function generatePassword() {
  var usableCharacters = [];
  if (userWantsUppercase)
  {
    usableCharacters = usableCharacters.concat(upperCase);
    console.log(usableCharacters);
  }
  if (userWantsLowercase)
  {
    usableCharacters = usableCharacters.concat(lowerCase);
    console.log(usableCharacters);
  }
  if (userWantsSpecialChars)
  {
    usableCharacters = usableCharacters.concat(specialChars);
    console.log(usableCharacters);
  }
  if (userNumbers)
  {
    usableCharacters = usableCharacters.concat(numbers);
    console.log(usableCharacters);
  }

  function getRandomNumber(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  var password = "";
  for (var currentIndex = 0; currentIndex < userLength; currentIndex++)
  {
    var randomIndex = getRandomNumber(usableCharacters.length - 1);
    var randomCharacter = usableCharacters[randomIndex];
    password = password.concat(randomCharacter); 
  }

  document.getElementById("password").value = password;
  return password;
}

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