// Given an array of numbers, sort the numbers ascending (1,2,3...) and return the sorted array.

function sortUp(array) {
    array.sort((a,b) => a - b)
}

module.exports = sortUp;


// TESTS 

// Path: Alchemy-JavaScript-Fundamentals\dataStructures\SortAscending.test.js
const { assert } = require('chai');
const sortUp = require('../sortUp');

describe('sortUp', () => {
    it('should mantain sort order for sorted elements', () => {
        let actual = [5, 10, 15];
        sortUp(actual);
        const expected = [5, 10, 15];
        assert.sameOrderedMembers(actual, expected);
    });

    it('should fix sort order for unsorted elements', () => {
        let actual = [7, 4, 2, 3, 0, 5];
        sortUp(actual);
        const expected = [0, 2, 3, 4, 5, 7];
        assert.sameOrderedMembers(actual, expected);
    });
});