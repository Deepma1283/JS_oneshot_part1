const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros) // this line add dc_heros array as a single element inside the marvel_heros array
console.log(marvel_heros);
console.log(marvel_heros[3][1]);

// Concatenation of an array using concat method and spread operator

const allHeros = marvel_heros.concat(dc_heros) // this returns new array with all the elements of both arrays
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // instead of infinity, you can also use a number to specify the depth level to flatten the array. For example, flat(1) will only flatten one level deep, while flat(2) will flatten two levels deep, and so on.
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))

/*
Array.from() in JavaScript : used to create a new array from an iterable or an array-like object.

An iterable is any object that implements the iterator protocol (through Symbol.iterator), allowing JavaScript to access its elements one by one.

Examples of iterable objects:
- String → Characters are iterated one by one.
- Array → Elements are iterated in order.
- Set → Values are iterated in insertion order.
- Map → Key-value entries are iterated in insertion order.

Important Note: Map vs Object
- A common doubt is that both Map and Object store key-value pairs, so why does Array.from() work with a Map but not with a plain Object?

The answer is iterability, not the data structure.

A Map implements the iterator protocol by providing a Symbol.iterator method.
When JavaScript internally executes map[Symbol.iterator](), it receives an iterator that returns each key-value pair one by one in insertion order.
Therefore, Map is iterable, and Array.from(map) works.

A plain Object is different.

Although modern JavaScript preserves the insertion order of most object properties, a plain object does not implement the iterator protocol.
When JavaScript internally looks for object[Symbol.iterator], it doesn't find it.
Since no iterator exists, JavaScript cannot iterate over the object directly, so Array.from(object) does not convert it into an array.

Remember:
Preserving insertion order and being iterable are not the same thing.
A plain object may preserve property order, but it is not iterable because it does not implement Symbol.iterator.

*/

console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

/*

How do we convert an Object into an array?

Since plain objects are not iterable, JavaScript provides dedicated methods:

Object.keys(obj) → Returns an array of all keys.
Object.values(obj) → Returns an array of all values.
Object.entries(obj) → Returns an array of key-value pairs.

These methods first extract the required information from the object and return it as an array.

*/

let score1 = 100
let score2 = 200
let score3 = 300

/* 
Array.of() is used to create a new array from the values passed as arguments. Unlike the Array constructor, it always treats its arguments as array elements. This is especially useful when passing a single numeric value. 
For example, new Array(5) creates an empty array of length 5, whereas Array.of(5) creates an array containing a single element: [5]
 */
console.log(Array.of(score1, score2, score3));