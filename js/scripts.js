//Day 9 In Class

/*
Best practice is to use an id when using js to append to the html
*/
//PROTOYPE INHERITANCE

let sentence = new String ("Ann went walking one day.");
let number = new Number(32);
console.log(Object.getPrototypeOf(sentence));

let dude = { //most basic way to create an object
  catchPhrase: "Where's my car?", //KEY:VALUE pair which makes a PROPERTY
  firstName: "Big",
  lastName: "Lebowski",
  age: Infinity
};

//CONSTRUCTOR FUNCTIONS

function User(name, email, password, favorites, cart) { //1. capitalize first work. 2. arguments will be the properties on the object you create.
  this.name = name;
  this.email = email;
  this.password = password;
  this.favorites = favorites;
  this.cart = cart;
};//4th way to bind THIS

let cody = new User("Cody", "code-man-5000@gmail.com", 123456, [], []); // use the term "new" b/c that is what tells JS to build you a new ojbect with these properties. 
// console.log(cody);
// console.log(Object.getPrototypeOf(cody));

let ryeker = new User("Ryeker", "best_teach@truth.com", "11111", [], []);
ryeker.isAdmin=true; //dot notation
ryeker["isAdmin"] = false; // bracket notation
console.log(ryeker);

//create three inputs for the form, email, password and name. When user clicks submit, try to build a new user out of what your user types into those three inputs. 

const userForm = document.forms.userForm;

userForm.addEventListener("submit", e => {//Submit event listens to the Entire form (inputs and all)
  e.preventDefault(); //Prevent the submission of the form FIRST
  let newUser = new User(userForm.name.value, userForm.email.value, userForm.password.value, [], []);
  console.log(newUser);
});

//This will be helpful for the final project. How do you allow it to be edited. Array methods from day 4 and dom methods on 6 and 7 be able to do the edit. 








