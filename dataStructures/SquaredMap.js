// Given an array of elements in squaredMap, return an array with each element squared:

const squared = require('./squared');

function squaredMap(arr) {
    return arr.map(squared)
}

module.exports = squaredMap;


/**
 * Given a number n, square it.
 *
 * @param {number} n 
 * @return {number} n squared
 */
function squared(n) {
    return n * n;
}

module.exports = squared;


// TESTS

// Path: Alchemy-JavaScript-Fundamentals\dataStructures\SquaredMap.test.js

const squaredMap = require('../squaredMap');
const { assert } = require('chai');

describe('squaredMap', () => {
    it('should square a single element', () => {
        assert.sameOrderedMembers(squaredMap([2]), [4]);
    });

    it('should square several elements', () => {
        assert.sameOrderedMembers(squaredMap([2,3,4]), [4,9,16]);
    });
});