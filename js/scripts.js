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

const body = document.querySelector("body");
const div = document.querySelector("div");
const button = document.querySelector("button");

let title = document.getElementById("title");

title.addEventListener('click', (e) => {
    prompt("please give me a title");
  });

const newH1 = document.createElement("h1");
newH1.textContent = "Hello World!";
newH1.className = "text-center";
div.appendChild(newH1);


let today = prompt("what did you do today?");

const newP = document.createElement("p");
newP.textContent = "I went to a friend's house to pick up a bowl. I went to Macy's but decided to leave. I went home and read a book."
newP.className = "text-justify";
div.appendChild(newP);


let color = prompt("what is your favorite color?");
document.querySelector("p").style.background = "hotpink";  