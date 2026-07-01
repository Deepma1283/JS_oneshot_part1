// Primitive Number
const score = 400
// console.log(score);

// Object Number
const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);

/*
1. toFixed() : 
This method formats a number using exactly n digits after the decimal point and returns the result as a string.
- Controls digits after the decimal point.
- Rounds the number if needed.
- Returns a string, not a number.

console.log(balance.toFixed(1)); //100.0
console.log(balance.toFixed(2)); //100.00
console.log(balance.toFixed(3)); //100.000
let num = 99.999;
console.log(num.toFixed(2)); // 100.00

2. toPrecision() : 
method formats a number to n significant digits, not decimal places.
- number.toPrecision(n) , here n = Total number of significant digits.
- May return scientific notation for very large or very small numbers.
- Returns a string.

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4)); // 123.9
console.log(otherNumber.toPrecision(6)); // 123.897
console.log(otherNumber.toPrecision(2)); // 1.2e+2

let o_num = 0.0012345;
console.log(o_num.toPrecision(2)); // 0.0012 [here the first two significant digits are 1 and 2].

NOTE : 
Easy Trick to Remember
- toFixed() → "Fix the decimal places and No Scientific notation".
Example: 123.456 → toFixed(2) → 123.46
- toPrecision() → "Fix the total significant digits and scientific notation may be used when appropriate".
Example: 123.456 → toPrecision(4) → 123.5
*/

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);

/*
1. Math.abs(): returns the absolute (non-negative) value of a number.
console.log(Math.abs(10));    // 10
console.log(Math.abs(-10));   // 10
console.log(Math.abs(-3.5));  // 3.5
console.log(Math.abs(0));     // 0

2. Math.round() : returns the nearest integer.
- Rounding Rule
1. If the decimal part is less than 0.5, it rounds down.
2. If the decimal part is 0.5 or greater, it rounds up.
console.log(Math.round(4.6)); // 5
console.log(Math.round(-4.2)); // -4
console.log(Math.round(-4.5)); // -4
console.log(Math.round(-4.8)); // -5

3.Math.ceil() : returns the smallest integer greater than or equal to the given number. It always rounds up toward positive infinity (always rounds a number up to the nearest integer).
console.log(Math.ceil(4.2));   // 5
console.log(Math.ceil(4.9));   // 5
console.log(Math.ceil(4));     // 4
console.log(Math.ceil(-4.2));  // -4

4. Math.floor() : returns the largest integer less than or equal to the given number. It always rounds down toward negative infinity (always rounds a number down to the nearest integer).
console.log(Math.floor(4.8));   // 4
console.log(Math.floor(4.2));   // 4
console.log(Math.floor(4));     // 4
console.log(Math.floor(-4.2));  // -5

console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

*/

console.log(Math.random()); // returns a pseudo-random floating-point number in the range 0 (inclusive) to 1 (exclusive)
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)