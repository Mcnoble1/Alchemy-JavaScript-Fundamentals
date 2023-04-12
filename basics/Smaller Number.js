// The function smallerNumber will be given two unequal numbers: num1 and num2.
// Your goal is to find the smaller number and return it!

function smallerNumber(num1, num2) {
    if (num1 < num2) {
        return num1
    } return num2
}

module.exports = smallerNumber;

// TESTS
// Path: Alchemy-JavaScript-Fundamentals\basics\Smaller Number.test.js
const { assert } = require('chai');
const smallerNumber = require('../smallerNumber');

describe('smallerNumber', () => {
    it('should return the smaller number', () => {
        assert.equal(smallerNumber(3, 5), 3);
    });

    it('should return the smaller number', () => {
        assert.equal(smallerNumber(10, 4), 4);
    });
})