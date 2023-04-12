// The function shortestString takes two string arguments: str1 and str2.

// Determine which of the two strings is shorter, return that string.

function shortestString(str1, str2) {
    if(str1.length < str2.length) {
        return str1;
    } return str2;
}

module.exports = shortestString;


// TESTS

// Path: Alchemy-JavaScript-Fundamentals\basics\ShortestString.test.js

const { assert } = require('chai');
const shortestString = require('../shortestString');

describe('shortestString', () => {
    it('should return the shorter string', () => {
        assert.equal(shortestString('elephant', 'mouse'), 'mouse');
    });

    it('should return the shorter string', () => {
        assert.equal(shortestString('lion', 'gazelle'), 'lion');
    });
})