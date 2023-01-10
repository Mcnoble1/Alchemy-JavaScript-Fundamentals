// The function checkNumber takes a single argument: a number num
// The function should return the string positive if the number is positive, negative if the number is negative, and zero if the number is zero.

function checkNumber(num) {
    if (num < 0) {
        return "negative"
    } else if (num > 0) {
        return "positive";
    } return "zero"
 }
 
 module.exports = checkNumber;

// TESTS
// Path: Alchemy-JavaScript-Fundamentals\basics\CheckNumber.test.js
const { assert } = require('chai');
const checkNumber = require('../checkNumber');

describe('checkNumber', () => {
    it('should return positive', () => {
        assert.equal(checkNumber(15), 'positive');
    });

    it('should return negative', () => {
        assert.equal(checkNumber(-5), 'negative');
    });

    it('should return zero', () => {
        assert.equal(checkNumber(0), 'zero');
    });
})