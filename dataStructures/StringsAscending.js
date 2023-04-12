// Given an array of strings, sort them in ascending order ('a','b','c'...) and return the sorted array.

function sortStringsUp(array) {
    array.sort((a,b) => a.localeCompare(b))
    }

module.exports = sortStringsUp;

// TESTS

// Path: Alchemy-JavaScript-Fundamentals\dataStructures\StringsAscending.test.js

const { assert } = require('chai');
const sortStringsUp = require('../sortStringsUp');

describe('sortStringsUp', () => {
    it('should mantain sort order for sorted strings', () => {
        let actual = ['a', 'b', 'c'];
        sortStringsUp(actual);
        const expected = ['a', 'b', 'c'];
        console.log({ actual, expected });
        assert.sameOrderedMembers(actual, expected);
    });

    it('should fix sort order for unsorted strings', () => {
        let actual = ['berries', 'oranges', 'apples', 'limes', 'lemons'];
        sortStringsUp(actual);
        const expected = ['apples', 'berries', 'lemons', 'limes', 'oranges'];
        console.log({ actual, expected });
        assert.sameOrderedMembers(actual, expected);
    });
});