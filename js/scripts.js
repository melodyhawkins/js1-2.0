//day5-takehome
function dogAge(ageOfDogYears) {
  if(!isNaN(ageOfDogYears)){
    return ageOfDogYears * 7;
  }
  else {
    dogAge(parseInt(prompt("What is your dog's age in years?", "10")))
  }
};
alert(dogAge(parseInt(prompt("What is your dog's age in years?", "10"))));

//Takehome-day3
let userName = prompt("What is your name?");
let favColor = prompt("What is your favorite color?", "red, orange, yellow, green, blue, pink, purple, black, white, or grey");
switch(favColor.toLowerCase()){
  case 'pink':
    alert(`Hi ${userName}, ${favColor} is fabulous!`);
    break;
  case 'red':
    alert(`Hi ${userName}, ${favColor} is too bright for you.`);
    break;
  case 'orange':
    alert(`Hi ${userName}, ${favColor} makes you look like a pumpkin.`);
    break;
  case 'yellow':
    alert(`Hi ${userName}, ${favColor} makes you shine.`);
    break;
  case 'green':
    alert(`Hi ${userName}, ${favColor} is the color of money.`);
    break;
  case 'blue':
    alert(`Hi ${userName}, ${favColor} is calming.`);
    break;
  case 'purple':
    alert(`Hi ${userName}, ${favColor} is the color of my favorite dress.`);
    break;
  case 'black':
    alert(`Hi ${userName}, ${favColor} is a striking color.`);
    break;
  case 'white':
    alert(`Hi ${userName}, ${favColor} is the color of my favorite dress shirt.`);
    break;
  case 'grey':
    alert(`Hi ${userName}, ${favColor} is the new neutral.`);
    break;
  default:
    alert(`Ummm ${userName}, you did not enter a valid color. Please try again.`);
    break;
}

//Takehome-Day2
let firstName = prompt("What is your first name?");
console.log(firstName);
let lastName = prompt("What is your last name?");
alert(lastName);
let birthday = prompt("What is your birthday?", new Date('10/6/1976'));
confirm(`Is ${birthday} your birthday?`);
alert(birthday);

