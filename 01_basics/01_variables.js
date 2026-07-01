// Study of keywords used to declare the variable in JS :

// 1. "const" keyword : It can neither be reassigned nor redeclared and it is block scoped works inside {} only 
const accountId = 12345 
// accountId=45678 ** REASSIGNING NOT ALLOWED**

// 2. "Let" Keyword : It can not be redeclared but can be reassigned and it is block scoped works inside {} only 

let accountEmail="deepma@google.in"

// let accountEmail="sujal@google.in" {This line will throw SyntaxError: Identifier 'accountEmail' has already been declared}

accountEmail= "hc.hc@.in" // reassigning allowed
console.log(accountEmail);

// 3. "Var" Keyword : It can be reassigned as well as redeclared and it is functional scoped it works outside {} as well.
var accountPassword="2345"
console.log(accountPassword);

var accountPassword="67890" // No syntax error while redeclaring the variable
console.log(accountPassword);

accountPassword= "234567" // reassigning allowed
console.log(accountPassword);


// 4 :
accountCity ="Prayagraj" // we can declare a variable this way as well but this is not considered a good way
accountCity="Meerut"
console.log(accountCity);

//5 . Variable declared but not initialized will have "undefined" as default value
let accountState;
console.log(accountState); //undefined


/* we can declare variable by two ways using "let" and "var" but we prefer to not to use var
 because of issue in block scope and functional scope
*/ 

// Printing Multiple variable in tabular format :
console.table([accountId,accountEmail,accountPassword,accountCity ,accountState])


// Hoisting : Hoisting is the process by which JavaScript allocates memory for variable and function declarations during the Creation Phase, before the Execution Phase begins.
//During hoisting phase, JavaScript allocates memory for variables and functions before executing the code. For var, the variable is initialized with undefined. For let and const, memory is allocated but they remain uninitialized until execution reaches their declaration, which is why they are in the Temporal Dead Zone.