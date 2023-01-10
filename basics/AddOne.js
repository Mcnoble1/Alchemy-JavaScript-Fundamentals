// Complete the addOne function to add 1 to every element within the array. Since we are modifying the array directly do not return it.

function addOne(array) {
    for(let i = 0; i < array.length; i++) {
        array[i] += 1;
    }
}

module.exports = addOne;

// TESTS

// Path: Alchemy-JavaScript-Fundamentals\basics\AddOne.test.js

const { assert } = require('chai');
const addOne = require('../addOne');

describe('addOne', () => {
    it('should handle a single element array', () => {
        const array = [1];
        const returned = addOne(array);
        assert.equal(returned, undefined, "the function should not return anything");
        assert.sameMembers(array, [2]);
    });

    it('should handle an array with a few sequential elements', () => {
        const array = [1, 2, 3];
        const returned = addOne(array);
        assert.equal(returned, undefined, "the function should not return anything");
        assert.sameMembers(array, [2, 3, 4]);
    });

    it('should handle a larger array', () => {
        const array = [9, 12, 14, 16, 19];
        const returned = addOne(array);
        assert.equal(returned, undefined, "the function should not return anything");
        assert.sameMembers(array, [10, 13, 15, 17, 20]);
    });
});
