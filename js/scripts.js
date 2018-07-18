function dogAge(ageOfDogYears) {
  if(!isNaN(ageOfDogYears)){
    return ageOfDogYears * 7;
  }
  else {
    dogAge(parseInt(prompt("What is your dog's age in years?", "10")))
  }
};
alert(dogAge(parseInt(prompt("What is your dog's age in years?", "10"))));
