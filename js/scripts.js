//Day11

//promises replace callbacks and are superior.
//JSON -javascript object notation - not the same as javascript. written AFTER javascript to make transfer of data more seamless. evverything you see in JSON will be in an object. when you make transfers of data back and forth between server and app. 
// JSON.parse //converts raw JSON data to data we can deal with
// JSON.stringify
/*
let myObject = {
  name: "Ryeker",
  age: NaN
};

myObject = JSON.stringify(myObject);

console.log(myObject);

//promise - way to send and receive information asynchronously. 3 states: 1- pending; 2-resovled and 3- rejected. Promise will return a promise. 
const weCool = false;
const myPromise = new Promise( (resolve, reject) => {
  if (weCool) resolve('We are in fact, cool.')
  else if (!weCool) reject('Sorry, we ain\'t cool...')
} );

myPromise.then(result => {
  console.log(result);
}).catch(error =>{ //needed to add because changed to false so "reject" but cannot change result to reject.
    console.log(error);
});

function returnTwo() {
  return 2;
}
console.log(Promise.resolve(returnTwo));
*/

//FETCH - new to ES6
let starTrekSeries;

fetch('http://stapi.co/api/v1/rest/series/search').then(response => {
  //console.log(response);
  if(response.ok) {
    console.log('yay!');
  };
  return response.json();//to pass to the second .then

}).then(jsonResult => { //taking in reuslt from above
  console.log(jsonResult.series);
  starTrekSeries = jsonResult.series;
}).catch( (err) => { console.log(err); }); // b/c this is a promise we use "then". 
/*
fetch('http://localhost:3456', {
  method: 'POST',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json'
  },
  body: {
    number: 1135,
    favoriteColor: 'blue'
  }
}).then(response => {
    console.log(response);
});
*/

//CLOSURE = getting scope from child for parent. maintain reference in child scope and refer to that reference in an outer scope. 

//CLASSES - can think of a class and a prototype as interchangable.

