//JS Timers
/*
let clearBtn = document.querySelector("#clearBtn");
// let myTimeout; //declared variable to store timeout in
let annoyingPopup = () => {
  alert("HEY!! Have you seen my INSANE and WACKY DISCOUNTS?");
  
};

function startTimer() {
  myTimeout = setTimeout(annoyingPopup, 5000);
};

startTimer();


function cancelTimer() {
  clearTimeout(myTimeout);
};

clearBtn.addEventListener("click", cancelTimer);

let myInterval;

function remindUser() {
  alert("Hey, balloons are on SALE!");
};

myInterval = setInterval(remindUser, 3000);

function clear() {
  clearInterval(myInterval);
};

clearBtn.addEventListener("click", clear);
*/
//Let's Try it Out
/*
//1.
let clearIntervalBtn = document.querySelector("#clearIntervalBtn");
let clearTimeoutBtn = document.querySelector("#clearTimeoutBtn");
let timeOutAnswer = prompt("How long do you want to wait?", "5 seconds");
let intervalAnswer = prompt("How long do you want to wait in between?", "5 seconds");
let timeoutReference; 
let intervalReference;
//2.
let quotes = ["Be kind", "Have courage", "Smile", "hustle hard"];
function createTimer(time, type) {
  let endIndex = time.indexOf(" ");
  let parsedTime = parseInt(time.substring(0, endIndex));
  if(!isNaN(parsedTime)) {
    parsedTime *= 1000;
    if(type === "timeout")
    timeoutReference = setTimeout(alertRandomQuote, parsedTime);
  } else {
    intervalReference = setInterval(alertRandomQuote, parsedTime);
  }
  
  // } else {
      // ...
      // console.log("oh no!");
    
  };

function alertRandomQuote() {
  let maxIndex = quotes.length - 1;
  let indexToChoose = Math.floor(Math.random() * maxIndex);
  alert(quotes[indexToChoose]);
}

createTimer(timeOutAnswer, "timeout");

createTimer(intervalAnswer, "timeout");

//3.

//4.
clearIntervalBtn.addEventListener("click", () => {
  clearInterval(intervalReference);
});

clearTimeoutBtn.addEventListener("click", () => {
  clearTimeout(timeoutReference);
});
*/
//LOCAL STORAGE/SESSION STORAGE

function storeUserInfo() {
  if(!sessionStorage.getItem("firstName")) {
    let firstName = prompt("what's your first name?");
    sessionStorage.setItem("firstName", firstName);
  }
};

storeUserInfo();

let retrievedValue = sessionStorage.getItem("firstName");
alert(`Hello ${retrievedValue}!`);
