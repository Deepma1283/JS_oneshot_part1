// array

/*
Array
│
├── Ordered collection of values
├── Zero-indexed (starts from 0)
├── Resizable (size can change)
├── Can store mixed data types
├── Can store duplicate values
├── Can store nested arrays
├── Can store objects ✅
├── Can store functions ✅
├── Dynamic (no fixed size)
└── Copy operations are usually shallow (below a complete description is written)
*/

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop() // removes the last element from the array

/*
shift() → Removes the first element from the array.
unshift() → Adds one or more elements to the beginning of the array.
*/
// myArr.unshift(9)
// myArr.shift()

/*
Interview-ready answer

"Why are shift() and unshift() slower than push() and pop()?"

-push() and pop() operate at the end of the array, so they usually don't require moving existing elements. In contrast, shift() and unshift() operate at the beginning of the array, so JavaScript has to shift and re-index all subsequent elements, making them O(n) operations.
*/

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()
// console.log(myArr);
// console.log( newArr); // "0,1,2,3,4,5"  // it returns a string


// slice, splice

// slice() creates a shallow copy of a selected portion of an array without modifying the original array, whereas splice() modifies the original array by removing, inserting, or replacing elements and returns the removed elements.


console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // array.slice(start, end)

console.log(myn1);
console.log("B ", myArr);

/* 
array.splice(start, deleteCount, item1, item2, ...) 
start → Index where operation begins.
deleteCount → Number of elements to remove.
items → Optional new elements to insert.
*/
const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2); 


/*
=========================================================
ASSIGNMENT (=)
=========================================================

Definition:
- No copy is created.
- Both variables point to the SAME array/object.
- Only the reference (memory address) is copied.

Example:
const arr1 = [1, 2, 3];
const arr2 = arr1;

Memory:
arr1 ----\
          ---> Array A
arr2 ----/

Result:
arr1 === arr2        // true
Changes made using one variable are reflected in the other.

Remember:
Assignment = Shared Reference (No Copy)


=========================================================
SHALLOW COPY
=========================================================

Definition:
- A new outer array/object is created.
- Only the first level is copied.
- Nested objects, arrays, and functions are NOT copied.
- Their references are copied instead.

Methods:
- Spread Operator (...)
- slice()
- concat()
- Array.from()

Example:
const arr1 = [{ name: "Sonal" }];
const arr2 = [...arr1];

Memory:
arr1 ---> Array A ----> Object X
arr2 ---> Array B ----> Object X

Result:
arr1 === arr2         // false (different arrays)
arr1[0] === arr2[0]   // true (same object)

Changing:
arr2[0].name = "Rahul";

also changes

arr1[0].name

because both arrays reference the same object.

Remember:
Shallow Copy = New Outer Container + Shared Inner References


=========================================================
DEEP COPY
=========================================================

Definition:
- A completely independent copy is created.
- The outer array/object and all nested objects/arrays
  are copied recursively.
- No references are shared.

Example:
const arr1 = [{ name: "Sonal" }];
const arr2 = structuredClone(arr1);

Memory:
arr1 ---> Array A ----> Object A
arr2 ---> Array B ----> Object B

Result:
arr1 === arr2         // false
arr1[0] === arr2[0]   // false

Changing arr2 does NOT affect arr1.

Remember:
Deep Copy = Everything is copied independently.


=========================================================
INTERVIEW ONE-LINER
=========================================================

Assignment:
-> No copy. Only the reference is copied.

Shallow Copy:
-> Outer container is copied.
-> Nested objects/arrays/functions share the same reference.

Deep Copy:
-> Everything is copied recursively.
-> No shared references.


=========================================================
QUICK MEMORY TRICK
=========================================================

Assignment
= Same House 🔗

Shallow Copy
= New House, Same Furniture 🏠🪑

Deep Copy
= New House, New Furniture 🏠✨🪑
*/