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

var newVariable; // declared but undefined
console.log(newVariable); // undefined

var isLoggedIn = true;// Boolean
console.log(typeof isLoggedIn)

isLoggedIn = null; // Null

/*
JS is loosely typed - it assumes things for you.
*/
