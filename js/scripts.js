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

function lifetimeCalculator(age, dailyUse) {
  if(!isNaN(age) && !isNaN(dailyUse)) {
    const death = 80;
    return (death - age) * (dailyUse * 365);
  } else {
    userAge = prompt('how old are you?', '41');
    userUse = prompt("How much do you use every day?");
    lifetimeCalculator(parseInt(userAge), parseInt(userUse));
  }
};
let userAge = prompt('how old are you?', '41');
let userUse = prompt("How much do you use every day?", '1');
let usage = lifetimeCalculator(parseInt(userAge), parseInt(userUse));
alert(`You will need ${usage} to last until you're 80.`);
