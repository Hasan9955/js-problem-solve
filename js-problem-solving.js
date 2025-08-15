// 4. Task: Sorting Objects Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

const cars = [
  { make: "Toyota", model: "Corolla", year: 2018 },
  { make: "Honda", model: "Civic", year: 2015 },
  { make: "Ford", model: "Focus", year: 2020 }
];

function sortCarsByYear(carsArray) {
  return carsArray.sort((a, b) => a.year - b.year);
}

console.log("Sorted Cars by Year:", sortCarsByYear(cars));


// 5. Task: Find and Modify Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

const people = [
  { name: "Hasan", age: 22 },
  { name: "Ali", age: 25 },
  { name: "Karim", age: 30 }
];

function updateAgeByName(array, personName, newAge) {
  const person = array.find(p => p.name === personName);
  if (person) {
    person.age = newAge;
  }
  return array;
}

console.log("Updated People Array:", updateAgeByName(people, "Ali", 28));


// 6. Task: Array Reduction Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.

const numbers = [1, 2, 3, 4, 5, 6];

function sumEvenNumbers(nums) {
  return nums.reduce((sum, num) => {
    if (num % 2 === 0) sum += num;
    return sum;
  }, 0);
}

console.log("Sum of Even Numbers:", sumEvenNumbers(numbers));


// 7. Task: Leap Year Checker Write a function that determines whether a given year is a leap year. 

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return `${year} is a Leap Year`;
  }
  return `${year} is NOT a Leap Year`;
}

console.log(isLeapYear(2024));
console.log(isLeapYear(2023));
 


// 9. Task: Find Maximum Value: Write a function that takes an array of numbers and returns the maximum value.

function findMaxValue(array) {
  return Math.max(...array);
}

console.log("Maximum Value:", findMaxValue([10, 50, 30, 70, 40]));
