/*
Day 2 - In class
Data Types
In all scripting languages - essential - how you tell the progam what you are writing.
Do not worry about Symbol - introduced with ES6.
String - any collection of characters, numbers, etc., in quotes.
Number - any number.
Boolean - true or false; 1 or 0; truthy or falsy; how JS controls whether or not you want something to happen. Think of as control gates.
Undefined - means that there is a space in memory for this thing, there is just no definition for it. You can define and declare a variable. It is not an error.
Null - completely different from undefined. does not exist. absence of value. not an error either.
*/

var myString = "Hello World!*76";
console.log(typeof myString);

var myNumber = 43;
console.log(typeof myNumber);

// var newVariable; // declared but undefined
//console.log(newVariable); // undefined

var isLoggedIn = true;// Boolean
console.log(typeof isLoggedIn)

isLoggedIn = null; // Null

/*
JS is loosely typed - it assumes things for you.
Final Project
Most common use is a checkbox
Edgecasing - prompt(are you sure?) when they click on delete
Everything in JS is an object except primitive values in their primitive form:
var number = 43; //primitive value
var myOtherNumber = new Number(43); //object value
*/
var number = 43; //primitive value
var myOtherNumber = new Number(43); //object value
console.log(number, myOtherNumber);

//string interpoloation

console.log("Hey there, " + myString + " how are you?") //ES5
console.log(`Hey there, ${myString} how are you?`); //ES6

//BLOCKS OF CODE
/*
Anywhere there are curly brackets. Inside the curly brackets is scope. Values can be changed inside those blocks of code. Curly bracket sets inherit from those above them.
var dozen = 12;
{
  dozen = 13;
}
*/

//Three Types of Variables in JS
/*
Not to be confused with data types = way to describe variables = string
JS is used by the browser to perform all of its calculations; it is its operating system.

HOISTING: JS looks for every var and takes them and moves to the top as variable declarations (before defined).
*/
/*
console.log(newVariable, 'BEFORE');
var newVariable = 'I am the best variable';
console.log(newVariable, 'AFTER');

{
 newVariable = "I am the worst....";
}

console.log(newVariable, 'OUTSIDE THE SCOPE');
*/

/*
Var variables are global = will change everywhere. Including in the scope. So, this is why "let" was created.
*/

//LET Variables - does not hoist; they are scoped - they are bound within their scope; can change the value but cannot redeclare it.

let newVariable = 'I am the best variable';
console.log(newVariable, 'AFTER');

{
  let newVariable = "I am the worst....";
  console.log(newVariable, 'INSIDE the scope');
}

console.log(newVariable, 'OUTSIDE THE SCOPE');

// let newVariable; //declaration
newVariable = "my dog is ugly"; //definition - redefining from line 79 declaration and definition.
console.log(newVariable, 'Outside the scope');

//CONST variables - Rule 1: not hoisted; Rule 2: must declare and define in the same line. See const most often in module imports. Rule 3: cannot redeclare or redefine. Idea behind it is that you don't want to change the value. You can add stuff to it, but for the most part you want to leave it alone.

const age = 32;
{
  const age = 33;
  console.log(age);
}
console.log(age);

//DATE
let today = new Date();
let myBirthday = new Date('10/6/1976');
console.log(myBirthday);

//MATH
let bestNumber = 42.7;

Math.floor(bestNumber);
console.log(Math.floor(bestNumber));
console.log(Math.ceil(bestNumber));

let classRoom = 'Room 1'; //primitive string
let objectClassRoom = new String('Room 1'); //string object
console.log(typeof classRoom);
console.log(typeof objectClassRoom);
console.log(classRoom.length); // referring to a primitive value (classRoom) as its object counterpart - JS does it for you ONLY on the line where you are checking something. JS knows that ".length" only works on objects so it assumes that you are wanting classRoom to be an object.

//ALERT - one way communication from developer to user
alert("Hey there, user? Pick a path...");

//CONFIRM - will return a value for you. the user will say yes or no
const isReady = confirm("are you ready to party?");
alert(isReady);

//PROMPT - more interaction with user than confirm.
let userName = prompt("what's your name?", "John");
console.log(userName);

//FUNCTION = expect to feed it value and return you something else. Call a function and it returns a value.
