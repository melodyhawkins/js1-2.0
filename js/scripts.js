//Day6 takehome
//1.Ask your user to give you a scale (Celcius or Fahrenheit) and the tempurature they want to convert. So if they give you 90 Fahrenheit, they would want you to convert 90 degrees Fahrenheit to whatever that is in Celcius.
const h3 = document.querySelector('#temp'); //look at my html doc and find h3 with id "temp". Chose const b/c not going to change the element h3 itself. Ok to choose let.
let scale = prompt("Please give me a scale, (C or F, that you want me to convert?", "F or C");
let temp = prompt("What is the temperature that you want me to convert?", "100");
//2. Employ a function that accepts those two values as arguments: temperature and scale (either celcius or fahrenheit) and converts the tempurature they gave you to the opposite scale.
function convertTemp(scale, temp) {
  scale = scale.toLowerCase();
  let returnVal; // b/c eventually will have to return something.
  let oppositeVal =
  scale === 'c' //if this is true set opposite value to Fahrenheit
  ?
  'Fahrenheit'
  : //if this (scale is not === 'c' ) comes back falsey then celcius.
  'Celcius'; //ternary operator
  temp = parseInt(temp);
  if(!isNaN(temp)){
    returnVal = scale === 'c' ?  (5 / 9) * (temp - 32) :
(1.8 * temp) + 32;
//3. Display the temperature in an h3 with minimal styling.
h3.innerText = `Your temperature is ${returnVal} ${oppositeVal}`;
} else {
  scale = prompt("Please give me a scale, (C or F), that you want me to convert?", "F or C");
  temp = prompt("What is the temperature that you want me to convert?", "100");
  convertTemp(scale, temp);
  }
}
convertTemp(scale, temp);
//4. & 5. From that point on, when the user clicks on the h3, run the function to convert the temperature back and forth between Celcius and Fahrenheit. Display the converted temperature in the h3 each time it is changed.
h3.addEventListener('click', (e) => {
  let valueArr = e.target.innerText.split(' '); // defining an array = h3.innerText
  scale =
  valueArr[valueArr.length - 1] === 'Celcius' ? 'C' : 'F';
  temp = valueArr[valueArr.length - 2];
  convertTemp(scale, temp); //force that function to flip the values back and forth
});
