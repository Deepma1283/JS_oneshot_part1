const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); //in node the global current context is empty{} while in browser it is window object

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}

/*
===========================
      JavaScript - this
===========================

Definition
----------
`this` refers to the object that calls (invokes) a function.
Its value depends on HOW the function is called.

---------------------------------
1. Inside an Object
---------------------------------

const user = {
    name: "Sujal",
    greet() {
        console.log(this);
    }
}

user.greet();

✔ this = user

Reason:
The object `user` called the method.

---------------------------------
2. Inside a Regular Function
---------------------------------

function greet() {
    console.log(this);
}

greet();

Node.js
- Non-strict mode → Global Object
- Strict mode → undefined

Reason:
No object is calling the function.

---------------------------------
3. Inside an Arrow Function
---------------------------------

const greet = () => {
    console.log(this);
}

✔ Arrow functions DO NOT have their own `this`.
✔ They inherit `this` from the surrounding (lexical) scope.

Node.js (CommonJS)
Top-level `this` = {}

---------------------------------
4. Important
---------------------------------

`this` NEVER refers to:
❌ Local variables
❌ Function scope

`this` ALWAYS refers to:
✔ Calling object
✔ Or inherited lexical scope (Arrow Function)

---------------------------------
Regular vs Arrow Function
---------------------------------

Regular Function
✔ Own `this`
✔ Depends on call site

Arrow Function
✔ No own `this`
✔ Inherits lexical `this`

---------------------------------
Interview One-Liner
---------------------------------

"`this` refers to the object that invokes a function. In regular functions, its value depends on the call site, whereas arrow functions do not have their own `this`; they inherit it from the surrounding lexical scope."

===========================
      JavaScript - this
===========================

Definition
----------
`this` refers to the object that calls (invokes) a function.
Its value depends on HOW the function is called.

---------------------------------
1. Inside an Object
---------------------------------

const user = {
    name: "Sujal",
    greet() {
        console.log(this);
    }
}

user.greet();

✔ this = user

Reason:
The object `user` called the method.

---------------------------------
2. Inside a Regular Function
---------------------------------

function greet() {
    console.log(this);
}

greet();

Node.js
- Non-strict mode → Global Object
- Strict mode → undefined

Reason:
No object is calling the function.

---------------------------------
3. Inside an Arrow Function
---------------------------------

const greet = () => {
    console.log(this);
}

✔ Arrow functions DO NOT have their own `this`.
✔ They inherit `this` from the surrounding (lexical) scope.

Node.js (CommonJS)
Top-level `this` = {}

---------------------------------
4. Important
---------------------------------

`this` NEVER refers to:
❌ Local variables
❌ Function scope

`this` ALWAYS refers to:
✔ Calling object
✔ Or inherited lexical scope (Arrow Function)

---------------------------------
Regular vs Arrow Function
---------------------------------

Regular Function
✔ Own `this`
✔ Depends on call site

Arrow Function
✔ No own `this`
✔ Inherits lexical `this`

---------------------------------
Interview One-Liner
---------------------------------

"`this` refers to the object that invokes a function. In regular functions, its value depends on the call site, whereas arrow functions do not have their own `this`; they inherit it from the surrounding lexical scope."
*/

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()