'use strict'
// Create a function that can copy either all or specific properties of an object into another. 
// The functionality should depend on the arguments received. 

function copyProp(to, from, propertiesToCopy = []) {
    if (propertiesToCopy.length === 0) {
        for (let key in from) {
            if (from.hasOwnProperty(key)) {
                to[key] = from[key];
            }
        }
    } else {
        for (let key of propertiesToCopy) {
            if (from.hasOwnProperty(key)) {
                to[key] = from[key];
            }
        }
    }
}


let obj1 = { name: 'John', age: 30, country: 'USA' };

let obj2 = {};
copyProp(obj2, obj1);
console.log(obj2);

let obj3 = {};
copyProp(obj3, obj1, ['name', 'country']);
console.log(obj3);
