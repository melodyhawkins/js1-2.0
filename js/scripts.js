//FUNCTIONS

//Anonymous function - cannot refer to itself. Only runs once. Normally use in a callback. Good for the asynchronus nature of JS. plug in at a point where you know JS will call it itself.

// Function Defintion - nothing will happen until we invoke the function.
/*
function (string) { //inside the () is where your ARGUMENTS/PARAMETERS go.
  return string.toUpperCase(); // Data transformation and return. As soon as JS sees the return statement it will complete that line of code and stop.
  console.log(string);
}; // End of function
*/

//Named Function - can run multiple times.
//Function Defintion
function addTwo(numberIWantToChange) {
  return numberIWantToChange += 2;
};
//Call the FUNCTION
console.log(addTwo(22)); //Call site. Define what num is.

let myNewNumber = addTwo(34);
console.log(addTwo(34));

/***********************************************************************/

function logMyString(string) {
  console.log(string);
};
logMyString('JR is the best EVAAAR!!!!!!');

function alertsAd() {
  alert('Hey, we have a sale on Garthoks');
};
alertsAd();
//the functions that return a value are assignable, those that do not will run the value and be done.?????? JS is asynchronus because it runs code out of order sometimes. Only certain types of functions get hoisted.

//Two types of Named Functions: Function declaration = get hoisted = if you call before defined, JS has already read them in and will run it  || and a function expression = where you assign a variable to an Anonymous function = does not get hoisted, even if you assigned a var variable.

//FUNCTION DECLARATION (IS HOISTED)

function alertsAd() {
  alert('Hey, we have a sale on Garthoks!');
};

//FUNCTION EXPRESSION (NOT HOISTED)
let confirmStuff = function(someString) {
  let newVariable = "cheese";
  confirm(someString);
};
// console.log(newVariable); // throws error of undefined newVariable.
// confirmStuff("Do you want to watch Frozen?");

//RECURSION
let i = 0;
function iCallMyself(){
  console.log(i);
  i++;
  if(i < 10) iCallMyself();
};
iCallMyself();

//FAT ARROW FUNCTIONS - new/better way to write Anonymous functions

//BASIC IMPLEMENTATION
(logFunction, alertFunction) => { //No function keyword
  logFunction('hello world');
  alertFunction('Goodbye friends!');
};

//ONLY 1 ARGUMENT - () are optional
string => {
  console.log(string);
};

//function expression - ONLY time fat arrow function can be named

let logString = string => {
  console.log(string);
};

// logString("Hello cats!");

//IMPLICIT RETURN
string => (string.toUpperCase()); //ANYTHING IN THE () SHOULD BE IMMEDIATELY RETURNED. ONLY WORKS IF HAVING ONE THING TO RETURN.
string => string.toUpperCase(); // also correct

//Day5 Try it out = takehome.

//Day 5 Continued....
//METHOD V. FUNCTION 
//all methods are functions. not all functions are methods.
//the method is connected to the objec. dx. console.log(); string.toUpperCase
