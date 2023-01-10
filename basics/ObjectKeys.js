// Given an object, find the number of keys inside the object. Return this number.

function numberOfKeys(object) {
    // let keys = [];
    // for (let key in object) {
    //     keys.push(key)
    // }
    // return keys.length;

    let sum = 0;
    for (let key in object) {
        sum += 1;
    }
    return sum;

    // const sum = Object.keys(object).length;
    // return sum;
}

module.exports = numberOfKeys;

// TESTS

// Path: Alchemy-JavaScript-Fundamentals\basics\NumberOfKeys.test.js
const numberOfKeys = require('../numberOfKeys');
const { assert } = require('chai');

describe('numberOfKeys', () => {
    it('should handle an object with 1 property', () => {
        assert.equal(numberOfKeys({ prop: 1 }), 1);
    });

    it('should handle an object with 3 properties', () => {
        assert.equal(numberOfKeys({ a: 1, b: 2, c: 3 }), 3);
    });
});