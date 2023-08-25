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
    let comparator = (a, b) => {
        switch (sortOrder) {
            case 'ascending':
                return a.localeCompare(b);
            case 'descending':
                return b.localeCompare(a);
            case 'lengthAscending':
                return a.length - b.length;
            case 'lengthDescending':
                return b.length - a.length;
            case 'consonantsAscending':
                let consonants = /[bcdfghjklmnpqrstvwxyz]/ig;
                let countConsonants = (word) => (word.match(consonants) || []).length;
                return countConsonants(a) - countConsonants(b);
            case 'consonantsDescending':
                let consonantsDesc = /[bcdfghjklmnpqrstvwxyz]/ig;
                let countConsonantsDesc = (word) => (word.match(consonantsDesc) || []).length;
                return countConsonantsDesc(b) - countConsonantsDesc(a);
            default:
                return a.localeCompare(b);
        }
    };
    return words.sort(comparator);
}

let words = ['hi', 'this', 'is', 'a', 'sorting', 'function'];

console.log(anySort(words));
console.log(anySort(words, 'descending'));
console.log(anySort(words, 'lengthAscending'));
console.log(anySort(words, 'lengthDescending'));
console.log(anySort(words, 'consonantsAscending'));
console.log(anySort(words, 'consonantsDescending'));