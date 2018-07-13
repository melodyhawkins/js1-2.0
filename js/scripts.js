//Day4 - InClass

//Takehome-day4
/*
let userName = ("What is your name?");
let favColor = ("What is your favorite color? ....")

if(userName && name.length > 4) {
  switch (favColor) {
    case 'blue':
      alert(`Hi ${userName}, ${favColor} is the best color!!!`)
      break;
      //....
    default:
      alert(`You did not give me a valid color!!`)

  } else{
    alert('You suck!');
  }
}
*/

//ARRAYS
/*
Is an array type object that is used like lists of data. It is the most fundamental form of a list of things, like a bucket, to put any other data type into.
*/
let myArray = []; // most basic form of an array
let favoriteFoods = ["pizza", "hamburgers", "french fries"];

/*
Rules of Arrays
1. have to have valid data types
2. separated by commas
3. identified by square brackets
4. have access to methods
5. 0 indexed - the first value of any member of an array is 0.
length of an array is how many values are in an array

*/

let allTheThings = ["string", 23 ["stuff"], {}, false];
console.log(favoriteFoods[1]); // prints "hamburgers"
// alert(favoriteFoods.length);

//Try it out #1

let myFavArray = ["The Post", 21, true, 1994,];
console.log(myFavArray, myFavArray.length);

//check if this is an array
console.log(Array.isArray(myFavArray), typeof myFavArray);

//PUSH - add elements to the end of an array
myFavArray.push("Ben Affleck");
console.log(myFavArray);

//UNSHIFT - add elements to the beginning of an array
myFavArray.unshift("parents");
console.log(myFavArray);

//POP - removes the last thing from the end of an array
let lastMember = myFavArray.pop();
console.log(lastMember);

//SHIFT - removes first element in an array
myFavArray.shift();

//SPLICE - take something off the original array and give you something back if you want it to.
//let removed = myFavArray.splice(2); //1 argument: beginning with that index, removes all indices after.
//console.log(myFavArray, removed);
//console.log(myFavArray, 'BEFORE');
//myFavArray.splice(1, 2); //2 arguments - starts at index 1 and removes 2 things (count) (including index 1 so, 21 and true will be removed)
//console.log(myFavArray, 'AFTER');

/*
console.log(myFavArray, 'BEFORE');
myFavArray.splice(3, 1, ["I got added"]);//3 arguments - start at index 3, remove 1 thing, and then add an array.
console.log(myFavArray, 'AFTER');

console.log(myFavArray, 'BEFORE');
myFavArray.splice(-2, 1, ["I got added"]);//3 arguments - start at end of array, count back 2, remove 1 thing, and then add an array.
console.log(myFavArray, 'AFTER');
*/

//SLICE - does not alter the original array but generates a new thing and gives it to you.
let copy = myFavArray.slice(1, 4);// first argument is an index and you make a copy up until the the second argument which is an index.
console.log(copy, myFavArray);

let removeIndex = myFavArray.indexOf(21); // returns the index of 21 in myFavArray
console.log(removeIndex);
myFavArray.splice(removeIndex, 1);

//REVERSE
let myNums = [1, 2, 3, 4, 5];
console.log(myNums.reverse());

//SORT - will come back to this when we get to functions.
console.log(myFavArray);
myFavArray.sort();
console.log(myFavArray);

//NESTED ARRAYS aka MULTIDIMENTIONAL ARRAYS

//Accessing by index:
let multiDimentional = [['hello', 1], ['goodbye', 0]];

console.log(multiDimentional[0][0], multiDimentional[1][0]);

//Try it out #2
let favMovies = [];
let fav1 = ['Gone with the Wind', 'Vivien Leigh'];
let fav2 = ['My Cousin Vinny', 'Maresia Tomei'];
let fav3 = ['Any Given Sunday', 'Cameron Diaz'];
let fav4 = ['Girls Just Want to Have Fun', 'Sarah Jessica Parker'];
let fav5 = ['Two Weeks Notice', 'Sandra Bullock'];

favMovies.push(fav1, fav2, fav3, fav4, fav5);
console.log(favMovies);

let titles = [];
titles.push(favMovies[0][0], favMovies[1][0], favMovies[2][0], favMovies[3][0], favMovies[4][0]);
alert(titles);

let favAndLeast = [];
favAndLeast.push(favMovies[0], favMovies[4]);
console.log(favAndLeast);

alert(favMovies.length);
