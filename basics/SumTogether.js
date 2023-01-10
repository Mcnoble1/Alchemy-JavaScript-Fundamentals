// Write a function sumTogether that takes two arrays of numbers and returns a single array with the sum of each corresponding index value.

// Assume both arrays are the same length.

function sumTogether(arr1, arr2) {
    const sum = [];
    for(let i = 0; i < arr1.length; i++) {
        sum.push(arr1[i] + arr2[i])
    }
    return sum;
}

module.exports = sumTogether;

// TESTS
// Path: Alchemy-JavaScript-Fundamentals\basics\SumTogether.test.js

const {assert} = require('chai');
const sumTogether = require('../sumTogether');

describe('sumTogether', () => {
    it('should return an empty array', () => {
        const arr1 = [];
        const arr2 = [];
        const result = sumTogether(arr1, arr2);
        assert.deepEqual(result, []);
    })

    it('should return an array of summed elements', () => {
        const arr1 = [10, 20, 30];
        const arr2 = [15, 25, 35];
        const result = sumTogether(arr1, arr2);
        assert.deepEqual(result, [25, 45, 65]);
    })
})