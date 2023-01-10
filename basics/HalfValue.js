// The function halfValue takes an array of numbers. It should return a new array with all the original values halved.

// Odd numbers should be rounded up to the nearest whole number.

function halfValue(numbers) {
    let halved = [];
    for(i = 0; i < numbers.length; i++) {
        halved.push(Math.ceil(numbers[i] / 2));
        
        // if(numbers[i] % 2 !== 0) {
        //     halved.push(Math.ceil(numbers[i] / 2));
        // } else {
        //     halved.push(numbers[i] / 2);
        // }
    }
    return halved;
}

module.exports = halfValue;


// TESTS
// Path: Alchemy-JavaScript-Fundamentals\basics\HalfValue.test.js

const {assert} = require('chai');
const halfValue = require("../halfValue");

const modifyErr = "Whoops! Create a new array, do not modify the original array.";
const compare = (a,b) => JSON.stringify(a) === JSON.stringify(b);

describe('halfValue', () => {
    it('should return an empty array', () => {
        const arr = [];
        const actual = halfValue(arr);
        assert(compare(arr, []), modifyErr);
        assert.sameMembers(actual, []);
    });

    it('should return an array of even value', () => {
        const arr = [2, 4, 6, 8];
        const actual = halfValue(arr);
        assert(compare(arr, [2, 4, 6, 8]), modifyErr);
        assert.sameOrderedMembers(actual, [1, 2, 3, 4]);
    });

    it('should return an array of odd values', () => {
        const arr = [11, 13, 15, 17];
        const actual = halfValue(arr);
        assert(compare(arr, [11, 13, 15, 17]), modifyErr);
        assert.sameOrderedMembers(actual, [6, 7, 8, 9]);
    });
})