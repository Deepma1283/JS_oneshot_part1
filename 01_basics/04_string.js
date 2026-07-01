const name = "hitesh"
const repoCount = 50

// Concatenation using + operator : the old way of concatenation
// console.log(name + repoCount + " Value");

/* 

Concatenation using template literals : the new way of concatenation 
-A template literal is an ES6 feature that uses backticks to create strings. It supports multiple features such as multi-line strings, embedded expressions, and string interpolation.

-String interpolation : String interpolation is one of those features, where values or expressions are inserted into a string using ${}. In other words, string interpolation is a feature of template literals, not a separate syntax.

*/

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// here String is a primitive data type but when we use new String() it becomes an object. So, the difference between primitive string and object string is that primitive string is immutable and object string is mutable.
const gameName = new String('JAVASCRIPT-course') 
console.log(typeof gameName); // object

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName);
/* NOTE : Strings in JavaScript are immutable. Methods like toUpperCase(), toLowerCase(), slice(), and trim() do not modify the existing string. Instead, they return a new string. This behavior is the same for both primitive strings and String objects created using new String(). Although a String object is mutable as an object (you can add or change its properties), the string value it wraps remains immutable. */
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t')); // -1


/* NOTE : Both substring() and slice() are used to extract a portion of a string. They include the start index and exclude the end index. The main differences are that slice() supports negative indices, while substring() treats negative indices as 0. Also, if the start index is greater than the end index, substring() automatically swaps the arguments, whereas slice() returns an empty string. Because of its support for negative indexing and consistent behavior, slice() is generally preferred in modern JavaScript. */
const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());
// The trim() method removes all leading and trailing whitespace characters from a string and returns a new string. It does not remove spaces between words and does not modify the original string because strings in JavaScript are immutable.Also removes tabs (\t) and newlines (\n).

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar')) // false

console.log(gameName.split('-')); // [ 'JAVASCRIPT', 'course' ]
/* 
string.split(separator, limit)
- Separator → Specifies where the string should be split.
- Limit → Specifies the maximum number of elements to return in the array.
*/