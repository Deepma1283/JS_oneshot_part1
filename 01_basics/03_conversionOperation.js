
let score_1 = 45  // score_1 will be of type => "number"
console.log(typeof (score_1))

// Numeric string => number
let score_2 = "45" 
console.log(typeof (score_2)) //string
let valueInNumber=Number(score_2)
console.log(typeof(valueInNumber)) //number
console.log(valueInNumber) // 45

// "deepma" (String) => NaN  => [when we convert alphabetical string into a number]

/* CONVERSION OPERATION : 

CASE 1 : alphanumeric => number
let score_3 = "33abc"
valueInNumber = Number(score_3)  // In javascript although its type will be converted into number
console.log(typeof(valueInNumber))
console.log(valueInNumber)  //value inside this variable => NaN (not A number)

CASE 2 : null => number
let score_4 = null
valueInNumber = Number(score_4) 
console.log(typeof (valueInNumber) ) // number
console.log(valueInNumber)   // value inside this variable => 0

CASE 3 : undefined => number
let score_5 = undefined
valueInNumber = Number(score_5) 
console.log(valueInNumber) //value inside this variable => NaN

CASE 4 : Boolean => number
let score_6 = false
valueInNumber = Number(score_6) 
console.log(valueInNumber) //value inside this variable will be 0
score_6 = true
valueInNumber=Number(score_6)
console.log(valueInNumber)// value inside this variable will be 1
*/


/* Boolean Conversion :

CASE 5 : Number => Boolean : 1 => true & 0 => false 
let score_8 = 1
valueInNumber= Boolean(score_8)
console.log(valueInNumber) // output => true
score_8 = 0
valueInNumber= Boolean(score_8)
console.log(valueInNumber)  // output => false

CASE 6 : "" (empty string) => false (boolean)
let score = ""
valueInNumber= Boolean(score)
console.log(valueInNumber)  // output => false

CASE 7 : "Sonal" OR " " => true (BOOLEAN)
score = "Sonal"
valueInNumber= Boolean(score)
console.log(valueInNumber)  // output => true
score = " "
valueInNumber= Boolean(score)
console.log(valueInNumber)  // output => true

CASE 8 : NUMBER => STRING
score = 78
valueInNumber= String(score)
console.log(valueInNumber) // output => 78
console.log(typeof (valueInNumber)) // output => String

*/


/*------------------------------------------------OPERATIONS------------------------------------------------------------------*/


let value= 5
let negativeValue = -value
console.log(negativeValue) // -5


console.log( 2 + 2) //4
console.log( 6 - 2 ) //4
console.log( 2 * 2) //4
console.log( 2 ** 3) //8
console.log( 9 % 2) //1
console.log( 8 / 2) //4


let str1 = "Sonal"
let str2 = "Deepma"
let str3 = str1+str2
console.log(str3) // output => SonalDeepma


console.log( "1" + 2) //12
console.log( 1 + "2") //12
console.log( "1" + 2 + 2) //122
console.log( 1 + 2 + "2")  //32

console.log(true) // output => true
console.log(+true) //output => 1
//console.log(true+) // this will throw an error

console.log("")
console.log(+"")// output => 0
console.log(+"100");   // 100
console.log(+null);    // 0
console.log(+undefined); // NaN
console.log(+"Hello"); // NaN

/* 

JavaScript '+' Operator (Addition Operator)

-The + operator in JavaScript is overloaded, which means it can perform more than one operation depending on the type of its operands.
-If both operands are numbers, it performs numeric addition.
-If either operand is a string, it performs string concatenation by converting the other operand to a string.
-When used as a unary operator (a single + before a value), it performs type conversion and tries to convert the operand into a number.

*/


/*-------------------------------------------------COMPARISON------------------------------------------------------------------------ */

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

/* 
When comparing two values in JavaScript, it is always a good practice to ensure that both operands have the same data type before performing the comparison. Comparing values of different data types can lead to unexpected results because JavaScript may perform implicit type coercion automatically.

-Implicit Type Coercion
Implicit type coercion is the automatic conversion of one data type to another by JavaScript when an operation involves operands of different types.
*/

// EXAMPLE 1 : Implicit Type Coercion
console.log("2" > 1);
console.log("02" > 1);
console.log("" == 0); // true 
console.log(false == 0); // true

/* The equality operator (==) and relational operators (<, >, <=, >=) use different coercion algorithms. Relational operators convert null to the number 0, so null >= 0 becomes 0 >= 0, which is true. However, the loose equality operator (==) has a special rule that null is only equal to undefined, so null == 0 evaluates to false without converting null to 0 */
console.log(null > 0);// false
console.log(null >= 0);// true
console.log(null == 0);// false

console.log(undefined == null); // true
console.log(undefined === null); // false

console.log(undefined == 0); // false
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false

// === 

console.log("2" === 2);