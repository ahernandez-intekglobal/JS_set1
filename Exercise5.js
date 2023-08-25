'use strict'
// Create a function that will:
//      [a]return the number of vowels in a string
//      [b]return the number of digits in a whole number using logarithm operations.
// Must be the same function.


function countVowelsAndDigits(input) {
    if (typeof input === 'string') {
        let vowels = /[aeiou]/ig;
        return (input.match(vowels) || []).length;
    }

    else if (typeof input === 'number' && Number.isInteger(input) && input >= 0) {
        return Math.floor(Math.log10(input) + 1);
    }
    else
        throw new Error(`Unsupported type of data ${typeof input}`)
}  

let inputString = 'Hello, World!';
console.log(`String vowels: ${countVowelsAndDigits(inputString)}`);

let inputString2 = 'eulogia'
console.log(`String2 vowels: ${countVowelsAndDigits(inputString2)}`);

let inputNumber = 12345;
console.log(`Number digits: ${countVowelsAndDigits(inputNumber)}`);
