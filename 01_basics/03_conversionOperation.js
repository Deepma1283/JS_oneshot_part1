
// let score_1 = 45  // score_1 will be of type => "number"
// let score_2 = "45" // score_2 will be of type => "string" bcoz the value is placed inside the double quotes
 
// console.log(typeof (score_1))
// console.log(typeof (score_2))
// "deepma" (String) => NaN  => [when we convert alphabetical string into a number]
// // "45" (String) => 45 (number)
// let valueInNumber=Number(score_2)
// console.log(typeof(valueInNumber))
// console.log(valueInNumber)

// conversion 

// //  CASE 1 : alphanumeric => number
// let score_3 = "33abc"
// valueInNumber = Number(score_3)  // In javascript although its type will be converted into number
// console.log(typeof(valueInNumber))
// console.log(valueInNumber)  //value inside this variable => NaN (not A number)

// CASE 2 : null => number
// let score_4 = null
// valueInNumber = Number(score_4) 
// console.log(typeof (valueInNumber) )
// console.log(valueInNumber)   //value inside this variable => 0

// // CASE 3 : undefined => number
// let score_5 = undefined
// valueInNumber = Number(score_5) 
// console.log(valueInNumber) //value inside this variable => NaN

// // CASE 4 : Boolean => number
// let score_6 = false
// valueInNumber = Number(score_6) 
// console.log(valueInNumber) //value inside this variable will be 0
// score_6 = true
// valueInNumber=Number(score_6)
// console.log(valueInNumber)

// // CASE 5 : Number => Boolean : 1 => true & 0 => false 
// let score_8 = 1
// valueInNumber= Boolean(score_8)
// console.log(valueInNumber) // output => true
// score_8 = 0
// valueInNumber= Boolean(score_8)
// console.log(valueInNumber)  // output => false

// // CASE 6 : "" (empty string) => false (boolean)
// let score = ""
// valueInNumber= Boolean(score)
// console.log(valueInNumber)  // output => false

// // CASE 7 : "Sonal" OR " " => true (BOOLEAN)
// score = "Sonal"
// valueInNumber= Boolean(score)
// console.log(valueInNumber)  // output => true
// score = " "
// valueInNumber= Boolean(score)
// console.log(valueInNumber)  // output => true

// //  CASE 8 : NUMBER => STRING
// score = 78
// valueInNumber= String(score)
// console.log(valueInNumber) // output => 78
// console.log(typeof (valueInNumber)) // output => String


/*------------------------------------------------OPERATIONS------------------------------------------------------------------*/

// let value= 5
// let negativeValue = -value
// console.log(negativeValue)

// console.log( 2 + 2) //4
// console.log( 6 - 2 ) //4
// console.log( 2 * 2) //4
// console.log( 2 ** 3) //8
// console.log( 9 % 2) //1
// console.log( 8 / 2) //4

// let str1 = "Sonal"
// let str2 = "Deepma"
// let str3 = str1+str2
// console.log(str3)

// console.log( "1" + 2) //12
// console.log( 1 + "2") //12
// console.log( "1" + 2 + 2) //122
// console.log( 1 + 2 + "2")  //32

// console.log(true) // output => true
// console.log(+true) //output => 1
// console.log(true+) // this will throw an error

console.log("")
console.log(+"")
