"use strict"; // this indicates that the entire js code has to be treated as per the new version of javascript

// alert (3 + 3) 
// alert works in browser there it will pop 6
// alert doesn't work in case of node.js 

/* 

Primitive type are as follows : Call by value
JavaScript has 7 primitive data types. Primitive values are immutable, which means their values cannot be changed once created. They are stored by value, not by reference.
 
1.number => it can store positive floating number upto 2 to power 53 and negative type floating value of same magnitude as well.Used to represent both integers and floating-point (decimal) numbers.
JavaScript has only one Number type; it does not distinguish between int and float.

-The maximum safe integer is:
Number.MAX_SAFE_INTEGER // 9007199254740991 (2^53 - 1)

-The minimum safe integer is:
Number.MIN_SAFE_INTEGER // -9007199254740991

-Special numeric values include:
1.Infinity
2.-Infinity
3.NaN (Not-a-Number)


2.bigint =>
-Used to represent very large integers that exceed the safe integer limit of the Number type.
-A BigInt is created by adding n to the end of an integer or by using the BigInt() constructor.
-BigInt cannot be mixed directly with Number in arithmetic operations.

3.String => " "
-Used to represent text or a sequence of characters.
-Strings can be enclosed in:
Single quotes (' ')
Double quotes (" ")
Backticks (` `) for template literals.
-Strings are immutable.

4.boolean => true/false

5.null type => null is a standalone value, it represents the intentional absence of a value. Although typeof null returns "object" due to a historical JavaScript bug, null is a primitive data type.

6.undefined => Represents a variable that has been declared but not assigned a value. JavaScript automatically assigns undefined to such variables.
A function that does not return a value also returns undefined.

7.symbol => unique
-Introduced in ES6 (ECMAScript 2015).
-Used to create unique and immutable identifiers.
-Even if two symbols have the same description, they are always different.

*/

// Examples 
let naam = "SUJAL"
console.log(typeof naam) // string

let age = 19
console.log(typeof age) // number

let isLoggedIn = false
console.log(typeof isLoggedIn) // boolean

let state;
console.log(typeof state) // undefined

let randm = null 
console.log(typeof randm)  // object (this is a bug in javascript)

const bigNumber = 33526827863468987637856745967549n
console.log(typeof bigNumber)  // bigint

const id1 = Symbol("id"); 
const id2 = Symbol("id");
console.log(id1 === id2); // false
console.log(typeof id1) // symbol

/*JAVA SCRIPT IS DYNAMIC AND WEAKLY TYPED LANGUAGE :That means you don't have to declare the type of a variable ahead of time. The type will get determined automatically while the program is being processed. That also means that you can have the same variable as different types.*/

// SUMMARY : KIS TARAH SE DATA KO MEMORY MEI RAKHA JATA HAI (STORED) AUR ACCESS KIYA JATA HAI US BASIS PAR DATA KO TWO CATEGORY MEI DIVIDE KIYA GAYA HAI PRIMITIVE AND NONPRIMITIVE (ALSO KNOWN AS REFERENCE)

// Non Primitive type are as follows : they are call by reference
// Array , Objects , Functions

// array
const subject =[ "phy","chem","math","eng"]
console.log(typeof subject); //object

// object
const myObj ={
    name: "deepma",
    age:21 ,
    isGraduated: false,
}
console.log(myObj)
console.log(typeof myObj); // object

// Functions
const myFunc = function () {
    console.log("HELLO");
}
console.log(myFunc())
console.log(typeof myFunc); // function [as per documentation it is object function but in reality it is function]
 

console.log(typeof Object) // function

/*------------------------------------STACK (Primitive) AND HEAP (Non Primitive) MEMORY--------------------------------------------*/


// Stack memory follows "Copy by Value".
let myYoutubeChannel = "Deepma Jaiswal"
let anotherChannel = myYoutubeChannel // here we are copying the value of myYoutubeChannel into anotherChannel
console.log(myYoutubeChannel) // Deepma Jaiswal
console.log(anotherChannel) // Deepma Jaiswal

myYoutubeChannel = "Deepma Jaiswal 2.0" // here we are changing the value of myYoutubeChannel but it will not affect the value of anotherChannel because they are stored in stack memory and they are primitive type
console.log(myYoutubeChannel) // Deepma Jaiswal 2.0
console.log(anotherChannel) // Deepma Jaiswal

//Heap memory follows "Copy by Reference" (more precisely, the reference value is copied, so both variables refer to the same object).
let myobj = {
    name: "Deepma Jaiswal",
    age: 21,
    isGraduated: false,
}
let anotherObj = myobj // here we are copying the reference of myobj into anotherObj
console.log(myobj) // { name: 'Deepma Jaiswal', age: 21, isGraduated: false }
console.log(anotherObj) // { name: 'Deepma Jaiswal', age: 21, isGraduated: false }

myobj.name = "Deepma Jaiswal 2.0" // here we are changing the value of myobj but it will affect the value of anotherObj because they are stored in heap memory and they are non primitive type
console.log(myobj) // { name: 'Deepma Jaiswal 2.0', age: 21, isGraduated: false }
console.log(anotherObj) // { name: 'Deepma Jaiswal 2.0', age: 21, isGraduated: false }
