const accountId = 12345 // "const" keyword
let accountEmail="deepma@google.in"
var accountPassword="2345"
accountCity ="Prayagraj" // we can declare a variable this way as well but this is not considered a good way
let accountState;

// accountId=45678 **NOT ALLOWED**
accountEmail="hc@hc.in"
accountPassword="98754"
accountCity="Meerut"
/* we can declare variable by two ways using "let" and "var" but we prefer to not to use var
 because of issue in block scope and functional scope
*/ 
console.table([accountId,accountEmail,accountPassword,accountCity ,accountState] )
