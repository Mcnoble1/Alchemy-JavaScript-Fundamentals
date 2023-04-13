// Take the array arr and add one to every element, return the resulting array.

function plusOne(arr) {
    return arr.map(element => element + 1);
}

module.exports = plusOne;

// TESTS

// Path: Alchemy-JavaScript-Fundamentals\dataStructures\AddOne.test.js

const plusOne = require('../plusOne');
const {assert} = require('chai');

describe('plus one', () => {
    it('should add one to each element for a single element', () => {
        assert.sameOrderedMembers([1], plusOne([0]));
    });

    it('should add one to each element for several elements', () => {
        assert.sameOrderedMembers([1, 2, 3], plusOne([0, 1, 2]));
    });
});