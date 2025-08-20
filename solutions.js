// Sum of Two Numbers
function sum(a, b) {
  // Add your code here
  if (typeof a !== "number" || typeof b !== "number"){
    console.log("Los datos de entrada no son adecuados");
  }
  return a + b;
}

// Factorial of a Number
function factorial(n) {
  // Add your code here
  if (typeof n !== "number" || n < 0 || !Number.isInteger(n)) {
    console.log("Los datos de entrada no son adecuados");
  }

  let result = 1;
  for (let i = 1; i <= n; i++){
    result *= i;
  }
  return result;
}

// Find the Largest Number
function findLargest(arr) {
  // Add your code here
  if(!Array.isArray(arr) || arr.length === 0 || !arr.every(num => typeof num === "number")) {
    console.log("Los datos de entrada no son adecuados");
  }

  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Count Vowels in a String
function countVowels(str) {
  // Add your code here
  if (typeof str !== "string") {
    console.log("Los datos de entrada no son adecuados");
  }

  let vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;

    }
  }

  return count;
}

// Check if a Number is Prime
function isPrime(n) {
  // Add your code here
  if (typeof n !== "number" || !Number.isInteger(n)) {
    console.log("Los datos de entrada no son adecuados");

  }

  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;

    }
  }
  return true;
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
