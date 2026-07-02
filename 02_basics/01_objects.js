
/*
JavaScript objects can be created in two ways: using an object literal ({}) or the new Object() constructor. Both create ordinary objects; the difference is only the syntax. Object literals are preferred because they are simpler and more readable. A singleton is a design pattern where only one shared instance of an object exists throughout an application. Creating an object with new Object() does not automatically make it a singleton."

One-line takeaway (remember this):
Object literal ({}) and new Object() are just two ways to create an object. Singleton is a design pattern, not a property of either syntax.
*/

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting); // [Function (anonymous)]
console.log(JsUser.greeting()); 
console.log(JsUser.greetingTwo());

/*
==========================
        JAVASCRIPT OBJECTS
==========================

Object
│
├── 1. What is an Object?
│   ├── Collection of key-value pairs.
│   ├── Keys → String or Symbol.
│   ├── Values → Any data type.
│   └── Objects are reference types.
│
├── 2. Ways to Create Objects
│   ├── Object Literal (Preferred)
│   │      const obj = {};
│   │
│   └── Object Constructor
│          const obj = new Object();
│
│   ★ Interview Note:
│   Both create normal objects.
│   Object literal is preferred because it is shorter and more readable.
│
├── 3. Accessing Properties
│   ├── Dot Notation
│   │      obj.name
│   │
│   └── Bracket Notation
│          obj["name"]
│
│   Use Bracket Notation when:
│   • Property name contains spaces.
│   • Property name is dynamic.
│
├── 4. Adding / Updating / Deleting Properties
│   ├── Add
│   │      obj.city = "Delhi"
│   │
│   ├── Update
│   │      obj.city = "Mumbai"
│   │
│   ├── Delete
│   │      delete obj.city
│   │
│   └── Check Property
│          "city" in obj
│
├── 5. Important Object Methods
│   ├── Object.keys()
│   │      → Array of keys
│   │
│   ├── Object.values()
│   │      → Array of values
│   │
│   ├── Object.entries()
│   │      → Array of [key, value]
│   │
│   ├── Object.assign()
│   │      → Copy/Merge objects
│   │
│   ├── Object.freeze()
│   │      → Cannot add/update/delete properties
│   │
│   └── Object.seal()
│          → Cannot add/delete properties
│             Existing values can still be updated
│
├── 6. Iterating Over Objects
│   ├── for...in
│   ├── Object.keys()
│   ├── Object.values()
│   └── Object.entries()
│
├── 7. Nested Objects
│   └── Objects can contain other objects.
│
├── 8. this Keyword
│   └── Refers to the object that calls the method.
│
├── 9. Object vs Map
│
│   Object
│   ├── Keys → String/Symbol
│   ├── Not directly iterable
│   ├── Uses Object.keys(), Object.values(), Object.entries()
│   └── Best for simple data
│
│   Map
│   ├── Keys → Any data type
│   ├── Directly iterable
│   ├── Preserves insertion order
│   └── Best for frequent key-value operations
│
│   ★ Interview Note:
│   Both store key-value pairs.
│   Map is iterable because it implements Symbol.iterator.
│   Object is not iterable because it doesn't implement Symbol.iterator.
│
├── 10. Object Copy
│   ├── Shallow Copy
│   └── Deep Copy
│
│   (Very Important Interview Topic)
│
├── 11. Singleton
│
│   ★ Interview Note:
│   Singleton is a design pattern.
│   It means only one shared instance exists in the application.
│
│   Object Literal ≠ Multiple Instance
│   new Object() ≠ Singleton
│
│   Singleton is NOT related to object creation syntax.
│
└── 12. Important Interview Points
    ├── Objects are reference types.
    ├── Objects store data as key-value pairs.
    ├── Keys are String or Symbol.
    ├── Values can be any data type.
    ├── Objects are not directly iterable.
    ├── Object.keys(), values(), entries() return arrays.
    ├── Object.freeze() makes object immutable.
    ├── Object.seal() restricts adding/deleting properties.
    ├── Object.assign() copies/merges objects.
    ├── this refers to the calling object.
    ├── Object literal {} is preferred over new Object().
    └── Map and Object are different data structures.
*/