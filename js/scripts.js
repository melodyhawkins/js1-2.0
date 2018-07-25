//Let's try it out. Clone this  repository. Open it in Atom and create this basic HTML page, using only the methods you've learned. HINT: Know that the head tag itself can be very finniky, so create that statically (in HTML) and make the rest dynamically (with JS). Use Bootstrap helper classes to shorten your workload.

const body = document.querySelector("body");
const header = document.createElement("header"); //navbar
const div = document.createElement("div");// h1, p
const footer = document.createElement("footer"); //facebook

body.appendChild(header);
header.innerHTML = "<a href='#' class='pull-left'>Home</a> <span class='pull-right'> <a href='#'>Contact</a> <a href='#'>About</a></span>";
document.querySelector('a:nth-child(2)').style.paddingLeft= "20px";
header.lastChild.style.paddingRight = "25px";


body.appendChild(div);
div.classList.add("container");
div.style.paddingTop = "40px";
div.style.height = "95vh";
div.innerHTML = "<h1 class = 'text-center'>Hello World!</h1>   <p class = 'text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, officiis? Inventore similique molestiae eos a praesentium explicabo reprehenderit, est voluptates nulla ipsum temporibus quibusdam repudiandae consequatur sint itaque aperiam perferendis consectetur, fugiat dolor! Architecto ipsum ea tenetur dolor in dicta.</p>"

body.appendChild(footer);
footer.classList.add("text-center");
footer.innerHTML = "<a href='https://www.facebook.com'>Friend us on FB</a>"
