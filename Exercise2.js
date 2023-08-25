'use strict'
// Create a function that can limit the execution of other functions to a determined amount of times. 
// Example:
//      function limitFunc (fn, num) { ... }
//      var limited = limitFunc (fn, 2);
//      limited (); // executes fine
//      limited (); // executes fine
//      limited (); // does not execute

function limitFunc(fn, num) {
    let count = 0;

    return function (...args) {
        if (count < num) {
            count++;
            return fn(...args);
        }
        return
    };
}

function fooFunction() {
    console.log('Executing foo function');
}

let limited = limitFunc(exampleFunction, 2);

limited();
limited();
limited();