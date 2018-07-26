//Day 7 takehome
/*
const body = document.querySelector("body");
const script = document.querySelector("script");
let header = document.createElement("header");
let main = document.createElement("main");
let footer = document.createElement("footer");
//NAV
let nav = document.createElement("ul");

/*
creates an li for the DOM.
Expects a list of classes (array) and a string of text content.
Returns newElement appended to Nav
*/
/*
function createLi(classes, linkText) {
  let newLink = document.createElement("li");
  let aTag = document.createElement("a");
  aTag.setAttribute("href", "#");
  aTag.textConent = linkText;
  newLink.appendChild(aTag);
  for(let i = 0, i < classArray.length; i++) {
    newLink.classList.add(classArray[i]);
  };
   nav.appendChild(newLink);
};
createLi(["pull-left"], ["active"], ["HOME"]);
createLi(["pull-right"], ["CONTACT"]);
createLi(["pull-right"], ["ABOUT"]);

header.appendChild(nav);
body.insertBefore(Header, script);

letBodyDiv = document.createElement("div");
bodyDiv.classList.add("col-sm-6", "col-sm-offset-3", "text-center");
function createTextElement(elementType, text) {
  let newElement = document.createElement(elementType);
  newElement.textContent = text;
  return newElement;
};
let h1 = createTextElement("h1", "Hello World!");
let pTag = createTextElement("p", "Lorem" );
pTag.className = "text-justify";
bodyDiv.appendChild(h1);
bodyDiv.appendChild(pTag);
body.insertBefore(bodyDiv, script);
*/

//FIZZBUZZ
let body = document.querySelector("body");
let script = document.querySelector("script");

for(let i = 1; i <= 100; i++) {
  let newP =document.createElement('p');
  if(i % 3 === 0 && i % 5 === 0 ) {
    newP.textContent ="FizzBuzz";
  } else if (i % 3 === 0) {
    newP.textContent = "Fizz";
  } else if(i % 5 === 0) {
    newP.textContent = "Buzz";
  } else {
    newP.textContent = i;
  }
  body.insertBefore(newP, script);
}

//Take Home
/*
Write a program that does the following:

1. When the user clicks a button, prompt them for the a title.
2. Put that title into an h1 that is centered on the page.
3. Ask the user to write a few sentences about what they did today.
4. Populate a p tag with the sentences, align the p tag text with justify.
5. Finally, ask the user for his or her favorite color, and set the background of the p tag to that color
6. Remember, check for edge cases with color.
*/

//FORMS
let loginForm = document.forms.login; //b/c we used name notation we can call it by .notation.
let emailInput = loginForm.email;

//? = after this = query parameter - asking the backend, given this data, give me back something I expect. 
//& = separates the parameters
//GET request = way to interact with a server - submit a request and expect a response. the assumption is that you are not actually sending parameters, you are just going to hit a specific URL and it will send you something. Ex. www.google.com. 
//POST request= way to interact with a server - expects parameters, expects you to ask for something specific and to return something specific to you. Ex. logging into a website. 

/*
Today we begin the final project in earnest. As such, I won't be going over take homes anymore, they will all pertain directly to your final

Create a new repository for your ToDo App if you have not already on GitHub and add me as a contributor.
Begin coding your HTML and CSS
At a minumum your HTML should contain:
1. Two h1 tags with the titles of your lists ('todo' and 'done').
2. An input for entering ToDo Items with a submit button.
3. Two empty uls to hold the ToDo Items and the Done Items.
Your JS should be able to:
1. Access the input's value and the uls using DOM methods and store them in variables.
2. When the submit button is clicked get the user input and add it to an array.
3. Use whatever visual framework (or plain CSS styling) you like to make your page look good. Treat this like a product that you are building for a client. How would they want it to look and function?
Remember, this is the basic setup, or just the beginning.
*/