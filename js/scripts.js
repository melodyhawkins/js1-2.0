//Day6 In class

//The DOM
/*
The DOM is where the HTML/CSS, XML, JS and JSON(format the data is going to come back in) meet to give you the screen that you are looking at on your computer.
API - server set up open to the public - enter a certain type of request get a specific type of response. ex. document.all and window.alert("hello world!") in the console of the website we clicked on from today's lesson.
Make a request and get a response.
elements = dom nodes in js.
alert is a method.
*/

//QUERYING THE DOM - OLDER - methods - WILL RETURN AN ARRAY
//.getElementsByTagName()
/*
the way we refer to the DOM in JS is the keyword "document"
will always pass in a string
to find a specific class you would use a loop to loop through an array.
*/
// let body = document.getElementsByTagName("body"); //save result by declaring a variable
// console.log(body[0]);

//.getElemenetsByClassName
let header = document.getElementsByClassName("heading");
console.log(header);

//.getElementById - faster than .querySelector
const paragraph = document.getElementById("paragraph1");
console.log(paragraph);

//.querySelector
/*
let div = document.querySelector("div");//can look for a tag, class or id. Will only return the first one, in this instance, "div".

let div = document.querySelector("#beth_is_the_worst");

//.querySelectorAll - will return all of the tags, classes, or ids.
let divs = document.querySelectorAll(".jr-is-the-best");
*/
//EVENT LISTENERS
/*for interacting with your user. anything your user does on a page, that is what is known as an "event". ex. clicking on the screen/mouse; hovering over a button, etc.
1. know what event you are listening for;
2. listening to a hover event;
3. what to do.
*/

let div = document.querySelector("#beth_is_the_worst");
//everytime someone hovers over div want the background color to change to purple:


div.addEventListener(
  "mouseover",
  ev => { //ES6 way to write callback function
      div.style.backgroundColor = "indigo";
console.log(ev);
  }
);


/*
//ES5 way to write a callback function
div.addEventListener("mouseover", function(ev) {
  div.style.backgroundColor = "#e40007";
} ) //method that takes two arguments: 1. string name of the event you are listening for. 2. the function that you want to run once #1 comes true = callback function.
*/

//Keyboard Event - only work when listening to an input, textarea, form, something user is typing into.

//Takehome - Day6 - write a program that converts temperatures.

/*
Write a program that converts temperatures. It should:

1. Ask your user to give you a scale (Celcius or Fahrenheit) and the tempurature they want to convert. So if they give you 90 Fahrenheit, they would want you to convert 90 degrees Fahrenheit to whatever that is in Celcius
2. Employ a function that accepts those two values as arguments: temperature and scale (either celcius or fahrenheit) and converts the tempurature they gave you to the opposite scale.
3. Display the temperature in an h3 with minimal styling.
4. From that point on, when the user clicks on the h3, run the function to convert the temperature back and forth between Celcius and Fahrenheit.
5. Display the converted temperature in the h3 each time it is changed.
*/
const body = document.querySelector('body');
const h3 = document.createElement('h3');
body.appendChild(h3);

let scale = prompt ('please enter a scale, celcius or fahrenheit, that you want me to convert.')
let temp = prompt('please enter a temperature you want me to convert.', '32, 100');

// console.log(enterTemp);
// alert(`the temp is ${enterTemp}`);

function convertTemp(scale, temp){
  scale = scale.toLowerCase();
    let newTemp;
    let oppositeTemp = scale === 'celcius' ? 'Fahrenheit' : 'Celcius';
  temp = parseInt(temp);
  if(!isNaN(temp)) {
    newTemp = scale === 'celcius' ? (1.8 * temp) + 32 : (5 / 9) * (temp - 32);
} else {
   scale = prompt("What scale (C or F) do you want to use?", "F or C");
   temp = prompt("How hot is it?", "99");
   convertTemp(scale, temp);
 }
};

convertTemp(scale, temp);

h3.innerText = `Your temperature is ${newTemp}, ${oppositeTemp}`;

h3.addEventListener('click', (e) => {
  let valueArr = e.target.innerText.split(' ');
  scale = valueArr[valueArr.length - 1] === 'Celcius' ? 'C' : 'F';
  temp = valueArr[valueArr.length - 2];
  convertTemp(scale, temp);
});

/*
const body = document.querySelector('body');
const h3 = document.createElement('h3');
body.appendChild(h3);

let scale = prompt ('please enter a scale, celcius or fahrenheit, that you want me to convert.')

  const tempToF = (celcius) => {
    let fahrenheit;
    fahrenheit = celcius  * 1.8 + 32;
    console.log(fahrenheit);
    h3.textContent = fahrenheit;
  };

  tempToF(enterTemp);

  const tempToC = (fahrenheit) => {
    let celcius;
    celcius = fahrenheit  * 5 / 9 - 32;
    console.log(celcius);
    h3.textContent = celcius;
  };

  tempToC(enterTemp);

h3.addEventListener(
  "click",
  ev => {
    tempToF(enterTemp);
  }
);
*/
/*
switch (enterTemp) {
  case "celcius":
    prompt("What temperature do you want me to convert to fahrenheit?")
    break;
  case "fahrenheit":
    prompt("What temperature do you want me to convert to celcius?")
  default:
    alert("you did not enter a valid number.")

};
*/
//************************************************//
//Day 7 - In-Class
