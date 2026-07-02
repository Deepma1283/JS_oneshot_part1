// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');

// ";" is very important in IIFE, if we don't put it then it will throw an error because the JS engine will think that the previous line is a function call and it will try to execute it as a function call and it will throw an error because the previous line is not a function call.