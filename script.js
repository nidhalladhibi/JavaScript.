function reverseString(str) {
    return str.split('').reverse().join('');
}
// console.log(reverseString("hello")); // Output: "olleh"
function countCharacters(str) {
    return str.length;
}
// console.log(countCharacters("hello"));         // Output: 5
// console.log(countCharacters("hello world"));   // Output: 11
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}
// console.log(capitalizeWords("hello world")); // Output: "Hello World"
// console.log(capitalizeWords("javaScript is fun")); // Output: "JavaScript Is Fun"

// Function to find the maximum value in an array
function findMax(arr) {
    return Math.max(...arr);
}

// Function to find the minimum value in an array
function findMin(arr) {
    return Math.min(...arr);
}
// const numbers = [3, 7, 2, 9, 5];
// console.log(findMax(numbers)); // Output: 9
// console.log(findMin(numbers)); // Output: 2
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
// const numbers = [1, 2, 3, 4, 5];

// console.log(sumArray(numbers)); // Output: 15
function filterArray(arr, condition) {
    return arr.filter(condition);
}
const numbers = [1, 2, 3, 4, 5, 6];
const isEven = num => num % 2 === 0;

// console.log(filterArray(numbers, isEven)); // Output: [2, 4, 6]
function factorial(n) {
    if (n < 0) return undefined; // Factorial is not defined for negative numbers
    if (n === 0 || n === 1) return 1; // Base case: 0! = 1 and 1! = 1
    return n * factorial(n - 1); // Recursive case
}
// console.log(factorial(5)); // Output: 120 (5 * 4 * 3 * 2 * 1)
// console.log(factorial(0)); // Output: 1
// console.log(factorial(-1)); // Output: undefined
function isPrime(n) {
    if (n <= 1) return false; // Numbers less than 2 are not prime
    if (n <= 3) return true;  // 2 and 3 are prime numbers
    if (n % 2 === 0 || n % 3 === 0) return false; // Eliminate multiples of 2 and 3

    // Check for factors from 5 up to the square root of n
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}
// console.log(isPrime(11)); // Output: true
// console.log(isPrime(15)); // Output: false
// console.log(isPrime(2));  // Output: true
// console.log(isPrime(1));  // Output: false
function generateFibonacci(n) {
    if (n <= 0) return []; // No terms if n is 0 or negative
    if (n === 1) return [0]; // First term of Fibonacci sequence
    if (n === 2) return [0, 1]; // First two terms of Fibonacci sequence

    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}
// console.log(generateFibonacci(5));  // Output: [0, 1, 1, 2, 3]
// console.log(generateFibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// console.log(generateFibonacci(1));  // Output: [0]
// console.log(generateFibonacci(0));  // Output: []






