const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
const myArray = [11, 34, 20, 5, 53, 16];

// Progression 1:

function slice(start, end) {
  var modifiedFood = [];
  for (var arr = start; arr < end - 1; arr++) {
    modifiedFood.push(foods[arr]);
  }
  return modifiedFood;
}

// Progression 2:

function spliced() {
  foods.splice(2, 0, 'noodles', 'icecream');
  return foods;
}

// Progression 3:

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  }
}
function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
function checkNumber(numberArray, operation) {
  return numberArray.filter(operation);
}

// Progression 4:

function reject(numberArray) {
  return numberArray.filter(function (number) {
    return !isPrime(number);
  });
}
function nonPrime(numberArray) {
  return reject(numberArray);
}

// Progression 5:

const isEvenUsingLambda = (number) => number % 2 === 0; //? true : false;

// Progression 6:

function findSquareOfNumbers(myArray) {
  return myArray.map(function (item) {
    return item ** 2;
  });
}

// Progression 7:

function multiply(myArray) {
  return myArray.map((ans) => ans * 1).reduce((multi, ans) => multi * ans);
}

function sumOfSquares(myArray) {
  return myArray
    .map((item) => item ** 2)
    .reduce((result, item) => result + item);
}
