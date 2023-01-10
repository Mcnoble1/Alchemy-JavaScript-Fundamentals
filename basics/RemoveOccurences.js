// Given an array of integers and a number, num, find all the occurrences of the number and remove it from the array.

// Modify the array directly and do not return anything from this function.

// An example:

// const array = [1, 2, 3, 1];
// removeOccurrences(array, 1);
// console.log( array ); // [2, 3]

function removeOccurrences(array, num) {
    for(let i = array.length - 1; i >= 0; i--) {
        if(array[i] === num) {
            array.splice(i, 1);
        }
    }
}

module.exports = removeOccurrences;

// TESTS

// Path: Alchemy-JavaScript-Fundamentals\basics\RemoveOccurences.test.js


const { assert } = require('chai');
const removeOccurrences = require('../remove');

describe('removeOccurrences', () => {
    it('should handle a single removal in an array', () => {
        let array = [1, 2, 3];
        const returned = removeOccurrences(array, 1);
        assert.equal(returned, undefined, "the function should not return anything");
        assert.sameMembers(array, [2, 3]);
    });

    it('should handle removing multiple elements from an array', () => {
        let array = [1, 2, 2, 3, 4, 3];
        const returned = removeOccurrences(array, 2);
        assert.equal(returned, undefined, "the function should not return anything");
        assert.sameMembers(array, [1, 3, 4, 3]);
    });

    it('should handle removing all elements in an array', () => {
        let array = [1, 1, 1, 1, 1, 1, 1];
        const returned = removeOccurrences(array, 1);
        assert.equal(returned, undefined, "the function should not return anything");
        assert.sameMembers(array, []);
    });
});
