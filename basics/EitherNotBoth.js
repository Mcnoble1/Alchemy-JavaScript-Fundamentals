// Write a function eitherNotBoth that takes in a number and returns true if the the number is divisible by either 3 or 5, but not both. Return false otherwise.

function eitherNotBoth(num) {
    if(!(num % 3 === 0 && num % 5 === 0)) {
        return true;
    }
    return false;
}

module.exports = eitherNotBoth;


// TESTS
// Path: Alchemy-JavaScript-Fundamentals\basics\EitherNotBoth.test.js

const { assert } = require('chai');
const eitherNotBoth = require('../eitherNotBoth');

describe('eitherNotBoth', () => {
    describe('divisible by 3 but not 5', () => {
        it('should return true', () => {
            assert.equal(eitherNotBoth(3), true);
        });

        it('should return true', () => {
            assert.equal(eitherNotBoth(9), true);
        });

        it('should return true', () => {
            assert.equal(eitherNotBoth(18), true);
        });
    });

    describe('divisible by 5 but not 3', () => {
        it('should return true', () => {
            assert.equal(eitherNotBoth(5), true);
        });

        it('should return true', () => {
            assert.equal(eitherNotBoth(10), true);
        });

        it('should return true', () => {
            assert.equal(eitherNotBoth(20), true);
        });
    });

    describe('divisible by 5 and 3', () => {
        it('should return false', () => {
            assert.equal(eitherNotBoth(15), false);
        });

        it('should return false', () => {
            assert.equal(eitherNotBoth(30), false);
        });

        it('should return false', () => {
            assert.equal(eitherNotBoth(60), false);
        });
    });
})



