'use strict'
// Given an array of words, write a function that will sort the array in ascending order. 
// It should also take an optional argument that can customize the sorting order. Custom sorting orders:
//     -descending
//     -sort by length ascending/descending
//     -sort by number of consonants ascending/descending. 


function anySort(words, sortOrder = 'ascending') {
    // >0   sort a after b
    // <0   sort a before b
    // ===0 keep original order of a and b
    let comparator;
    switch (sortOrder) {
        case 'ascending':
            comparator = (a, b) => {return a.localeCompare(b)};
            break;
        case 'descending':
            comparator = (a, b) => {return b.localeCompare(a)};
            break;
        case 'lengthAscending':
            comparator = (a, b) => {return a.length - b.length};
            break;
        case 'lengthDescending':
            comparator = (a, b) => {return b.length - a.length};
            break;
        case 'consonantsAscending':
            comparator = (a, b) =>{
                let consonants = /[bcdfghjklmnpqrstvwxyz]/ig;
                let countConsonants = (word) => (word.match(consonants) || []).length;
                return countConsonants(a) - countConsonants(b)};
            break;
        case 'consonantsDescending':
            comparator = (a, b) =>{
                let consonantsDesc = /[bcdfghjklmnpqrstvwxyz]/ig;
                let countConsonantsDesc = (word) => (word.match(consonantsDesc) || []).length;
                return countConsonantsDesc(b) - countConsonantsDesc(a)};
            break;
        default:
            comparator = (a, b) => {return a.localeCompare(b)};
    }
    return words.sort(comparator);
}

let words = ['hi', 'this', 'is', 'a', 'sorting', 'function'];

console.log(anySort(words));
console.log(anySort(words, 'descending'));
console.log(anySort(words, 'lengthAscending'));
console.log(anySort(words, 'lengthDescending'));
console.log(anySort(words, 'consonantsAscending'));
console.log(anySort(words, 'consonantsDescending'));
