"use strict"; // this indicates that the entire js code hs to be treated as per the new version of javascript

// alert (3 + 3) 
// alert works in browser there it will pop 6
// alert doesn't work in case of node.js 

// let naam = "SUJAL"
// let age = 19
// let isLoggedIn = false
// let state;
// let randm = null 

/*JAVA SCRIPT IS DYNAMIC AND WEAKLY TYPED LANGUAGE :That means you don't have to declare the type of a variable ahead of time. The type will get determined automatically while the program is being processed. That also means that you can have the same variable as different types.*/


// Primitive type are as follows :
// 1.number => it can store positive floating number upto 2 to power 53 and negative type floating value of same magnitude as well
// 2.bigint => operate on large integers even beyond the safe integer limit for Numbers.
// 3.String => " "
// 4.boolean => true/false
// 5.null type => null is a standalone value
// 6.undefined =>
// 7.symbol => unique


//bigInt
const bigNumber = 33526827863468987637856745967549n


// console.log(typeof naam)
// // console.log(typeof age)
// console.log(typeof isLoggedIn)
// console.log(typeof state)
// console.log(typeof randm)

// SUMMARY : KIS TARAH SE DATA KO MEMORY MEI RAKHA JATA HAI(STORED) AUR ACCESS KIYA JATA HAI US BASIS PAR DATA KO TWO CATEGORY MEI DIVIDE KIYA GAYA HAI PRIMITIVE AND NONPRIMITIVE (ALSO KNOWN AS REFERENCE)

//Non Primitive type are as follows :
// Array , Objects , Functions

// array
const subject =[ "phy","chem","math","eng"]
// object
const myObj ={
    name: "deepma",
    age:21 ,
    isGraduated: false,
}
console.log(myObj)
// Functions
const myFunc = function () {
    console.log("HELLO");
    
}
console.log(typeof myFunc); // function
console.log(typeof subject); //object
console.log(typeof myObj); // object
console.log(typeof Object) // function
