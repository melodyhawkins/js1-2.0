// More DOM Manipulation

// .textContent — Returns text inside of the element, including the children.

const div = document.querySelector(".myDiv");
const trekkies = "https://nerdist.com/wp-content/uploads/2016/08/enterprise-tos.jpg";
let image = document.querySelector("img");
// console.log(div.textContent); // Do not see the actual tags, just the text content.

// div.textContent = "Say cheese and die!!!"; // change the text inside of the element.

// innerHTML – Returns all content of the element, including the comments, has to parse the HTML. Can set text, but can add HTML.

console.log(div.innerHTML); // Gives the tags as well as the text AND the comments. Has the parse the HTML to give it back as a string. Also can reset text. Do not let your user use innerHTML

// div.innerHTML = "<h1> Hey there, R.L. Stein. Did you die in the 90s? </h1>";

// .createElement — Generate any valid HTML tag, can optionally pass a second argument to this method to give it content

let newH1 = document.createElement("h1");
newH1.textContent = "I am the greatest... I...I...I"; // Will not populate the DOM, you need to call it .
// newH1.id = "red_bg"; // Set an ID explicitly, if it already has an ID, it will wipe out the ID it currently has.
div.appendChild(newH1); // Inject the child (content) to the parent (What object you call) always comes at the end.

// .append – Experimental, do not use. Same as append child, can take array, multiple elements, etc.

// .insertBefore – Out of order insertion! 2 arguments — The new node you're inserting and the child node that you're inserting it before. Must be referenced using a parent node to start one.

let newH2 = document.createElement("h2"); // Create the new element
newH2.textContent = "I am before the H1!!!!";  // Add content to the element
newH2.className = "blue-bg"; // Add a class
newH2.className = "white-text"; // The 2nd one will replace the previous one, can get around it with += but you can just use classList.
div.insertBefore(newH2, newH1); // Insert the newH2 before the newH1.

// Adding attributes to any elements — dot notation
// element/variable . id/className/classList

// classList – Has multiple different values you can feed it, the value you give it is the method, not classList, which is another object.

let newP = document.createElement("p"); // Create a new element
newP.textContent = "I am a squirrel." // Add context to element
newP.classList.add("purple-text", "green-bg"); // Add multiple classes
div.appendChild(newP); // Add to the DOM

let span = document.querySelector("span");
span.addEventListener("mouseenter", (e) => {
  span.classList.remove("white-text"); // to remove
});

span.addEventListener("click", (e) => {
  span.classList.toggle("giant-text"); // Turn the class off and on
  span.classList.contains("green-bg") ? span.classList.replace("green-bg", "blue-bg") // Boolean of whether or not the class exist
  :
  span.classList.replace("blue-bg", "green-bg"); // replace the first argument with the 2nd argument
});

// .setAttribute – Add/remove/change HTML attribute

image.addEventListener("click", (e) => {
  image.setAttribute("src", trekkies);
})