// Write a function that will take an array of numbers and return a new array that only contains unique numbers.

// For example, if you pass in [1, 2, 3, 3, 4, 5, 5, 5, 6], the function should return [1, 2, 3, 4, 5, 6].

function unique(array) {
    const unique = [];
    for(let i = 0; i < array.length; i++) {
        const element = array[i];
        if (array.indexOf(element) === i) {
            unique.push(element);
        }
    }
    return unique;
}

module.exports = unique;

// TESTS
// Path: Alchemy-JavaScript-Fundamentals\basics\UniqueElements.test.js

const { assert } = require('chai');
const unique = require('../unique');

describe('unique', () => {
    it('should return an array with all unique elements', () => {
        assert.sameMembers(unique([1,2,3]), [1,2,3]);
    });

    it('should handle an array with a few duplicates', () => {
        const original = [1, 2, 2, 3, 4, 3];
        assert.sameMembers(unique(original), [1, 2, 3, 4]);
        assert.equal(original.length, 6, "the original array should be unmodified");
    });

    it('should handle a larger array with only duplicates', () => {
        const original = [1, 1, 1, 1, 1, 1, 1];
        assert.sameMembers(unique(original), [1]);
        assert.equal(original.length, 7, "the original array should be unmodified");
    });
});
