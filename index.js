// Calculating age based on input

// Start by getting the age input from the elemenent with id ageInput

const userAge = document.getElementById('ageInput').value;

// Converting human years to dog years

// First two years of human life in dog years

let earlyYears = 2;

earlyYears *= 10.5;

// Remaining humnan years in dog years

let laterYears = userAge - 2;

laterYears *= 4;    

// Converting human years into dog years

const userAgeInDogYears = earlyYears + laterYears;

function myFunction () {
    return userAgeInDogYears;
}

document.getElementById('result').innerHTML =  `Hey, I am ${userAge} years old which 
converts to ${userAgeInDogYears} years old in dog years.`;