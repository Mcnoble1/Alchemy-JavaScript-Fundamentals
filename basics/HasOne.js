// Complete the function hasOne which takes in an array of numbers. Return true if any of the numbers in the array are 1. Return false if not.

function hasOne(array) {
    if(array.includes(1)) {
        return true;
    } else {
        return false;
    }
} 

module.exports = hasOne;

// TESTS

// Path: Alchemy-JavaScript-Fundamentals\basics\HasOne.test.js
const { assert } = require('chai');
const hasOne = require('../hasOne');

describe('hasOne', () => {
    it('should handle arrays with 1 in it', () => {
        assert(hasOne([1]));
        assert(hasOne([1, 2, 3]));
        assert(hasOne([3, 1, 2]));
        assert(hasOne([3, 2, 1]));
        assert(hasOne([1, 1]));
        assert(hasOne([1, 1, 1]));
    });

    it('should handle arrays without 1 in it', () => {
        assert(!hasOne([]));
        assert(!hasOne([2,3,4]));
        assert(!hasOne([6,7,8,9,10,11]));
    });
});
