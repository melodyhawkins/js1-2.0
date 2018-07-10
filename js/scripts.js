//Day 3 Inclass
/*
LOGICAL OPERATORS
How you can tell if two things are true, if one thing or the other is true, or if one thing is not true. How you tell your program to think. Essential building blocks in JS.
*/
//Logical and (&&) - checking if both are true
let bestNumber = true;
let isTrue = false;

console.log(bestNumber || isTrue); //if bestNumber is true & if isTrue is is true - whether both come back truthy. isTrue is false, so the whole thing is false. With the logical && operator you are basically reducing it to a boolean. JS will continue evaluating the whole statement until it evaluates every single thing/condition until one comes back false.

//logical or || - checking if one or the other is true. If one is true, it will come back as true. As soon as JS sees a true statment it will stop running/executing.

//Logical not (!) -
console.log(!isTrue); //basically reverses whatever isTrue is (currently false).
console.log(!bestNumber); // will be false.

/*
TRUTHY AND FALSY
A truthy value is a value that is considered true when evaluated in a Boolean context. All values are truthy unless they are defined as falsy (i.e., except for false, 0[only number that comes back false], "", '', null, undefined, and NaN)
Bookmark the pages linked by Ryeker.
JS has to have a true or false value assigned to everything, which is why numbers, except for 0 are true.
*/

/*
COMPARISON OPERATORS
*/
let num = 11;
let string = '11';
console.log(num == string); //loose equality - only checking if value is the same, NOT type. As long as value is the same, will come back as true. NOT used as often.
console.log(num === string); //strict equality - checking if BOTH value and type are the same. Typically want to use strict equality b/c you generally want to check if both the value and type are the same.
//loose not equal (!=) - only checking if values are not equal to eachother.
//strictly not equal (!==) - checking if values AND types are not equal to eachother

//Try it Out #1
let oldString = '10' //primitive
let newString = new String(10) //object
console.log(oldString === newString); //FALSE b/c different type
console.log(oldString == newString); //TRUE b/c same value

/*
MATHEMATCIAL OPERATORS

Modulus - remainder - one of most common interview questions
- need it to determine whether one number is perfectly divisible by something else.
*/
console.log (5 % 2); // returns 1 -

//INC and DEC
let start = 1;

//....after some logic
start++; //taking 1 and adding 1 to it. Only ever adds 1.
console.log(start); //2

start--;//taking 2 and subtracting 1 from it. Only ever subtracts 1.
console.log(start);

//NaN

let nonNumber = "cheese";
// console.log(parseInt(nonNumber));

console.log(!isNaN(nonNumber));// to check if something is not a number. isNaN is an object.

//parseInt - way to tell JS to attempt to turn any value into a number.

let fifty = '50';
console.log(parseInt(fifty));//returns 50 b/c string number can be parsed into a number. BUT a string number word (i.e. "fifty") cannot be parsed into a number and will return NaN.

let nonString = 50000;
//console.log(nonString.toString());//method call NOT A REASSIGNMENT

console.log(nonString += 20); // nonString = nonString + 20. This does change the value going forward.

let stringNum = "50000";
console.log(stringNum += 20); // string concatination

//Try it out #2
let num1 = parseInt(prompt('Please enter a number', '10'));
let num2 = parseInt(prompt('Please enter a second number', '10'));

/* if
if(!isNaN(num1) && !isNaN(num2)) alert(num1 + num2); //only if checking if one condition is true can you write it on one line of code.
//alert(num1 + num2);
*/

/* if else
if(!isNaN(num1) && !isNaN(num2)){
  alert(num1 + num2);
} else {
  alert('No dummie!');
}
*/

/* else if
if(!isNaN(num1) && !isNaN(num2)){
  alert(num1 + num2);
} else if (isNaN(num2)){
  num2 = parseInt(prompt('No, I said a number!!!', '10'));
  alert(num1 + num2);
} else {
  alert('No dummie!');
}
*/

//CONTROL FLOW
/*
if/else - see above
best used in cases when you have multiple variables.
*/

/*
switch statements - can only ever evaluate one condition.

let greeting = prompt("Tell me how to say hello", "Gutentaag!")

switch(greeting.toLowerCase()) { //NORMALIZING DATA
  case 'hello':
    alert(`I love saying ${greeting}!`);
    break;
  case 'wassup':
      alert(`${greeting} is SO 90s!!!!!`);
      break;
  default:
    alert(`I've never heard ${greeting} before!`);
    break;
}
*/

//TERNARY - only true or false - good for simple yes or no conditions. Not a huge block of code to run if something is true or false. Condition, QUESTIONMARK, true statement, colon, false statement, semicolon.

let money = 10;
let currency = confirm("In dollars or not?");

currency ? alert(`$${money}`) : alert(money);

//TRY IT OUT #3

let isAdult = confirm("Are you older than 18?");
if(isAdult){
  let isUnder80 = confirm("Are you under 80 years old?");
  if(isUnder80){
    let isCool = confirm("Do you like Star Wars?");
    if(!isCool);
    alert('You are so cool!');
  } else{
    let isElderly = confirm("Do you enjoy prunes?");
  }
}else{
  alert('You were shot first!!');
}
