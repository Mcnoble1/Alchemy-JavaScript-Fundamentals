// Write a function countElements that takes in an array and returns an object a count of each element in the array.

// const elements = ["e", "k", "e", "z", "i", "z"];
// countElements(elements); // returns {e: 2, k: 1, z: 2, i: 1}


function countElements(elements) {
    const obj = {};
    for(let i = 0; i < elements.length; i++) {
        if(!obj[elements[i]]) {
            obj[elements[i]] = 1;
        } else {
            obj[elements[i]] += 1;
        }
    }
    console.log(obj);
    return obj
}

module.exports = countElements;


// TESTS
// Path: Alchemy-JavaScript-Fundamentals\basics\CountTheElements.test.js


const {assert} = require('chai');
const countElements = require('../countElements');

describe('countElements', () => {
    it('should return an empty object', () => {
        const elements = [];
        const result = countElements(elements);
        assert.deepEqual(result, {});
    })

    it('should return an object of non-duplicative element counts', () => {
        const elements = ["a", "a", "b", "c", "b", "d"];
        const result = countElements(elements);
        assert.deepEqual(result, {a: 2, b: 2, c: 1, d: 1})
    })
})