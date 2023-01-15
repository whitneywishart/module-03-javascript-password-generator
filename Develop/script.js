//Password length variables
var passwordLength = 8;
var choiceArray = [];//Set initial choice array to empty


//Password choice array variables
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialArray = [" ", "!", "\"", "#", "$", "%", "&", "'", "\(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];


//Generate button variable tied to html generate ID
var generateBtn = document.querySelector("#generate");


//Add event listener to generate button. When button is clicked, perform the writePassword function
generateBtn.addEventListener("click", writePassword);


//writePassword function. Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts(); //Return true or false
  var passwordText = document.querySelector("#password");


  //If correct prompts are true, proceed to password generation
  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}


function generatePassword() {
  //Generate password based on prompts input
  var password = ""; //Set initial password to a blank string


  //Iterate through up to chosen character length
  for (var i = 0; i < passwordLength; i++) {


    //Choose a random length
    var randomIndex = Math.floor(Math.random() * choiceArray.length);


    //Concat choice result with random char
    password = password + choiceArray[randomIndex];
  }
  return password;
}


//Generate password based on prompts
function getPrompts() {
  //Reset choice array to empty after input
  choiceArray = [];


  //Ask for length and turn answer into a number (instead of a string)
  passwordLength = parseInt(prompt("How many characters should your password contain? Please choose from 8-128 characters."));


  //Ensure a numeral is entered and is between 8 and 128 characters
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) { //Should all return false
    alert("Please enter a numerical value from 8 to 128.");
    return false;
  }


  //If lower case letters are chosen
  if (confirm("Should your password contain lower case letters?") == true) {
    alert("Your password will contain lower case letters. Click Ok to continue.");
    choiceArray = choiceArray.concat(lowerCaseArray);
  } else {
    alert("Your password will NOT contain lower case letters. Click Ok to continue.");
  }


  //If upper case letters are chosen
  if (confirm("Should your password contain upper case letters?") == true) {
    alert("Your password will contain upper case letters. Click Ok to continue.");
    choiceArray = choiceArray.concat(upperCaseArray);
  } else {
    alert("Your password will NOT contain upper case letters. Click Ok to continue.");
  }


  //If numerical chars are chosen
  if (confirm("Should your password contain numbers?") == true) {
    alert("Your password will contain numbers. Click Ok to continue.");
    choiceArray = choiceArray.concat(numberArray);
  } else {
    alert("Your password will NOT contain numbers. Click Ok to continue.");
  }


  //If special chars are chosen
  if (confirm("Should your password contain special characters?") == true) {
    alert("Your password will contain special characters. Click Ok to continue.");
    choiceArray = choiceArray.concat(specialArray);
  } else {
    alert("Your password will NOT contain special characters. Click Ok to continue.");
  }


  //Validate that at least one type of character has been selected 
  if (choiceArray.length == 0) {
    confirm("Please choose at least one character type to generate your password.");
  } else {
    return true;
  }
}
